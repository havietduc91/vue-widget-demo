<template>
  <div id="app">
    {{title}} - with user id is {{userId}}
    <SampleForm/>
    <TodoList v-bind:todos="todos" />
    <CreateTodo v-on:add-todo="addTodo" />
  </div>
</template>
<script>
import TodoList from './components/TodoList'
import CreateTodo from './components/CreateTodo'
import { mapGetters } from 'vuex'
import SampleForm from './components/SampleForm'

export default {
  name: 'app',
  props: ['title', 'userId'],
  components: {
    SampleForm,
    TodoList,
    CreateTodo
  },
  methods: {
    addTodo (todo) {
      this.todos.push(todo)
    }
  },
  computed: {
    ...mapGetters({
      todos: 'getTodos'
    })
  },
  data: function () {
    return {
      message: 'Hello Vue.js!'
    }
  },
  created () {
  },
  mounted () {
    this.message = 'Hello I changed'
  }
}
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  body {
    margin: 0;
  }
  #nav a {
    font-weight: bold;
    color: #2c3e50;
    line-height: 60px;
  }
</style>
