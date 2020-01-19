<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
}
html,body,#app {
  width: 100%;
  height: 100%;
}

</style>
