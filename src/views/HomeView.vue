<template>
  <nav style="background-color:powderblue;">
    <v-toolbar flat app class="red">
      <v-toolbar-icon @click="drawer=!drawer" class="fa-duotone fa-arrows-rotate"></v-toolbar-icon>
        <h2 class="white--text">Inventory System</h2>
    </v-toolbar>
    <v-navigation-drawer app class="blue" v-model="drawer">
    <router-link to="/itemcategory"> 
      <v-list>
        <v-list-title>
          <v-list-titel-action class="large" mx-4>
               <i class="fa-solid fa-list-check" ></i>
          </v-list-titel-action>
          <v-list-title-content>
            <v-list-list-title class="black--text">Item Category</v-list-list-title>
          </v-list-title-content>
        </v-list-title>
      </v-list>
    </router-link>
      <router-link to="/items">
       <v-list class="large">
        <v-list-title>
          <v-list-titel-action>
             <i class="fa-thin fa-bars-progress"></i>
          </v-list-titel-action>
          <v-list-title-content>
            <v-list-list-title class="black--text">Items</v-list-list-title>
          </v-list-title-content>
        </v-list-title>
      </v-list>
    </router-link>
    </v-navigation-drawer>
    <router-view/>
  </nav>
</template>

<script>

  export default {

    components: {
    
    },
    data(){
      return{
        drawer:false
      }
    }
  }
</script>
