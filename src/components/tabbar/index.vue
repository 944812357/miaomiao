<template>
    <footer id="footer">
        <ul>
            <router-link tag="li" to="/movie">
                <i class="iconfont icon-video"></i>
                <p>电影</p>
            </router-link>
            <router-link tag="li" to="/cinema">
                <i class="iconfont icon-coupons-fill"></i>
                <p>影院</p>
            </router-link>
            <router-link tag="li" to="/mine">
                <i class="iconfont icon-usercenter"></i>
                <p>我的</p>
            </router-link>
        </ul>
    </footer>
</template>

<script>
export default {
    name:'Tabbar'
}
</script>

<style lang="scss" scoped>
    #footer {
        width: 100%;
        height: 50px;
        background: white;
        border-top: 2px solid #cbc8e3;
        position: fixed;
        left: 0;
        bottom: 0;
        ul {
            display: flex;
            text-align: center;
            height: 50px;
            align-items: center;
            li {
            flex: 1;
            height: 40px;
            &.router-link-active{
                color: #f03d37;
            }
            }
            i {
            font-size: 20px;
            }
            p {
            font-size: 12px;
            line-height: 18px;
            }
        }
    }

</style>