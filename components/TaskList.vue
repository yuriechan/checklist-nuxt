<template>
    <div>
        <h3>Task List</h3>
        <div v-for="item in newTask" :key="item.id">
            <v-checkbox v-model="item.checked" @change="updateTask(item)"></v-checkbox>
            <h4>{{item.name}}</h4>
            <p>{{item.description}}</p>
        </div>
    </div>
</template>

<script>
export default {
    // Getting the state from store should be done through functions
    // Methods inside the `computed` will be cached, while they will not inside `methods`

    // checkbox binding will be either false or true
    props:['newTask'],
    // get data from the original source to mutate later
    methods: {
        updateTask (inTask) {
            for (const task of this.getTasks) {
                if (task.id === inTask.id) {
                    task.checked = inTask.checked
                    break
                }
            }
            this.tasks = this.getTasks.filter((item) => item.checked === false)
        }
    }
}
</script>

<style scoped>

</style>

