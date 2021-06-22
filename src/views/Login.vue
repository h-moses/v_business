<template>
    <v-container fluid>
        <v-img
                alt="star-logo"
                class="shrink mr-2"
                contain
                src="../assets/logo.png"
                transition="scale-transition"
                width="100"/>

        <v-form class="login-form" value ref="form">
            <v-input v-model="loginForm.mcPhone" >
                <v-text-field v-model="loginForm.mcPhone" label="手机号" :rules="[rules.required,rules.phone]" dense clearable prepend-inner-icon="mdi-cellphone"/>
            </v-input>
            <v-input v-model="loginForm.mcPwd" hint="密码">
                <v-text-field v-model="loginForm.mcPwd" label="密码" maxlength="12" :rules="[rules.required]" dense clearable prepend-inner-icon="mdi-lock-outline" :append-icon="showPwd ? 'mdi-eye' : 'mdi-eye-off'" :type="showPwd ? 'text' : 'password'" @click:append="showPwd = !showPwd" @keydown.enter="login"/>
            </v-input>
        </v-form>
        <v-row class="register-amend" align="center" justify="space-between">
            <v-btn text @click="registerAccount">快速注册</v-btn>
            <v-btn text>修改密码</v-btn>
        </v-row>
        <div class="btn-container">
            <v-btn class="login-btn" elevation="2" color="primary" width="80%" rounded @click="login">登录</v-btn>
        </div>
    </v-container>
</template>

<script>
    import Vue from 'vue'
    import { Toast } from 'mint-ui'

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
            registerAccount() {
                this.$router.push('/register')
            },
            async login() {
                const {data:res} = await this.$http.post('merchant/login',this.loginForm)
                if (res.code === 200) {
                    await this.$router.push({name: 'Home',params: {mcPhone: this.loginForm.mcPhone}})
                }else {
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
