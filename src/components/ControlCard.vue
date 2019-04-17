<template>
  <div class="control-card col-12 col-md-6 p-1">
    <div class="row wrapper">
      <div class="col-4">
        <img class="w-100" :src="image" alt="">
      </div>
      <div class="col-8 center">
        <p>{{ device }} is <b>{{ isOn }}</b></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ControlCard',
  props: ['device', 'isOn', 'image']
}
</script>

<style lang="scss" scoped>
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
