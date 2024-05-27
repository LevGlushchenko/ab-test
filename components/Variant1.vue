<script setup lang="ts">
  import { EVariant } from '~/types/constants'
  import Promo from '~/components/Promo.vue'
</script>

<template>
  <div class="wrapper">
    <div class="wrapper__content">
      <header class="header">
        <div class="header__wrapper">
          <img src="../assets/img/var1/logo.svg" alt="Planet learn" width="179" height="40" />
        </div>
      </header>
      <main class="main">
        <div class="main__wrapper">
          <div class="main__content">
            <Promo class="main__promo" :variant="EVariant.FIRST" brand-first="Planet" brand-second="Learn" />
            <Card class="main__card" :variant="EVariant.FIRST" />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .wrapper {
    @apply min-h-[100vh] bg-[url('~/assets/img/var1/bg.png')] bg-cover bg-center bg-repeat;
  }

  .header {
    @apply max-h-[56px] py-2 px-5 bg-transparent;

    &__wrapper {
      @apply max-w-[1170px] mx-auto;
    }
  }

  .main {
    @apply mt-6 md:mt-16 px-4 pb-6 md:pb-16;

    &__wrapper {
      @apply max-w-[970px] mx-auto;
    }

    &__content {
      @apply grid md:grid-cols-2 gap-4 md:gap-6;
    }

    &__card {
      @apply order-first md:order-none;
    }
  }
</style>
