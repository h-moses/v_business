<template>
    <v-container fluid>
        <v-app-bar
                color="white"
                dense
                flat
                app
        >
            <v-app-bar-title>系统设置</v-app-bar-title>
        </v-app-bar>
        <v-divider/>
        <v-list>
            <v-list-item v-for="(item,index) in settingItem" :key="index">
             <v-btn class="list-btn" text @click="pushRoute(item)">
                 <v-list-item-content>
                     <v-list-item-title>{{item}}</v-list-item-title>
                 </v-list-item-content>
                 <v-spacer/>
                 <v-list-item-action>
                     <v-icon>mdi-chevron-right</v-icon>
                 </v-list-item-action>
             </v-btn>
            </v-list-item>
        </v-list>
    </v-container>
</template>

<script>
    export default {
        name: "Settings",
        data() {
            return {
                settingItem: [
                    '修改密码',
                    '关于我们',
                    '退出登录'
                ]
            }
        },
        methods: {
            pushRoute(name) {
                switch (name) {
                    case '修改密码':
                        this.$router.push('/amendPwd')
                        break
                    case '关于我们':
                        this.$router.push('/about')
                        break
                    case '退出登录':
                        this.$router.push('/')
                        break
                }
            }
        }
    }
</script>

<style lang="less" scoped>

    .v-list-item {
        padding: 0;
    }

    .list-btn {
        width: 100%;

        .v-list-item__title {
            text-align: left;
        }
    }
</style>
