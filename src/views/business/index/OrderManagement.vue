<template>
    <div id="order-management">
        <v-app-bar app color="white" flat>
            <v-app-bar-nav-icon @click="backRoute">
                <template #default>
                    <v-icon>mdi-arrow-left</v-icon>
                </template>
            </v-app-bar-nav-icon>
            <v-app-bar-title>订单管理</v-app-bar-title>
        </v-app-bar>
        <v-main>
            <v-container fluid style="padding: 0">
                <!-- 根据订单状态分为四个选项卡-->
                <v-tabs grow v-model="tab">
                    <v-tabs-slider color="primary"></v-tabs-slider>
                    <v-tab :key="item" v-for="item in tabTitle">{{item}}</v-tab>
                </v-tabs>
                <v-tabs-items v-model="tab">
                    <v-tab-item :key="item" v-for="item in tabTitle">
                        <order-list-item :order-list="orderList"/>
                    </v-tab-item>
                </v-tabs-items>
            </v-container>
        </v-main>
    </div>
</template>

<script>
    import Vue from 'vue'
    import OrderListItem from "../../../components/OrderListItem/OrderListItem";
    import {Toast} from 'mint-ui'

    Vue.use(Toast)
    export default {
        name: "OrderManagement",
        components: {OrderListItem},
        data() {
            return {
                tab: null,
                tabTitle: [
                    '全部', '待付款', '待提货', '已完成'
                ],
                orderList: null
            }
        },
        created() {
            this.getOrder()
        },
        watch: {
            tab: {
                deep: true,
                handler(val) {
                    switch (val) {
                        case 0:
                            this.getOrder()
                            break
                        case 1:
                            this.getOrder(0)
                            break
                        case 2:
                            this.getOrder(1)
                            break
                        case 3:
                            this.getOrder(2)
                            break
                    }
                }
            }
        },
        methods: {
            backRoute() {
                this.$router.back()
            },
            // 获取订单信息
            async getOrder(goodsState) {
                const {data: res} = await this.$http.post('/order/query', {shopId: window.sessionStorage.getItem('shopId'), orderState: goodsState})
                if (res.code !== 200) {
                    Toast({
                        message: '获取失败',
                        position: 'bottom'
                    })
                } else {
                    this.orderList = res.data.order
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    #order-management {
        height: 100%;
        background-color: #F5F5F5;
    }

    .row {
        margin: 0;
    }

    .col {
        padding-left: 0;
    }

    /deep/ .divider {
        height: 1rem;
        background-color: #F5F5F5;
    }

    /deep/ .v-card__subtitle {
        padding-bottom: 0;
    }

    /deep/ .v-card__text {
        padding-bottom: 0;
    }

    /deep/ .v-list-item {
        padding: 0;
    }

    /deep/ .v-list-item__subtitle {
        padding: 0.5rem 0;
    }

    /deep/ .text-body-1 {
        color: #1966FF;
    }
</style>
