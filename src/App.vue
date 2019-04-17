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
        <div class="col-12 col-md-4">
          <small>Temperature</small>
          <h2>20</h2>
        </div>
        <div class="col-12 col-md-4">
          <small>Time</small>
          <h2>13:00</h2>
        </div>
        <div class="col-12 col-md-4">
          <small>Status</small>
          <h2>Connected</h2>
        </div>
      </div>
      <div class="row">
        <div class="control-card col-12 col-md-6 p-1">
          <div class="row wrapper">
            <div class="col-4">
              <img class="w-100" src="./assets/fan.png" alt="">
            </div>
            <div class="col-8 center">
              <p>Fan is <b>on</b></p>
            </div>
          </div>
        </div>
        <div class="control-card col-12 col-md-6 p-1">
          <div class="row wrapper">
            <div class="col-4">
              <img class="w-100" src="./assets/light.png" alt="">
            </div>
            <div class="col-8 center">
              <p>Restroom's light is <b>on</b></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
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

.control-card {
  .wrapper {
    padding: 10px 3px;
    background: rgb(230, 230, 230);
    margin: 1px;
  }
  p {
    margin-bottom: 0;
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
