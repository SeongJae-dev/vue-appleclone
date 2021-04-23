<template >
     <nav>
         <div>
             <ul></ul>
         </div>
     </nav>
    
</template>
<script>
const navData = [
    { id:0, title:"Apple", logo:"" },
    { id:1, title:"Mac",logo:null },
    { id:2, title:"iPad",logo:null },
    { id:3, title:"iPhone",logo:null },
    { id:4, title:"Watch",logo:null },
    { id:5, title:"Music",logo:null },
    { id:6, title:"고객지원",logo:null },
    { id:7, title:"Search",logo:"" },
    { id:8, title:"Shopingback",logo:"" },
]

export default {
    name:'footer',
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
<style lang="">
    
</style>