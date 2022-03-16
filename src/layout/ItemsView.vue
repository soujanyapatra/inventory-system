<template>
  <nav class="mx-4 mb-4">
     <br><br><br><br>
    <v-card class="mx-auto"
    max-width="344"
    outlined>
      <router-link to="/allitems">
      <h1 class="grey--text">All Items</h1>
    </router-link>
    </v-card  >
     <br><br><br><br>
    <v-card class="mx-auto"
    max-width="344"
    outlined>
      <router-link to="/addnewitem">
      <h1 class="grey--text">Add New Item</h1>
    </router-link>
    </v-card>
    <router-view></router-view>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>