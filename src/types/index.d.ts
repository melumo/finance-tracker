export interface Transaction {
  id: string | number
  description: string
  amount: number | string
  category?: string
  created_at: Date | string
}
