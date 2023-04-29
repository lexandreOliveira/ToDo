<template>
  <v-app id="inspire">


    <v-app-bar
      prominent
      color="teal-darken-4"
      src="https://picsum.photos/1920/1080?random"
      dark
    >
      <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
          ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer =!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Done&Todo</v-toolbar-title>



      <v-spacer></v-spacer>
    </v-app-bar>


    <v-navigation-drawer v-model="drawer">
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-title>John</v-list-item-title>
        <v-list-item-subtitle>john@gmail.com</v-list-item-subtitle>
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