<script setup lang="ts">
defineProps<{
  title: string
  amount: number
  lastAmount: number
  icon: string
  loading?: boolean
}>()
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
        <div class="text-2xl font-bold">{{ amount }}</div>
        <p class="text-sm text-slate-500 dark:text-slate-300">
          +30% from last period
        </p>
      </template>
    </div>
  </div>
</template>
