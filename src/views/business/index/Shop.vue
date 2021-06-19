<template>
    <div id="shop">
        <v-app-bar app flat color="white">
            <v-app-bar-nav-icon @click="backRoute">
                <template #default>
                    <v-icon>mdi-arrow-left</v-icon>
                </template>
            </v-app-bar-nav-icon>
            <v-app-bar-title>店铺管理</v-app-bar-title>
        </v-app-bar>
        <v-main >
            <div v-if="hasShop === false">
                <div class="shop-info">尚未存在店铺信息</div>
                <div class="btn-container">
                    <v-dialog v-model="addDialog" persistent max-width="500" transition="dialog-bottom-transition">
                        <template v-slot:activator="{on, attrs}">
                            <v-btn color="primary" rounded outlined v-bind="attrs" v-on="on">
                                <v-icon>mdi-plus</v-icon>
                                添加店铺
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="text-h6">添加店铺</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="12">
                                            <v-text-field label="店铺名称" :rules="[addRules.required]" clearable prepend-inner-icon="mdi-store"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="12">
                                            <v-text-field label="主营业务" :rules="[addRules.required]" clearable prepend-inner-icon="mdi-briefcase-outline"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="12">
                                            <v-menu
                                                    ref="menu"
                                                    v-model="menu"
                                                    :close-on-content-click="false"
                                                    :return-value.sync="date"
                                                    transition="scale-transition"
                                                    offset-y
                                                    min-width="auto"
                                            >
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-text-field
                                                            v-model="date"
                                                            label="Picker in menu"
                                                            prepend-inner-icon="mdi-calendar"
                                                            readonly
                                                            v-bind="attrs"
                                                            v-on="on"
                                                    ></v-text-field>
                                                </template>
                                                <v-date-picker
                                                        v-model="date"
                                                        no-title
                                                        scrollable
                                                >
                                                    <v-spacer></v-spacer>
                                                    <v-btn
                                                            text
                                                            color="primary"
                                                            @click="menu = false"
                                                    >
                                                        Cancel
                                                    </v-btn>
                                                    <v-btn
                                                            text
                                                            color="primary"
                                                            @click="$refs.menu.save(date)"
                                                    >
                                                        OK
                                                    </v-btn>
                                                </v-date-picker>
                                            </v-menu>
                                        </v-col>
                                        <v-col cols="12" sm="12">
                                            <v-text-field label="法定代表人" :rules="[addRules.required]" clearable prepend-inner-icon="mdi-account-box"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="addDialog = false">
                                    取消
                                </v-btn>
                                <v-btn color="blue darken-1" text @click="addDialog = false">
                                    保存
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>

                </div>
            </div>
            <v-container fluid v-else>

            </v-container>
        </v-main>
    </div>
</template>

<script>
    export default {
        name: "Shop",
        data() {
            return {
                hasShop: false,
                addDialog: false,
                addForm: {},
                addRules: {
                    required: value => !!value || '不能为空'
                },
                date: new Date().toISOString().substr(0, 10),
                menu: false,
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
    #shop,.v-main,.v-container {
        height: 100%;
    }

    .v-main {
        align-items: center;
        justify-content: center;
    }

    .shop-info,.btn-container {
        text-align: center;
    }

    .shop-info {
        font-size: 1.5rem;
        color: grey;
        margin-bottom: 3rem;
    }
</style>
