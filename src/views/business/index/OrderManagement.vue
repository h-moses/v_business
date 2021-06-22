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
                <v-tabs grow v-model="tab">
                    <v-tabs-slider color="primary"></v-tabs-slider>
                    <v-tab :key="item" v-for="item in tabTitle">{{item}}</v-tab>
                </v-tabs>
                <v-tabs-items v-model="tab">
                    <v-tab-item :key="item" v-for="item in tabTitle">
                        <order-list-item/>
                    </v-tab-item>
                </v-tabs-items>
            </v-container>
        </v-main>
    </div>
</template>

<script>
    import OrderListItem from "../../../components/OrderListItem/OrderListItem";

    export default {
        name: "OrderManagement",
        components: {OrderListItem},
        data() {
            return {
                tab: null,
                tabTitle: [
                    '全部', '待付款', '待提货', '已完成'
                ]
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
