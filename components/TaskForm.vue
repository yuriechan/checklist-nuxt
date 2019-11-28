<template>
    <div>
    <h3>Task Form</h3>
     <v-form>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-text-field label="Task name" v-model="taskName"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-textarea label="Task description" v-model="taskDescription"></v-textarea>
            </v-col>
            <v-col cols="6">
                <v-btn color="success" @click="emitToParent">Submit</v-btn>
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
            taskObj: {
                // id propery is currently empty
                id: '',
                name: '',
                description: '',
                checked: false
            }
        }
    },
    computed: {
        taskName: {
            // when put in this form, I get 'cannot find property "name"' => why?
            // () => () {}
            set: function (value) {
                    this.taskObj.name = value
                },
            get: function () {
                    return this.taskObj.name
                }
        },
        taskDescription: {
            set: function (value) {
                    this.taskObj.description = value
            },
            get: function () {
                    return this.taskObj.description
            }
        }
    },
    // is it correct that we store function that does not require to capture the changes to data?
    methods: {
        emitToParent (event) {
            this.$emit('childToParent', this.taskObj)
        }
    }
}
</script>

<style scoped>

</style>