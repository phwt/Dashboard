<template>
  <div id="app">
    <h1>Dashboard</h1>
    <div class="container">
      <div class="row">
        <div class="col">
          <hr>
        </div>
      </div>

      <div class="row">
        <data-card name="Temperature" value="20"/>
        <data-card name="Time" value="13:00"/>
        <data-card name="Status" value="Connected"/>
      </div>
      <div class="row">
        <control-card device="Fan" :isOn="true" :image="require('./assets/fan.png')"/>
        <control-card device="Light" :isOn="true" :image="require('./assets/light.png')"/>
      </div>

    </div>
  </div>
</template>

<script>
import DataCard from '@/components/DataCard'
import ControlCard from '@/components/ControlCard'
export default {
  name: 'app',
  components: {DataCard, ControlCard}
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px 0;
}
</style>
