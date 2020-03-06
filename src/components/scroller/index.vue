<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'scroller',
    props: {
        handleToScroll:{
            type:Function,
            default:function(){}
        },
        handleToTouchEnd:{
            type:Function,
            default:function(){}
        }
    },
    mounted() {
        var scroll = new BScroll(this.$refs.wrapper,{
            tap:true, //点击触发，滑动不触发
            probeType:1 //开启滚动时派发scroll事件，1节流，2不节流
        });
        this.scroll = scroll;
        scroll.on('scroll',(pos)=>{
            this.handleToScroll(pos)
        })
        scroll.on('touchEnd',(pos)=>{
            this.handleToTouchEnd(pos)
        })
    },
    methods: {
        toScrollTop(y){
            this.scroll.scrollTo(0,y);
        }
    },
}
</script>

<style lang="scss" scoped>
    .wrapper{
        height: 100%
    }
</style>