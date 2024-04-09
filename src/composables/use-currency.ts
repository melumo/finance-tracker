export const useCurrency = (amount: number | string) => {
  const currency = computed(() =>
    amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
  )

  return {
    currency,
  }
}
