<template>
  <div class="Login">
    <v-container class="login">
      <v-row class="login">
        <v-col>
          <v-btn class="login" text large v-on:click="Login()">
            Login
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import OneWallet from "../javascript/OneWallet.js";
import store from "../store";
import hmy from "../javascript/hmy";

export default {
  name: "Login",
  props: {
    msg: String
  },
  data() {
    return {};
  },
  methods: {
    Login: async function() {
      const wallet = new OneWallet();
      await wallet.signin();
      store.commit("setUserAddress", wallet.address);
      store.commit("setUserWallet", wallet);
      store.commit("hasSignedIn", true);
    },
    initializeContract: async function(contract, address) {
      const abi = contract.abi;
      const contractAddress = address;
      const contractInstance = hmy.contracts.createContract(
        abi,
        contractAddress
      );
      return contractInstance;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  margin-left: auto;
  margin-right: auto;
}
</style>
