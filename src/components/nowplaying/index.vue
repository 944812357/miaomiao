<template>
    <div class="movie_body" ref="movie_body">
      <loading v-if="isLoading"></loading>
      <scroller :handleToScroll="handleToScroll" :handleToTouchEnd="handleToTouchEnd" v-else>
        <ul>
            <li class="pullDown">{{pullDownMsg}}</li>
            <li v-for="item in movieList" :key="item.id">
                <div class="pic_show" @tap="handleToDetail(item.id)"><img :src="item.img | setWH('65.90')" alt=""></div>
                <div class="info_list">
                    <h2 @tap="handleToDetail(item.id)">{{item.nm}} <img v-if="item.version" src="" alt=""></h2>
                    <p>观众评分：<span class="grade">{{item.sc}}</span></p>
                    <p>主演：{{item.star}}</p>
                    <p>{{item.comingTitle}}</p>
                </div>
                <div class="btn_mall">
                    购票
                </div>
            </li>
        </ul>
      </scroller>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import axios from 'axios'
export default {
    name:'nowplaying',
    data(){
      return {
        movieList:[],
        pullDownMsg:'',
        isLoading:true,
        preCityId: -1
      }
    },
    methods: {
      handleToDetail(movieId){
        this.$router.push('/movie/detail/'+movieId)
      },
      handleToScroll(pos){
        if(pos.y > 30){
          this.pullDownMsg = '正在更新中';
        }
      },
      handleToTouchEnd(pos){
        if(pos.y > 30){
          if(pos.y > 30){
            axios.get('/api/movieOnInfoList?cityId='+this.cityId).then(res=>{
              var msg = res.data.msg;
              if(msg === 'ok'){
                this.pullDownMsg = '更新成功';
                setTimeout(()=>{
                  this.movieList = res.data.data.movieList;
                  this.pullDownMsg = '';
                  console.log(this.movieList)
                },1000)
              }    
            });
          }
        }
      }
    },
    // mounted生命周期 在keep-alive下调用 ，使用activated
    activated() {
      // 切换城市，更新数据
      var cityId = this.$store.state.city.id;
      if(this.preCityId === cityId){
        return;
      }
      this.loading = true;

      axios.get('/api/movieOnInfoList?cityId='+cityId).then(res=>{
        var msg = res.data.msg;
        if(msg === 'ok'){
          this.movieList = res.data.data.movieList;
          this.isLoading = false;
          this.preCityId = cityId;
          // this.$nextTick(()=>{ // 数据渲染完毕后触发回调
          //   var scroll = new BScroll(this.$refs.movie_body,{
          //     tap:true, //点击触发，滑动不触发
          //     probeType:1 //滚动时派发scroll事件，1节流，2不节流
          //   });
          //   scroll.on('scroll',(pos)=>{
          //     if(pos.y > 30){
          //       this.pullDownMsg = '正在更新中';
          //     }
          //   });
          //   scroll.on('touchEnd',(pos)=>{
          //     if(pos.y > 30){
          //       axios.get('/api/searchList?cityId=10&kw=c').then(res=>{
          //         var msg = res.data.msg;
          //         if(msg === 'ok'){
          //           this.pullDownMsg = '更新成功';
          //           setTimeout(()=>{
          //             this.movieList = res.data.data.movies.list;
          //             this.pullDownMsg = '';
          //           },1000)
          //         }    
          //       });
                
          //     }
          //   })
          // })
        }
      })
    },
}
</script>

<style lang="scss" scoped>
#content {
  .movie_body {
    flex: 1;
    overflow: auto;
    ul {
      margin: 0 12px;
      overflow: hidden;
      li {
        margin-top: 12px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #e6e6e6;
        padding-bottom: 10px;
      }
    }
    .pullDown{
      margin: 0;
      padding: 0;
      border: none;
    }
    .pic_show {
      width: 65px;
      height: 90px;
      img {
        width: 100%;
      }
    }
    .info_list {
      margin-left: 10px;
      flex: 1;
      position: relative;
      h2 {
        font-size: 17px;
        line-height: 24px;
        width: 150px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      p {
        height: 22px;
        font-size: 13px;
        color: #666;
        line-height: 22px;
        width: 180px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .grade {
        font-weight: 700;
        color: #faaf00;
        font-size: 15px;
      }
      img {
        width: 50px;
        position: absolute;
        right: 10px;
        top: 5px;
      }
    }
    .btn_pre {
      background: #3c9fe6;
      width: 47px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      background: red;
    }
    .btn_mall{
      background: #3c9fe6;
      width: 47px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      background: red;
    }
  }
}



</style>