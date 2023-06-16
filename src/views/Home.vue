<template>
  <header class="no-login" id="header">
    <h1>LET'S SHARE</h1>
    <p>精品文章汇聚(如提交垃圾文章请勿展示在首页)</p>
    <div class="btns">
      <router-link to="/login">
        <el-button>立即登录</el-button>
      </router-link>
      <el-button>注册账号</el-button>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: #149739;
  text-align: center;
  color: #fff;
  padding: 50px 0;
  p {
    margin-top: 20px;
  }
  .btns {
    margin-top: 20px;
    a:first-child {
      margin-right: 10px;
    }
  }
}
</style>
