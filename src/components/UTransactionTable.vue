<script setup lang="ts">
import type { Transaction } from '~/types'

const { currency } = useCurrency(200)

const columns = [
  { key: 'id', label: '#' },
  { key: 'title', label: 'Title', sortable: true },
  { key: 'amount', label: 'Amount', sortable: true },
  { key: 'category', label: 'Category' },
  { key: 'date', label: 'Date' },
  { key: 'actions' },
]

const transactions: Transaction[] = Array.from({ length: 15 }, (_, index) => ({
  id: index + 1,
  title: 'Transaction ' + (index + 1),
  amount: currency.value,
  category: ['Income', 'Expense', 'Investment', 'Savings'][
    Math.floor(Math.random() * 4)
  ],
  date: new Date().toLocaleDateString(),
}))

const actions = [
  [
    {
      label: 'Edit',
      click: () => console.log('Edit'),
    },
    {
      label: 'Delete',
      slot: 'delete',
      click: () => console.log('Delete'),
    },
  ],
]
</script>

<template>
  <UCard
    :ui="{
      body: {
        padding: '',
      },
    }"
  >
    <template #header>
      <h2 class="text-lg font-semibold">Transactions</h2>
    </template>
    <UTable
      :rows="transactions"
      :columns="columns"
      :checkbox="{
        color: 'indigo',
      }"
      class="w-full"
    >
      <template #category-data="{ row }">
        <UBadge :label="row.category" color="white" size="xs" />
      </template>
      <template #actions-data>
        <UDropdown :items="actions">
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-ellipsis-horizontal-20-solid"
          />
          <template #delete="{ item }">
            <span class="truncate text-red-600 dark:text-red-500">
              {{ item.label }}
            </span>
          </template>
        </UDropdown>
      </template>
    </UTable>
  </UCard>
</template>
