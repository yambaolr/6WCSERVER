<script setup>
  import Student from './components/Student.vue'
  import Admin from './components/Admin.vue'
  impo
</script>

<template>
  <main>
    <router-link to='/student'>Student Form</router-link>
    <router-link to='/admin'>Admin Form</router-link>

    <router-view></router-view>

  </main>
</template>

<style scoped>

</style>
