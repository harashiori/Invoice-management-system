/**
 * 通知サービス - ロール別の通知生成
 */

import { prisma } from './prisma'
import type { Notification } from './types'
import type { UserRole } from './auth-service'

/**
 * 新規請求書受領時の通知を生成
 */
export async function notifyInvoiceReceived(
  invoiceId: string,
  supplierName: string,
  amount: number,
  targetRoles: UserRole[] = ['管理者', '経理担当者']
): Promise<void> {
  const users = await prisma.user.findMany({
    where: {
      role: { in: targetRoles },
      status: 'active'
    }
  })
  
  await Promise.all(users.map(user =>
    prisma.notification.create({
      data: {
        userId: user.id,
        type: 'invoice_received',
        title: '新規請求書受領',
        message: `${supplierName}から請求書を受領しました。金額: ¥${amount.toLocaleString()}`,
        relatedId: invoiceId,
        relatedType: 'invoice',
        priority: amount > 1000000 ? 'high' : 'medium',
        read: false,
      }
    })
  ))
}

/**
 * 支払期限通知を生成
 */
export async function notifyPaymentDue(
  paymentId: string,
  supplierName: string,
  amount: number,
  dueDate: string,
  daysUntilDue: number,
  targetRoles: UserRole[] = ['管理者', '経理担当者']
): Promise<void> {
  const users = await prisma.user.findMany({
    where: {
      role: { in: targetRoles },
      status: 'active'
    }
  })
  
  await Promise.all(users.map(user =>
    prisma.notification.create({
      data: {
        userId: user.id,
        type: 'payment_due',
        title: '支払期限通知',
        message: `${supplierName}への支払期限が${daysUntilDue}日後（${dueDate}）です。金額: ¥${amount.toLocaleString()}`,
        relatedId: paymentId,
        relatedType: 'payment',
        priority: daysUntilDue <= 3 ? 'high' : 'medium',
        read: false,
      }
    })
  ))
}

/**
 * 支払完了通知を生成
 */
export async function notifyPaymentCompleted(
  paymentId: string,
  supplierName: string,
  amount: number,
  targetRoles: UserRole[] = ['管理者', '経理担当者', '営業担当者']
): Promise<void> {
  const users = await prisma.user.findMany({
    where: {
      role: { in: targetRoles },
      status: 'active'
    }
  })
  
  await Promise.all(users.map(user =>
    prisma.notification.create({
      data: {
        userId: user.id,
        type: 'payment_completed',
        title: '支払完了',
        message: `${supplierName}への支払いが完了しました。金額: ¥${amount.toLocaleString()}`,
        relatedId: paymentId,
        relatedType: 'payment',
        priority: 'low',
        read: false,
      }
    })
  ))
}

/**
 * 承認要求通知を生成
 */
export async function notifyApprovalRequired(
  relatedId: string,
  relatedType: 'invoice' | 'payment' | 'project',
  title: string,
  message: string,
  targetRoles: UserRole[] = ['管理者']
): Promise<void> {
  const users = await prisma.user.findMany({
    where: {
      role: { in: targetRoles },
      status: 'active'
    }
  })
  
  await Promise.all(users.map(user =>
    prisma.notification.create({
      data: {
        userId: user.id,
        type: 'approval_required',
        title,
        message,
        relatedId,
        relatedType,
        priority: 'high',
        read: false,
      }
    })
  ))
}

/**
 * 案件更新通知を生成
 */
export async function notifyProjectUpdated(
  projectId: string,
  projectName: string,
  updateDetails: string,
  targetRoles: UserRole[] = ['管理者', '営業担当者']
): Promise<void> {
  const users = await prisma.user.findMany({
    where: {
      role: { in: targetRoles },
      status: 'active'
    }
  })
  
  await Promise.all(users.map(user =>
    prisma.notification.create({
      data: {
        userId: user.id,
        type: 'project_updated',
        title: '案件更新',
        message: `${projectName}: ${updateDetails}`,
        relatedId: projectId,
        relatedType: 'project',
        priority: 'medium',
        read: false,
      }
    })
  ))
}

/**
 * システム通知を生成
 */
export async function notifySystem(
  title: string,
  message: string,
  priority: 'low' | 'medium' | 'high' = 'low',
  targetRoles: UserRole[] = ['管理者', '経理担当者', '営業担当者', '閲覧者']
): Promise<void> {
  const users = await prisma.user.findMany({
    where: {
      role: { in: targetRoles },
      status: 'active'
    }
  })
  
  await Promise.all(users.map(user =>
    prisma.notification.create({
      data: {
        userId: user.id,
        type: 'system',
        title,
        message,
        relatedId: null,
        relatedType: null,
        priority,
        read: false,
      }
    })
  ))
}