<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="links">
      <router-link to="/Products">Our Products</router-link>
      <router-link to="/clients">Our Clients/Customers</router-link>
      <router-link to="/csr">Corporate Social Responsibility</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>


<script>




export default {
 name: 'About',
  components: {
  }
};
</script>



<style scoped>
.links a {
  margin-right: 20px;
}
</style>