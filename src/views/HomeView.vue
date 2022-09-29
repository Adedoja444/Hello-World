<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1 :class="stage === 'shipped'? redClass : greenClass">{{msg}}</h1>
    <h3>count is: {{ count }}</h3>
   <button @click="increment">Count</button>
  </div>
  <div type="text" @input="addText"  :value="text" ></div>
  <!-- OR -->
  <!-- <div type="text" v-model="text"></div> -->
  <h4>{{ text }}</h4>
  <h3 v-if="truthy">Good afternoon</h3>
  <h3 v-else>Why?</h3>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  },
  data() {
    return {
      msg: 'Hi Vue',
      count: 0,
      redClass: 'red',
      greenClass: 'green',
      stage: 'delivered',
      text: '',
      truthy: true,
    }
  }, 
  methods:  {
     increment() {
       this.count++;
       
  },
  addText(e) {
    console.log(e.target.value)
    this.text = e.target.value
  }

  
  }

}
</script>
<style scoped>
.red {
  color: red;
}

.green {
  color: green;
}
</style>

