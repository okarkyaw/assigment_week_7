<template>
  <div>
    <text-input name="title" placeholder="Enter Title" label="Title :" value="{{$post->title}}"></text-input>
    <textarea-input name="content" placeholder="Awesome Content Here" label="Content :" value="{{$post->content}}"></textarea-input>
      <form-group label="Publish Post : ">
        <radio-item name="is_published" if($post->is_published) checked=1 @endif label="Yes" id="is_published_yes" value="1"></radio-item>
        <radio-item name="is_published" if(!$post->is_published) checked=1 @endif id="is_published_no" label="No" value="0"></radio-item>
      </form-group>
    <button class='btn btn-primary' @click="save">Save</button>
  </div>
</template>
<script>
export default {
  // mixins : [api_token_header],
  data() {
    return {
      url : `/api/v1/post`
    };
  },
  
};
</script>