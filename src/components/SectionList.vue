<template >
    <section id="vue-section" class="vue-section">
        <SectionDetail v-for="content in contentList" :content="content" :key="content.id"/>
    </section>
</template>
<script>

import SectionDetail from './SectionDetail'

export default {
    name:"vue-section",
    components:{
        SectionDetail,
    },
    props:{

    },
    data() {
        return {
            contentList:[
                {id:0,title:"iMac", itemMainDesc:"이제 새롭게 만나는 시간.",itemSubDesc:"","releaseDate":"출시일은 추후 공개 됩니다.",image:"imac"},
                {id:1,title:"iPhone 12", itemMainDesc:"보라. 올 시즌 컬러.",itemSubDesc:"￦950,000부터(보상 판매* 미적용 가격)",releaseDate:"퍼플 색상 4월 30일 출시",image:"iPhone12-pro"},
                {id:2,title:"iPhone 12 Pro", itemMainDesc:"도약의 시간.",itemSubDesc:"￦1,350,000부터(보상 판매* 미적용 가격)",releaseDate:"",image:"iPhone12-pro"},
            ],
        }
    },
    created() {
        console.log("contentList",this.contentList);
    },

}
</script>
<style >

    .vue-section{
        display: grid;
    }
    
</style>