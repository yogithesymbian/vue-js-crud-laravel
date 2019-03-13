<template id="post-edit">
  <div>
    <h3>Add new Post</h3>
    <form v-on:submit.prevent = "updatePost">
      <div class="form-group">
        <label for="edit-title">Title</label>
        <input id="edit-title" v-model="post.title" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="edit-body">Body</label>
        <textarea class="form-control" rows="10" v-model="post.body"></textarea>
      </div>
      <button type="submit" class="btn btn-xs btn-primary">Create Post</button>
      <router-link class="btn btn-xs btn-warning" v-bind:to="'/'">Cancel</router-link>
    </form>
  </div>
</template>

<script>
export default{
  data: function () {
    return {post: {title: '', body: ''}}
  },
  created: function(){
    let uri = 'http://localhost:8000/posts/'+this.$route.params.id+'/edit';
    Axios.get(uri).then((response) => {
    this.post = response.data;
  });
  },
  methods: {
    updatePost: function() {
      let uri = 'http://localhost:8000/posts/'+this.$route.params.id;
      Axios.patch(uri, this.post).then((response) => {
      this.$router.push({name: 'Listposts'})
    })
  }
  }
}
</script>