export interface Transaction {
  id: string | number
  title: string
  amount: number | string
  category?: string
  date: Date | string
}
