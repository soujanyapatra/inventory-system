<template>
   <form >
      <h1 class="green--text">Edit the data </h1>
      <div class="form-group row">
      <input type="number" placeholder="Enter the ID" v-model="categories.Id">
      <br><br>
      <input type="text" placeholder="Enter the name" v-model="categories.Name">
      <br><br>
      <input type="textarea" placeholder="Enter the description" v-model="categories.Description">
      <br><br>
     <select v-model="categories.status">
          <option v-for="item in status" :key="item"> {{ item }} </option>
     </select>
     <br><br>
      <button @click.prevent="Submit" class="btn btn-primary">Add this Category</button>
      </div>
  </form>
</template>

<script>
import axios from 'axios'
export default {
   data(){
       return{
           categories:{
               Id:'',
               Name:'',
               Description:'',
           },
           status:['Active','Inactive']
       }
   },
  mounted() {
    this.getData();
  },
  methods:{
    Submit(){
      axios.put('https://inventory-system-1e4c2-default-rtdb.firebaseio.com/item/'+this.$route.params.id+'.json',this.categories)
      this.$router.push({name:'allcategory'})
    },
    getData(){
      let d = this
      axios.get('https://inventory-system-1e4c2-default-rtdb.firebaseio.com/item/'+this.$route.params.id+'.json').then(function(response){
        d.categories = response.data;
      })
    },
  }
}
</script>

<style>

</style>