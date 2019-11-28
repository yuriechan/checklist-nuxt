<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6 />
    <TaskList />
    <TaskForm v-on:childToParent="onChildClick"/>
  </v-layout>
</template>

<script>
import TaskList from '../components/TaskList'
import TaskForm from '../components/TaskForm'
export default {
  data () {
    return {
      fromChild: ''
    }
  },
  components: {
    TaskList,
    TaskForm
  },
  methods: {
    onChildClick(value) {
      this.fromChild = value
      console.log(this.fromChild)
    }
  }
}
</script>
