<template>
    <v-bottom-navigation color="primary" grow shift v-model="nav_value">
        <v-btn :key="index" v-for="(item,index) in navItem">
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
                nav_value: null,
                navItem: [
                    {'name': '首页', 'icon': 'mdi-home-minus'},
                    {'name': '消息', 'icon': 'mdi-message-processing'},
                    {'name': '设置', 'icon': 'mdi-hexagon-slice-6'}
                ]
            }
        },
        watch: {
            nav_value: {
                deep: true,
                handler(val) {
                    this.nav_value = val
                    this.$emit('changeRoute', val)
                }
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
