<script setup lang="ts">
  import Dialog from '~/components/Dialog.vue'

  const props = defineProps<{
    variant: string
    brandFirst: string
    brandSecond: string
  }>()

  const showDialog = ref<boolean>(false)
  const handleToggleDialog = () => (showDialog.value = !showDialog.value)
</script>

<template>
  <div :class="`promo promo--${variant}`">
    <h2 class="promo__title">
      <span class="highlight">Start</span> your learning journey <span class="highlight">now</span>
    </h2>
    <p class="promo__text">
      Get a
      <span class="highlight">{{ brandFirst }}</span>
      <span>{{ brandSecond }}</span>
      plan to rock self-learning
    </p>
    <UiButton class="promo__button" @click="handleToggleDialog"> Get my plan </UiButton>

    <div class="promo__content">
      <ul class="promo-list">
        <li class="promo-list-item promo-list-item--highlight">
          <svg-icon class="promo-list-item__icon" name="star" width="24" height="24" />
          <p class="promo-list-item__text">Exclusive access to <span>350+</span> learning programs</p>
        </li>
        <li class="promo-list-item">
          <svg-icon class="promo-list-item__icon" name="star" width="24" height="24" />
          <p class="promo-list-item__text">Personalized course plan</p>
        </li>
        <li class="promo-list-item">
          <svg-icon class="promo-list-item__icon" name="star" width="24" height="24" />
          <p class="promo-list-item__text">Comfy learning schedule made by you</p>
        </li>
        <li class="promo-list-item promo-list-item--highlight">
          <svg-icon class="promo-list-item__icon" name="star" width="24" height="24" />
          <p class="promo-list-item__text"><span>24/7</span> tutor support in a secure chat</p>
        </li>
        <li class="promo-list-item">
          <svg-icon class="promo-list-item__icon" name="star" width="24" height="24" />
          <p class="promo-list-item__text">Lifetime access to materials</p>
        </li>
      </ul>
      <UiButton class="promo__content-button" icon="lock" icon-size="24"> Safe & secure payment </UiButton>
      <div class="promo__content-footer">
        <p>
          $0.99 charged today. If you don't cancel at least 24 hours before the end of the 3-day trial period, you will
          automatically be charged the full price of $19.99/Month . You can cancel your subscription at any time. By
          continuing, you indicate that you've read and agree to our Terms & Conditions, Privacy Policy , Money Back ,
          and Subscription Terms .
        </p>
      </div>
    </div>
  </div>
  <Dialog :variant="variant" :visible="showDialog" @on-close="handleToggleDialog" />
</template>

<style scoped lang="scss">
  .promo {
    $this: &;

    &__content {
      @apply block md:hidden mt-8;

      #{$this}-list-item {
        @apply flex items-center text-base mb-4 last:mb-0 text-white;

        &__icon {
          @apply mr-2.5;
        }

        &--highlight {
          #{$this}-list-item__text {
            span {
              @apply font-bold;
            }
          }
        }
      }

      &-button {
        @apply mt-6;
      }

      &-footer {
        @apply mt-6 text-xs font-normal text-center;
      }
    }

    &--var1 {
      #{$this}__title {
        @apply text-black text-[32px] md:text-5xl font-extrabold;
      }
      #{$this}__text {
        @apply mt-4 md:mt-6 font-semibold text-2xl;

        span {
          @apply font-extrabold;
        }

        .highlight {
          @apply text-[#FF8D24];
        }
      }
      #{$this}__button {
        @apply md:max-w-[270px] mt-8 bg-black text-white hover:bg-[#00CA14];
      }
      #{$this}__content {
        #{$this}-list-item {
          @apply text-black;

          &__icon {
            @apply fill-[#FF8D24];
          }

          &--highlight {
            #{$this}-list-item__text {
              span {
                @apply text-[#FF8D24];
              }
            }
          }
        }
        &-button {
          @apply border border-black/20 hover:bg-black hover:border-black text-[#01C120] fill-[#01C120];
        }
        &-footer {
          @apply text-black/50;
        }
      }
    }

    &--var2 {
      @apply bg-[rgba(0,0,0,0.6)] p-4 rounded-3xl md:rounded-none md:bg-transparent md:p-0;

      #{$this}__title {
        @apply text-white text-[32px] md:text-4xl font-extrabold md:uppercase;

        .highlight {
          @apply text-[#4EAAFF];
        }
      }
      #{$this}__text {
        @apply mt-4 md:mt-6 font-semibold text-2xl text-white;

        span {
          @apply font-extrabold;
        }

        .highlight {
          @apply text-[#4EAAFF];
        }
      }
      #{$this}__button {
        @apply md:max-w-[270px] mt-8 bg-white text-[#495EEE] hover:bg-[#6C89FF] hover:text-white;
      }
      #{$this}__content {
        #{$this}-list-item {
          &__icon {
            @apply fill-[#66EDFF];
          }

          &--highlight {
            #{$this}-list-item__text {
              span {
                @apply text-[#66EDFF];
              }
            }
          }
        }
        &-button {
          @apply text-[#66EDFF] fill-[#66EDFF] bg-black/20 hover:bg-black;
        }
        &-footer {
          @apply text-white/50;
        }
      }
    }
  }
</style>
