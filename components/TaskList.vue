<template>
    <div>
        <h3>Task List</h3>
        <div v-for="item in taskList" :key="item.id">
            <v-checkbox v-model="checkbox"></v-checkbox>
            <h4>{{item.name}}</h4>
            <p>{{item.description}}</p>
        </div>
    </div>
</template>

<script>
export default {
    // Getting the state from store should be done through functions
    // Methods inside the `computed` will be cached, while they will not inside `methods`

    // data must be in function form, not object => why? 
    // The following code would not work
    // data: {
    //     taskList () {
    //         return this.$store.state.tasks
    //     }
    // }

    // checkbox binding will be either false or true
    data: function () {
        return {
            taskList : this.$store.state.tasks
        }
    }

}
</script>

<style scoped>

</style>

