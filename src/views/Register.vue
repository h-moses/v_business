<template>
    <v-container fluid>
        <v-app-bar app color="primary" dark dense rounded>
            <v-app-bar-nav-icon @click="backLogin">
                <template #default>
                    <v-icon>mdi-arrow-left</v-icon>
                </template>
            </v-app-bar-nav-icon>
            <v-app-bar-title>用户注册</v-app-bar-title>
        </v-app-bar>
        <span class="register-title">创建账户</span>
        <v-card class="card_container" height="400" shaped>
            <v-form class="register-form" value>
                <v-input>
                    <v-text-field :rules="[rules.required]" clearable dense hint="最多6位字符" label="用户名"
                                  maxlength="6" prepend-inner-icon="mdi-account" v-model="registerForm.mcName"/>
                </v-input>
                <v-input>
                    <v-text-field :rules="[rules.required]" clearable dense hint="最多8位字符" label="姓名"
                                  maxlength="8" prepend-inner-icon="mdi-information" v-model="registerForm.mcRealName"/>
                </v-input>
                <v-input>
                    <v-text-field :rules="[rules.required,rules.phone]" clearable dense label="手机号码"
                                  prepend-inner-icon="mdi-cellphone" v-model="registerForm.mcPhone"/>
                </v-input>
                <v-input>
                    <v-text-field :rules="[rules.required,rules.email]" clearable dense label="邮箱" prepend-inner-icon="mdi-email"
                                  v-model="registerForm.mcEmail"/>
                </v-input>
                <v-input>
                    <v-text-field :append-icon="showPwd ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required]" :type="showPwd ? 'text' : 'password'"
                                  @click:append="showPwd = !showPwd" clearable
                                  dense hint="最多12位字符" label="密码" maxlength="12"
                                  prepend-inner-icon="mdi-lock-outline" v-model="registerForm.mcPwd"/>
                </v-input>
            </v-form>
        </v-card>
        <div class="btn-container">
            <v-btn @click="register" class="register_btn" color="primary" elevation="2" rounded width="80%">注册</v-btn>
        </div>
    </v-container>
</template>

<script>

    import Vue from 'vue'
    import {Toast} from 'mint-ui'

    Vue.use(Toast)
    export default {
        name: "Register",
        data() {
            return {
                registerForm: {
                    mcName: '',
                    mcPwd: '',
                    mcRealName: '',
                    mcPhone: '',
                    mcEmail: ''
                },
                showPwd: false,
                rules: {
                    required: value => !!value || '不能为空',
                    email: value => {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        return pattern.test(value) || '邮箱不合法'
                    },
                    phone: value => {
                        const pattern = /^1[3-9]\d{9}$/
                        return pattern.test(value) || '手机号不合法'
                    }
                }
            }
        },
        methods: {
            backLogin() {
                this.$router.back()
            },
            async register() {
                const {data: res} = await this.$http.post('merchant/register', this.registerForm)
                if (res.code === 200) {
                    await this.$router.push('/')
                } else {
                    Toast(
                        {
                            message: '用户已存在',
                            position: 'bottom'
                        }
                    )
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .register-title {
        font-family: '微软雅黑', sans-serif;
        fon t-size: 1.6rem;
        font-weight: bold;
        letter-spacing: 0.1rem;
        position: absolute;
        top: 8%;
    }

    .card_container {
        margin: 30% auto 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .register-form {
        width: 80%;
    }

    .btn-container {
        margin-top: 15%;
        text-align: center;
    }
</style>
