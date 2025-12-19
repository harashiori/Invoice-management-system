import { listAllFiles } from './file-storage'

console.log('=== File Storage Debug ===')
console.log('Stored files:', JSON.stringify(listAllFiles(), null, 2))