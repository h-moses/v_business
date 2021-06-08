<template>
    <v-container fluid>
        <v-app-bar app dark dense rounded color="primary">
           <v-app-bar-nav-icon @click="backLogin">
               <template #default>
                   <v-icon>mdi-arrow-left</v-icon>
               </template>
           </v-app-bar-nav-icon>
            <v-app-bar-title>用户注册</v-app-bar-title>
        </v-app-bar>
        <span class="register-title">创建账户</span>
          <v-card class="card_container" height="400" shaped>
              <v-form class="register-form">
                  <v-input :value="registerForm.mcName">
                      <v-text-field label="用户名" prepend-inner-icon="mdi-account" hint="最多6位字符" maxlength="6" :rules="[rules.required,rules.name]" dense clearable/>
                  </v-input>
                  <v-input :value="registerForm.mcRealName">
                      <v-text-field label="姓名" prepend-inner-icon="mdi-information" hint="最多8位字符" maxlength="8" :rules="[rules.required]" dense clearable/>
                  </v-input>
                  <v-input :value="registerForm.mcPhone">
                      <v-text-field label="手机号码" prepend-inner-icon="mdi-cellphone" :rules="[rules.required,rules.phone]" dense clearable/>
                  </v-input>
                  <v-input :value="registerForm.mcEmail">
                      <v-text-field label="邮箱" prepend-inner-icon="mdi-email" :rules="[rules.required,rules.email]" dense clearable/>
                  </v-input>
                  <v-input :value="registerForm.mcPwd">
                      <v-text-field label="密码" prepend-inner-icon="mdi-lock-outline" hint="最多12位字符" maxlength="12" :rules="[rules.required,rules.pwd]" dense clearable :append-icon="showPwd ? 'mdi-eye' : 'mdi-eye-off'" :type="showPwd ? 'text' : 'password'" @click:append="showPwd = !showPwd"/>
                  </v-input>
              </v-form>
          </v-card>
        <div class="btn-container">
            <v-btn class="register_btn" elevation="2" color="primary" width="80%" rounded>注册</v-btn>
        </div>
    </v-container>
</template>

<script>
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
            }
        }
    }
</script>

<style lang="less" scoped>
    .register-title {
        font-family: '微软雅黑',sans-serif;
        font-size: 1.6rem;
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
