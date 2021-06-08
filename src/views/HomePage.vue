<template>
    <v-app>
        <v-main>
            <v-container fluid>
                <router-view/>
            </v-container>
        </v-main>
        <bottom-nav/>
    </v-app>
</template>

<script>
    import BottomNav from "../components/NavBar/BottomNav"

    export default {
        name: "HomePage",
        components: {BottomNav},
    }
</script>

<style lang="less" scoped>

</style>
