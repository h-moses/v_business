<template>
    <v-app>
        <v-main>
            <v-img
                alt="star-logo"
                class="shrink mr-2"
                contain
                src="../assets/logo.png"
                transition="scale-transition"
                width="100"/>

            <v-form class="login-form">
                <v-input :value="loginForm.mcName" hint="请输入手机号">
                    <v-text-field label="手机号" dense clearable prepend-inner-icon="mdi-cellphone"/>
                </v-input>
                <v-input :value="loginForm.mcPwd" hint="密码">
                    <v-text-field label="密码" dense clearable prepend-inner-icon="mdi-lock-outline" :append-icon="showPwd ? 'mdi-eye' : 'mdi-eye-off'" :type="showPwd ? 'text' : 'password'" @click:append="showPwd = !showPwd"/>
                </v-input>
            </v-form>
            <v-row class="register-amend" align="center" justify="space-between">
                <v-btn text>快速注册</v-btn>
                <v-btn text>修改密码</v-btn>
            </v-row>
            <div class="btn-container">
                <v-btn class="login-btn" elevation="2" color="primary" width="80%" rounded>登录</v-btn>
            </div>
        </v-main>
    </v-app>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                loginForm: {
                    mcName: '',
                    mcPwd: ''
                },
                showPwd: false
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
        height: 16%;
        margin: 70% auto 0;
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
