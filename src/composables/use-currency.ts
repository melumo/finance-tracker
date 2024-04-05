export const useCurrency = (amount: number) => {
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
