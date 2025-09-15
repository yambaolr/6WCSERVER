<script setup>
  import Student from './components/Student.vue'
  import Admin from './components/Admin.vue'
</script>

<template>
  <main>
    <nav>
        <router-link to='/student' class="navItem">Student Form</router-link>
        <router-link to='/admin' class="navItem">Admin Form</router-link>
    </nav>
    <router-view></router-view>
  </main>
</template>

<style scoped>
  nav {
    display: flex;
    justify-content: center;
    gap: 2em;
    margin-top: 1.5em;
  }

  .navItem {
    padding: 1.5em;
  }

  hr {
    margin-top: 1.5em;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }


</style>
