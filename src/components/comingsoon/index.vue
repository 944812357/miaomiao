<template>
    <div class="movie_body">
        <ul>
            <li v-for="item in movieList" :key="item.id">
                <div class="pic_show"><img :src="item.img | setWH('65.90')" alt=""></div>
                <div class="info_list">
                    <h2>{{item.nm}}</h2>
                    <p>{{item.cat}}</p>
                    <p>主演：{{item.dir}}</p>
                    <p>{{item.pubDesc}}</p>
                </div>
                <div class="btn_mall">
                    预售
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'comingsoon',
    data() {
      return {
        movieList: []
      }
    },
    mounted() {
      axios.get('/api/searchList?cityId=10&kw=b').then(res=>{
        var msg = res.data.msg;
        if(msg === 'ok'){
          console.log(res.data.data.movies.list)
          this.movieList = res.data.data.movies.list;
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
      background: lightblue;
    }
  }
}

</style>