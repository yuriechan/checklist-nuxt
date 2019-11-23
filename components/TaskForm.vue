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
                <v-btn color="success" @click="formTaskObject">Submit</v-btn>
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
            counter: 0,
            name: 'aaa',
            description: '',
            taskObj: {
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
                    this.name = value
                },
            get: function () {
                    return this.name
                }
        },
        taskDescription: {
            set: function (value) {
                    this.description = value
            },
            get: function () {
                    return this.description
            }
        },
        formTaskObject: {
            set: function () {
                this.taskObj.id = this.counter
                this.taskObj.name = this.name
                this.taskObj.description = this.description
                counter++
                console.log(this.taskObj)
            },
            get: function () {
                return this.taskObj
            }
        }
    },
    // is it correct that we store function that does not require to capture the changes to data?
    methods: {
    }
}
</script>

<style scoped>

</style>