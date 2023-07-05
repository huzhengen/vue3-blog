<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { ref, onMounted } from 'vue'
import { request } from '../utils/request'

const blogs = ref([])
const total = ref(0) // blog 总数量

onMounted(() => {
  getBlogs(1)
})

const getBlogs = (page = 1) => {
  request
    .get(`/api/blog?page=${page}`)
    .then(function (response) {
      // handle success
      if (response.data.status === 'ok') {
        blogs.value = response.data.data
        total.value = response.data.total
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error)
    })
    .finally(function () {
      // always executed
    })
}

// 点击页码
const onCurrentChange = (page) => {
  getBlogs(page)
}
</script>

<template>
  <Header />
  <main id="main">
    <div class="index">
      <section class="blog-posts">
        <router-link
          :to="`/blog/${blog.id}`"
          class="item"
          v-for="blog in blogs"
        >
          <figure class="avatar">
            <img :src="blog.user.avatar" alt="blog.user.username" />
            <figcaption>{{ blog.user.username }}</figcaption>
          </figure>
          <div class="article">
            <h3>
              {{ blog.title }}
              <span>{{ blog.createdAt }}</span>
            </h3>
            <p>{{ blog.description }}</p>
          </div>
        </router-link>
        <div class="pagination">
          <el-pagination
            :page-size="20"
            :pager-count="11"
            layout="prev, pager, next"
            :total="total"
            @prev-click="onPrevClick"
            @next-click="onNextClick"
            @current-change="onCurrentChange"
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
        /* justify-content: space-between; */
        text-decoration: none;
        margin-bottom: 30px;
        figure.avatar {
          min-width: 100px;
          text-align: center;
          margin-right: 5px;
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
            word-break: break-all;
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
