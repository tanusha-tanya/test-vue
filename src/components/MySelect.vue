<template>  
    <div id="app">
      <v-app id="inspire">
        <v-container fluid grid-list-xl>
          <v-layout wrap align-center>
            <v-flex xs12 sm6>
              <v-select
                :items="items"
                label="Водительские категории"
                
                multiple
              ></v-select>        
            </v-flex>            
          </v-layout>
        </v-container>
      </v-app>
    </div>  
</template>
<script>
export default {
   name: 'MySelect',
   props: ['items'],
}
</script>
