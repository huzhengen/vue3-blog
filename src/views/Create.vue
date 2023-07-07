<template>
  <Header />
  <div class="create">
    <h1>创建文章</h1>
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="blogData"
      @submit.prevent="submit"
    >
      <el-form-item label="文章标题">
        <el-input v-model="blogData.title" />
      </el-form-item>
      <p class="limit">限制10个字</p>
      <el-form-item label="内容简介">
        <el-input v-model="blogData.description" type="textarea" />
      </el-form-item>
      <p class="limit">限制20个字</p>
      <el-form-item label="文章内容">
        <el-input v-model="blogData.content" :rows="12" type="textarea" />
      </el-form-item>
      <p class="limit">限制200个字</p>
      <p>是否展示到首页<el-switch v-model="atIndex" /></p>
      <el-button native-type="submit">确定</el-button>
    </el-form>
  </div>
  <Footer />
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { reactive, ref } from 'vue'
import { request } from '../utils/request'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()

const labelPosition = ref('top')

const blogData = reactive({
  title: '',
  description: '',
  content: '',
})

const atIndex = ref(true)

const submit = () => {
  console.log('submit')

  request
    .post('/api/blog', {
      title: blogData.title,
      content: blogData.content,
      description: blogData.description,
      atIndex: atIndex.value,
    })
    .then((res) => {
      console.log('res', res)
      if (res.data.status === 'ok') {
        router.push(`/blog/${res.data.data.id}`)
      } else {
        ElMessage.error(res.data.msg)
      }
    })
    .catch(() => {})
}
</script>

<style lang="scss" scoped>
.create {
  max-width: 1000px;
  margin: 0 auto 20px;
  h1 {
    text-align: center;
  }
  .el-form {
    .limit {
      text-align: right;
      font-size: 13px;
      color: #ccc;
    }
  }
}
</style>
