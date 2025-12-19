import type { Invoice, Supplier, Payment, User, Settings, Project } from './types'

const API_BASE = '/api'

// Generic fetch wrapper
async function apiFetch<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${url}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Unknown error' }))
    throw new Error(error.error || 'API request failed')
  }

  return response.json()
}

// Invoice API
export const invoiceApi = {
  getAll: (params?: { status?: string; supplierId?: string }) => {
    const searchParams = new URLSearchParams()
    if (params?.status) searchParams.set('status', params.status)
    if (params?.supplierId) searchParams.set('supplierId', params.supplierId)
    const query = searchParams.toString()
    return apiFetch<Invoice[]>(`/invoices${query ? `?${query}` : ''}`)
  },
  
  getById: (id: string) => apiFetch<Invoice>(`/invoices/${id}`),
  
  create: (data: any) =>
    apiFetch<Invoice>('/invoices', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  
  update: (id: string, data: Partial<Invoice>) =>
    apiFetch<Invoice>(`/invoices/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  
  delete: (id: string) =>
    apiFetch<{ message: string }>(`/invoices/${id}`, {
      method: 'DELETE',
    }),
}

// Supplier API
export const supplierApi = {
  getAll: (params?: { status?: string }) => {
    const searchParams = new URLSearchParams()
    if (params?.status) searchParams.set('status', params.status)
    const query = searchParams.toString()
    return apiFetch<Supplier[]>(`/suppliers${query ? `?${query}` : ''}`)
  },
  
  getById: (id: string) => apiFetch<Supplier>(`/suppliers/${id}`),
  
  create: (data: Omit<Supplier, 'id' | 'createdAt' | 'updatedAt'>) =>
    apiFetch<Supplier>('/suppliers', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  
  update: (id: string, data: Partial<Supplier>) =>
    apiFetch<Supplier>(`/suppliers/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  
  delete: (id: string) =>
    apiFetch<{ message: string }>(`/suppliers/${id}`, {
      method: 'DELETE',
    }),
}

// Payment API
export const paymentApi = {
  getAll: (params?: { status?: string }) => {
    const searchParams = new URLSearchParams()
    if (params?.status) searchParams.set('status', params.status)
    const query = searchParams.toString()
    return apiFetch<Payment[]>(`/payments${query ? `?${query}` : ''}`)
  },
  
  getById: (id: string) => apiFetch<Payment>(`/payments/${id}`),
  
  create: (data: Omit<Payment, 'id' | 'createdAt' | 'updatedAt'>) =>
    apiFetch<Payment>('/payments', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  
  update: (id: string, data: Partial<Payment>) =>
    apiFetch<Payment>(`/payments/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  
  delete: (id: string) =>
    apiFetch<{ message: string }>(`/payments/${id}`, {
      method: 'DELETE',
    }),
}

// User API
export const userApi = {
  getAll: (params?: { status?: string }) => {
    const searchParams = new URLSearchParams()
    if (params?.status) searchParams.set('status', params.status)
    const query = searchParams.toString()
    return apiFetch<User[]>(`/users${query ? `?${query}` : ''}`)
  },
  
  create: (data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) =>
    apiFetch<User>('/users', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
}

// Settings API
export const settingsApi = {
  get: () => apiFetch<Settings>('/settings'),
  
  update: (data: Partial<Settings>) =>
    apiFetch<Settings>('/settings', {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  
  updateCompany: (data: Partial<Settings['company']>) =>
    apiFetch<Settings>('/settings/company', {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
}

// Project API
export const projectApi = {
  getAll: (params?: { status?: string }) => {
    const searchParams = new URLSearchParams()
    if (params?.status) searchParams.set('status', params.status)
    const query = searchParams.toString()
    return apiFetch<Project[]>(`/projects${query ? `?${query}` : ''}`)
  },
  
  getById: (id: string) => apiFetch<Project>(`/projects/${id}`),
  
  create: (data: Omit<Project, 'id' | 'createdAt' | 'updatedAt' | 'actualAmount'>) =>
    apiFetch<Project>('/projects', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  
  update: (id: string, data: Partial<Project>) =>
    apiFetch<Project>(`/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  
  delete: (id: string) =>
    apiFetch<{ message: string }>(`/projects/${id}`, {
      method: 'DELETE',
    }),
}