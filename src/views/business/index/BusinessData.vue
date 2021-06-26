<template>
    <v-app id="business-data">
        <v-app-bar app color="white" flat>
            <v-app-bar-nav-icon @click="backRoute">
                <template #default>
                    <v-icon>mdi-arrow-left</v-icon>
                </template>
            </v-app-bar-nav-icon>
            <v-app-bar-title>经营数据</v-app-bar-title>
        </v-app-bar>
        <v-main>
            <v-container fluid style="padding: 0">
                <div class="divider"/>
                <v-row>
                    <v-col :align="index === 1 ? 'right' : ''" :cols="index === 0 ? 9 : 2" :key="index"
                           :style="index === 1 ? {fontSize: '0.875rem',color: 'grey',padding: '0'} : {}" v-for="(item,index) in first_row">
                        <span>{{item}}</span>
                    </v-col>
                    <v-col cols="1">
                        <v-icon>mdi-chevron-right</v-icon>
                    </v-col>
                </v-row>
                <v-divider/>
                <v-row>
                    <v-subheader>今日交易金额(元)</v-subheader>
                </v-row>
                <v-row>
                    <v-col class="sale-amount" cols="8">
                        {{todayAmount}}
                    </v-col>
                    <v-col cols="4">
                        <v-sparkline
                                :gradient="gradient"
                                :value="value"
                                auto-draw
                                fill
                                gradient-direction="top"
                                line-width="3"
                                padding="0"
                                smooth
                                stroke-linecap="round"
                                type="trend"
                        ></v-sparkline>
                    </v-col>
                </v-row>
                <v-divider/>
                <v-row class="third-row">
                    <v-col :key="item" cols="6" v-for="item in second_row">
                        <v-subheader>{{item}}</v-subheader>
                        <v-row class="third-inner-row">
                            <v-col class="sale-amount" cols="5" v-if="item === '今日交易笔数(笔)'">
                                {{todayOrderCount}}
                            </v-col>
                            <v-col class="sale-amount" cols="5" v-else>
                                {{todayOrderBox}}
                            </v-col>
                            <v-col cols="7">
                                <v-sparkline
                                        :radient="['#00c6ff', '#F0F', '#FF0']"
                                        :value="value"
                                        auto-draw
                                        fill
                                        gradient-direction="top"
                                        line-width="3"
                                        padding="0"
                                        smooth
                                        stroke-linecap="round"
                                        type="trend"
                                ></v-sparkline>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <div class="divider"/>
                <v-row>
                    <v-col :align="index === 1 ? 'right' : ''" :cols="index === 0 ? 9 : 2" :key="index"
                           :style="index === 1 ? {fontSize: '0.875rem',color: 'grey',padding: '0'} : {}" v-for="(item,index) in forth_row">
                        <span>{{item}}</span>
                    </v-col>
                    <v-col cols="1">
                        <v-icon>mdi-chevron-right</v-icon>
                    </v-col>
                </v-row>
                <v-divider/>
                <v-row class="fifth-row">
                    <v-col :key="item" cols="6" v-for="item in fifth_row">
                        <v-subheader>{{item}}</v-subheader>
                        <v-list-item-title v-if="item === '今日在售商品(种)'">{{countOnSale}}</v-list-item-title>
                        <v-list-item-title v-else>{{orderGoodsCount}}</v-list-item-title>
                    </v-col>
                </v-row>
                <div class="divider"/>
                <v-row>
                    <v-col :align="index === 1 ? 'right' : ''" :cols="index === 0 ? 9 : 2" :key="index"
                           :style="index === 1 ? {fontSize: '0.875rem',color: 'grey',padding: '0'} : {}" v-for="(item,index) in sixth_row">
                        <span>{{item}}</span>
                    </v-col>
                    <v-col cols="1">
                        <v-icon>mdi-chevron-right</v-icon>
                    </v-col>
                </v-row>
                <v-divider/>
                <v-row>
                    <v-subheader>总客户数(人)</v-subheader>
                </v-row>
                <v-row>
                    <v-list-item-title>{{allCustomers}}</v-list-item-title>
                </v-row>
                <v-divider/>
                <v-row class="third-row">
                    <v-col :key="item" cols="6" v-for="item in seventh_row">
                        <v-subheader>{{item}}</v-subheader>
                        <v-list-item-title v-if="item === '今日下单客户数(人)'">{{todayCustomers}}</v-list-item-title>
                        <v-list-item-title v-else>{{oldRate}}%</v-list-item-title>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import Vue from 'vue'
    import {Toast} from 'mint-ui'

    Vue.use(Toast)
    export default {
        name: "BusinessData",
        data() {
            return {
                first_row: [
                    '订单统计', '更多'
                ],
                second_row: [
                    '今日交易笔数(笔)', '今日交易箱数(箱)'
                ],
                forth_row: [
                    '商品统计', '更多'
                ],
                fifth_row: [
                    '今日在售商品(种)', '今日下单商品(种)'
                ],
                sixth_row: [
                    '客户统计', '更多'
                ],
                seventh_row: [
                    '今日下单客户数(人)', '复购客户占比'
                ],
                gradient: ['#f72047', '#ffd200', '#1feaea'],
                value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
                todayAmount: null,
                todayOrderCount: null,
                todayOrderBox: null,
                orderGoodsCount: null,
                countOnSale: null,
                allCustomers: null,
                todayCustomers: null,
                oldCustomers: null,
                oldRate: null
            }
        },
        created() {
            this.getData()
        },
        methods: {
            backRoute() {
                this.$router.back()
            },
            async getData() {
                const {data: res} = await this.$http.post('/business/data', {
                    shopId: window
                        .sessionStorage.getItem('shopId')
                })
                if (res.code !== 200) {
                    Toast({
                        message: '获取失败',
                        position: 'bottom'
                    })
                } else {
                    if (res.data.todayAmount === null) {
                        this.todayAmount = 0
                    } else {
                        this.todayAmount = res.data.todayAmount
                    }
                    if (res.data.todayOrderBox === null) {
                        this.todayOrderBox = 0
                    } else {
                        this.todayOrderBox = res.data.todayOrderBox
                    }
                    this.todayOrderCount = res.data.todayOrderCount
                    this.orderGoodsCount = res.data.orderGoodsCount
                    this.countOnSale = res.data.countOnSale
                    this.allCustomers = res.data.allCustomers
                    this.todayCustomers = res.data.todayCustomers
                    this.oldCustomers = res.data.oldCustomers
                    this.oldRate = (this.allCustomers - this.oldCustomers) / this.allCustomers * 100
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .divider {
        height: 1rem;
        background-color: #F5F5F5;
    }

    .col {
        padding: 0 12px;
    }

    .row {
        margin: 0;
        height: 3rem;
        padding: 0 0.5rem;
        align-items: center;
    }

    .sale-amount {
        font-weight: bold;
        padding: 0 1rem;
        font-size: 1.2rem;
    }

    .col-6 {
        padding: 0;
    }

    .third-row, .fifth-row {
        height: 6rem;
    }

    .v-list-item__title {
        padding: 0 1rem;
        font-size: 1.2rem;
        font-weight: bold;
    }

    .third-inner-row {
        padding: 0;
    }
</style>
