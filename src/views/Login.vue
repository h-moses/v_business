<template>
    <v-container fluid>
        <!-- 系统logo-->
        <v-img
                alt="star-logo"
                class="shrink mr-2"
                contain
                src="../assets/logo.png"
                transition="scale-transition"
                width="100"/>

        <!-- 登录表单-->
        <v-form class="login-form" ref="form" value>
            <!-- 手机号码-->
            <v-input>
                <v-text-field :rules="[rules.required,rules.phone]" clearable dense label="手机号" prepend-inner-icon="mdi-cellphone"
                              v-model="loginForm.mcPhone"/>
            </v-input>
            <!-- 密码-->
            <v-input hint="密码">
                <v-text-field :append-icon="showPwd ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required]" :type="showPwd ? 'text' : 'password'"
                              @click:append="showPwd = !showPwd" @keydown.enter="login" clearable
                              dense label="密码"
                              maxlength="12" prepend-inner-icon="mdi-lock-outline" v-model="loginForm.mcPwd"/>
            </v-input>
        </v-form>
        <v-row align="center" class="register-amend" justify="space-between">
            <v-btn @click="registerAccount" text>快速注册</v-btn>
            <v-btn text>修改密码</v-btn>
        </v-row>
        <div class="btn-container">
            <v-btn @click="login" class="login-btn" color="primary" elevation="2" rounded width="80%">登录</v-btn>
        </div>
    </v-container>
</template>

<script>
    import Vue from 'vue'
    import {Toast} from 'mint-ui'

    Vue.use(Toast)

    export default {
        name: "Login",
        data() {
            return {
                loginForm: {
                    mcPhone: '',
                    mcPwd: ''
                },
                showPwd: false,
                rules: {
                    required: value => !!value || '不能为空',
                    phone: value => {
                        const pattern = /^1[3-9]\d{9}$/
                        return pattern.test(value) || '手机号不合法'
                    }
                }
            }
        },
        methods: {
            // 跳转到注册界面
            registerAccount() {
                this.$router.push('/register')
            },
            // 登录
            async login() {
                const {data: res} = await this.$http.post('merchant/login', this.loginForm)
                if (res.code === 200) {
                    // 登录成功，则存储手机号码到sessionstorage
                    window.sessionStorage.setItem("mcPhone", this.loginForm.mcPhone)
                    await this.$router.push({path: '/home/main', query: {mcPhone: this.loginForm.mcPhone}})
                } else {
                    // 登录失败消息框提示，并重置输入框
                    Toast({
                        message: '密码错误',
                        position: 'bottom'
                    })
                    this.$refs.form.reset()
                }
            }
        }
    }
</script>

<style lang="less" scoped>

    .v-image {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
    }

    .login-form {
        width: 80%;
        margin: 80% auto 0;
    }

    .register-amend {
        width: 80%;
        margin: 0 auto;

        .v-btn.v-size--default {
            font-size: 0.75rem;
        }
    }

    .btn-container {
        margin-top: 3%;
        text-align: center;
    }

</style>
