<template>
    <div>
        <h3>Task List</h3>
        <p v-for="item in getData" :key="item.id">
            {{item.name}}
            {{item.description}}
        </p>
    </div>
</template>

<script>
export default {
    computed: {
        getData () {
            return this.$store.state.tasks
        }
    }
}
</script>

<style scoped>

</style>

