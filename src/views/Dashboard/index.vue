<template>
  <div class="dashboard">
    <p>Hi</p>
    <h1>Welcome To Dashboard</h1>

    <router-link :to="{ name: 'dashboard-user' }"
      >Go to Dashboard User</router-link
    >
    <br /><br />
    <router-link :to="{ name: 'house' }">Go to Home</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "dashboard",
};
</script>

<style scoped></style>