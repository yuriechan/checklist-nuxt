<template>
    <div>
    <h3>Task Form</h3>
     <v-form>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-text-field label="Task name" v-model="taskName" :rules="setTaskName"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-textarea label="Task description" v-model="taskDescription"></v-textarea>
            </v-col>
        </v-row>
    </v-container>
    </v-form>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            taskName: '',
            taskDescription: ''
        }
    },
    computed: {
        setTaskName (value) {
            this.taskName = value
        } 
    }
}
</script>

<style scoped>

</style>