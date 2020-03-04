<template>
    <div class="movie_body">
        <ul>
            <li>
                <div class="pic_show"><img src="../../../public/images/1.jpg" alt=""></div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p>17746人想看</p>
                    <p>主演：xxx</p>
                    <p>xxxx-xx-xx上映</p>
                </div>
                <div class="btn_mall">
                    预售
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="../../../public/images/1.jpg" alt=""></div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p>17746人想看</p>
                    <p>主演：xxx</p>
                    <p>xxxx-xx-xx上映</p>
                </div>
                <div class="btn_mall">
                    预售
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="../../../public/images/1.jpg" alt=""></div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p>17746人想看</p>
                    <p>主演：xxx</p>
                    <p>xxxx-xx-xx上映</p>
                </div>
                <div class="btn_mall">
                    预售
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="../../../public/images/1.jpg" alt=""></div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p>17746人想看</p>
                    <p>主演：xxx</p>
                    <p>xxxx-xx-xx上映</p>
                </div>
                <div class="btn_mall">
                    预售
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="../../../public/images/1.jpg" alt=""></div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p>17746人想看</p>
                    <p>主演：xxx</p>
                    <p>xxxx-xx-xx上映</p>
                </div>
                <div class="btn_mall">
                    预售
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="../../../public/images/1.jpg" alt=""></div>
                <div class="info_list">
                    <h2>无名之辈</h2>
                    <p>17746人想看</p>
                    <p>主演：xxx</p>
                    <p>xxxx-xx-xx上映</p>
                </div>
                <div class="btn_mall">
                    预售
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'comingsoon'
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