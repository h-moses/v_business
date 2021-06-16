<template>
    <v-app>
        <v-app-bar app flat color="white" hide-on-scroll>
            <v-app-bar-nav-icon @click="backRoute">
                <template #default>
                    <v-icon>mdi-arrow-left</v-icon>
                </template>
            </v-app-bar-nav-icon>
            <v-app-bar-title>店铺营收</v-app-bar-title>
        </v-app-bar>
        <v-main>
            <v-container fluid>

            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    export default {
        name: "StoreSales",
        data() {
            return {

            }
        },
        methods: {
            backRoute() {
                this.$router.back()
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
