<template>
  <Header />
  <img :src="blog.avatar" alt="" width="100" />
  <h3>{{ blog.title }}</h3>
  <p>用户：{{ blog.username }}</p>
  <p>发布时间：{{ blog.createdAt }}</p>
  <p>内容</p>
  <div v-html="blog.content"></div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { ref, onMounted, reactive } from 'vue'
import { request } from '../utils/request'
import { useRouter, useRoute } from 'vue-router'
import { marked } from 'marked'

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
      blog.createdAt = data.createdAt
      blog.content = marked.parse(data.content)
    }
  })
  .catch(function (error) {
    console.log(error)
  })
  .finally(function () {})
</script>
