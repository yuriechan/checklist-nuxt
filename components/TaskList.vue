<template>
    <div>
        <h3>Task List</h3>
        <div v-for="item in getTasks" :key="item.id">
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

    // data must be in function form, not object => why? 
    // The following code would not work
    // data: {
    //     taskList () {
    //         return this.$store.state.tasks
    //     }
    // }

    // checkbox binding will be either false or true
    data: () => {
        return {
            // why would the below code spit error ? (cannot access store with anonymous function)
            // tasks : this.$store.state.tasks,
            tasks: [
                {
                'id': 0,
                'name': 'create repo',
                'description': 'Make sure to install Vuex & Vuetify',
                'checked': false
                },
                {
                'id': 1,
                'name': 'Create Task list component',
                'description': 'Allow user to check and un-check',
                'checked': false
                }
            ]
        }
    },
    // get data from the original source to mutate later
    computed: {
        getTasks () {
            // getting the reference of the original data, but is this necesarry ? 
            return this.tasks
        }
    },
    methods: {
        updateTask (inTask) {
            for (const task of this.getTasks) {
                if (task.id === inTask.id) {
                    task.checked = inTask.checked
                    break
                }
            }
        }
    }

}
</script>

<style scoped>

</style>

