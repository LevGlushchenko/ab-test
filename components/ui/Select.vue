<script setup lang="ts">
  const props = defineProps<{
    modelValue: string
    variant: string
    label: string
    list: string[]
    isError: boolean
  }>()
  const emit = defineEmits(['update:modelValue'])

  const isShowList = ref<boolean>(false)
  const selectedItem = computed({
    get() {
      return props.modelValue
    },
    set(newVal) {
      emit('update:modelValue', newVal)
    },
  })

  const handleToggleList = () => (isShowList.value = !isShowList.value)
  const handleToggleSelectItem = (item: string) => {
    if (selectedItem.value === item) {
      selectedItem.value = ''
    } else {
      selectedItem.value = item
    }
    isShowList.value = false
  }
</script>

<template>
  <div :class="[`select select--${variant}`, { 'select--opened': isShowList }]">
    <label class="select__label">{{ label }}</label>
    <div class="select__content" @click="handleToggleList">
      <span>{{ selectedItem || 'Select' }}</span>
      <svg-icon class="select__icon" name="caret" width="18" height="18" />
    </div>
    <ul v-show="isShowList" class="select__list">
      <li
        v-for="(item, index) in list"
        :key="`item-${index}`"
        :class="['select__item', { 'select__item--selected': selectedItem === item }]"
        @click="handleToggleSelectItem(item)"
      >
        <span>{{ item }}</span>
        <svg-icon v-show="selectedItem === item" class="select__item-icon" name="checked" width="20" height="20" />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
  .select {
    $this: &;
    @apply relative cursor-pointer;

    &__label {
      @apply absolute -top-[5px] left-[12px] px-1 text-xs font-bold rounded-[30px];
    }

    &__content {
      @apply flex items-center justify-between w-full h-[53px] rounded-lg py-2 px-4 text-xs;
    }

    &__list {
      @apply absolute z-10 w-full h-[150px] overflow-y-auto rounded-b-lg;
    }

    &__item {
      @apply flex items-center justify-between h-[32px] py-2 pl-4 pr-2 text-xs transition-all select-none;

      &:not(:last-child) {
        @apply border-b;
      }
    }

    &--var1 {
      #{$this}__label {
        @apply bg-white text-[#121826];
      }
      #{$this}__content {
        @apply bg-white text-[#6C727F] border border-[#D2D5DA];
      }
      #{$this}__icon {
        @apply fill-[#6C727F];
      }
      #{$this}__list {
        @apply bg-white border border-[#D2D5DA] border-t-0;
      }
      #{$this}__item {
        @apply border-[#D2D5DA] text-[#6C727F] hover:bg-[#00CA14] hover:text-white;

        &--selected {
          @apply bg-[#00CA14] text-white;
        }
      }
    }

    &--var2 {
      #{$this}__label {
        @apply bg-[#617398] text-white;
      }
      #{$this}__content {
        @apply bg-[#617398] text-white border border-transparent;
      }
      #{$this}__icon {
        @apply fill-white;
      }
      #{$this}__list {
        @apply bg-[#617398] border border-t-0 border-white/30;
      }
      #{$this}__item {
        @apply border-white/30 text-white hover:bg-[#6C89FF];

        &--selected {
          @apply bg-[#6C89FF];
        }
      }
    }

    &--opened {
      #{$this}__content {
        @apply rounded-b-none;
      }
      &.select--var2 {
        #{$this}__content {
          @apply border-white/30;
        }
      }
    }
  }
</style>
