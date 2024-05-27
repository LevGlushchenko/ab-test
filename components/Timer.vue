<script setup lang="ts">
  import Cookies from 'js-cookie'

  defineProps<{
    variant: string
  }>()
  const emit = defineEmits(['on-timeout'])

  const COUNTDOWN_TIME = 180
  const ONE_MINUTE = 60
  const LAST_CHANCE = 10

  // Set countdown time to 3 minutes (180 seconds)
  const countdownTime = ref<number>(COUNTDOWN_TIME)
  const interval = ref<number | null>(null)

  const minutes = computed(() => Math.floor(countdownTime.value / ONE_MINUTE))
  const seconds = computed(() => countdownTime.value % ONE_MINUTE)
  const progressWidth = computed(() => (countdownTime.value / COUNTDOWN_TIME) * 100)
  const displayedTime = computed(() => `${minutes.value}:${seconds.value.toString().padStart(2, '0')}`)

  const isTimerRunout = computed(() => countdownTime.value <= LAST_CHANCE)

  const startTimer = () => {
    if (interval.value) return

    interval.value = setInterval(() => {
      if (countdownTime.value > 0) {
        countdownTime.value--
        Cookies.set('timeLeft', countdownTime.value)
      } else {
        if (interval.value) {
          clearInterval(interval.value)
          interval.value = null
          emit('on-timeout')
        }
      }
    }, 1000)
  }
  const restoreTimer = () => {
    const savedTime = Cookies.get('timeLeft')
    countdownTime.value = parseInt(savedTime, 10)
    if (countdownTime.value > 0) {
      startTimer()
    }
  }

  onMounted(() => {
    const savedTime = Cookies.get('timeLeft')

    if (savedTime) {
      restoreTimer()
    } else {
      startTimer()
    }
  })
</script>

<template>
  <div :class="[`timer timer--${variant}`, { 'timer--runout': isTimerRunout }]">
    <div class="timer__progress" :style="{ width: `${progressWidth}%` }" />
    <span class="timer__text">{{ displayedTime }}</span>
  </div>
</template>

<style scoped lang="scss">
  .timer {
    $this: &;

    @apply relative h-[47px] w-[110px] md:h-[60px] md:w-[160px] py-2 px-6 md:py-3.5 md:px-12 bg-black rounded-2xl text-center overflow-hidden;

    &__progress {
      @apply absolute top-0 left-0 h-full;
    }

    &__text {
      @apply relative font-semibold text-2xl text-white;
    }

    &--runout {
      @apply shadow-[0_0_6px_rgba(255,0,0,0.8)] border-2 border-[#FF0000];
    }

    &--var1 {
      #{$this}__progress {
        @apply bg-[#00CA14];
      }
    }

    &--var2 {
      #{$this}__progress {
        @apply bg-[#4EAAFF];
      }
    }
  }
</style>
