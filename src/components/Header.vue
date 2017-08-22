<template>
    <div class="header">
        <img src="../assets/logo-disk.png" alt="" class="header__logo">
        <a v-if="!auth.user.authenticated" href="" class="header__reg-link">ВОЙТИ ИЛИ ЗАРЕГИСТРИРОВАТЬСЯ</a>
    </div>
</template>

<script>
  import auth from '../models/auth'

  export default {
    name: 'header',
    data: function () {
      return {
        auth: auth
      }
    }
  }
</script>
<style lang="scss">
    .header{
        width: 100%;
        height: 37px;
        background-color: rgba(45, 45, 45, 0.6);
        padding:0 20%;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        &__reg-link{
            text-decoration: none;
            float: right;
        }
    }


</style>
