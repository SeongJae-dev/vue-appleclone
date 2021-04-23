<template >
     <nav id="vue-globalnav" class="header_nav">
         <div class="vue-nav-content">
             <ul class="vue-nav-list">
                 <li v-for="nav in navs" :key="nav.id" class="vue-nav-item">
                     <a>
                        <span v-if="nav.logo === null">
                            {{nav.title}}
                        </span>
                        <span v-else>
                            {{nav.logo}}
                        </span>
                     </a>
                 </li>
             </ul>
         </div>
     </nav>
</template>

<script>
const navData = [
    { id:0, title:"Apple", logo:"logo" },
    { id:1, title:"Mac",logo:null },
    { id:2, title:"iPad",logo:null },
    { id:3, title:"iPhone",logo:null },
    { id:4, title:"Watch",logo:null },
    { id:5, title:"Music",logo:null },
    { id:6, title:"고객지원",logo:null },
    { id:7, title:"Search",logo:"logo" },
    { id:8, title:"Shopingback",logo:"logo" },
]

export default {
    name:'header-layout',
    data() {
        return {
            navs: navData
        }
    },
    created() {
        console.log(this.navs)
    },
    
}
</script>
<style >
    .vue-globalnav{
        width: 100%;
        height: 48px;
    }
    .vue-nav-content{
        margin: 0 auto;
        max-width: 980px;
        padding: 0 22px;
        height: 100%;
    }
    .vue-nav-list{
        margin: 0 auto;
        height: 44px;
        width: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .vue-nav-item{
        padding: 0 10px;
    }
    
</style>