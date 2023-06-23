<script setup>
import axios from 'axios'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { reactive, ref } from 'vue'

const router = useRouter()

const ruleFormRef = ref()

const labelPosition = ref('top')

const formLabelAlign = reactive({
  username: '',
  password: '',
  confirmPassword: '',
})

const rules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 1, max: 15, message: '用户名长度1到15个字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 6, max: 16, message: '密码长度6到16个字符', trigger: 'blur' },
  ],
})

const register = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      axios
        .post('//blog-server.hunger-valley.com/auth/register', {
          username: formLabelAlign.username,
          password: formLabelAlign.password,
        })
        .then(function (response) {
          console.log(response)
          console.log('成功')
          if (response.data.status === 'ok') {
            // 跳转到 首页 。 或者跳转 上一页
            router.push('/')
          } else {
            ElMessage.error(response.data.msg)
          }
        })
        .catch(function (error) {
          console.log(error)
          console.log('失败')
        })
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <Header />
  <main id="register">
    <div class="registerAndLogin">
      <el-form
        ref="ruleFormRef"
        :model="formLabelAlign"
        :rules="rules"
        :label-position="labelPosition"
        label-width="100px"
        style="max-width: 460px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="formLabelAlign.username"
            placeholder="请输入用户名"
          />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="formLabelAlign.password"
            type="password"
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input
            v-model="formLabelAlign.confirmPassword"
            type="password"
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-button @click="register(ruleFormRef)">立即注册</el-button>
      </el-form>
      <p>
        已有账号？
        <router-link to="/login">立即登录</router-link>
      </p>
    </div>
  </main>
  <Footer />
</template>

<style scoped lang="scss" src="../assets/registerAndLogin.scss"></style>
