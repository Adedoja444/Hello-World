<template>
  <div class="count">
    <h3>count is: {{ count }}</h3>
    <button @click="increment">Count</button>
  </div>
  <ul >
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.isDone"/>
      <span :class="{done : todo.isDone}">{{ todo.text }}</span>
      <button @click="removeTodo(todo.id)">X</button>
    </li>
  </ul>
  <input type="text" v-model="newTodo">
  <button @click="addTodo">Add Todo</button>
  <div class="mt-3">
  <button @click="hideCompleted = !hideCompleted">Hide Completed</button>
  </div>
  <section>
    <container>
      <div class="row my-5">
        <div class="col-md-3" v-for="(webStudent, index) in webStudents" :key="index">
          <div class="card">
             <div class="image">
              <img :src="require(`@/assets/images/${webStudent.image}.jpg`)" class="img-fluid" alt="">
             </div>
             <div class="card-info">
                <h3>{{ webStudent.name }}</h3>
                <h4>{{ webStudent.gender }}</h4>
             </div>
          </div>
        </div>
      </div>
    </container>
  </section>
</template>

<script>
let id = 0;
export default {
  name: "Count-1",
  components: {},
  data() {
    return {
      count: 0,
      newTodo: "",
      todos: [
        { id: id++, text: "Learn HTML", isDone: true},  
        { id: id++, text: "Learn JavaScript", isDone: true },
        { id: id++, text: "Learn Vue", isDone: true },
      ],
      webStudents: [
        { name: "Hannah", gender: "Female", image: "hannah"},
        { name: "Tilda", gender: "Female", image: "tilda"},
        { name: "Grace", gender: "Female", image: "grace" },
      ],
      hideCompleted: false,
    };
  },
  methods: {
    increment() {
      this.count++;
      if (this.count === 5) {
        document.querySelector(".count").classList.add("grey");
      }
    },
    addTodo() {
      // this.newTodo;
      this.todos.push({ id: id++, text: this.newTodo });
    },
    removeTodo(id) {
      console.log(id)
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  }, 
  computed: {
    filteredTodos() {
      return this.hideCompleted ? this.todos.filter((todo) => todo.isDone === false) : this.todos
    },
    buttonText() {
      return this.hideCompleted ? "Show All" : "Hide Completed"
    }
  }
}
</script>

<style>
.grey {
  background-color: grey;
  color: white;
}

.done {
  color: red;
}
</style>