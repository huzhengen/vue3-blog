<script setup>
import { ref } from 'vue'

const isShowMenu = ref(false)

const showMenu = () => {
  isShowMenu.value = true
}
const hideMenu = () => {
  isShowMenu.value = false
}
</script>

<template>
  <header class="no-login" id="header" v-if="false">
    <h1>LET'S SHARE</h1>
    <p>精品文章汇聚(如提交垃圾文章请勿展示在首页)</p>
    <div class="btns">
      <router-link to="/login">
        <el-button>立即登录</el-button>
      </router-link>
      <router-link to="/register">
        <el-button>注册账号</el-button>
      </router-link>
    </div>
  </header>
  <header class="login" id="header" v-else>
    <div class="wrapper">
      <h1>LET'S SHARE</h1>
      <div class="user">
        <router-link to="/new">
          <el-icon size="30"><Plus /></el-icon>
        </router-link>
        <div @mouseenter="showMenu" @mouseleave="hideMenu">
          <img
            src="https://avatars.dicebear.com/api/human/freshman.svg?mood[]=happy"
            alt=""
          />
          <div class="menu" v-show="isShowMenu">
            <router-link to="/new">我的</router-link>
            <router-link to="/new">注销</router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header.no-login {
  background-color: var(--main-color);
  text-align: center;
  color: #fff;
  padding: 50px 0;
  h1 {
    font-size: 46px;
  }
  p {
    margin-top: 30px;
  }
  .btns {
    margin-top: 40px;
    a:first-child {
      margin-right: 10px;
    }
  }
}
header.login {
  padding: 10px 0;
  background-color: var(--main-color);
  color: #fff;
  .wrapper {
    width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .user {
      display: flex;
      align-items: center;
      position: relative;
      a {
        color: #fff;
      }
      img {
        width: 40px;
        height: 40px;
        border: 1px solid #fff;
        border-radius: 50%;
        margin-left: 10px;
        cursor: pointer;
      }
      .menu {
        position: absolute;
        right: -9px;
        top: 43px;
        background-color: #fff;
        width: 60px;
        border: 1px solid #ccc;
        display: flex;
        flex-direction: column;
        text-align: center;
        a {
          color: #333;
          font-size: 12px;
          padding: 5px 0;
        }
      }
    }
  }
}
</style>
