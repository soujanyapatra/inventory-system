<template>
  <form >
      <h2 class="green--text">Add new Categories</h2>
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
      <button @click.prevent="Adddata" class="btn btn-primary">Add this Category</button>
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
   methods:{
       Adddata(){
          axios.post('https://inventory-system-1e4c2-default-rtdb.firebaseio.com/item.json',this.categories)
          this.$router.push({name:'home'})
       }
   }
}
</script>

<style>

</style>