<template>
  <nav style="background-color:blue;">
    <v-toolbar flat app class="green">
      <v-toolbar-icon @click="drawer=!drawer"><i class="fa-solid fa-align-center"></i></v-toolbar-icon>
        <h1 class="black--text">Inventory System</h1>
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
            <i class="fa-solid fa-align-center"></i>
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
