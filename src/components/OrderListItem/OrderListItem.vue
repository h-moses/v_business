<template>
    <div id="order-list-item">
        <div class="divider"/>
        <v-list>
            <v-card :key="item.orderId" tile v-for="item in data">
                <v-card-title>
                    <!-- 根据订单状态显示信息-->
                    <span class="text-body-1" v-if="item.orderState === 0">待买家付款</span>
                    <span class="text-body-1" v-else-if="item.orderState === 1">待买家提货</span>
                    <span class="text-body-1" v-else>已完成</span>
                </v-card-title>
                <v-card-subtitle class="text-caption">订单编号：{{item.orderId}}</v-card-subtitle>
                <v-card-text>
                    <v-list-item>
                        <!-- 订单商品图片-->
                        <v-list-item-avatar>
                            <v-img :src="item.notes.goodsAvatar"/>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <!-- 订单商品名称-->
                            <v-list-item-title class="text-subtitle-2">{{item.notes.goodsName}}</v-list-item-title>
                            <v-list-item-subtitle>
                                <v-row>
                                    <!-- 订单商品数量和单位价格-->
                                    <v-col cols="6">数量：{{item.notes.goodsQuantity}}箱</v-col>
                                    <v-col cols="6">规格：{{item.notes.unitPrice}}元/公斤</v-col>
                                </v-row>
                            </v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-list-item-action-text class="text-body-2">￥{{item.orderAmount}}</v-list-item-action-text>
                        </v-list-item-action>
                    </v-list-item>
                </v-card-text>
            </v-card>
        </v-list>
    </div>
</template>

<script>
    export default {
        name: "OrderListItem",
        props: {
            orderList: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                data: this.orderList
            }
        },
        watch: {
            orderList: {
                deep: true,
                handler(val) {
                    this.data = val
                }
            }
        },
        methods: {}
    }
</script>

<style lang="less" scoped>

</style>
