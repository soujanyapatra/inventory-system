<template>
    <table class="table">
    <thead class="thead-dark">
      <h1 class="green--text"><i class="fa-solid fa-house blue--text" @click="gotohome()"></i>All categories</h1>
     <tr>
          <td><i class="fa-regular fa-id-badge"></i> Id</td>
          <td>Name</td>
          <td>Description</td>
          <td>Status</td>
          <td>Edit</td>
          <td>Delete</td>
        </tr>
        <tr v-for="category in categories" :key="category.id">
          <td> {{ category.Id }} </td>
          <td> {{category.Name}} </td>
          <td> {{category.Description}} </td>
          <td> {{category.status}} </td>
          <td><i @click="$router.push({name: 'Edittask', params:{id: category.id}})" class="fa-solid fa-pen-to-square"></i></td>
          <td>
            <i @click="Delete(category.id)" class="fa-solid fa-trash"> </i> 
          </td>
        </tr>
  </thead>
</table>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
          categories:[]
        }
    },
  methods:{
      getData(){
          let d = this;
          axios.get('https://inventory-system-1e4c2-default-rtdb.firebaseio.com/item.json').then((data)=>{
          var blogsArray = [];
          let blog_data = data.data
          for (let key in blog_data){
          blog_data[key].id = key;
          blogsArray.push(blog_data[key]);
        }
         d.categories = blogsArray;
         console.log(d.categories);
     })
    },
    Delete(id){
      axios.delete('https://inventory-system-1e4c2-default-rtdb.firebaseio.com/item/'+id+'.json').then((data)=>{
      console.log(data)
      this.getData();
      })
      // this.$router.push({name:'allcategory'})
    },
    gotohome(){
      this.$router.push({name:'home'})
    }
  },
  mounted() {
               this.getData();
            },
}
</script>

<style>

</style>