<template>
  <div class="relative min-h-screen">
    <UHeader />
    <main class="px-4 py-8 max-w-screen-lg mx-auto lg:px-0">
      <slot />
    </main>
  </div>
</template>

<style>
:root {
  font-family:
    Inter,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Oxygen,
    Roboto,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
}
</style>
