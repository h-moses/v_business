<template>
    <v-app>
        <v-app-bar app color="white" flat hide-on-scroll>
            <v-app-bar-nav-icon @click="backRoute">
                <template #default>
                    <v-icon>mdi-arrow-left</v-icon>
                </template>
            </v-app-bar-nav-icon>
            <v-app-bar-title>商品管理</v-app-bar-title>
        </v-app-bar>
        <v-main>
            <v-container fluid>
                <v-text-field v-model="searchCondition" @keyup.enter="handleSearch" clearable dense filled placeholder="搜索商品名称" rounded/>
                <v-tabs grow v-model="tab">
                    <v-tabs-slider color="primary"></v-tabs-slider>
                    <v-tab :key="item.name" v-for="item in tabTitle">{{item.name}}</v-tab>
                </v-tabs>
                <v-tabs-items v-model="tab">
                    <v-tab-item :key="item.name" v-for="(item,index) in tabTitle">
                        <goods-list :data="goodsList" v-on:getdata="getGoodsListByState(index)"/>
                    </v-tab-item>
                </v-tabs-items>
            </v-container>
        </v-main>
        <v-footer app color="white" fixed>
            <v-row justify="space-around">
                <v-btn color="primary" rounded @click="addGoods(false)">添加商品</v-btn>
                <v-btn color="primary" outlined rounded @click="addGoods(true)">添加好货</v-btn>
            </v-row>
        </v-footer>
    </v-app>
</template>

<script>

    import Vue from 'vue'
    import GoodsList from "../../../components/GoodsList/GoodsList"
    import {Toast} from "mint-ui"

    Vue.use(Toast)
    export default {
        name: "Goods",
        components: {GoodsList},
        data() {
            return {
                tab: null,
                tabTitle: [
                    {name: '出售中'},
                    {name: '未上架'}
                ],
                goodsList: [],
                searchCondition: null
            }
        },
        created() {
            this.getGoodsListByState(0)
        },
        methods: {
            backRoute() {
                this.$router.back()
            },
            handleSearch() {
                this.getGoodsListByName(this.searchCondition)
            },
            addGoods(isGood) {
                this.$router.push({path: '/goods/add',query: {good: isGood}})
            },
            async getGoodsListByName(goodsName) {
                console.log(goodsName)
                const {data:res} = await this.$http.post('/goods/by/name',{shopId: window.sessionStorage.getItem('shopId'),goodsName: goodsName})
                if (res.code !== 200) {
                    Toast({
                        message: '获取失败',
                        position: 'bottom'
                    })
                } else {
                    this.goodsList = res.data.goods
                }
            },
            async getGoodsListByState(goodsState) {
                const {data:res} = await this.$http.post('/goods/by/state',{shopId: window.sessionStorage.getItem('shopId'),goodsState: goodsState})
                if (res.code !== 200) {
                    Toast({
                        message: '获取失败',
                        position: 'bottom'
                    })
                } else {
                    this.goodsList = res.data.goods
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .v-footer {
        height: 4rem;

        .v-btn {
            width: 10rem;
        }
    }
</style>
