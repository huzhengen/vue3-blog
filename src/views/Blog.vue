<template>
  <Header />
  <div class="blog">
    <div class="blog-header">
      <img :src="blog.avatar" alt="" width="60" />
      <div class="info">
        <h3>{{ blog.title }}</h3>
        <p>
          <router-link to="/">{{ blog.username }}</router-link>
          <span>发布时间：{{ blog.createdAt }}</span>
        </p>
      </div>
    </div>
    <div class="content" v-html="blog.content"></div>
  </div>
  <Footer />
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { ref, onMounted, reactive } from 'vue'
import { request } from '../utils/request'
import { useRouter, useRoute } from 'vue-router'
import { marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import hljs from 'highlight.js'
import { friendlyDate } from '../utils/friendlyDate'

const route = useRoute()

const blog = reactive({
  avatar: '',
  title: '',
  username: '',
  createdAt: '',
  content: '',
})

request
  .get(`/api/blog/${route.params.blogId}`)
  .then(function (res) {
    if (res.data.status === 'ok') {
      const data = res.data.data
      blog.title = data.title
      blog.avatar = data.user.avatar
      blog.username = data.user.username
      blog.createdAt = friendlyDate(data.createdAt)
      // blog.content = marked.parse(data.content)
      blog.content = data.content
    }

    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function (code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext'
        return hljs.highlight(code, { language }).value
      },
      langPrefix: 'hljs language-',
      pedantic: false,
      gfm: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
    })
    blog.content = marked.parse(blog.content)
  })
  .catch(function (error) {
    console.log(error)
  })
  .finally(function () {})
</script>

<style lang="scss">
@import 'highlight.js/styles/mono-blue.css';
.blog {
  max-width: 1000px;
  margin: 30px auto;
  &-header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: 30px;
    img {
      margin-right: 20px;
    }

    .info {
      h3 {
        margin-bottom: 10px;
      }
      p {
        font-size: 13px;
        a {
          color: var(--main-color);
          padding-right: 10px;
        }
        span {
          color: #585757;
        }
      }
    }
  }
  .content {
    h2 {
      border-bottom: 1px solid #ccc;
      padding-bottom: 20px;
    }
  }
}
</style>
