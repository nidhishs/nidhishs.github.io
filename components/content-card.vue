<template>
  <Card>
    <CardHeader>
      <CardTitle class="text-xl">{{ card.title }}</CardTitle>
      <CardDescription>{{ card.description }}</CardDescription>
    </CardHeader>
    <CardContent>
      <NuxtImg
        :src="card.img"
        :alt="card.title"
        class="object-cover w-full h-56 rounded-md"
      />
    </CardContent>
    <CardFooter>
      <NuxtLink :to="card.link.href"
        ><Button
          >{{ card.link.text
          }}<ArrowTopRightIcon :fontControlled="false" class="!size-2 ml-3"
        /></Button>
      </NuxtLink>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import ArrowTopRightIcon from "@/assets/icons/arrow-top-right.svg";
const card = defineProps<{
  title: string;
  description: string;
  img: string;
  link: { text: string; href: string };
}>();
</script>
