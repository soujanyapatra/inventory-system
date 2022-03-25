<template>
  <form >
      <h2 class="green--text">Edit the Item</h2>
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
      <button @click.prevent="Submit" class="btn btn-primary">submit</button>
      </div>
  </form>
</template>

<script>
// import axios from 'axios'
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
    async Submit(){
      await this.$axios.put('newitem/'+this.$route.params.id+'.json',this.items)
      this.$router.push({name:'allitems'})
      this.getData();
    },
  },
  async mounted(){
         let d = this
         const result = await this.$axios.get('newitem/'+this.$route.params.id+'.json')
         d.items=result.data
  },
}
</script>

<style>

</style>