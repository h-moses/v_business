<template>
    <v-list two-line>
        <v-list-item :key="index" v-for="(item,index) in data">
            <template #default>
                <v-card outlined>
                    <v-card-title>{{item.title}}</v-card-title>
                    <v-card-subtitle>
                        <v-img class="card-img" src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"/>
                        <div class="card-subtitle">{{item.subtitle}}</div>
                    </v-card-subtitle>
                </v-card>
            </template>
        </v-list-item>
    </v-list>
</template>

<script>
    export default {
        name: "ListNotice",
        data() {
            return {
                data: [
                    {
                        title: 'qwe',
                        subtitle: '啊是大大撒大大青蛙大苏打阿斯蒂顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶阿斯蒂',
                        img: 'https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png',
                        action_text: '12:45'
                    },
                    {
                        title: 'qwe',
                        subtitle: '啊是大大撒大大青蛙大苏打阿斯蒂顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶阿斯蒂',
                        img: 'https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png',
                        action_text: '12:45'
                    },
                    {
                        title: 'qwe',
                        subtitle: '啊是大大撒大大青蛙大苏打阿斯蒂顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶阿斯蒂',
                        img: 'https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png',
                        action_text: '12:45'
                    }
                ]
            }
        }
    }
</script>

<style lang="less" scoped>

    .v-list {
        background-color: #F5F5F5;
        height: 100%;
    }

    .v-list-item {
        padding: 0;
    }

    .v-list-item:not(:first-child) {
        margin-top: 1rem;
    }

    .v-card {
        width: 100%;

        .v-card__subtitle {
            display: flex;
            align-items: flex-start;
            height: 4rem;
            width: 100%;

            .card-img {
                width: 3rem;
                height: 3rem;
            }

            .card-subtitle {
                margin-left: 1rem;
                height: 3rem;
                font-size: 0.75rem;
            }
        }
    }

</style>
