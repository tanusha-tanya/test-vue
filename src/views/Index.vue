<template> 
  <v-app>
    <MySelect
      :items="items"
      :value="value"
      @changevalue="onchangeValue"
    />
    <span>driverCat: {{driverCat}}</span>    
  </v-app>
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
    value: [],    
  }),
  computed:{    
    driverCat (){     
      return this.$store.getters.driverCat
    }
  },
  mounted(){   
    for(let i = 0; i< this.driverCat.length; i++){
      if(this.driverCat[i] == 2){
        this.value.push(this.items[i])
      }
    }
  },  
  methods:{
    onchangeValue(data){      
      let payload = {
      value:data,
      items:this.items  
    } 
      this.$store.dispatch('changeValue', payload)
    }
  }
}
</script>