<template>
    <table class="table">
    <thead class="thead-dark">
      <h1 class="green--text">All categories</h1>
     <tr>
          <td>Id</td>
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
            <i @click="Del(category.id)" class="fa-solid fa-trash"> </i> 
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
    created() {
    let d = this;
    axios.get('https://inventory-system-1e4c2-default-rtdb.firebaseio.com/item.json').then(function (data) {
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
  methods:{
      Del(id){
      axios.delete('https://inventory-system-1e4c2-default-rtdb.firebaseio.com/item/'+id+'.json').then(function(data){
      console.log(data)
      })
      this.$router.push({name:'allcategory'})
    },
  }
}
</script>

<style>

</style>