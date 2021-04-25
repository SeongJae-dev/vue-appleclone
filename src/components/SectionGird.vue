<template >
    <section id="vue-section-grid">
        <SectionGridDetail v-for="content in contentList" :key="content.id" :content="content"/>
    </section>
</template>
<script>

import SectionGridDetail from './SectionGridDetail'


export default {
    name: "vue-section-grid",
    props:{},
    components:{
        SectionGridDetail,
    },
    data() {
        return {
            contentList:[{id:0, title:"iPad Pro", itemMainDesc:"막강한 성능의 Apple M1칩 탑재", releaseDate:"출시일은 추후 공개됩니다."}]
        }
    },
}
</script>
<style>
    
</style>