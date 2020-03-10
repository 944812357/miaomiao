<template>
    <div id="detailContainer" class="slide-enter-active">
        <Header title="影片详情">
            <i class="iconfont icon-arrow-lift" @touchstart="handleToBack"></i>
        </Header>
        <loading v-if="isLoading"></loading>
        <div v-else id="content" class="contentDetail">
            <div class="detail_list">
                <div class="detail_list_bg" :style="{'background-image':'url('+detailMovie.img.replace(/w\.h/,'148.208')+')'}"></div>
                <div class="detail_list_filter"></div>
                <div class="detail_list_content">
                    <div class="detail_list_img">
                        <img :src="detailMovie.img | setWH('148.208')" alt="">
                    </div>
                    <div class="detail_list_info">
                        <h2>{{detailMovie.nm}}</h2>
                        <p>{{detailMovie.enm}}</p>
                        <p>{{detailMovie.sc}}</p>
                        <p>{{detailMovie.cat}}</p>
                        <p>{{detailMovie.src}} / {{detailMovie.dur}}</p>
                        <p>{{detailMovie.pubDesc}}</p>
                    </div>
                </div>
            </div>
            <div class="detail_intro">
                <p>{{detailMovie.dra}}</p>
            </div>
            <div class="detail_player swiper-container" ref="detail_player">
                <ul class="swiper-wrapper">
                    <li v-for="(item,index) in detailMovie.photos" :key="index"  class="swiper-slide">
                        <div>
                            <img :src="item | setWH('140.170')" alt="">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Swiper from 'swiper'
import Header from '@/components/header'
export default {
    data(){
        return {
            detailMovie:{},
            isLoading:true
        }
    },
    props:['movieId'],
    name:'detail',
    components:{
        Header
    },
    methods: {
        handleToBack(){
            this.$router.back()
        }
    },
    mounted() {
        axios.get('/api/detailmovie?movieId='+this.movieId).then(res=>{
            var msg = res.data.msg;
            if(msg === 'ok'){
                this.isLoading = false;
                this.detailMovie = res.data.data.detailMovie;
                this.$nextTick(()=>{
                    new Swiper(this.$refs.detail_player, {
                        slidesPerView:'auto',
                        freeMode:true,
                        freeModeSticky:true
                    })
                })
            }
        })
    },
}
</script>

<style lang="scss" scoped>
#detailContainer{
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    width: 100%;
    min-height: 100%;
    background: white;
    &.slide-enter-active{
        animation: .3s slideMove
    }
    @keyframes slideMove {
        0%{transform: translateX(100%)}
        100%{transform: translateX(0)}
    }
    #content{
        .detail_player{
            .swiper-wrapper{
                img{
                    height: 80px;
                }
            }
            margin: 20px;
            .swiper-slide{
                width: 70px;
                margin-right: 20px;
                text-align: center;
                font-size: 14px;
                img{
                    width: 100%;
                    margin-bottom: 5px;
                }
                p{
                    &:nth-of-type(2){
                        color: #999;
                    }
                }
            }
        }
        .detail_intro{
            padding: 10px;
        }
        &.contentDetail{
            display: block;
            margin-bottom: 0;
        }
        .detail_list{
            height: 200px;
            width: 100%;
            position: relative;
            overflow: hidden;
            .detail_list_bg{
                width: 100%;
                height: 100%;
                background:0 40px;
                filter: blur(20px);
                background: gray;
            }
            .detail_list_filter{
                width: 100%;
                height: 100%;
                position: absolute;
                background: #40454d;
                opacity: .55;
                
            }
            .detail_list_content{
                display: flex;
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
                z-index: 2;
            }
            .detail_list_img{
                width: 108px;
                height: 150px;
                border: 1px solid #f0f2f3;
                margin: 20px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .detail_list_info{
                margin-top: 20px;
                h2{
                    font-size: 20px;
                    color: white;
                    font-weight: normal;
                    line-height: 40px;
                }
                p{
                    color: white;
                    line-height: 20px;
                    font-size: 14px;
                }
            }
        }
    }
}
</style>