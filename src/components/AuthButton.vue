<template>

  <div class="p-2 d-flex flex-row justify-content-around align-items-center" style="background: blue; color: white">
    <h5>  {{text}}</h5>
    <div style="border-left: 20px solid white"/>
    <h5>Continue</h5>
  </div>
</template>

<script>
export default {
  name: "AuthButton",
  props: {
    text: String,
  }
}
</script>

<style scoped>

</style>