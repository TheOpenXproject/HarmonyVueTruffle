<template>
  <v-app id="Home">
    <div>
      <v-app-bar app fixed class="white bars lighten-1">
        <v-toolbar-title>Yes You Can </v-toolbar-title>

        <v-spacer></v-spacer>

        <center><Login v-if="!loggedIn" /></center>

        <v-btn v-if="loggedIn" color="error" v-on:click="logout">logout</v-btn>
      </v-app-bar>

      <div>
        <v-container width="100%" class="justify-center"
          ><MyContract class="justify-center"
        /></v-container>
      </div>

      <!--  -->
    </div>

    <v-container class="logincard" v-if="!loggedIn">
      <v-container>
        <v-row align="center" justify="center" style="height:95vh">
          <v-col
            cols="12"
            lg="4"
            md="4"
            class="white lighten-2 fill-height d-flex flex-column justify-center align-center"
          >
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-app>
</template>

<script>
import Login from "../components/login.vue";
import MyContract from "../components/myContract.vue";
import store from "../store";

export default {
  name: "Home",

  components: {
    Login,
    MyContract
  },
  props: {},
  methods: {
    logout: async function() {
      await window.onewallet.forgetIdentity();
      store.commit("hasSignedIn", false);
    }
  },

  data() {
    return {};
  },
  computed: {
    // a computed getter
    loggedIn: function() {
      // `this` points to the vm instance
      return store.state.signedIn;
    }
  }
};
</script>

<style type="text/css"></style>
