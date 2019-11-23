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
                <v-textarea label="Task description" v-model="description"></v-textarea>
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
            name: 'aaa',
            description: ''
        }
    },
    computed: {
        taskName: {
            // when put in this form, I get 'cannot find property .name' => why?
            // () => () {}
            set: function (value) {
                    this.name = value
                },
            get: function () {
                    return this.name
                }
        }
    }
}
</script>

<style scoped>

</style>