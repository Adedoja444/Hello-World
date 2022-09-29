<template>
  <div>
    <div class="container shadow-lg mt-5">
      <form action class="form-holder" @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" v-model="name" id="name" />
          <p v-if="error.name">{{ error.name }}</p>
          <p v-if="error.general">{{ error.general }}</p>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="email"
            aria-describedby="emailHelp"
          />
           <p v-if="error.email">{{ error.email }}</p>
          <p v-if="error.general">{{ error.general }}</p>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            v-model="password"
            id="password"
          />
           <p v-if="error.password">{{ error.password }}</p>
          <p v-if="error.general">{{ error.general }}</p>
        </div>
        <div class="mb-3">
          <label for="confirmPassword" class="form-label"
            >Confirm Password</label
          >
          <input
            type="password"
            class="form-control"
            v-model="confirmPassword"
            id="confirmPassword"
          />
           <p v-if="error.confirmPassword">{{ error.confirmPassword }}</p>
          <p v-if="error.general">{{ error.general }}</p>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPasswword: "",
      error: {},
    };
  },
  methods: {
    handleSubmit() {
      // console.log("Hi World");
      console.log({
        name: this.name,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      });
      if (
        !this.name &&
        !this.email &&
        !this.password &&
        !this.confirmPassword
      ) {
        // alert('You have to input this field.')
        this.error = {};
        this.error.general = "You have to input this field";
      } else if (!this.name) {
        this.error = {};
        this.error.name = "You have to input a name";
      } else if (!this.email) {
        this.error = {};
        this.error.email = "You have to input an email";
      } else if (!this.password) {
        this.error = {};
        this.error.password = "You have to input a password";
      } else if (this.confirmPassword !== this.password) {
        this.error = {};
        this.error.confirmPassword = "Passwords do not match";
         console.log("Hi World");
      } else {
        this.error = {};
        alert("Byeeeeee!!!!!!!");
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.form-label {
  color: blue;
  font-size: 20px;
}

.container {
  background-color: #fff;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 50%;
  height: 80vh;
  margin: 0 auto;
}

.form-holder {
  width: 75%;
  height: fit-content;
  align-content: center;
  margin: 0 auto;
}

.btn {
  background-color: blue;
}
</style>