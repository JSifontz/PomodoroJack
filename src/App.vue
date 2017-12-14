<template>
  <div id="app">
    <p id="HM">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: "Hola Mundo"
    }
  }
}
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#HM {
  font-size: 10vw;
}
</style>

