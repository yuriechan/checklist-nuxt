<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6 />
    <TaskList />
  </v-layout>
</template>

<script>
import TaskList from '../components/TaskList'
export default {
  components: {
    TaskList
  }
}
</script>
