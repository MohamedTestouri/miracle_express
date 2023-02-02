<template>
<div class="m-2 p-2 shadow-sm p-3 mb-5 bg-white rounded " style="background-color:#000; width:20vw;">
  <div>
    <div class="img-card"><img src="../assets/staricon.svg"/></div>
  </div>
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
  font-family: 'Kanit';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #212B36;
}
.paragraph {
  font-family: 'Kanit';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color:#212B36;
}
.tag-icon{
    height: 24px;
    background-image: url(../assets/star-green-light.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
}
.img-card{
    display: flex;
    justify-content: center;
    margin: 10px 85px;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    background: #D8FBDE;
    vertical-align: cen;
    font-size: 2em;
}
</style>