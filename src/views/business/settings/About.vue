<template>
    <v-app>
        <v-app-bar app flat color="white">
            <v-app-bar-nav-icon @click="backRoute">
                <template #default>
                    <v-icon>mdi-arrow-left</v-icon>
                </template>
            </v-app-bar-nav-icon>
            <v-app-bar-title>关于我们</v-app-bar-title>
        </v-app-bar>
        <v-card
                class="mx-0"
                flat
        >
            <v-img
                    class="pro-logo"
                    height="20%"
                    contain
                    src="../../../assets/logo.png"
                    transition="scale-transition"
                    />
            <v-divider class="col-divider"/>
            <v-row
                    align="end"
                    class="mx-auto"
            >
                <v-col class="flex-fill" v-for="item in content" :key="item">
                    <v-list-item
                            color="rgba(0, 0, 0, .4)"
                    >
                        <v-list-item-content>
                            <v-list-item-title class="text-body-1">
                                {{item}}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider/>
                </v-col>
            </v-row>
        </v-card>
    </v-app>
</template>

<script>
    export default {
        name: "About",
        data() {
            return {
                content: [
                    'APP名称：果星Planet',
                    '系统版本：V1.0',
                    '开发人员：hary',
                    '前端框架：Vuetify',
                    '后端框架：SpringBoot'
                ]
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
    .pro-logo {
        margin-top: 3rem;
    }

    .col-divider {
        margin-top: 2rem;
    }

    .mx-auto {
        margin-top: 0.2rem;
    }
</style>
