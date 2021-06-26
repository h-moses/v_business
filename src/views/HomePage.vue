<template>
    <v-app>
        <!-- 二级路由容器-->
        <router-view/>
        <v-footer app>
            <!-- 底部导航栏-->
            <bottom-nav v-on:changeRoute="changeRoute"/>
        </v-footer>
    </v-app>
</template>

<script>
    import BottomNav from "../components/NavBar/BottomNav"

    export default {
        name: "HomePage",
        components: {BottomNav},
        methods: {
            changeRoute(nav_value) {
                switch (nav_value) {
                    case 0:
                        this.$router.push('/home/main')
                        break
                    case 1:
                        this.$router.push('/home/notice')
                        break
                    case 2:
                        this.$router.push('/home/settings')
                        break
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .v-footer {
        padding: 0;
    }
</style>
