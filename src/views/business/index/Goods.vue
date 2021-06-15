<template>
    <v-app>
        <v-app-bar app flat color="white" hide-on-scroll>
            <v-app-bar-nav-icon @click="backRoute">
                <template #default>
                    <v-icon>mdi-arrow-left</v-icon>
                </template>
            </v-app-bar-nav-icon>
            <v-app-bar-title>商品管理</v-app-bar-title>
        </v-app-bar>
        <v-main>
            <v-container fluid>
                <v-text-field placeholder="搜索商品名称" @keyup.enter="handleSearch" dense filled rounded clearable/>
                <v-tabs v-model="tab" grow>
                    <v-tabs-slider color="primary"></v-tabs-slider>
                    <v-tab v-for="item in tabTitle" :key="item.name">{{item.name}}</v-tab>
                </v-tabs>
                <v-tabs-items v-model="tab">
                    <v-tab-item v-for="item in tabTitle" :key="item.name">

                    </v-tab-item>
                </v-tabs-items>
            </v-container>
        </v-main>
        <v-footer app color="white" fixed>
            <v-row justify="space-around">
                <v-btn rounded color="primary">添加商品</v-btn>
                <v-btn rounded color="primary" outlined>添加好货</v-btn>
            </v-row>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        name: "Goods",
        data() {
            return {
                tab: null,
                tabTitle: [
                    {name: '出售中'},
                    {name: '未上架'}
                ]
            }
        },
        methods: {
            backRoute() {
                this.$router.back()
            },
            handleSearch() {
                alert("search")
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
