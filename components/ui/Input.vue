<script setup lang="ts">
  const props = defineProps<{
    modelValue: string
    variant: string
    label: string
    placeholder: string
    type: string
    appendIcon: string
    iconSize: string
    isSuccess?: boolean
    isError?: boolean
    errorMsg?: string
    isMasked?: boolean
    mask?: string
  }>()
  const emit = defineEmits(['update:modelValue'])

  const inputVal = computed({
    get() {
      return props.modelValue
    },
    set(newVal) {
      emit('update:modelValue', newVal)
    },
  })
</script>

<template>
  <div
    :class="[
      'input',
      `input--${variant}`,
      { 'input--success': isSuccess, 'input--error': isError, 'input--append-icon': appendIcon },
    ]"
  >
    <label class="input__label">{{ label }}</label>
    <input
      v-if="isMasked"
      v-model="inputVal"
      class="input__content"
      :placeholder
      :type="type"
      v-maska
      :data-maska="mask"
    />
    <input v-else v-model="inputVal" class="input__content" :placeholder :type="type" />
    <span v-if="isError" class="input__error-msg">{{ errorMsg }}</span>
    <svg-icon v-if="appendIcon" class="input__icon" :name="appendIcon" :width="iconSize" :height="iconSize" />
  </div>
</template>

<style scoped lang="scss">
  .input {
    $this: &;
    @apply relative;

    &__label {
      @apply absolute -top-[5px] left-[12px] px-1 text-xs font-bold rounded-[30px];
    }

    &__content {
      @apply block w-full h-[53px] rounded-lg border-0 py-2 px-4 outline-0 shadow-none font-semibold;
    }

    &__icon {
      @apply absolute right-3 top-3;
    }

    &__error-msg {
      @apply absolute right-14 top-5 text-xs text-[#FF0000] font-semibold;
    }

    &--append-icon {
      #{$this}__content {
        @apply pr-12;
      }
    }

    &--var1 {
      #{$this}__label {
        @apply bg-white text-[#121826];
      }
      #{$this}__content {
        @apply border border-[#D2D5DA] bg-white;
      }

      &.input--success {
        #{$this}__content {
          @apply border-[#00CA14];
        }
      }

      &.input--error {
        #{$this}__content {
          @apply border-[#FF0000] text-[#FF0000];
        }
      }
    }

    &--var2 {
      #{$this}__label {
        @apply bg-[#617398] text-white;
      }
      #{$this}__content {
        @apply bg-[#617398] text-white;
      }

      &.input--success {
        #{$this}__content {
          @apply border border-[#00CA14];
        }
      }
      &.input--error {
        #{$this}__content {
          @apply border border-[#FF0000];
        }
      }
    }
  }
</style>
