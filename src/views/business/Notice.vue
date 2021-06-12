<template>
    <v-container  fluid style="padding: 0">
        <v-tabs v-model="tab">
            <v-tabs-slider color="primary"></v-tabs-slider>
            <v-tab v-for="item in tabTitle" :key="item.name">{{item.name}}</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
            <v-tab-item v-for="item in tabTitle" :key="item.name">
                <list-notice v-if="item.name === '交易信息'"/>
                <span v-else>asdasd</span>
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
                    {name: '交易信息'},
                    {name: '系统信息'}
                ],
                tab: null
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
