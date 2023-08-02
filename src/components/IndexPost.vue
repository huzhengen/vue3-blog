<template>
  <router-link :to="`/blog/${blog.id}`" class="item">
    <figure class="avatar">
      <img :src="blog.user.avatar" alt="blog.user.username" />
      <figcaption>{{ blog.user.username }}</figcaption>
    </figure>
    <div class="article">
      <h3>
        {{ blog.title }}
        <span>{{ friendlyDate(blog.createdAt) }}</span>
      </h3>
      <p>{{ blog.description }}</p>
    </div>
  </router-link>
</template>

<script setup>
import { friendlyDate } from '../utils/friendlyDate'

const props = defineProps({
  blog: Object,
})
</script>

<style scoped lang="scss">
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
</style>
