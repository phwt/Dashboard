<template>
  <div @click="push" class="control-card col-6 p-1">
    <div :class="['row wrapper', {'isOff': !offClass}]">
      <div class="col-4">
        <img class="w-100" :src="image" alt="">
      </div>
      <div class="col-8 center">
        <p>
          {{ name }} is 
          <b v-if="!offClass">on</b>
          <b v-else>off</b>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { database } from 'firebase'
export default {
  name: 'ControlCard',
  props: ['name', 'path', 'image'],
  data () {
    return {
      status: null
    }
  },
  mounted () {
    let data = database().ref(this.path)
    let self = this
    data.on('value', function(snapshot) {
      self.status = snapshot.val()
    })
  },
  methods: {
    push () {
      console.log('Push!')
      if (this.status == "on") {
        database().ref(this.path).set('off')
      } else {
        database().ref(this.path).set('on')
      }
    }
  },
  computed: {
    offClass () {
      if (this.status == "on") return false
      else return true
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
  background: #777777!important;
  color: #fff;
}
</style>

