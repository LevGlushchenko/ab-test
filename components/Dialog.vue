<script setup lang="ts">
  const props = defineProps<{
    visible: boolean
    variant: string
  }>()
  const emit = defineEmits(['on-close'])

  const closeDialog = () => {
    emit('on-close')
  }

  const monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const yearList = ['2010', '2011', '2012', '2013', '2014', '2015']

  const form = reactive({
    cardNumber: '',
    month: '',
    year: '',
    cvc: '',
  })
  const isValidForm = computed(() => {
    return form.cardNumber.length === 19 && form.month && form.year && form.cvc.length === 3
  })
</script>

<template>
  <Teleport v-if="visible" to="body">
    <div :class="`dialog dialog--${variant}`" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="dialog__backdrop" />

      <div class="dialog__wrapper">
        <div class="dialog__content">
          <div class="dialog-body">
            <div class="dialog-body__wrapper">
              <div class="dialog-body-header">
                <h2 class="dialog-body-title">Payment method</h2>
              </div>
              <div class="dialog-body-payment">
                <UiButton class="dialog-body-payment__paypal" icon="pay-pal" icon-size="50">buy now</UiButton>
                <UiButton class="dialog-body-payment__gpay" icon="google-pay" icon-size="24">pay</UiButton>
              </div>
              <div class="dialog-body-divider">
                <span class="line"></span>
                <span class="text">OR</span>
                <span class="line"></span>
              </div>
              <form class="dialog-body-form">
                <UiInput
                  v-model="form.cardNumber"
                  :variant="variant"
                  label="Card number"
                  type="text"
                  placeholder="••••  ••••  ••••  ••••"
                  append-icon="mastercard"
                  icon-size="32"
                  is-masked
                  mask="#### #### #### ####"
                  :is-error="form.cardNumber.length > 0 && form.cardNumber.length !== 19"
                  :is-success="form.cardNumber.length === 19"
                  error-msg="Invalid number"
                />
                <div class="dialog-body-form__row">
                  <UiSelect v-model="form.month" :variant="variant" label="Month" :list="monthList" />
                  <UiSelect v-model="form.year" :variant="variant" label="Year" :list="yearList" />
                  <UiInput
                    v-model="form.cvc"
                    :variant="variant"
                    label="CVC"
                    type="password"
                    placeholder="•••"
                    is-masked
                    mask="###"
                    :is-error="form.cvc.length > 0 && form.cvc.length !== 3"
                    :is-success="form.cvc.length === 3"
                  />
                </div>
              </form>
              <div class="dialog-body-buttons">
                <UiButton class="dialog-body-buttons__submit" :disabled="!isValidForm">Submit</UiButton>
                <UiButton class="dialog-body-buttons__close" @click="closeDialog">Close</UiButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
  .dialog {
    $this: &;
    @apply relative z-10;

    &__backdrop {
      @apply fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity;
    }

    &__wrapper {
      @apply fixed inset-0 z-10 w-screen overflow-y-auto;
    }

    &__content {
      @apply flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0;
    }

    &-body {
      @apply relative transform overflow-hidden rounded-lg text-left transition-all sm:my-8 mx-3 sm:w-full sm:max-w-[400px];

      &__wrapper {
        @apply pt-6 pb-4 px-4;
      }

      &-header {
        @apply text-center;
      }

      &-title {
        @apply font-extrabold text-xl;
      }

      &-payment {
        @apply mt-6;

        .button {
          @apply uppercase;
        }
        &__paypal {
          @apply bg-[#FEC538] hover:bg-[#FFDA80];
        }
        &__gpay {
          @apply mt-2 bg-white hover:bg-black border border-[#E1E1E1] hover:border-black hover:text-white;
        }
      }

      &-divider {
        @apply grid grid-cols-7 items-center my-4;

        .line {
          @apply col-span-3 h-[2px] rounded;
        }

        .text {
          @apply col-span-1 text-center uppercase font-semibold text-xs;
        }
      }

      &-form {
        &__row {
          @apply mt-[30px] grid grid-cols-3 gap-4;
        }
      }

      &-buttons {
        @apply mt-10;
      }
    }

    &--var1 {
      #{$this}-body {
        @apply bg-white shadow-[0_0_0_4_rgba(0,0,0,0.05)];
      }
      #{$this}-body-title {
        @apply text-black;
      }
      #{$this}-body-divider {
        .line {
          @apply bg-black/10;
        }
        .text {
          @apply text-black/40;
        }
      }
      #{$this}-body-buttons {
        &__submit:not(.button--disabled) {
          @apply bg-black text-white hover:bg-[#00CA14];
        }
        &__close {
          @apply mt-2 text-black/40;
        }
      }
    }

    &--var2 {
      #{$this}-body {
        @apply bg-[#4D5E82];
      }
      #{$this}-body-title {
        @apply text-white;
      }
      #{$this}-body-divider {
        .line {
          @apply bg-white/20;
        }
        .text {
          @apply text-white;
        }
      }
      #{$this}-body-buttons {
        .button--disabled {
          @apply text-white/40 bg-[#617398];
        }

        &__submit:not(.button--disabled) {
          @apply mt-8 bg-white text-[#495EEE] hover:bg-[#6C89FF] hover:text-white;
        }
        &__close {
          @apply text-white;
        }
      }
    }
  }
</style>
