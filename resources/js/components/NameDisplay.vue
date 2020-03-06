<template>
  <h1>{{full_name}}</h1>
</template>
<script>
export default {
  props: ["first_name", "last_name"],
  data() {
    return {
      //  full_name: null
    };
  },
  methods: {},
  computed: {
    //   full_name(){
    //       return `${this.first_name}.${this.last_name}`;
    //   }
  },
  watch: {
      first_name:{
        handler: function(val){
            $this.full_name = `${val}.${this.last_name}`;
        },
        immediate:true,
      },
      last_name:{
          handler:function(val){
              $this.full_name = `${this.first_name}.${val}`;
          }
      }
  }
};
</script>