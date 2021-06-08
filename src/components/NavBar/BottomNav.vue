<template>
    <v-bottom-navigation :value="nav_value" color="primary" shift grow>
        <v-btn v-for="(item,index) in navItem" :key="index">
            <span>{{item.name}}</span>
            <v-icon>{{item.icon}}</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
    export default {
        name: "BottomNav",
        data() {
            return {
                nav_value: 0,
                navItem: [
                    {'name': '首页','icon': 'mdi-home-minus'},
                    {'name': '消息','icon': 'mdi-message-processing'},
                    {'name': '出门单','icon': 'mdi-arrow-right-box'},
                    {'name': '设置','icon': 'mdi-hexagon-slice-6'}
                ]
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
