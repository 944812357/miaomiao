<template>
    <div id="main">
        <Header title="喵喵影院"></Header>
        <div id="content">
            <div class="cinema_menu">
                <div class="city_switch">
                    全城<i class="iconfont icon-falling"></i>
                </div>
                <div class="city_switch">
                    品牌<i class="iconfont icon-falling"></i>
                </div>
                <div class="city_switch">
                    特色<i class="iconfont icon-falling"></i>
                </div>
            </div>
            <CiList></CiList>
        </div>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Header from '@/components/header'
import Tabbar from '@/components/tabbar'
import CiList from '@/components/ciList'
export default {
    name:'cinema',
    components:{
        Header,
        Tabbar,
        CiList
    }
}
</script>

<style lang="scss" scoped>
#content{
    .cinema_menu{
        width: 100%;
        height: 45px;
        border-bottom: 1px solid #e6e6e6;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: white
    }
}
</style>