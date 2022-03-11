<template>
  <form >
      <h1 class="green--text">Add item</h1>
      <div class="form-group row">
      <input type="number" placeholder="Enter the ID" v-model="items.Id">
      <br><br>
      <input type="text" placeholder="Enter the name" v-model="items.Name">
      <br><br>
      <input type="text" placeholder="Enter the Category" v-model="items.Category">
      <br><br>
       <input type="text" placeholder="Enter the Description" v-model="items.Description">
      <br><br>
       <input type="number" placeholder="Enter the price" v-model="items.Price">
      <br><br>
     <select v-model="items.Status">
          <option v-for="value in Status" :key="value"> {{ value }} </option>
     </select>
     <br><br>
      <button @click.prevent="Upload" class="btn btn-primary">Add this Items</button>
      </div>
  </form>
</template>

<script>
import axios from 'axios'
export default {
   data(){
       return{
           items:{
               Id:'',
               Name:'',
               Category:'',
               Description:'',
               Price:'',
           },
           Status:['Active','Inactive']
       }
   },
   methods:{
       Upload(){
          axios.post('https://inventory-system-1e4c2-default-rtdb.firebaseio.com/newitem.json',this.items)
          this.$router.push({name:'home'})
       }
   }
}
</script>

<style>

</style>