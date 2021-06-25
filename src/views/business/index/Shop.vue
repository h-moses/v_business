<template>
    <div id="shop">
        <v-app-bar app color="white" flat>
            <v-app-bar-nav-icon @click="backRoute">
                <template #default>
                    <v-icon>mdi-arrow-left</v-icon>
                </template>
            </v-app-bar-nav-icon>
            <v-app-bar-title>店铺管理</v-app-bar-title>
        </v-app-bar>
        <v-main>
            <div class="no-shop" v-if="hasShop === false">
                <div class="shop-info">尚未存在店铺信息</div>
                <div class="btn-container">
                    <v-dialog max-width="500" persistent transition="dialog-bottom-transition" v-model="addDialog">
                        <template v-slot:activator="{on, attrs}">
                            <v-btn color="primary" outlined rounded v-bind="attrs" v-on="on">
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
                                            <v-text-field :rules="[addRules.required]" clearable label="店铺名称" prepend-inner-icon="mdi-store"
                                                          v-model="shopForm.shopName"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="12">
                                            <v-text-field :rules="[addRules.required]" clearable label="主营业务"
                                                          prepend-inner-icon="mdi-briefcase-outline"
                                                          v-model="shopForm.majorBusiness"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="12">
                                            <v-menu
                                                    :close-on-content-click="false"
                                                    :return-value.sync="shopForm.registerTime"
                                                    min-width="auto"
                                                    offset-y
                                                    ref="menu"
                                                    transition="scale-transition"
                                                    v-model="menu"
                                            >
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-text-field
                                                            label="注册时间"
                                                            prepend-inner-icon="mdi-calendar"
                                                            readonly
                                                            v-bind="attrs"
                                                            v-model="shopForm.registerTime"
                                                            v-on="on"
                                                    ></v-text-field>
                                                </template>
                                                <v-date-picker
                                                        no-title
                                                        scrollable
                                                        v-model="shopForm.registerTime"
                                                >
                                                    <v-spacer></v-spacer>
                                                    <v-btn
                                                            @click="menu = false"
                                                            color="primary"
                                                            text
                                                    >
                                                        Cancel
                                                    </v-btn>
                                                    <v-btn
                                                            @click="$refs.menu.save(shopForm.registerTime)"
                                                            color="primary"
                                                            text
                                                    >
                                                        OK
                                                    </v-btn>
                                                </v-date-picker>
                                            </v-menu>
                                        </v-col>
                                        <v-col cols="12" sm="12">
                                            <v-text-field :rules="[addRules.required]" clearable label="法定代表人" prepend-inner-icon="mdi-account-box"
                                                          v-model="shopForm.legalPerson"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn @click="addDialog = false" color="blue darken-1" text>
                                    取消
                                </v-btn>
                                <v-btn @click="addShop" color="blue darken-1" text>
                                    保存
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </div>
            </div>
            <v-container fluid style="padding: 0" v-else>
                <v-list tile>
                    <v-card tile>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>店铺ID</v-list-item-title>
                                <v-list-item-subtitle>{{shopForm.shopId}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                    <v-card tile>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>店铺名称</v-list-item-title>
                                <v-list-item-subtitle>{{shopForm.shopName}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                    <v-card tile>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>主营业务</v-list-item-title>
                                <v-list-item-subtitle>{{shopForm.majorBusiness}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                    <v-card tile>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>注册时间</v-list-item-title>
                                <v-list-item-subtitle>{{shopForm.registerTime}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                    <v-card tile>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>法定代表人</v-list-item-title>
                                <v-list-item-subtitle>{{shopForm.legalPerson}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </v-list>
            </v-container>
        </v-main>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {Toast} from 'mint-ui'

    Vue.use(Toast)
    export default {
        name: "Shop",
        data() {
            return {
                hasShop: true,
                addDialog: false,
                addForm: {},
                addRules: {
                    required: value => !!value || '不能为空'
                },
                menu: false,
                shopForm: {
                    shopId: null,
                    shopName: null,
                    majorBusiness: null,
                    legalPerson: null,
                    registerTime: new Date().toISOString().substr(0, 10),
                },
                infoName: {
                    shopId: '店铺ID',
                    shopName: '店铺名称',
                    majorBusiness: '主营业务',
                    legalPerson: '法定代表人',
                    registerTime: '注册时间'
                }
            }
        },
        created() {
            this.getShopInfo()
        },
        methods: {
            backRoute() {
                this.$router.back()
            },
            async getShopInfo() {
                const {data: res} = await this.$http.post('/shop/info', {mcId: window.sessionStorage.getItem('mcId')})
                if (res.code === 200) {
                    this.shopForm.shopId = res.data.shopId
                    this.shopForm.shopName = res.data.shopName
                    this.shopForm.majorBusiness = res.data.majorBusiness
                    this.shopForm.registerTime = res.data.registerTime
                    this.shopForm.legalPerson = res.data.legalPerson
                    this.hasShop = true
                }
            },
            async addShop() {
                const {data: res} = await this.$http.post('/shop/add', {
                    mcId: window.sessionStorage.getItem('mcId'),
                    shopName: this.shopForm.shopName,
                    majorBusiness: this.shopForm.majorBusiness,
                    registerTime: this.shopForm.registerTime,
                    legalPerson: this.shopForm.legalPerson
                })
                if (res.code === 200) {
                    Toast({
                        message: '添加成功',
                        position: 'bottom'
                    })
                    this.hasShop = true
                    await this.getShopInfo()
                    window.sessionStorage.setItem("shopId", this.shopForm.shopId)
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    #shop, .v-main, .v-main__wrap {
        height: 100%;
    }

    .no-shop {
        align-items: center;
        justify-content: center;
    }

    .shop-info, .btn-container {
        text-align: center;
    }

    .shop-info {
        font-size: 1.5rem;
        color: grey;
        margin-bottom: 3rem;
    }

    .v-list-item__subtitle {
        margin-top: 0.5rem;
    }
</style>
