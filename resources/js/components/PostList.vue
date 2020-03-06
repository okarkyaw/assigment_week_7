<template>
  <div>
    <h1>Post List will be here</h1>
    <div v-for="post in posts" :key="post.id">
      <h1><router-link :to="{ name: 'detail',post_id:'id' }">{{post.title}}</router-link></h1>
      <p>{{post.excerpt}}</p>
    </div>
  </div>
</template>
<script>
export default {
  // mixins : [api_token_header],
  data() {
    return {
      posts: [],
      meta: null,
      links: null,
      url : `/api/v1/post`
    };
  },
  created() {     
    axios.get(this.url).then(this.init_data_handler);
  },
  methods: {
    init_data_handler (response) {
      this.posts = response.data.data;
      this.meta = response.data.meta;
      this.links = response.data.links;
    }
  }
};
</script>