<template>
  <v-app class="mx-4 mb-4">
      <br><br><br><br>
      <v-card class="mx-auto"
    max-width="344"
    outlined>
          <router-link to="/allcategory">
          <h1 class="pink--text">All category</h1>
      </router-link>
      </v-card>
       <br><br><br><br>
     <v-card class="mx-auto"
    max-width="344"
    outlined>
          <router-link to="/addnewcategory">
          <h1 class="pink--text">Add new category</h1>
      </router-link>
     </v-card>
      <router-view></router-view>
  </v-app>
</template>

<script>
export default {

}
</script>

<style>

</style>