<template>
  <div class="about">
    <h1 @click="test">Img</h1>
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
      alert('img')
    }
  }
}
</script>