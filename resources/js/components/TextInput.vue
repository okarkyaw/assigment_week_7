<template>
  <form-group :label="label">
    <input @change="change" :type="text" class="form-control" :id="name" :value="value" :name="name" :placeholder="placeholder" />
  </form-group>
</template>
<script>
export default {
    props : ['type','name','placeholder',"value","label"],
    methods : {
      change(event){
        this.$emit('change',event.target.value);
      }
    }
};
</script>