<template>
    <v-container fluid style="padding: 0">
        <v-tabs v-model="tab">
            <v-tabs-slider color="primary"></v-tabs-slider>
            <v-tab :key="item.name" v-for="item in tabTitle">{{item.name}}</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
            <v-tab-item :key="item.name" v-for="item in tabTitle">
                <list-notice v-if="item.name === '交易信息'"/>
            </v-tab-item>
        </v-tabs-items>
    </v-container>
</template>

<script>
    import ListNotice from "../../components/List/ListNotice";

    export default {
        name: "Notice",
        components: {ListNotice},
        data() {
            return {
                tabTitle: [
                    {name: '交易信息'}
                ],
                tab: null
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
