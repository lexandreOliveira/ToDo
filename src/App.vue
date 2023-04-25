<template>
  <v-app id="inspire">
    <v-app-bar>
      
      <v-toolbar-title>Done-and-Todo</v-toolbar-title>
      
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <v-divider></v-divider>
      
      <v-list-item>
        <v-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-avatar>
      </v-list-item>
  
      <v-divider></v-divider>
        
      <v-list>
        <v-list-item
          v-for="item in items" 
          :key="item.title"
          :to="item.to" 
          link>

          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-main>
      <!--  -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Tarefas', icon: 'mdi-home-city', to:'/' },
          { title: 'My Account', icon: 'mdi-account', to:'/myaccount' },
          { title: 'Users', icon: 'mdi-account-group-outline', to:'/users' },
        ],

      }
    }
  }
</script>