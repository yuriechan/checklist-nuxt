<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6 />
    <TaskList :newTask="newTask"/>
    <TaskForm v-on:childToParent="onChildClick"/>
  </v-layout>
</template>

<script>
import TaskList from '../components/TaskList'
import TaskForm from '../components/TaskForm'
export default {
  data () {
    return {
      newTask: ''
    }
  },
  components: {
    TaskList,
    TaskForm
  },
  methods: {
    onChildClick(value) {
      this.newTask = value
      console.log(this.newTask)
    }
  }
}
</script>
