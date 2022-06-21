<template>
  <div class="about">
    <h1 @click="test">Button</h1>
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
      alert('btn')
    }
  }
}
</script>