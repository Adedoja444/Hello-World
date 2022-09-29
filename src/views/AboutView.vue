<template>
  <div class="about">
    <h1>This is an about page</h1>
     <p>Author  has published <span> {{publishedBookMessage}}</span> books </p>
     <p ref="tee" >Hi!!!</p>

     <div v-for="post in posts" :key="post.id">
       <p>{{ post.id }}</p>
       <p>{{ post.title }}</p>
       <p>{{ post.body }}</p>
     </div>

     <div>
      <p>Todo id is {{todoId}}</p>
      <button @click="todoId++">Increase Id</button>
      <pre>{{ todoData }}</pre>
     </div>
  </div>  
 
</template>


<script>
export default {
  data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      },
      posts: [],
      todoId: 1,
      todoData: null

    }
  },
   methods: {
    async getPosts() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await res.json();
      console.log(data)
    },
    async getSinglePost() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.todoId}`)
      this.todoData = await res.json();
      console.log(this.todoData)
    }
  }, 
  computed: {
    publishedBookMessage() {
      return this.author.books.length > 0 ? this.author.books.length : 'No'
    }
  }, 
  mounted () {
    this.$refs.tee.textContent = "hello"
    this.getPosts();
    this.getSinglePost();
  },

  watch: {
      todoId(newId) {
        console.log('new id is', newId);
        this.getSinglePost();
      }
    }
}
</script>

<style>

</style>
