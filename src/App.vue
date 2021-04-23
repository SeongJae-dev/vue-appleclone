<template>
  <div id="app">
    <Header/>
    <img src="./assets/logo.png">
    <SectionList/>
  </div>
</template>


<script>

import Header from './layout/Header'
import SectionList from './components/SectionList'


export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Header,
    SectionList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}



a {
  color: #42b983;
}
</style>
