<template>
    <v-app id="business-data">
        <v-app-bar app flat color="white">
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
                        <v-col v-for="(item,index) in first_row" :key="index" :cols="index === 0 ? 9 : 2" :style="index === 1 ? {fontSize: '0.875rem',color: 'grey',padding: '0'} : {}" :align="index === 1 ? 'right' : ''">
                            <span>{{item}}</span>
                        </v-col>
                        <v-col cols="1">
                            <v-icon >mdi-chevron-right</v-icon>
                        </v-col>
                    </v-row>
                    <v-divider/>
                    <v-row>
                        <v-subheader>今日交易金额(元)</v-subheader>
                    </v-row>
                    <v-row>
                        <v-col class="sale-amount" cols="8">
                            7382.00
                        </v-col>
                        <v-col cols="4">
                            <v-sparkline
                                    :value="value"
                                    smooth
                                    :gradient="gradient"
                                    padding="0"
                                    line-width="3"
                                    stroke-linecap="round"
                                    gradient-direction="top"
                                    type="trend"
                                    fill
                                    auto-draw
                            ></v-sparkline>
                        </v-col>
                    </v-row>
                    <v-divider/>
                    <v-row class="third-row">
                        <v-col cols="6" v-for="item in second_row" :key="item">
                            <v-subheader>{{item}}</v-subheader>
                            <v-row class="third-inner-row">
                                <v-col class="sale-amount" cols="5">
                                    36
                                </v-col>
                                <v-col cols="7">
                                    <v-sparkline
                                            :value="value"
                                            smooth
                                            :radient="['#00c6ff', '#F0F', '#FF0']"
                                            padding="0"
                                            line-width="3"
                                            stroke-linecap="round"
                                            gradient-direction="top"
                                            type="trend"
                                            fill
                                            auto-draw
                                    ></v-sparkline>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <div class="divider"/>
                    <v-row>
                        <v-col v-for="(item,index) in forth_row" :key="index" :cols="index === 0 ? 9 : 2" :style="index === 1 ? {fontSize: '0.875rem',color: 'grey',padding: '0'} : {}" :align="index === 1 ? 'right' : ''">
                            <span>{{item}}</span>
                        </v-col>
                        <v-col cols="1">
                            <v-icon >mdi-chevron-right</v-icon>
                        </v-col>
                    </v-row>
                    <v-divider/>
                    <v-row class="fifth-row">
                        <v-col cols="6" v-for="item in fifth_row" :key="item">
                            <v-subheader>{{item}}</v-subheader>
                            <v-list-item-title>36</v-list-item-title>
                        </v-col>
                    </v-row>
                    <div class="divider"/>
                    <v-row>
                        <v-col v-for="(item,index) in sixth_row" :key="index" :cols="index === 0 ? 9 : 2" :style="index === 1 ? {fontSize: '0.875rem',color: 'grey',padding: '0'} : {}" :align="index === 1 ? 'right' : ''">
                            <span>{{item}}</span>
                        </v-col>
                        <v-col cols="1">
                            <v-icon >mdi-chevron-right</v-icon>
                        </v-col>
                    </v-row>
                    <v-divider/>
                    <v-row>
                        <v-subheader>总客户数(人)</v-subheader>
                    </v-row>
                    <v-row>
                        <v-list-item-title>7382.00</v-list-item-title>
                    </v-row>
                    <v-divider/>
                    <v-row class="third-row">
                        <v-col cols="6" v-for="item in second_row" :key="item">
                            <v-subheader>{{item}}</v-subheader>
                            <v-list-item-title>36</v-list-item-title>
                        </v-col>
                    </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    export default {
        name: "BusinessData",
        data() {
            return {
                first_row: [
                    '订单统计','更多'
                ],
                second_row: [
                    '今日交易笔数(笔)','今日交易箱数(箱)'
                ],
                forth_row: [
                    '商品统计','更多'
                ],
                fifth_row: [
                    '今日在售商品(种)','今日下单商品(种)'
                ],
                sixth_row: [
                    '客户统计','更多'
                ],
                gradient: ['#f72047', '#ffd200', '#1feaea'],
                value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
            }
        },
        methods: {
            backRoute() {
                this.$router.back()
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

    .third-row,.fifth-row {
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
