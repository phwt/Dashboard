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
        <data-card v-for="data in dataCollection" :key="data.name" :name="data.name" :value="data.value"/>
      </div>

      <div class="row">
        <control-card v-for="device in deviceCollection" :key="device.device" :device="device.device" :isOn="device.isOn" :image="device.image"/>
      </div>

    </div>
  </div>
</template>

<script>
import DataCard from '@/components/DataCard'
import ControlCard from '@/components/ControlCard'
export default {
  name: 'app',
  components: {DataCard, ControlCard},
  data () {
    return {
      dataCollection: [
        {name: 'Temperature', value: 30},
        {name: 'Time', value: '13:00'},
        {name: 'Status', value: 'Connected'}
      ],
      deviceCollection: [
        {device: 'Fan', isOn: false, image: require('./assets/fan.png')},
        {device: 'Light', isOn: false, image: require('./assets/light.png')},
      ]
    }
  }
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
