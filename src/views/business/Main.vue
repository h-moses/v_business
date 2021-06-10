<template>
    <v-container fluid>
        <v-row class="first-row" align="center">
            <v-avatar size="36">
                <img src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" alt="avatar"/>
            </v-avatar>
            <span>Van_Universe</span>
        </v-row>
        <v-card color="primary" height="170" dark>
            <v-col>
                <div>今日交易额(元)</div>
                <div style="font-size: 2rem">123123.42</div>
            </v-col>
            <v-row class="card-row">
                <v-col class="card-col">
                    <div>今日访客</div>
                    <div>321</div>
                </v-col>
                <v-col class="card-col">
                    <div>昨日新增客户</div>
                    <div>321</div>
                </v-col>
                <v-col class="card-col">
                    <div>7日订单</div>
                    <div>777</div>
                </v-col>
            </v-row>
        </v-card>
        <v-row class="common-action" align="center"
               justify="space-around">
            <v-btn text>备货清单</v-btn>
            <v-divider vertical/>
            <v-btn text>退款</v-btn>
        </v-row>
        <v-row dense>
            <v-col class="function-col" v-for="(item,index) in functionList" :key="index">
                <v-btn class="manage-btn" text v-for="(children,index) in item" :key="index">
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
                    <v-btn outlined rounded color="primary">去完成</v-btn>
                </v-list-item-action>
            </v-list-item>
        </v-list>
    </v-container>
</template>

<script>
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
