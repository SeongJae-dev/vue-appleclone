<template >
    <div id="vue-content" class="vue-content">
        <div class="vue-container">
            <a class="link"></a>
            <div class="vue-item">
                <div class="vue-image-wapper">
                    <h2 class="headline">{{content.title}}</h2>
                    <h3 class="subhead">{{content.itemMainDesc}}</h3>
                    <p class="avail-msg" v-if="content.itemSubDesc !='' ">{{content.itemSubDesc}}</p>
                    <p class="avail-msg" v-if="content.releaseDate !='' ">{{content.releaseDate}}</p>
                </div>
            </div>
            <div class="vue-image-wrapper"  >
                <figure class="image" :class="content.image"></figure>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"vue-content",
    props:{
        content: Object,
    },
    data() {
        return {
            
        }
    },
    created() {
        console.log("child content",this.content);
    },
}
</script>
<style >
    .headline {
        font-size: 56px;
        font-weight: 600;
        color: #1d1d1f;
        line-height: 1.17865;
        letter-spacing: 0em;
        word-break: keep-all;
        margin: 0;
    }
    .subhead{
        font-size: 28px;
        line-height: 1.10722;
        font-weight: 400;
        letter-spacing: .004em;
        margin: 0;
        margin-top: 6px;
        color: #1d1d1f;
        text-align: center;
        display: block;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        -ms-flex-negative: 1;
        flex-shrink: 1;
    }
    .avail-msg{
        margin-top: 10px;
        color: #86868b;
    }
    
    .vue-container{
        display: flex;
        flex-direction: column;
    }

    .vue-content{
        box-sizing: border-box;
        position: relative;
        padding-top: 0px;
        border-style: none;
        overflow: visible;
        border-left-width: 0px;
        border-right-width: 0px;
    }

    .vue-item{
        z-index: 4;
        pointer-events: none;
        margin-top: var(--global-nav-collective-height);
    }

    .image{
        background-size: 3000px 738px;
        background-position: center;
        height: 738px;
        margin: 0;
    }

    .imac{
        background-image: url(../assets/images/imac.jpg);
       
    }
    .iPhone12-pro{
        background-image: url(../assets/images/iPhone12_pro.jpg);
    }
    .iPhone12{
        background-image: url(../assets/images/iPhone12.jpg);
    }
    .vue-image-wrapper{
        width: 100%;
        height: 100%;
        flex-basis: 100px;
        z-index: 1;
        overflow: visible;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        /* position: absolute; */
        top: 48px;
        left: 0;
    }


</style>
