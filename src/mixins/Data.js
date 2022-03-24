import axios from '../axios/axios.js'
export default{
    data(){
        return{
            categories:{
                Id:'',
                Name:'',
                Description:'',
           },
            items:{
                Id:'',
                Name:'',
                Category:'',
                Description:'',
                Price:'',
            },
            status:['Active','Inactive'],
            Status:['Active','Inactive'],
            submitted:false
        };
    },
    methods:{
         Submit()
        {
            this.submitted = true;
              this.$v.$touch();
                 if (this.$v.$invalid) {
                     return;
                 }
               console.log('submitted')
             //   alert('Submit')
           axios.post('newitem.json',this.items)
           this.$router.push({name:'home'})
        },
        submit(){
            this.submitted = true;

                // stop here if form is invalid
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }
                console.log('submited')
                   axios.post('item.json',this.categories)
                   this.$router.push({name:'home'})
                // alert("SUCCESS");
            },
        }
    }
    // })

   
  