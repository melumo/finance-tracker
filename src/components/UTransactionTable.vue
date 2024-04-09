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

const page = ref(1)
const pageCount = ref(10)
const pageTotal = computed(() => transactions.length)
const pageFrom = computed(() => (page.value - 1) * pageCount.value + 1)
const pageTo = computed(() =>
  Math.min(page.value * pageCount.value, pageTotal.value)
)
const rows = computed(() =>
  transactions.slice(
    (page.value - 1) * pageCount.value,
    page.value * pageCount.value
  )
)
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
      :rows="rows"
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
    <template #footer>
      <div class="flex items-center justify-between">
        <div class="inline-block">
          <span class="text-sm leading-5">
            Showing
            <span class="font-medium">{{ pageFrom }}</span>
            to
            <span class="font-medium">{{ pageTo }}</span>
            of
            <span class="font-medium">{{ pageTotal }}</span>
            results
          </span>
        </div>
        <div class="flex items-center space-x-4">
          <span class="text-sm leading-5">Rows per page:</span>
          <USelect
            v-model="pageCount"
            :options="[3, 5, 10, 15]"
            class="me-2 w-20"
            size="sm"
          />
          <UPagination
            v-model="page"
            :page-count="pageCount"
            :total="transactions.length"
            :max="5"
            show-last
            show-first
          />
        </div>
      </div>
    </template>
  </UCard>
</template>
