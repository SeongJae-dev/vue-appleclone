<template >
     <nav id="vue-globalnav" class="header_nav">
         <div class="vue-nav-content">
             <ul class="vue-nav-list">
                 <li v-for="nav in navs" :key="nav.id" class="vue-nav-item">
                     <a  v-if="nav.logo === null">
                        <span class="nav-text">
                            {{nav.title}}
                        </span>
                     </a>
                     <a v-else class="nav-logo" :class="nav.logo" >
                        <span class="nav-logo-text" >
                            {{nav.title}}
                        </span>
                     </a>
                 </li>
             </ul>
         </div>
     </nav>
</template>

<script>
// import images from '@/assets/images/';


const navData = [
    { id:0, title:"Apple", logo:'apple-logo' },
    { id:1, title:"Mac",logo:null },
    { id:2, title:"iPad",logo:null },
    { id:3, title:"iPhone",logo:null },
    { id:4, title:"Watch",logo:null },
    { id:5, title:"Music",logo:null },
    { id:6, title:"고객지원",logo:null },
    { id:7, title:"Search",logo:'search-logo'  },
    { id:8, title:"Shoppingag",logo:'shopping-logo' },
]


export default {
    name:'header-layout',
    data() {
        return {
            navs: navData
        }
    },
    created() {
        console.log("navs :",this.navs)
    },

}
</script>
<style >
    .header_nav{
        width: 100%;
        height: 48px;
        background: rgba(0,0,0,0.8);
        font-size: 14px;
    }
    .vue-nav-content{
        margin: 0 auto;
        max-width: 980px;
        padding: 0 22px;
        height: 100%;
    }
    .vue-nav-list{
        margin: 0 auto;
        height: 100%;
        width: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nav-text{
        color:#f5f5f7;
    }
    .nav-logo-text{
            position: absolute;
            clip: rect(1px, 1px, 1px, 1px);
            clip-path: inset(0px 0px 99.9% 99.9%);
            overflow: hidden;
            height: 1px;
            width: 1px;
            padding: 0;
            border: 0;
            top: 50%;
    }
    .vue-nav-item{
        /* padding: 0 10px; */
    }
    .nav-logo{
        top: 2px;
        background-repeat: no-repeat;
        /* background-position: center center !important; */
        width: 16px;
        color: #f5f5f7;
        position: relative;
        z-index: 1;
        display: inline-block;
        padding: 0 10px;
        height: 44px;
        opacity: .8;
        background: no-repeat;
    }

    .apple-logo{
        background-image: url(../assets/images/apple_logo.svg);
        background-size: 16px 44px;
    }
    .search-logo{
        background-image: url(../assets/images/search_logo.svg);
        background-size: 18px 88px;
        background-repeat: no-repeat;
        background-position: inherit !important;
    }
    .shopping-logo{
        background-image: url(../assets/images/shopping_bag.svg);
        background-size: 17px 44px;
    }

</style>
