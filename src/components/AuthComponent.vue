<template>
  <div class="shadow-sm bg-white mb-5" style="width:75vw; background: white;  margin-top: -43px; border-radius: 10px 0px 0px 0px;">
    <ul class="nav nav-pills">
      <li class="active nav-item" @click="activaTab('inscrire')" ><a data-toggle="tab" href="#inscrire">S’inscrire</a></li>
      <li class="nav-item" style="border-radius :0px 10px" @click="activaTab('connecter')"><a data-toggle="tab" href="#connecter">Se connecter</a></li>
    </ul>

    <div class="tab-content  mb-3">
      <div v-if="tab == 'inscrire'" id="inscrire" class="container pt-5">
        <div class="row col-9">
          <div class="input-group input-group-lg">
            <div class="input-group-prepend">
              <span class="input-group-text tag-icon" id="inputGroup-sizing-lg"></span>
            </div>
            <input type="text" class="form-control" aria-label="Large" placeholder="Saisir votre adresse mail"  aria-describedby="inputGroup-sizing-sm">
          </div>
            <button type="button" class="btn btn-primary col-3">Commencer <img class="px-3"   src="../assets/Rectangle.svg"/><img src="../assets/flesh.svg"/></button>
        </div> 
      </div>
      <!-- connecter -->
      <div  v-if="tab == 'connecter'" id="connecter" class="container pt-5">
        <div class="row col-9">
          <div class="input-group connecter input-group-lg">
            <div class="input-group-prepend">
              <span class="input-group-text tag-icon" id="inputGroup-sizing-lg"></span>
            </div>
            <input type="text" class="form-control" placeholder="Saisir votre adresse mail"   aria-label="Large" aria-describedby="inputGroup-sizing-sm">
          </div>

          <div class="input-group connecter input-group-lg">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-lg-pass"></span>
            </div>
            <input type="text" class="form-control" placeholder="Saisir votre mot de passe"  aria-label="Large" aria-describedby="inputGroup-sizing-sm">
          </div>
            <div style="text-align:center;">
            <button type="button" class="btn btn-primary col-3">Se connecter<img class="px-3"   src="../assets/Rectangle.svg"/><img src="../assets/flesh.svg"/></button>
            <a class="forget-pass" id="show-modal" @click="showModal = true">Mot de passe oublié ?</a>
          </div>
        </div> 
        
      </div>
    </div>
  </div>
 
  <transition v-if="showModal" name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
              <slot name="header">
                  Mot de passe oublié
                </slot>
                
                <img @click="showModal = false" src="../assets/close.svg"/>
              </div>

              <div class="modal-body">
                <slot name="body">
                 <p>Saisissez l'adresse e-mail liée à votre compte, et nous vous envoyons un email vous permettant de réinitialiser votre mot de passe.</p>
                 <div class="form-group">
                    <label class="control-label" for="email">
                      Adresse mail
                    </label>
                    <div class="input-group connecter input-group-lg">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-lg-pass"></span>
                      </div>
                      <input type="text" class="form-control" placeholder="Saisir votre adresse mail"  aria-label="Large" aria-describedby="inputGroup-sizing-sm">
                    </div>
                  </div>
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                  <button type="button" class="btn btn-modal btn-primary col-3">Recevoir le lien de réintialisation<img class="px-3"   src="../assets/Rectangle.svg"/><img src="../assets/flesh.svg"/></button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
</template>

<script>


export default {
  name: "AuthComponent",
  data:function(){
    return {
      tab:"inscrire",
      showModal: false
      };
  },

  methods: {
    activaTab(tab){
      this.tab = tab
    },
    
  }
}
</script>

<style scoped>
.topButton {
  font-size: 16px;
  font-weight: 500;
}
.nav-item{
  width: 50%;
  font-family: 'Kanit';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  padding: 0;
  margin: 0;
}
.rounded{
  height: 158px;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  border-radius: 12px;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 604px;
  height: 459px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header{
  margin-top: 0;
  font-family: 'Kanit';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #0F172F;
}

.modal-body {
  margin: 20px 0;
}
.modal-body p{
   font-family: 'Kanit';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: justify;
    color: #0F172F;
    height: 75px;
    padding-top: 15px;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
label{
  font-family: 'Kanit';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #0F172F;
  }
  .tag-icon{
    height: 64px;
    background-image: url(../assets/Vector.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
}
.row{
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 0 71px;
}
.btn {
  height : 46.18px;
  width: 180px;
  margin-left: 40px;
  font-family: 'Kanit';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #FFFFFF;
}
#inputGroup-sizing-lg{
  height : 46.18px;
  width: 48px;
  background: #3366FF;
  border-radius: 9px 0px 0px 9px;
  background-image: url(../assets/Vector.svg);
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
}
#inputGroup-sizing-lg-pass{
  height : 46.18px;
  width: 48px;
  background: #3366FF;
  border-radius: 9px 0px 0px 9px;
  background-image: url(../assets/log.svg);
  background-position: center;
  background-repeat:no-repeat;
  cursor: pointer;
}
.forget-pass{
    float: right;
    margin-right: 92px;
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #0F172F;
}
#connecter > div > div{
  width: 52%;
}
#connecter{
  border-radius: 0 10px;
}
.nav-pills>li.active>a{
    color: #3366FF;
    background-color: white;
}
.nav-pills>li.active>a{
    color: white;
    background-color: #3366FF;
}
.modal-footer{
  justify-content: center;
}
.btn-modal{
    height: 46.18px;
    width: 300px;
    margin-left: 40px;
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 56px;
}
.flex_container {
  display: -webkit-box;  /* OLD - iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox;  /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
  display: flex;         /* NEW, Spec - Firefox, Chrome, Opera */
  
  justify-content: center;
  align-items: center;
}
</style>