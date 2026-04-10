<template>
  <div class="flex min-h-screen flex-col">
    <div class="grid flex-1 grid-cols-[1fr_min(65ch,100%)_1fr] px-4">
      <main class="col-start-2 py-16">
        <slot />
      </main>
    </div>
    <p class="text-muted-foreground border-t p-4 text-center text-xs">
      Nidhish Shah / &#169; {{ new Date().getFullYear() }} / <em class="">carpe diem</em>
    </p>
  </div>
</template>
