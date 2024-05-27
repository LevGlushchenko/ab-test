<script setup lang="ts">
  defineProps<{
    icon?: string
    iconSize?: string
    disabled?: boolean
  }>()
</script>

<template>
  <button class="button" :class="{ 'button--disabled': disabled, 'button--icon': icon }" type="button">
    <span v-if="icon" class="button__icon">
      <svg-icon :name="icon" :title="icon" :width="iconSize" :height="iconSize" />
    </span>
    <slot />
  </button>
</template>

<style lang="scss" scoped>
  .button {
    @apply flex justify-center items-center h-[56px] w-full p-3 font-semibold md:font-bold text-base rounded-xl ease-in-out transition-all duration-300;

    &--disabled {
      @apply text-white cursor-not-allowed bg-[#D2D2D2] hover:bg-[#D2D2D2];
    }

    &__icon {
      @apply mr-2.5;
    }
  }
</style>
