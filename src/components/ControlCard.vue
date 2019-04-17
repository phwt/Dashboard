<template>
  <div @click="handleClick" class="control-card col-12 col-md-6 p-1">
    <div :class="['row wrapper', {'isOff': !isOn}]">
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
  props: ['device', 'isOn', 'image'],
  methods: {
    handleClick () {
      this.$emit('isClicked')
    }
  }
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

.isOff {
  background: #727272!important;
  color: #fff;
}
</style>
