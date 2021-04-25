<template >
    <div id="vue-content">
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
            <div class="vue-image-wapper"  >
                <figure :class="content.image"></figure>
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

    .imac{
        background-image: url(../assets/images/imac.jpg);
    }
    .iPhone12-pro{
        background-image: url(../assets/images/iPhone12_pro.jpg);
    }
    .iPhone12{
        background-image: url(../assets/images/iPhone12.jpg);
    }


</style>
