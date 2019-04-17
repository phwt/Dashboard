<template>
  <div class="col-12 col-md-4">
    <small>{{  name }}</small>
    <h2>{{ value }}</h2>
  </div>
</template>

<script>
export default {
  name: 'DataCard',
  props: ['name', 'value']
}
</script>
