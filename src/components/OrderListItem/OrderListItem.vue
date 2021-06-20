<template>
    <div id="order-list-item">
        <div class="divider"/>
        <v-card tile>
            <v-card-title>
                <span class="text-body-1">待买家提货</span>
            </v-card-title>
            <v-card-subtitle class="text-caption">订单编号</v-card-subtitle>
            <v-card-text>
                <v-list-item>
                    <v-list-item-avatar>
                        <v-img src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"/>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="text-subtitle-2">盐田红富士苹果</v-list-item-title>
                        <v-list-item-subtitle>
                            <v-row>
                                <v-col cols="6">数量</v-col>
                                <v-col cols="6">规格</v-col>
                            </v-row>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                        <v-list-item-action-text class="text-body-2">￥320.00</v-list-item-action-text>
                    </v-list-item-action>
                </v-list-item>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "OrderListItem"
    }
</script>

<style lang="less" scoped>

</style>
