<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <Header />
  <main id="main">
    <div class="index">
      <section class="blog-posts">
        <a href="" class="item" v-for="n in 10">
          <figure class="avatar">
            <img
              src="https://avatars.dicebear.com/api/human/qq792304256.svg?mood[]=happy"
              alt="qq792304256"
            />
            <figcaption>qq792304256</figcaption>
          </figure>
          <div class="article">
            <h3>
              Axios入门指南：如何在JavaScript中使用它
              <span>30天前</span>
            </h3>
            <p>
              Axios是一个基于Promise的HTTP客户端，用于浏览器和Node.js中。它具有简洁、高效、易用的特点，可以帮助我们更好地发起HTTP请求。
              Axios支持浏览器和Node.js两种环境，并且可以拦截请求和响应、自定义请求头、转换请求数据和响应数据等功能。
            </p>
          </div>
        </a>
        <div class="pagination">
          <el-pagination
            :page-size="20"
            :pager-count="11"
            layout="prev, pager, next"
            :total="1000"
          />
        </div>
      </section>
    </div>
  </main>
  <Footer />
</template>

<style scoped lang="scss">
main {
  .index {
    max-width: 1000px;
    margin: 0 auto;
    section.blog-posts {
      margin-top: 30px;
      a.item {
        display: flex;
        justify-content: space-between;
        text-decoration: none;
        margin-bottom: 30px;
        figure.avatar {
          text-align: center;
          margin-right: 30px;
          img {
            width: 60px;
            height: 60px;
          }
          figcaption {
            font-size: 12px;
            margin-top: 10px;
          }
        }
        .article {
          h3 {
            margin-bottom: 20px;
            span {
              color: #999;
              font-weight: normal;
              font-size: 13px;
            }
          }
          p {
            font-size: 14px;
            line-height: 23px;
          }
        }
      }
      .pagination {
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
      }
    }
  }
}
</style>
