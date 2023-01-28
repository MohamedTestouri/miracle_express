<template>
<div class="m-2 p-2 shadow-sm p-3 mb-5 bg-white rounded " style="background-color:#000; width:20vw;">
  <p class="title">{{ title }}</p>
  <p class="paragraph">{{ paragraph }}</p>
</div>
</template>

<script>

export default {

  name: "HomeCard",
  props: {
title : String,
    paragraph : String,
    icon: String,
  }
}
</script>

<style scoped>
.title {
  font-size: 18px;
  font-weight: 600;
}
.paragraph {
  font-size: 16px;
  font-weight: 400;
}
</style>