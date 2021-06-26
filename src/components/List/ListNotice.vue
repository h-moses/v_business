<template>
    <v-list two-line>
        <v-list-item :key="index" v-for="(item,index) in data">
            <template #default>
                <v-card outlined>
                    <!-- 交易信息标题-->
                    <v-card-title>{{item.title}}</v-card-title>
                    <v-card-subtitle>
                        <!-- 订单图片-->
                        <v-img class="card-img" src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"/>
                        <!-- 订单编号-->
                        <div class="card-subtitle">{{item.subtitle}}</div>
                    </v-card-subtitle>
                </v-card>
            </template>
        </v-list-item>
    </v-list>
</template>

<script>
    export default {
        name: "ListNotice",
        data() {
            return {
                data: [
                    {
                        title: '买家已付款',
                        subtitle: '订单号：1',
                        img: 'https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png',
                        action_text: '12:45'
                    },
                    {
                        title: '买家已提货',
                        subtitle: '订单号：65',
                        img: 'https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png',
                        action_text: '12:50'
                    },
                    {
                        title: '成功退款',
                        subtitle: '订单号：104',
                        img: 'https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png',
                        action_text: '12:57'
                    }
                ]
            }
        }
    }
</script>

<style lang="less" scoped>

    .v-list {
        background-color: #F5F5F5;
        height: 100%;
    }

    .v-list-item {
        padding: 0;
    }

    .v-list-item:not(:first-child) {
        margin-top: 1rem;
    }

    .v-card {
        width: 100%;

        .v-card__subtitle {
            display: flex;
            align-items: flex-start;
            height: 4rem;
            width: 100%;

            .card-img {
                width: 3rem;
                height: 3rem;
            }

            .v-responsive {
                flex: none;
            }

            .card-subtitle {
                margin-left: 1rem;
                height: 3rem;
                font-size: 0.75rem;
            }
        }
    }

</style>
