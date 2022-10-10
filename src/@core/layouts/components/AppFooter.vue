<template>
  <p class="clearfix mb-0">
    <span>© Nolus Platform Ltd. 2022</span>
  </p>
</template>

<script>
import { VBPopover } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  name: 'AppFooter',
  components: {
  },
  directives: {
    'b-popover': VBPopover,
    Ripple,
  },
}
</script>
