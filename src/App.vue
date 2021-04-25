<template>
  <div id="app">
    <Header/>
    <img src="./assets/logo.png">
    <SectionList/>
    <SectionGrid/>
    <Footer/>
  </div>
</template>


<script>

import Header from './layout/Header'
import SectionList from './components/SectionList'
import SectionGrid from './components/SectionGird'
import Footer from './layout/Footer'


export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Header,
    SectionList,
    SectionGrid,
    Footer
  
  }
}
</script>

<style>
#app {
  font-family: "SF Pro KR","SF Pro Text","Yoon Gothic","Myriad Set Pro","SF Pro Icons","Apple Gothic","HY Gulim","MalgunGothic","HY Dotum","Lexi Gulim","Helvetica Neue","Helvetica","Arial",sans-serif;
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
