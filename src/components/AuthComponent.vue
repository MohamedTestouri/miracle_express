<template>
  <div class="m-4 p-4 shadow-sm p-3 mb-5 bg-white rounded" style="width:75vw; background: white;">
    <div class="d-flex flex-row justify-content-around align-items-center" style="width:100%">
      <p class="topButton" :style="toggle == 0 ? 'background: blue; color: white;' : 'background: white; color: blue;'">S’inscrire</p>
      <p class="topButton" :style="toggle == 1 ? 'background: blue; color: white;' : 'background: white; color: blue;'">Se connecter</p>
    </div>

    <div class="d-flex justify-content-around align-items-center">
      <div v-if="toggle==0">
      <div @click="toggle++"> <AuthButton text="Commencer" /></div>
      </div>
      <div v-if="toggle==1">

        <div @click="toggle--"><AuthButton text="Connextion" /></div>
      </div>


    </div>
  </div>
</template>

<script>
import AuthButton from "@/components/AuthButton";

export default {
  name: "AuthComponent",
  components: {
    AuthButton,
  },
  data: () => ({
    toggle: 1,
  }),
}
</script>

<style scoped>
.topButton {
  font-size: 16px;
  font-weight: 500;
}
</style>