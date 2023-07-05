<script setup>
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { reactive, ref } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
const router = useRouter()
const input = ref('')
const formSize = ref('default')
const ruleFormRef = ref()
const labelPosition = ref('top')
const rules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 1, max: 15, message: '请输入1-15位字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 15, message: '请输入6-15位字符', trigger: 'blur' },
  ],
})

const formLabelAlign = reactive({
  username: 'jirengu6',
  password: '123456',
})

const open4 = (response) => {
  ElMessage.error(response.data.msg)
}

const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      axios
        .post('/api/auth/login', {
          username: formLabelAlign.username,
          password: formLabelAlign.password,
        })
        .then(function (response) {
          if (response.data.status === 'ok') {
            localStorage.setItem('token', response.data.token)
            router.push('/')
          } else if (response.data.status === 'fail') {
            open4(response)
          }
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>
<template>
  <Header />
  <div>
    <el-radio-group
      v-model="labelPosition"
      label="label position"
    ></el-radio-group>
    <div class="filed">
      <el-form
        ref="ruleFormRef"
        :label-position="labelPosition"
        label-width="100px"
        :model="formLabelAlign"
        :rules="rules"
        :size="formSize"
        status-icon
        style="max-width: 460px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formLabelAlign.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="formLabelAlign.password"
            type="password"
            placeholder="请输入密码"
            show-password
          />
        </el-form-item>
        <el-button @click="submitForm(ruleFormRef)">立即登录</el-button>
      </el-form>
    </div>
  </div>
  <p class="xiaozi">
    没有账号？<router-link to="/enroll" style="color: #6b996b"
      >注册新用户</router-link
    >
  </p>
  <Footer></Footer>
</template>

<style scoped lang="scss">
.filed {
  display: flex;
  justify-content: center;
}

.xiaozi {
  text-align: center;
  margin-top: 40px;
  font-size: 12px;
  color: #999;
}
</style>
