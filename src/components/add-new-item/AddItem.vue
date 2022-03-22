<template>
  <form @submit.prevent="submit">
      <h2 class="green--text">Add item</h2> 
      <div class="form-group row">
      <input type="number" placeholder="Enter the ID" required v-model="items.Id" :class="{ 'is-invalid': submitted && $v.items.Id.$error }"/>
      <div v-if="submitted && !$v.items.Id.required" class="invalid-feedback">Id is required</div>
      <br><br>
      <input type="text" placeholder="Enter the name" required v-model="items.Name" :class="{ 'is-invalid': submitted && $v.items.Name.$error }"/>
      <div v-if="submitted && !$v.items.Name.required" class="invalid-feedback">Name is required</div>
      <br><br>
      <input type="text" placeholder="Enter the Category" required v-model="items.Category" :class="{ 'is-invalid': submitted && $v.items.Category.$error }"/>
      <div v-if="submitted && !$v.items.Category.required" class="invalid-feedback">Category is required</div>
      <br><br>
       <input type="text" placeholder="Enter the Description" required v-model="items.Description" :class="{ 'is-invalid': submitted && $v.items.Description.$error }"/>
      <div v-if="submitted && !$v.items.Description.required" class="invalid-feedback">Description is required</div>
      <br><br>
       <input type="number" placeholder="Enter the price" required v-model="items.Price" :class="{ 'is-invalid': submitted && $v.items.Price.$error }"/>
      <div v-if="submitted && !$v.items.Price.required" class="invalid-feedback">Price is required</div>
      <br><br>
     <select v-model="items.Status" :class="{ 'is-invalid': submitted && $v.items.Status.$error }">
          <option v-for="value in Status" :key="value"> {{ value }} </option>
     </select>
     <div v-if="submitted && !$v.items.Status.required" class="invalid-feedback">Status is required</div>
     <br><br>
      <button class="btn btn-primary">Add this Items</button>
      </div>
  </form>
</template>

<script>
import { required } from "vuelidate/lib/validators";
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
           Status:['Active','Inactive'],
           submitted:false
       };
   },
   validations:{
           items:{
               Id:{ required },
               Name:{ required },
               Category:{ required },
               Description:{ required },
               Price:{ required },
               Status:{ required }
           },  
   },
   methods:{
       submit(){
           this.submitted = true;
             this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }
              console.log('submitted')
            //   alert('Submit')
          axios.post('https://inventory-system-1e4c2-default-rtdb.firebaseio.com/newitem.json',this.items)
          this.$router.push({name:'home'})
       }
   }
}
</script>

<style>

</style>