
<template>
  <div><EmailView></EmailView></div>
  <div><TypeView></TypeView></div>
</template>
<script>

import EmailView from "@/components/Register/EmailView.vue"
import TypeView from "@/components/Register/TypeView.vue"
export default {
  name: "RegisterComponent",
  components: {
    EmailView,
    TypeView,
  },
  props: {},
  data() {
    // quickfix to have components available to pass as props
    return {};
  },
};
</script>
<style scoped>
</style>
