<template>
    <div id="inventory-management">
        <v-app-bar app flat color="white">
            <v-app-bar-nav-icon @click="backRoute">
                <template #default>
                    <v-icon>mdi-arrow-left</v-icon>
                </template>
            </v-app-bar-nav-icon>
            <v-app-bar-title>库存管理</v-app-bar-title>
        </v-app-bar>
        <v-main>
            <v-container fluid style="padding: 0">
                <v-card tile>
                    <template #default>
                        <v-row>
                            <v-col v-for="(item,index) in card_title" :key="index">
                                <v-card-subtitle>{{item}}</v-card-subtitle>
                                <v-card-text :style="index === 0 ? {} : index === 1 ? {color: 'red'} : {color: 'orange'}">123</v-card-text>
                            </v-col>
                        </v-row>
                    </template>
                </v-card>
                <v-subheader>库存商品</v-subheader>
                <v-list two-line>
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-img src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"/>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>
                                烟台红富士苹果
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                <v-row>
                                    <v-col>
                                        <span>库存：15件</span>
                                    </v-col>
                                    <v-col>
                                        <span>单价：15.00/公斤</span>
                                    </v-col>
                                </v-row>
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-container>
        </v-main>
    </div>
</template>

<script>
    export default {
        name: "InventoryManagement",
        data() {
            return {
                card_title: [
                    '商品总数','负库存数','库存预警'
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

    #inventory-management {
        height: 100%;
        background-color: #F5F5F5;
    }

    .row {
        margin: 0;
    }
    .col {
        padding-left: 0;
    }

    .v-card__subtitle {
        font-weight: bold;
    }

    .v-card__subtitle,.v-card__text {
        text-align: center;
    }

    .v-list-item__content {
        padding: 12px 0 0;
    }

</style>
