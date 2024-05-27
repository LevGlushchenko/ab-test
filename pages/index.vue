<script setup lang="ts">
  import { onBeforeMount } from 'vue'
  import { EVariant } from '~/types/constants'

  const route = useRoute()
  const router = useRouter()

  const currentVariant = ref(route.query.abtest || EVariant.FIRST)

  onBeforeMount(() => {
    const cookie = document.cookie
    const variantList = [EVariant.FIRST, EVariant.SECOND]

    if (route.query.abtest === 'test') {
      const random = Math.floor(Math.random() * variantList.length)
      const randomVariant = variantList[random]
      document.cookie = `abtest=${randomVariant}`

      currentVariant.value = randomVariant
      return router.replace({ query: { abtest: randomVariant } })
    }

    if (cookie && variantList.some(variant => cookie.includes(variant))) {
      currentVariant.value = cookie
        .split('; ')
        .find(row => row.startsWith('abtest='))
        ?.split('=')[1]
      router.replace({ query: { abtest: currentVariant.value } })
    }
  })
</script>

<template>
  <Variant1 v-if="currentVariant === EVariant.FIRST" />
  <Variant2 v-if="currentVariant === EVariant.SECOND" />
</template>

<style scoped></style>
