<script setup lang="ts">
  import Cookies from 'js-cookie'
  import { EVariant } from '~/types/constants'

  const props = defineProps<{
    variant: string
  }>()

  const hasDiscount = ref<boolean>(false)
  const discountPrice = ref<string>('39.99')
  const discountlessPrice = '39.99'

  const isSecondVariant = computed(() => props.variant === EVariant.SECOND)
  const cardIcon = computed(() =>
    props.variant === EVariant.FIRST ? '/img/var1/asteroid.svg' : '/img/var2/rocket.svg'
  )

  const handleFinishDiscount = () => {
    hasDiscount.value = false
    discountPrice.value = discountlessPrice
  }

  onBeforeMount(() => {
    const savedTime = Cookies.get('timeLeft')
    if (savedTime === '0') {
      handleFinishDiscount()
    } else {
      hasDiscount.value = true
      discountPrice.value = '9.99'
    }
  })
</script>

<template>
  <div :class="`card card--${variant}`">
    <div class="card__wrapper">
      <img class="card__icon" :src="cardIcon" alt="#" />
      <img v-if="isSecondVariant" class="card__icon card__icon--secondary" src="/img/var2/ball.svg" alt="#" />

      <div class="card__header">
        <div>
          <h3 class="card-title">3-day trial for <span>$0.99</span></h3>
          <h4 class="card-subtitle">then ${{ discountPrice }}</h4>
          <h4 v-if="hasDiscount" class="card-discount">${{ discountlessPrice }}/week</h4>
        </div>
        <Timer v-if="hasDiscount" :variant="variant" @on-timeout="handleFinishDiscount" />
      </div>

      <div class="card__content">
        <ul class="card-list">
          <li class="card-list-item card-list-item--highlight">
            <svg-icon class="card-list-item__icon" name="star" width="24" height="24" />
            <p class="card-list-item__text">Exclusive access to <span>350+</span> learning programs</p>
          </li>
          <li class="card-list-item">
            <svg-icon class="card-list-item__icon" name="star" width="24" height="24" />
            <p class="card-list-item__text">Personalized course plan</p>
          </li>
          <li class="card-list-item">
            <svg-icon class="card-list-item__icon" name="star" width="24" height="24" />
            <p class="card-list-item__text">Comfy learning schedule made by you</p>
          </li>
          <li class="card-list-item card-list-item--highlight">
            <svg-icon class="card-list-item__icon" name="star" width="24" height="24" />
            <p class="card-list-item__text"><span>24/7</span> tutor support in a secure chat</p>
          </li>
          <li class="card-list-item">
            <svg-icon class="card-list-item__icon" name="star" width="24" height="24" />
            <p class="card-list-item__text">Lifetime access to materials</p>
          </li>
        </ul>
        <UiButton class="card-button" icon="lock" icon-size="24"> Safe & secure payment </UiButton>
      </div>

      <div class="card__footer">
        <p>
          $0.99 charged today. If you don't cancel at least 24 hours before the end of the 3-day trial period, you will
          automatically be charged the full price of $19.99/Month . You can cancel your subscription at any time. By
          continuing, you indicate that you've read and agree to our Terms & Conditions, Privacy Policy , Money Back ,
          and Subscription Terms .
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .card {
    $this: &;
    @apply relative p-4 md:p-6 rounded-3xl;

    &__icon {
      @apply absolute hidden xl:block;
    }

    &__header {
      @apply flex justify-between items-center;
    }

    &__content {
      @apply hidden md:block mt-9;
    }

    &__footer {
      @apply hidden md:block mt-6 text-xs font-normal text-center;
    }

    &-title {
      @apply text-lg md:text-2xl font-extrabold;
    }

    &-subtitle {
      @apply text-base md:text-xl md:font-semibold;
    }

    &-discount {
      @apply line-through font-semibold text-base;
    }

    &-list-item {
      $list-item: &;
      @apply flex items-center text-base mb-4 last:mb-0;

      &__icon {
        @apply mr-4;
      }

      &--highlight {
        #{$list-item}__text {
          span {
            @apply font-bold;
          }
        }
      }
    }

    &-button {
      @apply mt-6;
    }

    &--var1 {
      @apply bg-white border border-[#CDCDCD] shadow-[0_4px_4px_rgba(0,0,0,0.06)];

      #{$this}-discount {
        @apply text-black/40;
      }

      #{$this}__icon {
        @apply w-[150px] lg:w-[200px] -top-10 lg:-top-12 right-0 lg:right-6;
      }

      #{$this}__footer {
        @apply text-black/50;
      }

      #{$this}-title {
        span {
          @apply text-[#FF8D24];
        }
      }

      #{$this}-list-item {
        $list-item: &;

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

      #{$this}-button {
        @apply border border-black/20 hover:bg-black hover:border-black text-[#01C120] fill-[#01C120];
      }
    }

    &--var2 {
      @apply z-10 md:border-4 border-white/40 bg-black/60 md:bg-black/40 text-white;

      #{$this}-discount {
        @apply text-white/40;
      }

      #{$this}__icon {
        @apply w-[250px] top-32 -right-36;

        &--secondary {
          @apply -z-10 w-[86px] -top-10 -left-10;
        }
      }

      #{$this}__footer {
        @apply text-white/70;
      }

      #{$this}-title {
        @apply text-[#66EDFF];
      }

      #{$this}-list-item {
        $list-item: &;

        &__icon {
          @apply fill-[#66EDFF];
        }

        &--highlight {
          #{$this}-list-item__text {
            @apply text-[#66EDFF];
          }
        }
      }

      #{$this}-button {
        @apply text-[#66EDFF] fill-[#66EDFF] bg-black/20 hover:bg-black;
      }
    }
  }
</style>
