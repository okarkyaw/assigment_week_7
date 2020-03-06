<template>
  <form-group label="Caregory : ">
    <select name="category_id">
      <option v-for="category in categories" :key="category.id" :value="category.id">{{category.name}}</option>
    </select>
  </form-group>
</template>
<script>
export default {
  data() {
    return {
      categories: []
    };
  },
  created() {
    axios.get("/api/v1/category").then(response => {
      this.categories = response.data;
    });
  }
};
</script>