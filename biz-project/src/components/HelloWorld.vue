<template>
  <div class="hello">
    {{comps}}
 
    <component v-for="comp in comps" :is="comp"></component>
  </div>
</template>

<script type="module">
import { defineAsyncComponent } from 'vue'
// const Content = defineAsyncComponent(() => import('http://127.0.0.1:5500/dist/my-lib.es.js'))

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      comps: []
    }
  },
  created() {
    setTimeout(() => {
      const data = [
        'http://127.0.0.1:5500/dist/my-lib.es.js'
      ]
      data.forEach(url => {
        this.comps.push(defineAsyncComponent(() => import(url)))
      });
    }, 1000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
