<template>
    <v-app>
        <v-app-bar app color="white" flat hide-on-scroll>
            <v-app-bar-nav-icon @click="backRoute">
                <template #default>
                    <v-icon>mdi-arrow-left</v-icon>
                </template>
            </v-app-bar-nav-icon>
            <v-app-bar-title>添加商品</v-app-bar-title>
        </v-app-bar>
        <v-main>
            <v-container fluid style="padding: 12px 0;">
                <!-- 添加商品的表单-->
                <v-form>
                    <v-list>
                        <v-list-item>
                            <template #default>
                                <!-- 商品名称输入框-->
                                <v-input>
                                    <v-text-field dense placeholder="输入商品名称" prefix="商品名称" v-model="addForm.goodsName"/>
                                </v-input>
                            </template>
                        </v-list-item>
                    </v-list>
                    <div class="divider"/>
                    <!-- 商品类别输入框-->
                    <v-list style="padding: 1rem 0;">
                        <v-list-item>
                            <template #default>
                                <v-input>
                                    <v-text-field dense prefix="商品大类" v-model="addForm.mainCategory"/>
                                </v-input>
                            </template>
                        </v-list-item>
                        <v-list-item>
                            <template #default>
                                <v-input>
                                    <v-text-field dense prefix="商品小类" v-model="addForm.secondaryCategory"/>
                                </v-input>
                            </template>
                        </v-list-item>
                    </v-list>
                    <div class="divider"/>
                    <v-list>
                        <v-subheader>出售方式</v-subheader>
                        <v-chip-group color="primary" v-model="addForm.sellingWay">
                            <v-chip filter outlined>按箱计价</v-chip>
                            <v-chip filter outlined>按重量计价</v-chip>
                            <v-chip filter outlined>散装</v-chip>
                        </v-chip-group>
                    </v-list>
                    <div class="divider"/>
                    <!-- 商品价格信息输入框-->
                    <v-list style="padding: 1rem 0;">
                        <v-list-item>
                            <template #default>
                                <v-input>
                                    <v-text-field dense placeholder="给商品起个好价格" prefix="单价" suffix="元/公斤" v-model="addForm.unitPrice"/>
                                </v-input>
                            </template>
                        </v-list-item>
                        <v-list-item>
                            <template #default>
                                <v-input>
                                    <v-text-field dense placeholder="请输入公斤数" prefix="规格" suffix="公斤/箱" v-model="addForm.boxSize"/>
                                </v-input>
                            </template>
                        </v-list-item>
                        <v-list-item>
                            <template #default>
                                <v-input>
                                    <v-text-field dense placeholder="请输入整箱价格" prefix="一箱价格" suffix="元/箱" v-model="addForm.boxPrice"/>
                                </v-input>
                            </template>
                        </v-list-item>
                        <v-list-item>
                            <template #default>
                                <v-input>
                                    <v-text-field dense placeholder="请输入次果率" prefix="次果率" suffix="%" v-model="addForm.subordinatedRate"/>
                                </v-input>
                            </template>
                        </v-list-item>
                        <v-list-item>
                            <template #default>
                                <v-input>
                                    <v-text-field dense placeholder="请输入产地" prefix="产地" v-model="addForm.originPlace"/>
                                </v-input>
                            </template>
                        </v-list-item>
                    </v-list>
                </v-form>
            </v-container>
        </v-main>
        <v-footer app color="white" fixed>
            <v-row justify="space-around">
                <v-btn @click="addGoods(0)" color="primary" rounded>上架出售</v-btn>
                <v-btn @click="addGoods(1)" color="primary" outlined rounded>放入仓库</v-btn>
            </v-row>
        </v-footer>
    </v-app>
</template>

<script>

    import Vue from 'vue'
    import {Toast} from 'mint-ui'

    Vue.use(Toast)
    export default {
        name: "AddGoods",
        data() {
            return {
                addForm: {
                    goodsName: null,
                    goodsAvatar: null,
                    mainCategory: null,
                    secondaryCategory: null,
                    sellingWay: null,
                    unitPrice: null,
                    boxSize: null,
                    boxPrice: null,
                    subordinatedRate: null,
                    originPlace: null,
                    shopId: null,
                    goodStuff: null,
                    goodsState: null
                }
            }
        },
        created() {
            // 若是修改已存在商品信息，则现获取商品信息
            if (this.$route.query.goodsId !== undefined) {
                this.getGoodsDetail(this.$route.query.goodsId)
            }
        },
        methods: {
            backRoute() {
                this.$router.back()
            },
            // 添加商品
            async addGoods(onSale) {
                this.addForm.goodsState = onSale
                this.addForm.goodStuff = this.$route.query.good
                this.addForm.shopId = window.sessionStorage.getItem("shopId")
                const {data: res} = await this.$http.post('/goods/add', this.addForm)
                if (res.code !== 200) {
                    Toast({
                        message: '添加失败',
                        position: 'bottom'
                    })
                } else {
                    await this.$router.push('/goods')
                }
            },
            // 获取商品信息
            async getGoodsDetail(id) {
                const {data: res} = await this.$http.post('/goods/detail', {goodsId: id})
                if (res.code !== 200) {
                    Toast({
                        message: '获取失败',
                        position: 'bottom'
                    })
                } else {
                    this.addForm = res.data.goodsDetail
                }
            }

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
