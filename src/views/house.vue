<template>
  <div class="home">
    <h1>These are my users</h1>
    <h3>Users are:</h3>
    <div class="links">
      <router-link
        v-for="(user, index) in allUsers"
        :key="index"
        :to="{ name: 'users', params: { id: `${user.name}` } }"
        >{{ user.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home1",
  data: () => ({
    allUsers: [
      { id: 1, name: "Michael" },
      { id: 2, name: "Falila" },
      { id: 3, name: "Emmanuel" },
      { id: 4, name: "Albert" },
      { id: 5, name: "Mahya" },
      { id: 6, name: "Samuel" },
      { id: 7, name: "Nancy" },
      { id: 8, name: "David" },
      { id: 9, name: "Caleb" },
      { id: 10, name: "Nadia" },
    ],
  }),
};
</script>

<style scoped>
.home {
  padding: 50px;
}
.home h1 {
  font-size: 24px;
  color: brown;
}
.home h3 {
  margin-top: 20px;
  font: 18px;
  color: brown;
}
.links {
  display: flex;
  flex-direction: column;
}
.links a {
  text-decoration: none;
  margin-top: 5px;
  color: chocolate;
}
</style>