<template>
    <v-container fluid grid-list-xl>
        <v-layout wrap align-center>
            <v-flex xs12 sm6>
              <MySelect
                :items="items"
                />
               <span>driverCat: {{driverCat}}</span>
            </v-flex>            
        </v-layout>
    </v-container>
</template>
<script>
// @ is an alias to /src
import MySelect from '@/components/MySelect.vue'

export default {
  name: 'index',
  components: {
    MySelect
  },
   data: () => ({
    items: ['A', 'B', 'C', 'D', 'E'],    
   // value: [],    
  }),
  computed:{    
    driverCat (){     
      return this.$store.getters.driverCat
    }
  },
  mounted(){   
    /*for(let i = 0; i< this.driverCat.length; i++){
      if(this.driverCat[i] == 2){
        this.value.push(this.items[i])
      }
    };*/
  },  
  watch: {
    /*value: function () {
    let payload = {
      value:this.value,
      items:this.items  
    }       
    this.$store.dispatch('changeValue', payload)
    } */  
  } 
}
</script>