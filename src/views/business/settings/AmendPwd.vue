<template>
    <v-app>
        <v-app-bar app color="white" flat>
            <v-app-bar-nav-icon @click="backRoute">
                <template #default>
                    <v-icon>mdi-arrow-left</v-icon>
                </template>
            </v-app-bar-nav-icon>
            <v-app-bar-title>修改密码</v-app-bar-title>
        </v-app-bar>
        <v-divider/>
        <v-main>
            <v-container fluid>
                <!-- 修改表单-->
                <v-form>
                    <!-- 原密码输入框-->
                    <v-input>
                        <v-text-field :append-icon="showPwd ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required]" :type="showPwd ? 'text' : 'password'"
                                      @click:append="showPwd = !showPwd" clearable dense
                                      label="原密码" maxlength="12"
                                      v-model="amendForm.originPwd"/>
                    </v-input>
                    <!-- 新密码输入框-->
                    <v-input hint="密码">
                        <v-text-field :append-icon="showPwd ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required]" :type="showPwd ? 'text' : 'password'"
                                      @click:append="showPwd = !showPwd" clearable dense
                                      label="新密码" maxlength="12"
                                      v-model="amendForm.newPwd"/>
                    </v-input>
                </v-form>
                <v-btn @click="amend" class="amend-btn" color="primary" elevation="2" rounded width="100%">修改</v-btn>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import Vue from 'vue'
    import {Toast} from 'mint-ui'

    Vue.use(Toast)

    export default {
        name: "AmendPwd",
        data() {
            return {
                amendForm: {
                    originPwd: '',
                    newPwd: ''
                },
                rules: {
                    required: value => !!value || '不能为空',
                },
                showPwd: false
            }
        },
        methods: {
            // 修改密码
            async amend() {
                // 获取数据库密码
                const {data: res} = await this.$http.post('/merchant/pwd', {mcId: window.sessionStorage.getItem('mcId')})
                if (res.code !== 200) {
                    Toast({
                        message: '获取失败',
                        position: 'bottom'
                    })
                } else {
                    // 比对输入原密码是否正确
                    if (this.amendForm.originPwd !== res.data.pwd) {
                        Toast({
                            message: '原密码错误',
                            position: 'bottom'
                        })
                    } else {
                        // 若原密码正确，则修改密码
                        const {data: res} = await this.$http.post('/merchant/pwd/amend', {
                            mcId: window.sessionStorage.getItem('mcId'),
                            mcPwd: this.amendForm.newPwd
                        })
                        if (res.code !== 200) {
                            Toast({
                                message: '修改失败',
                                position: 'bottom'
                            })
                        } else {
                            Toast({
                                message: '修改成功',
                                position: 'bottom'
                            })
                            setTimeout(() => {
                                this.$router.push('/')
                                window.sessionStorage.clear()
                            }, 2000)
                        }
                    }
                }
            },
            backRoute() {
                this.$router.push('/home/settings')
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
