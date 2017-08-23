<template>
    <div class="header">
        <span class="helper"></span>
        <img src="../assets/logo_disk.png" alt="" class="header__logo">

        <div class="header__user">
            <a v-if="!auth.user.authenticated" href="" class="header__user__reg">ВОЙТИ ИЛИ ЗАРЕГИСТРИРОВАТЬСЯ</a>
            <span v-if="auth.user.authenticated" class="header__user__name">{{user.username}}</span>
        </div>
    </div>
</template>

<script>
  import auth from '../models/auth'
  import user from '../models/user'

  export default {
    name: 'header',
    data: function () {
      return {
        auth: auth,
        user: user
      }
    }
  }
</script>
<style lang="scss">
    .header{
        width: 100%;
        height: 37px;
        background-color: rgba(45, 45, 45, 1);
        padding:0 20%;
        border-bottom: solid 2px var(--water-blue);
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

        & .helper {
            display: inline-block;
            height: 100%;
            vertical-align: middle;
        }


        &__logo{
            width: 86px;
            height: 24px;
            vertical-align: middle;
        }

        &__user{
            display: table;
            float: right;
            height:100%;

            &__name, &__reg{
                display: table-cell;
                vertical-align: middle;
            }

            &__reg{
                text-decoration: none;
            }
        }
    }


</style>
