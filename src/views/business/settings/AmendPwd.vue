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
                <v-form>
                    <v-input :value="amendForm.originPwd">
                        <v-text-field :append-icon="showPwd ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required]" :type="showPwd ? 'text' : 'password'" @click:append="showPwd = !showPwd" clearable
                                      dense label="原密码"
                                      maxlength="12"/>
                    </v-input>
                    <v-input :value="amendForm.newPwd" hint="密码">
                        <v-text-field :append-icon="showPwd ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required]" :type="showPwd ? 'text' : 'password'" @click:append="showPwd = !showPwd" clearable
                                      dense label="新密码"
                                      maxlength="12"/>
                    </v-input>
                </v-form>
                <v-btn @click="amend" class="amend-btn" color="primary" elevation="2" rounded width="100%">修改</v-btn>
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
