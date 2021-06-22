<template>
    <v-container fluid>
        <v-row align="center" class="first-row">
            <v-avatar size="36">
                <img :src="mcAvatar" alt="avatar"/>
            </v-avatar>
            <span>{{mcName}}</span>
        </v-row>
        <v-card color="primary" dark height="170">
            <v-col>
                <div>今日交易额(元)</div>
                <div style="font-size: 2rem">{{todayAmount}}</div>
            </v-col>
            <v-row class="card-row">
                <v-col class="card-col">
                    <div>今日访客</div>
                    <div>{{todayVisitor}}</div>
                </v-col>
                <v-col class="card-col">
                    <div>昨日新增客户</div>
                    <div>{{newCustomer}}</div>
                </v-col>
                <v-col class="card-col">
                    <div>7日订单</div>
                    <div>{{sevenDayOrder}}</div>
                </v-col>
            </v-row>
        </v-card>
        <v-row align="center" class="common-action"
               justify="space-around">
            <v-btn text>备货清单</v-btn>
            <v-divider vertical/>
            <v-btn text>退款</v-btn>
        </v-row>
        <v-row dense>
            <v-col :key="index" class="function-col" v-for="(item,index) in functionList">
                <v-btn :key="index" @click="pushRoute(children.name)" class="manage-btn" text v-for="(children,index) in item">
                    <i :class="children.icon"></i>
                    <div>{{children.name}}</div>
                </v-btn>
            </v-col>
        </v-row>
        <div class="merchant-learn">商家学习</div>
        <v-list two-line>
            <v-list-item>
                <v-list-item-avatar>
                    <v-img src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>了解果星Planet</v-list-item-title>
                    <v-list-item-subtitle>快速了解</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                    <v-btn color="primary" outlined rounded>去完成</v-btn>
                </v-list-item-action>
            </v-list-item>
        </v-list>
    </v-container>
</template>

<script>

    import Vue from 'vue'
    import {Toast} from 'mint-ui'

    Vue.use(Toast)
    export default {
        name: "Main",
        data() {
            return {
                functionList: [
                    [
                        {name: '店铺管理', icon: 'iconfont iconfont-dianpu1'},
                        {name: '库存管理', icon: 'iconfont iconfont-kucun'}
                    ],
                    [
                        {name: '商品管理', icon: 'iconfont iconfont-shangpin'},
                        {name: '经营数据', icon: 'iconfont iconfont-shuju'}
                    ],
                    [
                        {name: '订单管理', icon: 'iconfont iconfont-icon--copy'},
                        {name: '店铺营收', icon: 'iconfont iconfont-yingshou'}
                    ]
                ],
                mcLearning: {
                    title: '了解果星Planet',
                    subtitle: '快速了解'
                },
                mcName: null,
                mcAvatar: null,
                todayAmount: null,
                todayVisitor: null,
                newCustomer: null,
                sevenDayOrder: null
            }
        },
        created() {
            this.getMerchantInfo()
            this.getShopInfo()
            this.getData()
        },
        methods: {
            pushRoute(name) {
                switch (name) {
                    case '店铺管理':
                        this.$router.push('/shop')
                        break
                    case '库存管理':
                        this.$router.push('/store')
                        break
                    case '商品管理':
                        this.$router.push('/goods')
                        break
                    case '经营数据':
                        this.$router.push('/business/data')
                        break
                    case '订单管理':
                        this.$router.push('/order')
                        break
                    case '店铺营收':
                        this.$router.push('/store/sales')
                        break
                }
            },
            async getMerchantInfo() {
                window.sessionStorage.setItem("mcPhone",this.$route.query.mcPhone)
                const {data: res} = await this.$http.post('/merchant/info', {mcPhone: window.sessionStorage.getItem("mcPhone")})
                if (res.code !== 200) {
                    Toast({
                        message: '信息获取失败',
                        position: 'bottom'
                    })
                } else {
                    this.mcName = res.data.name
                    this.mcAvatar = res.data.avatar
                    window.sessionStorage.setItem("mcId", res.data.id)
                }
            },
            async getShopInfo() {
                const {data: res} = await this.$http.post('/shop/info', {mcId: window.sessionStorage.getItem('mcId')})
                if (res.code !== 200) {
                    Toast({
                        message: '店铺信息获取失败',
                        position: 'bottom'
                    })
                } else {
                    window.sessionStorage.setItem('shopId',res.data.shopId)
                }
            },
            async getData() {
                console.log(window.sessionStorage.getItem("shopId"))
                const {data:res} = await this.$http.post('/index/data',{shopId: window.sessionStorage.getItem("shopId")})
                if (res.code !== 200) {
                    Toast({
                        message: '数据不存在',
                        position: 'bottom'
                    })
                }else {
                    if (res.data.todayAmount === null) {
                        this.todayAmount = 0
                    }else {
                        this.todayAmount = res.data.todayAmount
                    }
                    this.todayVisitor = res.data.todayVisitor
                    this.newCustomer = res.data.newCustomer
                    this.sevenDayOrder = res.data.sevenDayOrder
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .first-row {
        margin: 10px 0 0 5px;

        span {
            margin-left: 10px;
            font-size: 1.3rem;
            font-weight: bold;
        }
    }

    .v-card {
        margin-top: 25px;

        .card-col {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    .common-action {
        height: 50px;
        margin: 20px auto;
        border: 2px #F5F5F5 solid;

        .v-btn {
            height: 100%;
        }
    }

    /deep/ .v-btn__content {
        flex-direction: column;
    }

    .function-col {
        text-align: center;
        height: 11rem;
    }

    .manage-btn {
        height: 4rem !important;
        margin-bottom: 0.75rem;

        div {
            margin-top: 0.5rem;
            font-size: 0.80rem;
            font-weight: bold;
        }

        i {
            font-size: 2rem;
        }
    }

    .merchant-learn {
        font-weight: bold;
        font-size: 1.1rem;
    }

</style>
