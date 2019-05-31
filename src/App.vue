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

        <!--กล่องแสดงข้อมูล-->
        <data-card name="Temperature" path="temperature"/>
        <!--กล่องแสดงข้อมูล-->

      </div>

      <div class="row">

        <!--กล่องปุ่มควบคุม-->
        <control-card name="Fan" path="fan" :image="require('./assets/fan.png')"/>
        <control-card name="Light" path="light" :image="require('./assets/light.png')"/>
        <!--กล่องปุ่มควบคุม-->
        
      </div>

    </div>
  </div>
</template>

<script>
import DataCard from '@/components/DataCard'
import ControlCard from '@/components/ControlCard'
export default {
  name: 'app',
  components: {
    DataCard,
    ControlCard
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
