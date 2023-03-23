<template>
  <div>
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm">
      <el-form-item label="账号" prop="usr">
        <el-input v-model="ruleForm.usr" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="psw">
        <el-input v-model="ruleForm.psw" type="password" autocomplete="off" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm()">登录</el-button>
        <el-button @click="resetForm()">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs, ref } from 'vue'
import { FormInstance, FormRules } from 'element-plus'
import { adminLogin, getAdminLoginInfo } from '../../request/api'
import { useRouter } from 'vue-router'
import Cookie from 'js-cookie'
let state = reactive({
  ruleForm: {
    usr: 'admin',
    psw: '123456'
  }
})
let { ruleForm } = toRefs(state)
let ruleFormRef = ref()
const validatePass = (rule: any, value: any, callback: any) => {}
const validatePass2 = (rule: unknown, value: string | undefined, callback: (msg?: string) => void) => {
  if (!value) {
    callback('密码不能为空')
  } else {
    callback()
  }
}

const rules = reactive({
  usr: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
  psw: [{ validator: validatePass2, trigger: 'blur' }]
})
let router = useRouter()
// 提交方法
const submitForm = () => {
  ruleFormRef.value
    .validate()
    .then(() => {
      adminLogin({
        password: ruleForm.value.psw,
        username: ruleForm.value.usr
      })
        .then((res) => {
          if (res.code === 200) {
            Cookie.set('token', res.data.tokenHead + res.data.token, { expires: 7 })
            console.log('登录成功')
            getAdminLoginInfo()
              .then((result) => {
                if(result.code===200)router.push('/homePage')

              })
              .catch((err) => {})
          }
          console.log(res, 'res')
        })
        .catch((err) => {
          console.log('登录失败')
        })
    })
    .catch(() => {
      console.log('catch')
    })
}
// 重置账号密码方法
const resetForm = () => {}
</script>

<style scoped></style>
