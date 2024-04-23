import type { Transaction } from '~/types'

export const useFetchTransactions = () => {
  const client = useSupabaseClient()

  const transactions: Ref<Transaction[] | null> = ref([])

  const { data } = useAsyncData(
    'transactions',
    async (): Promise<Transaction[]> => {
      const { data, error } = await client.from('transaction').select('*')
      if (error) {
        throw error
      }

      return data
    }
  )

  transactions.value = data.value

  return {
    transactions,
  }
}
