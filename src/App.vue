<template>
 <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
 <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
<RegisterPage/>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue';
import RegisterPage from "@/Screen/RegisterPage";


export default {
  name: 'App',
  components: {
  //  HelloWorld,
    RegisterPage,
  }
}
</script>

<style>
#app {

  font-family: "Kanit", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #F9FAFB;
}
</style>
