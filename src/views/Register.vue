<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

import { reactive, ref } from 'vue'

const labelPosition = ref('top')

const formLabelAlign = reactive({
  username: '',
  password: '',
})
</script>

<template>
  <Header />
  <main id="register">
    <div class="register">
      <el-form
        :label-position="labelPosition"
        label-width="100px"
        :model="formLabelAlign"
        style="max-width: 460px"
      >
        <el-form-item label="用户名">
          <el-input
            v-model="formLabelAlign.username"
            placeholder="请输入用户名"
          />
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="formLabelAlign.password"
            type="password"
            placeholder="请输入密码"
            show-password="true"
          />
        </el-form-item>
        <el-button>立即注册</el-button>
      </el-form>
      <p>
        已有账号？
        <router-link to="/login">立即登录</router-link>
      </p>
    </div>
  </main>
  <Footer />
</template>

<style scoped lang="scss">
.register {
  max-width: 460px;
  margin: 0 auto;
  padding: 30px 0 141px;
  p {
    text-align: center;
    font-size: 13px;
    padding-top: 30px;
    a {
      color: var(--main-color);
    }
  }
}
</style>
