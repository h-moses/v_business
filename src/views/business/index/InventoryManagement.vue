<template>
    <div id="inventory-management">
        <v-app-bar app color="white" flat>
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
                            <!-- 显示商品总数、负库存数和库存预警数-->
                            <v-col :key="index" v-for="(item,index) in card_title">
                                <v-card-subtitle>{{item}}</v-card-subtitle>
                                <v-card-text :style="index === 0 ? {} : index === 1 ? {color: 'red'} : {color: 'orange'}">
                                    <span @click="getStoreList(null)" v-if="index === 0">{{goodsCount}}</span>
                                    <span @click="getStoreList(0)" v-else-if="index === 1">{{zeroStore}}</span>
                                    <span @click="getStoreList(20)" v-else-if="index === 2">{{warningStore}}</span>
                                </v-card-text>
                            </v-col>
                        </v-row>
                    </template>
                </v-card>
                <v-subheader>库存商品</v-subheader>
                <v-list two-line>
                    <v-list-item :key="item.goodsId" v-for="item in storeList">
                        <v-list-item-avatar>
                            <v-img :src="item.goodsAvatar"/>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{item.goodsName}}
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                <v-row>
                                    <v-col>
                                        <span>库存：{{item.storeQuantity}}</span>
                                    </v-col>
                                </v-row>
                            </v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <!-- 操作菜单-->
                            <v-menu offset-y top transition="scale-transition">
                                <!-- 菜单激活器-->
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn icon v-bind="attrs" v-on="on">
                                        <v-icon>mdi-dots-horizontal</v-icon>
                                    </v-btn>
                                </template>
                                <v-row align="center" class="op-row" justify="center">
                                    <!-- 编辑对话框-->
                                    <v-dialog max-width="500" persistent transition="dialog-bottom-transition" v-model="edit_dialog">
                                        <!-- 对话框激活器-->
                                        <template v-slot:activator="{on,attrs}">
                                            <v-btn text v-bind="attrs" v-on="on">编辑</v-btn>
                                        </template>
                                        <v-card>
                                            <v-card-title>
                                                <span class="text-h6">编辑库存</span>
                                            </v-card-title>
                                            <v-card-text>
                                                <v-container>
                                                    <v-row>
                                                        <v-col cols="12" sm="12">
                                                            <v-text-field :rules="[editRules.required]" label="商品名称"
                                                                          v-model="item.goodsName"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="12">
                                                            <v-text-field :rules="[editRules.required]" label="库存数量"
                                                                          v-model="item.storeQuantity"></v-text-field>
                                                        </v-col>
                                                    </v-row>
                                                </v-container>
                                                <v-card-actions>
                                                    <v-spacer/>
                                                    <v-btn @click="edit_dialog = false" text>取消</v-btn>
                                                    <v-btn @click="editStore(item.goodsId,item.goodsName,item.storeQuantity)" text>确认</v-btn>
                                                </v-card-actions>
                                            </v-card-text>
                                        </v-card>
                                    </v-dialog>
                                </v-row>
                            </v-menu>
                        </v-list-item-action>
                    </v-list-item>
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
        name: "InventoryManagement",
        data() {
            return {
                card_title: [
                    '商品总数', '负库存数', '库存预警'
                ],
                edit_dialog: false,
                editRules: {
                    required: value => !!value || '不能为空'
                },
                goodsCount: null,
                warningStore: null,
                zeroStore: null,
                storeList: []
            }
        },
        created() {
            this.getCount()
            this.getStoreList(null)
        },
        methods: {
            backRoute() {
                this.$router.back()
            },
            // 编辑库存，修改库存数量
            async editStore(id, name, quantity) {
                const {data: res} = await this.$http.post('/store/update', {goodsId: id, goodsName: name, storeQuantity: quantity})
                if (res.code !== 200) {
                    Toast({
                        message: '修改失败',
                        position: 'bottom'
                    })
                } else {
                    Toast({
                        message: '修改成功',
                        position: 'bottom'
                    })
                    // 关闭对话框
                    this.edit_dialog = false
                    // 重新获取数据
                    await this.getCount()
                    await this.getStoreList()
                }
            },
            // 获取库存数量
            async getCount() {
                const {data: res} = await this.$http.post('/store/count', {shopId: window.sessionStorage.getItem("shopId")})
                if (res.code !== 200) {
                    Toast({
                        message: '获取失败',
                        position: 'bottom'
                    })
                } else {
                    this.goodsCount = res.data.goodsCount
                    this.warningStore = res.data.warningStore
                    this.zeroStore = res.data.zeroStore
                }
            },
            // 获取库存列表
            async getStoreList(condition) {
                const {data: res} = await this.$http.post('/store/list', {shopId: window.sessionStorage.getItem("shopId"), condition: condition})
                if (res.code !== 200) {
                    Toast({
                        message: '库存列表获取失败',
                        position: 'bottom'
                    })
                } else {
                    this.storeList = res.data.list
                }
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

    .v-card__subtitle, .v-card__text {
        text-align: center;
    }

    .v-list-item__content {
        padding: 12px 0 0;
    }

    .dialog-card {
        text-align: start;
    }

</style>
