<template>
    <div>
        <h3>Task List</h3>
        <div v-for="item in getData" :key="item.id">
            <h4>{{item.name}}</h4>
            <p>{{item.description}}</p>
        </div>
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

