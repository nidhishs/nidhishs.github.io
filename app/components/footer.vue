<template>
  <p class="text-muted-foreground border-t p-4 text-center text-xs">
    Nidhish Shah / &#169; {{ new Date().getFullYear() }} /
    <em>{{ currentQuote }}</em>
  </p>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const quotes = [
  'carpe diem',
  'stay curious',
  'make it simple',
  'one step at a time',
  'build, then refine',
  'less, but better',
  'fortune favors the bold',
  'keep going',
]

const QUOTE_ROTATION_INTERVAL_MS = 10_000

const currentQuote = ref(quotes[0] ?? '')

let rotateInterval: ReturnType<typeof setInterval> | undefined

function rotateQuote() {
  currentQuote.value = quotes[Math.floor(Math.random() * quotes.length)] ?? ''
}

onMounted(() => {
  rotateQuote()
  rotateInterval = window.setInterval(rotateQuote, QUOTE_ROTATION_INTERVAL_MS)
})

onUnmounted(() => {
  if (rotateInterval) {
    clearInterval(rotateInterval)
  }
})
</script>
