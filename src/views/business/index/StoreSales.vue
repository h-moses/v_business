<template>
    <v-app>
        <v-app-bar app color="white" flat hide-on-scroll>
            <v-app-bar-nav-icon @click="backRoute">
                <template #default>
                    <v-icon>mdi-arrow-left</v-icon>
                </template>
            </v-app-bar-nav-icon>
            <v-app-bar-title>店铺营收</v-app-bar-title>
        </v-app-bar>
        <v-main>
            <v-container fluid>
                <v-card class="mx-auto text-center" flat>
                    <v-card-title>
                        <v-row>
                            <v-subheader>单位（元）</v-subheader>
                            <v-menu
                                    :close-on-content-click="false"
                                    :return-value.sync="date"
                                    max-width="290px"
                                    min-width="auto"
                                    offset-y
                                    ref="menu"
                                    transition="scale-transition"
                                    v-model="menu"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                            append-icon="$dropdown"
                                            label="月份"
                                            prepend-icon="mdi-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-model="date"
                                            v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                        no-title
                                        scrollable
                                        type="month"
                                        v-model="date"
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
                                            @click="$refs.menu.save(date)"
                                            color="primary"
                                            text
                                    >
                                        OK
                                    </v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-row>
                    </v-card-title>
                    <v-card-text>
                        <v-sheet>
                            <v-sparkline
                                    :value="value"
                                    auto-draw
                                    height="150"
                                    padding="12"
                                    smooth
                                    type="bar"
                            >
                                <template v-slot:label="item">
                                    {{ item.value }}
                                </template>
                            </v-sparkline>
                        </v-sheet>
                    </v-card-text>
                </v-card>
                <v-divider/>
                <v-list>
                    <v-list-item>
                        <template #default>
                            <v-row justify="space-around">
                                <v-col>
                                    <div class="balance-title">账户余额(元)</div>
                                    <span class="balance-data">17224</span>
                                </v-col>
                                <v-col>
                                    <div class="balance-title">冻结金额(元)</div>
                                    <span class="balance-data">1000</span>
                                </v-col>
                            </v-row>
                        </template>
                    </v-list-item>
                </v-list>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>

    export default {
        name: "StoreSales",
        data() {
            return {
                value: [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                ],
                date: new Date().toISOString().substr(0, 7),
                menu: false,
            }
        },
        methods: {
            backRoute() {
                this.$router.push('/home/main')
            }
        }
    }
</script>

<style lang="less" scoped>
    /deep/ svg {
        color: rgb(25, 102, 255);
    }

    .v-input {
        height: 4rem;
    }

    .balance-title {
        font-size: 0.875rem;
        font-family: '微软雅黑', sans-serif;
    }

    .balance-data {
        font-weight: bold;
    }
</style>
