<template>  
  <div>                  
    <v-select
      :items="items"
      label="Водительские категории" 
      :value="value"
      @change="changevalue"                 
      multiple
    ></v-select>            
  </div>  
</template>
<script>
export default {
  name: 'MySelect',
  props: ['items', 'value'],
  methods:{
    changevalue(i){       
      this.$emit('changevalue', i)      
    } 
  }
}
</script>
