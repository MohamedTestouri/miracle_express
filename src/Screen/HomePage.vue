<template>
<div class="d-flex flex-column justify-content-center align-items-center">
  <SliderHome/>
  <AuthComponent/>
  <div class="d-flex flex-row justify-content-around">
    <HomeCard title="Lorem Ipsum is simply " paragraph="Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum." icon="logo"/>
    <HomeCard title="Lorem Ipsum is simply " paragraph="Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum." icon="logo"/>
    <HomeCard title="Lorem Ipsum is simply " paragraph="Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum." icon="logo"/>
    <HomeCard title="Lorem Ipsum is simply " paragraph="Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum." icon="logo"/>
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