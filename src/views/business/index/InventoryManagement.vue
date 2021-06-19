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
                                </v-row>
                            </v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-menu top offset-y transition="scale-transition">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn v-bind="attrs" v-on="on" icon>
                                        <v-icon>mdi-dots-horizontal</v-icon>
                                    </v-btn>
                                </template>
                                <v-row class="op-row" align="center" justify="center">
                                    <v-dialog v-model="edit_dialog" persistent max-width="500" transition="dialog-bottom-transition">
                                        <template v-slot:activator="{on,attrs}">
                                            <v-btn v-bind="attrs" v-on="on" text>编辑</v-btn>
                                        </template>
                                        <v-card>
                                            <v-card-title>
                                                <span class="text-h6">编辑库存</span>
                                            </v-card-title>
                                            <v-card-text>
                                                <v-container>
                                                    <v-row>
                                                        <v-col cols="12" sm="12">
                                                            <v-text-field label="商品名称" :rules="[editRules.required]"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="12">
                                                            <v-text-field label="库存数量" :rules="[editRules.required]"></v-text-field>
                                                        </v-col>
                                                    </v-row>
                                                </v-container>
                                                <v-card-actions>
                                                    <v-spacer/>
                                                    <v-btn text @click="edit_dialog = false">取消</v-btn>
                                                    <v-btn text @click="editStore">确认</v-btn>
                                                </v-card-actions>
                                            </v-card-text>
                                        </v-card>
                                    </v-dialog>
                                    <v-divider vertical/>
                                    <v-dialog v-model="delete_dialog" persistent max-width="290" transition="dialog-bottom-transition">
                                        <template v-slot:activator="{on,attrs}">
                                            <v-btn v-bind="attrs" v-on="on" text>删除</v-btn>
                                        </template>
                                        <v-card>
                                            <v-card-title>删除库存</v-card-title>
                                            <v-card-text class="dialog-card">确认删除该库存?</v-card-text>
                                            <v-card-actions>
                                                <v-spacer/>
                                                <v-btn text @click="delete_dialog = false">取消</v-btn>
                                                <v-btn text @click="deleteStore">确认</v-btn>
                                            </v-card-actions>
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
    export default {
        name: "InventoryManagement",
        data() {
            return {
                card_title: [
                    '商品总数','负库存数','库存预警'
                ],
                delete_dialog: false,
                edit_dialog: false,
                editRules: {
                    required: value => !!value || '不能为空'
                }
            }
        },
        methods: {
            backRoute() {
                this.$router.back()
            },
            deleteStore() {

            },
            editStore() {

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

    .dialog-card {
        text-align: start;
    }

</style>
