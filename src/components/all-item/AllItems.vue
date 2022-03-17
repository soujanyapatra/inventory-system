<template>
  <table class="table">
  <thead class="thead-dark">
  <h2 class="brown--text"><i class="fa-solid fa-house blue--text" @click="gotohome()"></i>All Items</h2>
    <tr>
      <th scope="col"><i class="fa-regular fa-id-badge"></i> ID</th>
      <th scope="col">Name</th>
      <th scope="col">Category</th>
      <th scope="col">Description</th>
      <th scope="col">Price </th>
      <th scope="col">Status </th>
      <th scope="col">Edit </th>
      <th scope="col">Delete </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in items" :key="item.id">
      <td>{{ item.Id}}</td>
      <td>{{item.Name}}</td>
      <td>{{item.Category}}</td>
      <td>{{item.Description}}</td>
      <td><i class="fa-solid fa-indian-rupee-sign"></i>{{item.Price}}</td>
      <td>{{item.Status}}</td>
      <td><i @click="$router.push({name: 'Edititem', params:{id: item.id}})"  class="fa-solid fa-pen-to-square"></i></td>
      <td>
        <i @click="Delete(item.id)" class="fa-solid fa-trash"></i> 
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
          items:[]
        }
    },
 methods:{
      Delete(id){
      axios.delete('https://inventory-system-1e4c2-default-rtdb.firebaseio.com/newitem/'+id+'.json').then((data)=>{
      console.log(data)
      this.getData();
      })
      this.$router.push({name:'allitems'})
    },
    gotohome(){
      this.$router.push({name:'home'})
    },
    getData(){
      let d = this;
    axios.get('https://inventory-system-1e4c2-default-rtdb.firebaseio.com/newitem.json').then(function (data) {
      var blogsArray = [];
      let blog_data = data.data
      for (let key in blog_data){
        blog_data[key].id = key;
        blogsArray.push(blog_data[key]);
      }
      d.items = blogsArray;
      console.log(d.items);
    })
    }
  },
  mounted() {
     this.getData();
  },
}
</script>
<style>

</style>