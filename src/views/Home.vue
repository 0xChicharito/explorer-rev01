<template>
  <span></span>
</template>

<script>
import { timeIn, toDay, getLocalChains } from '@/libs/utils'

export default {
  data() {
    const chains = this.$store.state.chains.config
    return {
      chains,
    }
  },
  beforeCreate() {
    const keys = Object.keys(getLocalChains())
    if (keys.length === 1) {
      this.$router.push(`/${keys[0]}`)
    }
  },
}
</script>
