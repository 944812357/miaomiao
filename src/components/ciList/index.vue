<template>
    <div id="content">
            <div class="cinema_body">
                <loading v-if="isLoading"></loading>
                <scroller v-else>
                    <ul>
                        <li v-for="item in cinemaList" :key="item.id">
                            <div>
                                <span>{{item.nm}}</span>
                                <span class="q"><span class="price">{{item.sellPrice}}</span>元起</span>
                            </div>
                            <div class="address">
                                <span>{{item.addr}}</span>
                                <span>{{item.distance}}</span>
                            </div>
                            <div class="card">
                                <!-- no-use-v-if-with-v-for -->
                                <div v-for="(num,key) in item.tag" :key="key" :class="key | classCard" v-if="num === 1">{{key | formatCard}}</div>
                            </div>
                        </li>
                    </ul>
                </scroller>
            </div>
        </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'ciList',
    data() {
        return {
            cinemaList: [],
            isLoading:true,
            preCityId: -1
        }
    },
    activated() {
      // 切换城市，更新数据
      var cityId = this.$store.state.city.id;
      if(this.preCityId === cityId){
        return;
      }
      this.loading = true;

        axios.get('/api/cinemaList?cityId='+cityId).then(res=>{
            var msg = res.data.msg;
            if(msg === 'ok'){
                this.cinemaList = res.data.data.cinemas;
                this.isLoading = false;
                this.preCityId = cityId;
            }
        })
    },
    filters:{
        formatCard(key){
            var card = [
                {key : 'allowRefund', value:'改签'},
                {key:'sell', value:'折扣卡'},
                {key:'endorse', value:'退'},
                {key:'snack', value:'小吃'}
            ];
            for(var i=0 ; i < card.length; i++){
                if(card[i].key === key){
                    return card[i].value;
                }
            }
        },
        classCard(key){
            var card = [
                {key : 'allowRefund', value:'or'},
                {key:'sell', value:'or'},
                {key:'endorse', value:'bl'},
                {key:'snack', value:'bl'}
            ];
            for(var i=0 ; i < card.length; i++){
                if(card[i].key === key){
                    return card[i].value;
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
#content{
    .cinema_body{
        flex: 1;
        overflow: auto;
        ul{
            padding: 20px;
        }
        li{
            border-bottom: 1px solid #e6e6e6;
            margin-bottom: 20px;
        }
        div{
            margin-bottom: 10px;
        }
        .q{
            font-size: 11px;
            color: #f03d37;
            float: right;
        }
        .price{
            font-size: 18px;
            
        }
        .address{
            font-size: 13px;
            color: #666;
            span{
                &:nth-of-type(1){
                    text-overflow: ellipsis;
                    display: inline-block;
                    width: 240px;
                    
                }
                &:nth-of-type(2){
                    float: right;
                    display: block;
                }
                
            }
        }
        .card{
            display: flex;
            div{
                padding: 0;
                height: 15px;
                line-height: 15px;
                border-radius: 2px;
                color: #f90;
                border: 1px solid #f90;
                margin-right: 5px;
                &.or{
                    color: #f90;
                    border: 1px solid #f90;
                }
                &.bl{
                    color: #589daf;
                    border: 1px solid #589daf;
                }
            }
        }
    }
}

</style>