<template>
  <div class="about">
    <h1 @click="test">Select</h1>
  </div>
</template>
<script>
export default {
  name: 'MyLibrary',
    
  mounted() {
  },
  data() {
  },
  methods: {
    test() {
      alert('select')
    }
  }
}
</script>