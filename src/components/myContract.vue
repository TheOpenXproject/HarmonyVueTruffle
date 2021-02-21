<template>
  <div class="MyContract">
    <v-container justify-center width="80%">
      <v-row>
        <v-col>
          <v-btn large v-on:click="InteractWithContract()">
            Get Name
          </v-btn>
        </v-col>
        <v-col>
          {{ contractName }}
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field label="setname" v-model="name" outlined></v-text-field>
        </v-col>
        <v-col>
          <v-btn large v-on:click="SetName()">
            Set Name
          </v-btn>
        </v-col>
      </v-row>
      <v-row>{{ name }}</v-row>
    </v-container>
  </div>
</template>

<script>
import store from "../store";
import hmy from "../javascript/hmy";
import myContract from "../../build/contracts/MyContract.json";

export default {
  name: "MyContract",
  props: {
    str: String
  },
  data() {
    return {
      contractName: null,
      name: null
    };
  },
  methods: {
    InteractWithContract: async function() {
      const wallet = store.state.wallet;
      const contractAddr = "0x549a497C1ba8fC53309bEe11a1B051Cd2B075E54"; //Deployed contract address

      const unattachedContract = await this.initializeContract(
        myContract,
        contractAddr
      );
      const contract = wallet.attachToContract(unattachedContract);

      const Name = await contract.methods.getname().call();
      this.contractName = Name;
    },
    SetName: async function() {
      const wallet = store.state.wallet;
      const contractAddr = "0x549a497C1ba8fC53309bEe11a1B051Cd2B075E54"; //Deployed contract address
      let options = {
        gasPrice: 1000000000,
        gasLimit: 100500
      };

      const unattachedContract = await this.initializeContract(
        myContract,
        contractAddr
      );
      const contract = wallet.attachToContract(unattachedContract);
      await contract.methods.setname(this.name).send(options);
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
.MyContract {
  margin-left: auto;
  margin-right: auto;
}
</style>
