<template>
  <div id="app">
    <Home />
    <Adsense adSlot = '3791641209'></Adsense>
  </div>
</template>

<script>
import Home from './components/favoritemovie.vue'
import Adsense from './components/Adsense.vue'
export default {
  name: 'App',
  components: {
    Adsense,
    Home
  }
}
</script>

<style>
</style>
