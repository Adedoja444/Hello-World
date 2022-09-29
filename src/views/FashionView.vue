<template>
  <section>
    <div class="container">
      <div class="row">
        <div
          class="col-md-3 mt-2"
          v-for="product in products"
          :key="product.id"
        >
          <div class="card h-100">
            <div class="card-body">
              <img :src="product.image" alt="" class="img-fluid" />
              <p>{{ product.title.substring(0, 35) }}</p>
              <p>${{ product.price }}</p>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div class="container">
          <div class="row">
            <div
              class="col-md-3 mt-1"
              v-for="(post, index) in posts"
              :key="index"
            >
              <div class="card">
                <div class="card-body">
                  <p class="pl-1">Title:{{ post.title }}</p>
                  <p class="pl-1">Body:{{ post.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="my-5 py-1">
        <form action="" @submit.prevent="addPost">
          <div class="mb-2">
            <input
              type="text"
              class="form-control"
              placeholder="Enter your title"
              v-model="post.title"
            />
          </div>
          <div class="mb-2">
            <textarea
              class="form-control"
              v-model="post.description"
            ></textarea>
          </div>
          <button class="btn btn-dark" type="submit">Submit</button>
        </form>
      </section>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      products: [],
      posts: [],
      post: { title: "", description: "" },
    };
  },
  methods: {
    addPost() {
      console.log(this.post);
      if (this.post.title !== "" && this.post.body !== "") {
        axios
          .post("https://jsonplaceholder.typicode.com/posts", this.post)
          .then((res) => {
            const { data } = res;
            this.posts.push(data);
            console.log(this.posts);
          });
      } else {
        alert("Values???");
      }
    },
  },
  created() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        const { data } = res;
        this.products = data;
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>

<style scoped>
section img {
  height: 200px;
}
</style>