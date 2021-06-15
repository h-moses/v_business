<template>
    <div id="goods-list-item">
        <v-list three-line>
            <v-list-item>
                <template #default>
                    <v-list-item-avatar>
                        <v-img src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"/>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>
                            <v-chip label color="#FF6519" class="ma-2" text-color="white">好货</v-chip>
                            <span style="white-space: normal;word-wrap: break-word;">
                                烟台红富士苹果烟台红富士苹果烟台红富士苹果
                            </span>
                        </v-list-item-title>
                        <v-list-item-subtitle>规格：22.6公斤/箱</v-list-item-subtitle>
                        <v-row class="third-row" justify="space-between">
                            ￥203.40
                            <v-menu top offset-x transition="scale-transition"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn v-bind="attrs" v-on="on" icon>
                                        <v-icon>mdi-dots-horizontal</v-icon>
                                    </v-btn>
                                </template>
                                <v-row align="center" justify="center">
                                    <v-btn text>编辑</v-btn>
                                    <v-divider vertical/>
                                    <v-btn text>下架</v-btn>
                                    <v-divider vertical/>
                                    <v-btn text>删除</v-btn>
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
    export default {
        name: "GoodsList",
        props: {

        },
        data() {
            return {
                items: [
                    {title: '1'},
                    {title: '2'}
                ]
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

</style>
