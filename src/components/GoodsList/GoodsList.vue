<template>
    <div id="goods-list-item">
        <v-list three-line>
            <v-list-item v-for="item in goodsList" :key="item.goodsId">
                <template #default>
                    <v-list-item-avatar>
                        <v-img :src="item.goodsAvatar"/>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>
                            <v-chip v-if="item.goodStuff === 1" class="ma-2" color="#FF6519" label text-color="white">好货</v-chip>
                            <span style="white-space: normal;word-wrap: break-word;">
                                {{item.goodsName}}
                            </span>
                        </v-list-item-title>
                        <v-list-item-subtitle>规格：{{item.boxSize}}公斤/箱</v-list-item-subtitle>
                        <v-row class="third-row" justify="space-between">
                            ￥{{item.boxPrice}}
                            <v-menu offset-x top transition="scale-transition"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn icon v-bind="attrs" v-on="on">
                                        <v-icon>mdi-dots-horizontal</v-icon>
                                    </v-btn>
                                </template>
                                <v-row align="center" class="op-row" justify="center">
                                    <v-btn text @click="updateGoods(item.goodsId)">编辑</v-btn>
                                    <v-divider vertical/>
                                    <v-btn v-if="state === 0" text @click="updateState(item.goodsId,1)">下架</v-btn>
                                    <v-btn v-else text @click="updateState(item.goodsId,0)">上架</v-btn>
                                    <v-divider vertical/>
                                    <v-btn text @click="deleteGoods(item.goodsId)">删除</v-btn>
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
            data: {
                type: Array,
                required: true
            },
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
            updateGoods(id) {
                this.$router.push({path: '/goods/add',query: {goodsId: id}})
            },
            async updateState(goodsId,newState) {
                const {data:res} = await this.$http.post('/goods/state',{goodsId:goodsId,goodsState: newState})
                if (res.code !== 200) {
                    Toast({
                        message: '修改失败',
                        position: 'bottom'
                    })
                }
                this.$emit("getdata")
            },
            async deleteGoods(goodsId) {
                const {data:res} = await this.$http.post('/goods/delete',{goodsId:goodsId})
                if (res.code !== 200) {
                    Toast({
                        message: '删除失败',
                        position: 'bottom'
                    })
                }
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
