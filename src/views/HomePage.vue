<template>
    <v-app>
        <v-main>
            <router-view/>
        </v-main>
        <bottom-nav v-on:changeRoute="changeRoute"/>
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
                        this.$router.push('/home/order')
                        break
                    case 3:
                        this.$router.push('/home/settings')
                }
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
