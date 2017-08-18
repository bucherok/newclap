<template>
    <div class="header">
        <div class="header_content">
            <a href="">ВОЙТИ ИЛИ ЗАРЕГИСТРИРОВ1111АТТЬСЯ</a>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'header',
    data: function () {
      return {
        user: ''
      }
    }
  }
</script>
<style lang="scss">
    .header{
        background-color: #292a2a;
        &_content{
            width: 970px;
            margin:0 auto;
        }
    }


</style>
