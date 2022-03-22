<template>
  <form @submit.prevent="submit">
      <h2 class="green--text">Add new Categories</h2>
      <div class="form-group row">
      <input type="number" placeholder="Enter the ID" v-model="categories.Id" :class="{ 'is-invalid': submitted && $v.categories.Id.$error }"/>
      <div v-if="submitted && !$v.categories.Id.required" class="invalid-feedback">Id is required</div>
      <br><br>
      <input type="text" placeholder="Enter the name" v-model="categories.Name" :class="{ 'is-invalid': submitted && $v.categories.Name.$error }"/>
      <div v-if="submitted && !$v.categories.Name.required" class="invalid-feedback">
       Name is required
      </div>
      <br><br>
      <input type="textarea" placeholder="Enter the description" v-model="categories.Description" :class="{ 'is-invalid': submitted && $v.categories.Description.$error }"/>
     <div v-if="submitted && !$v.categories.Description.required" class="invalid-feedback">Description is required</div>
      <br><br>
     <select v-model="categories.status" :class="{ 'is-invalid': submitted && $v.categories.status.$error }">
          <option v-for="item in status" :key="item"> {{ item }} </option>
     </select>
     <div v-if="submitted && !$v.categories.status.required" class="invalid-feedback">status is required</div>
     <br><br>
      <button class="btn btn-primary">Add this Category</button>
      </div>
  </form>
</template>

<script>
import axios from 'axios'
import { required } from "vuelidate/lib/validators";
export default{
    data(){
        return{
           categories:{
                Id:'',
                Name:'',
                Description:'',
           },
           status:['Active','Inactive'],
           submitted:false
        };
    },
    validations:{
        categories:{
                Id:{ required },
                Name:{ required },
                Description:{ required },
                status:{ required }
           },
    },
    methods:{
        submit(){
            this.submitted = true;

                // stop here if form is invalid
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }
                console.log('submited')
                   axios.post('https://inventory-system-1e4c2-default-rtdb.firebaseio.com/item.json',this.categories)
                   this.$router.push({name:'home'})
                // alert("SUCCESS");
            }
        }
    }





// import useValidate from "@vuelidate/core";
// import { required ,minLength } from "@vuelidate/validators";
// import { reactive ,computed } from 'vue'
// import axios from 'axios'


// export default {
//    setup(){
//       const state = reactive({
//            categories:{
//                Id:'',
//                Name:'',
//                Description:'',
//                status:['Active','Inactive']
//            },
//       });
//         const rules = computed(() => {
//            return{
//                 categories:{
//                     Id:{required},
//                     Name:{ required ,minLength:minLength(2)},
//                     Description:{required , minLength:minLength(3)},
//            },
//         }
//       });
//       const v$ = useValidate( rules, state );
//       return{
//           state,
//           v$,
//       }
//    },
//    data(){
//        return{
//            v$: useValidate(),
//            categories:{
//                Id:'',
//                Name:'',
//                Description:'',
//            },
//            status:['Active','Inactive']
//        }
//    },
//    validations(){
//              return{
//                 categories:{
//                     Id:{required},
//                     Name:{ required },
//                     Description:{required}
//            },
//         } 
//    },
//    methods:{
//        submit(){
        //   this.v$.$validate()
        //   if(!this.v$.$error){
        //          axios.post('https://inventory-system-1e4c2-default-rtdb.firebaseio.com/item.json',this.categories)
        //          this.$router.push({name:'home'})
        //   }
        //   else{
        //       alert('Form failed validation')
    //          this.$v.$touch();
    //             if (this.$v.$invalid) {
    //                 return;
    //             }
    //             axios.post('https://inventory-system-1e4c2-default-rtdb.firebaseio.com/item.json',this.categories)
    //             this.$router.push({name:'home'})
    //       }
    //    }
    // }
</script>

<style>

</style>