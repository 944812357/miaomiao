<template>
    <div id="main">
        <Header title="喵喵电影"></Header>
            <div id="content">
                <div class="movie_menu">
                    <router-link tag="div" to="/movie/city" class="city_name">
                        <span>大连</span><i class="iconfont icon-arrow-right"></i>
                    </router-link>
                    <div class="hot_switch">
                        <router-link class="hot_item" tag="div" to="/movie/nowplaying">正在热映</router-link>
                        <router-link class="hot_item" tag="div" to="/movie/comingsoon">即将上映</router-link>
                    </div>
                    <router-link class="search_entry" tag="i" to="/movie/search">
                        <i class="iconfont icon-search" ></i>
                    </router-link>
                </div>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Header from '@/components/header'
import Tabbar from '@/components/tabbar'
export default {
    name:'movie',
    components:{
        Header,
        Tabbar
    }
}
</script>

<style lang="scss" scoped>
#content {
  .movie_menu {
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    justify-content: space-between;
    .city_name {
      margin-left: 20px;
      height: 100%;
      line-height: 45px;
      &.router-link-active {
        color: #ef4238;
        border-bottom: 2px solid #ef4238;
      }
    }
    .hot_switch {
      display: flex;
      height: 100%;
      line-height: 45px;
    }
    .hot_item {
      font-size: 15px;
      color: #666;
      width: 80px;
      text-align: center;
      margin: 0 12px;
      font-weight: 700;
      &.router-link-active {
        color: #ef4238;
        border-bottom: 2px solid #ef4238;
      }
    }
    .search_entry {
      margin-right: 20px;
      height: 100%;
      line-height: 45px;
      &.router-link-active {
        color: #ef4238;
        border-bottom: 2px solid #ef4238;
      }
      i {
        font-size: 24px;
        color: red;
      }
    }
  }
}
</style>