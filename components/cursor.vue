<template>
  <div
    ref="cursor"
    v-show="isVisible"
    class="fixed left-0 top-0 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference"
    :style="{ width: `${cursorSize}px`, height: `${cursorSize}px` }"
    v-motion
    :initial="{ opacity: 0 }"
    :visible="{ opacity: 1 }"
    :duration="500"
  ></div>
</template>

<script setup lang="ts">
import type { PermissiveMotionProperties } from "@vueuse/motion";
import { throttle } from "~/lib/utils";

const cursor = ref<HTMLElement | null>(null);
const cursorSize = 12;
const isVisible = ref(false);

const { motionProperties } = useMotionProperties(cursor, {
  x: 0,
  y: 0,
  scale: 1,
});

const { set } = useSpring(
  motionProperties as Partial<PermissiveMotionProperties>,
  { damping: 20, stiffness: 300, mass: 0.5 },
);

const onMouseMove = throttle((e: MouseEvent) => {
  set({ x: e.clientX - cursorSize / 2, y: e.clientY - cursorSize / 2 });
  isVisible.value = true;
}, 48);

const onMouseDown = (e: MouseEvent) => {
  if (e.button === 2) return;
  set({ scale: 1.5 });
};

const onMouseUp = () => {
  set({ scale: 1 });
};

const onMouseLeave = () => {
  isVisible.value = false;
};

onMounted(() => {
  if (window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
  }
});

onUnmounted(() => {
  window.removeEventListener("mousemove", onMouseMove);
  window.removeEventListener("mousedown", onMouseDown);
  window.removeEventListener("mouseup", onMouseUp);
  document.removeEventListener("mouseleave", onMouseLeave);
});
</script>
