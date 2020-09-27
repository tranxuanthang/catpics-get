<template>
  <main class="w-full max-w-screen-md">
    <template v-if="loading">
      <div class="w-full p-6 bg-blue-200 text-blue-800 rounded-lg">Fetching images from TheCatApi...</div>
    </template>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4" v-else-if="!loading && !error">
      <div v-for="pic in pics" :key="pic.id" class="h-64">
        <img :src="pic.url" alt="" class="h-full w-full object-cover rounded-lg shadow-lg">
      </div>
    </div>
    <template v-else>
      <div class="w-full p-6 bg-yellow-200 text-yellow-800 rounded-lg">Some errors happened when fetch images: {{ error }}</div>
    </template>
  </main>
</template>

<script>
import axios from 'axios'
axios.defaults.headers.common['x-api-key'] = process.env.VUE_APP_API_KEY

export default {
  data () {
    return {
      pics: [],
      loading: true,
      error: null
    }
  },

  async mounted () {
    try {
      const res = await axios.get('https://api.thecatapi.com/v1/images/search', {
        params: {
          limit: 30,
          size: 'full'
        }
      })
      this.pics = res.data
    } catch (error) {
      this.error = error.message
    } finally {
      this.loading = false
    }
  }
}
</script>
