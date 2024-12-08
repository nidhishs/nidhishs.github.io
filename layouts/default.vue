<template>
  <div class="min-h-screen flex flex-col">
    <NavigationBar />
    <Cursor />
    <main class="flex-grow w-full max-w-screen-lg mx-auto p-3 py-32">
      <slot />
    </main>
    <Footer />
  </div>
</template>
