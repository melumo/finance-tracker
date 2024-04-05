<script setup lang="ts">
const props = defineProps<{
  title: string
  amount: number
  lastAmount: number
  icon: string
  loading?: boolean
}>()

const { amount, lastAmount } = props

const trendingPercentage = computed(() => {
  const bigger = Math.max(amount, lastAmount)
  const lower = Math.min(amount, lastAmount)

  const ratio = ((bigger - lower) / lower) * 100

  if (ratio === 0 || (amount === lastAmount && lastAmount === 0)) {
    return 'No changes'
  }

  if (ratio === Infinity) {
    return `+${bigger}%`
  }

  if (amount < 0) {
    return `${Math.ceil(ratio)}%`
  }

  return amount > lastAmount ? `+${Math.ceil(ratio)}%` : `-${Math.ceil(ratio)}%`
})
</script>

<template>
  <div class="border rounded-lg shadow-sm dark:border-gray-800">
    <div class="flex items-center justify-between space-y-0 p-6 pb-2">
      <h3 class="tracking-tight text-sm font-medium">{{ title }}</h3>
      <UIcon
        :name="`i-heroicons-${icon}`"
        dynamic
        class="w-4 h-4 text-gray-500 dark:text-gray-400"
      />
    </div>
    <div class="p-6 pt-0">
      <template v-if="loading">
        <div class="space-y-2 mb-2">
          <USkeleton class="w-full h-8" />
          <USkeleton class="w-1/3 h-6" />
        </div>
      </template>
      <template v-else>
        <div class="text-2xl font-bold mb-0.5">{{ amount }}</div>
        <p class="text-sm tracking-tight text-slate-500 dark:text-slate-300">
          {{ trendingPercentage }} vs last period
        </p>
      </template>
    </div>
  </div>
</template>
