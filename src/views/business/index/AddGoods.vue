<template>
    <v-app>
        <v-app-bar app flat color="white" hide-on-scroll>
            <v-app-bar-nav-icon @click="backRoute">
                <template #default>
                    <v-icon>mdi-arrow-left</v-icon>
                </template>
            </v-app-bar-nav-icon>
            <v-app-bar-title>添加商品</v-app-bar-title>
        </v-app-bar>
        <v-main>
            <v-container fluid style="padding: 12px 0;">
                <v-form>
                    <v-list>
                        <v-list-item>
                            <template #default>
                                <v-input>
                                    <v-text-field prefix="商品名称" placeholder="输入商品名称" dense clearable/>
                                </v-input>
                            </template>
                        </v-list-item>
                        <v-list-item>
                            <template #default>
                                <v-file-input
                                        chips
                                        multiple
                                        shaped
                                        prepend-icon="mdi-upload"
                                        type="image/*"
                                        label="上传图片"
                                ></v-file-input>
                            </template>
                        </v-list-item>
                    </v-list>
                    <div class="divider"/>
                    <v-list style="padding: 1rem 0;">
                        <v-list-item>
                            <template #default>
                                <v-input>
                                    <v-text-field prefix="商品大类" dense clearable/>
                                </v-input>
                            </template>
                        </v-list-item>
                        <v-list-item>
                            <template #default>
                                <v-input>
                                    <v-text-field prefix="商品小类" dense clearable/>
                                </v-input>
                            </template>
                        </v-list-item>
                    </v-list>
                    <div class="divider"/>
                    <v-list>
                        <v-subheader>出售方式</v-subheader>
                        <v-chip-group v-model="saleWay" color="primary">
                            <v-chip filter outlined>按箱计价</v-chip>
                            <v-chip filter outlined>按重量计价</v-chip>
                            <v-chip filter outlined>散装</v-chip>
                        </v-chip-group>
                    </v-list>
                    <div class="divider"/>
                    <v-list style="padding: 1rem 0;">
                        <v-list-item>
                            <template #default>
                                <v-input>
                                    <v-text-field placeholder="给商品起个好价格" prefix="单价" suffix="元/公斤" dense clearable/>
                                </v-input>
                            </template>
                        </v-list-item>
                        <v-list-item>
                            <template #default>
                                <v-input>
                                    <v-text-field placeholder="请输入公斤数" prefix="规格" suffix="公斤/箱" dense clearable/>
                                </v-input>
                            </template>
                        </v-list-item>
                        <v-list-item>
                            <template #default>
                                <v-input>
                                    <v-text-field placeholder="请输入整箱价格" prefix="一箱价格" suffix="元/箱" dense clearable/>
                                </v-input>
                            </template>
                        </v-list-item>
                        <v-list-item>
                            <template #default>
                                <v-input>
                                    <v-text-field placeholder="请输入次果率" prefix="次果率" suffix="%" dense clearable/>
                                </v-input>
                            </template>
                        </v-list-item>
                        <v-list-item>
                            <template #default>
                                <v-input>
                                    <v-text-field placeholder="请输入产地" prefix="产地" dense clearable/>
                                </v-input>
                            </template>
                        </v-list-item>
                    </v-list>
                </v-form>
            </v-container>
        </v-main>
        <v-footer app color="white" fixed>
            <v-row justify="space-around">
                <v-btn rounded color="primary">上架出售</v-btn>
                <v-btn rounded color="primary" outlined>放入仓库</v-btn>
            </v-row>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        name: "AddGoods",
        data() {
            return {
                saleWay: null
            }
        },
        methods: {
            backRoute() {
                this.$router.back()
            },

        }
    }
</script>

<style lang="less" scoped>

    .container {

        .v-list {
            padding: 0;

            .v-list-item {
                height: 4rem;

                /deep/ input {
                    text-align: right;
                }
            }

        }

        /deep/ .v-messages {
            min-height: 0;
        }

        /deep/ .v-input__slot {
            margin: 0;
        }

        .divider {
            border: 0;
            height: 1rem;
            max-height: 1rem;
            background-color: #F5F5F5;
        }
    }

    .v-chip-group {
        padding: 0 1rem 1rem;
    }

    .v-footer {
        height: 4rem;

        .v-btn {
            width: 10rem;
        }
    }
</style>
