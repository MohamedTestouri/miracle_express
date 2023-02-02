<template>
<div class="d-flex flex-column justify-content-center align-items-center">
  <SliderHome/>
  <AuthComponent/>
  <div class="d-flex flex-row justify-content-around">
    <HomeCard title="Lorem Ipsum is simply " paragraph="Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum." icon="../assets/star-green-light.svg" color ="#FFF5CC"/>
    <HomeCard title="Lorem Ipsum is simply " paragraph="Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum." icon="../assets/star-red.svg" color ="#CAFDF5"/>
    <HomeCard title="Lorem Ipsum is simply " paragraph="Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum." icon="../assets/star-bleu.svg" color ="#FFE9D5"/>
    <HomeCard title="Lorem Ipsum is simply " paragraph="Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum." icon="../assets/star-yellow.svg" color ="#D8FBDE"/>
  </div>
</div>
</template>

<script>
import HomeCard from "@/components/HomeCard";
import SliderHome from "@/components/SliderHome";
import AuthComponent from "@/components/AuthComponent";

export default {
  name: "HomePage",
  components: {
    //  HelloWorld,
    HomeCard, SliderHome , AuthComponent
  }
}
</script>

<style scoped>

</style>