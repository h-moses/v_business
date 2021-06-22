<template>
    <div id="order-list-item">
        <div class="divider"/>
        <v-list>
            <v-card tile v-for="item in data" :key="item.orderId">
                <v-card-title>
                    <span v-if="item.orderState === 0" class="text-body-1">待买家付款</span>
                    <span v-else-if="item.orderState === 1" class="text-body-1">待买家提货</span>
                    <span v-else class="text-body-1">已完成</span>
                </v-card-title>
                <v-card-subtitle class="text-caption">订单编号</v-card-subtitle>
                <v-card-text>
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-img :src="item.notes.goodsAvatar"/>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="text-subtitle-2">{{item.notes.goodsName}}</v-list-item-title>
                            <v-list-item-subtitle>
                                <v-row>
                                    <v-col cols="6">数量：{{item.notes.goodsQuantity}}箱</v-col>
                                    <v-col cols="6">规格：{{item.notes.unitPrice}}元/公斤</v-col>
                                </v-row>
                            </v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-list-item-action-text class="text-body-2">￥{{item.notes.goodsAmount}}</v-list-item-action-text>
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
        methods: {

        }
    }
</script>

<style lang="less" scoped>

</style>
