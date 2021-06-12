<template>
    <v-app>
        <v-app-bar app flat color="white">
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
                <v-form>
                    <v-input :value="amendForm.originPwd">
                        <v-text-field label="原密码" maxlength="12" :rules="[rules.required]" dense clearable :append-icon="showPwd ? 'mdi-eye' : 'mdi-eye-off'" :type="showPwd ? 'text' : 'password'" @click:append="showPwd = !showPwd"/>
                    </v-input>
                    <v-input :value="amendForm.newPwd" hint="密码">
                        <v-text-field label="新密码" maxlength="12" :rules="[rules.required]" dense clearable :append-icon="showPwd ? 'mdi-eye' : 'mdi-eye-off'" :type="showPwd ? 'text' : 'password'" @click:append="showPwd = !showPwd"/>
                    </v-input>
                </v-form>
                <v-btn class="amend-btn" elevation="2" width="100%" color="primary" rounded @click="amend">修改</v-btn>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
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
            amend() {

            },
            backRoute() {
                this.$router.back()
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
