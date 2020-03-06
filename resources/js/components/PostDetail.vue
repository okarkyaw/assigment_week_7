<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <h1>{{post.title}}</h1>
      <p>{{post.excerpt}}</p>
      <p>
        <router-link :to="{ name: 'edit',post_id:'id' }">Edit</router-link>
      </p>
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