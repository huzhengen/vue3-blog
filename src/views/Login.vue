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
  <main id="login">
    <div class="registerAndLogin">
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
        <el-button>立即登录</el-button>
      </el-form>
      <p>
        没有账号？
        <router-link to="/register">注册新用户</router-link>
      </p>
    </div>
  </main>
  <Footer />
</template>

<style scoped lang="scss" src="../assets/registerAndLogin.scss"></style>
