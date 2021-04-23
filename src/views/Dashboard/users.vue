<template>
  <div class="user">
    <h1>Welcome to user dashboard</h1>
    <router-link :to="{ name: 'dashboard' }">Go to Dashboard</router-link>
    <br />
    <br />
    <router-link
      :to="{ name: 'dashboard-single-user', params: { id: 'emmanuel' } }"
      >User Emmanuel</router-link
    >
    <router-link
      :to="{ name: 'dashboard-single-user', params: { id: 'falila' } }"
      >User Falila</router-link
    >
    <router-link
      :to="{ name: 'dashboard-single-user', params: { id: 'mahya' } }"
      >User Mahya</router-link
    >
    <router-link
      :to="{ name: 'dashboard-single-user', params: { id: 'albert' } }"
      >User Albert</router-link
    >
    <router-view />
  </div>
</template>

<script>
export default {
  name: "User",
};
</script>

<style></style>