<template>
    <div id="goods-list-item">
        <v-list three-line>
            <!-- v-for循环，列出所有商品项-->
            <v-list-item :key="item.goodsId" v-for="item in goodsList">
                <template #default>
                    <!-- 商品图片-->
                    <v-list-item-avatar>
                        <v-img :src="item.goodsAvatar"/>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>
                            <!-- 好货标签-->
                            <v-chip class="ma-2" color="#FF6519" label text-color="white" v-if="item.goodStuff === 1">好货</v-chip>
                            <!-- 商品名称-->
                            <span style="white-space: normal;word-wrap: break-word;">
                                {{item.goodsName}}
                            </span>
                        </v-list-item-title>
                        <!-- 商品规格-->
                        <v-list-item-subtitle>规格：{{item.boxSize}}公斤/箱</v-list-item-subtitle>
                        <v-row class="third-row" justify="space-between">
                            ￥{{item.boxPrice}}
                            <!--操作菜单栏-->
                            <v-menu offset-x top transition="scale-transition"
                            >
                                <!-- 菜单激活器-->
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn icon v-bind="attrs" v-on="on">
                                        <v-icon>mdi-dots-horizontal</v-icon>
                                    </v-btn>
                                </template>
                                <v-row align="center" class="op-row" justify="center">
                                    <v-btn @click="updateGoods(item.goodsId)" text>编辑</v-btn>
                                    <v-divider vertical/>
                                    <v-btn @click="updateState(item.goodsId,1)" text v-if="state === 0">下架</v-btn>
                                    <v-btn @click="updateState(item.goodsId,0)" text v-else>上架</v-btn>
                                    <v-divider vertical/>
                                    <v-btn @click="deleteGoods(item.goodsId)" text>删除</v-btn>
                                </v-row>
                            </v-menu>
                        </v-row>
                    </v-list-item-content>
                </template>
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {Toast} from 'mint-ui'

    Vue.use(Toast)
    export default {
        name: "GoodsList",
        props: {
            // 商品数据
            data: {
                type: Array,
                required: true
            },
            // 商品状态
            state: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                goodsList: this.data
            }
        },
        watch: {
            data: {
                deep: true,
                handler(val) {
                    this.goodsList = val
                }
            }
        },
        methods: {
            // 跳转到添加商品页面
            updateGoods(id) {
                this.$router.push({path: '/goods/add', query: {goodsId: id}})
            },
            // 更新商品状态
            async updateState(goodsId, newState) {
                const {data: res} = await this.$http.post('/goods/state', {goodsId: goodsId, goodsState: newState})
                if (res.code !== 200) {
                    Toast({
                        message: '修改失败',
                        position: 'bottom'
                    })
                }
                // 重新获取数据
                this.$emit("getdata")
            },
            // 删除商品
            async deleteGoods(goodsId) {
                const {data: res} = await this.$http.post('/goods/delete', {goodsId: goodsId})
                if (res.code !== 200) {
                    Toast({
                        message: '删除失败',
                        position: 'bottom'
                    })
                }
                // 重新获取数据
                this.$emit("getdata")
            }
        }
    }
</script>

<style lang="less" scoped>

    .v-chip.v-size--default {
        margin-left: 0;
        height: 24px;
    }

    .third-row {
        color: #FF6519;
        font-size: 1.2rem;
        margin: 1rem 0 0;
    }

    .v-menu__content {
        width: 200px;
        height: 36px;
    }

    .op-row {
        margin: 0;
    }

</style>
