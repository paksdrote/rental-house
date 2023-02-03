<template>
  <div class="top">
    <router-link to="/">
      <p class="btnHome">Home</p>
    </router-link>
    <router-link to="/look">
      <p
        :class="`btnLook ${
          activeRouteName == 'look' ? 'green-indicator' : 'red-indicator'
        }`"
      >
        Look
      </p>
    </router-link>
    <router-link to="/look/post">
      <p
        :class="`btnPost ${
          activeRouteName == 'post' ? 'green-indicator' : 'red-indicator'
        }`"
      >
        Post
      </p>
    </router-link>
    <!-- <div class="poster" v-for="item in items" key="item.name">
      <p class="txtInfo">Name: {{ item.name}}</p>
      <p class="txtInfo">House address: {{ item.house_address }}</p>
      <p class="txtInfo">Email: {{ item.email }}</p>
      <p class="txtInfo">Phone: {{ item.phone }}</p>
      <p class="txtInfo">Rent fee: {{ item.rent_fee }}</p>
  </div>  -->
 
  </div>
  <div class="bottom">
    <!-- user input -->
    <div class="form">
      <input  style="margin-bottom :20px; margin-top: 20px; text-align: center;"  v-model="newItem.name" type="text" placeholder="Name">
    <br>
    <input  style="margin-bottom :20px; text-align: center;" v-model="newItem.house_address" type="text" placeholder="House Adress">
    <br>
    <input  style="margin-bottom :20px; text-align: center;" v-model="newItem.email" type="email" placeholder="Email">
    <br>
    <input  style="margin-bottom :20px; text-align: center;" v-model="newItem.phone" type="text" placeholder="Phone">
    <br>
    <input  style="margin-bottom :20px; right: 0px; text-align: center;" v-model="newItem.rent_fee" type="number" placeholder="Rent Fee">
      <div  action="upload.php" style="text-align: center" method="post" enctype="multipart/form-data">
        <input type="file" name="image">
        <br>
        <input  type="file" name="image">
        <br>
        <input type="file" name="image">
        <br>
      </div>
      <br>
      <button class="btnSubmit" @click="addItem">Post</button>
      <!-- <button class="deleteAll"  @click="deleteAll">Delete All</button> -->
    </div> 
  </div>
</template>
<script >
import look from '../views/look'
export default{
  name: "post",
  data: ()=>{
    return{
      newItem: {
        name: '',
        house_address: '',
        email: '',
        phone: '',
        rent_fee: '',
      },
      items: [],
      
    }

  },
  methods: {
    addItem() {
      this.items.push(this.newItem)
      localStorage.setItem('items', JSON.stringify(this.items))
      this.newItem = {
        name: '',
        house_address: '',
        email: '',
        phone: '',
        rent_fee: ''
      }
    },
  },
  
  created() {
    this.items = JSON.parse(localStorage.getItem('items')) || []
  },
  components: {
    look
  },
 
 }
</script>
<style>
.logo {
    left: 1000px;
}
.btnHome {
  position: absolute;
  left: 400px;
  top: 20px;
  cursor: pointer;
  color:#640c0c;

  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 35px;
  text-align: center;
}
.top {
  background-color: #c7d1db;
  position: fixed;
  width: 1440px;
  height: 100px;
  left: 0px;
  top: 0px;
  z-index: 100;
}

.btnSubmit {
  cursor: pointer;
  background-color: #ffff;
  height: 40px;
  width: 100px;
  border-color: #ffff;
  font-weight: bold; 
}
input::placeholder{
  text-align: Center;
}
input {
  height: 30px;
  width: 500px;
  top : 20px;
}
.form {
  width: 1000px;
  height: 500px;
  background-color: #D9D9D9;
  position: absolute;
  left: 300px;
  top: 50px;
}


.btnLook {
  position: absolute;
  left: 600px;
  top: 20px;
  cursor: pointer;

  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 35px;
  text-align: center;
}
.btnPost {
  position: absolute;
  right: 620px;
  top: 20px;
  cursor: pointer;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 35px;
  text-align: center;
}

.red-indicator {
  color: #640c0c;
}

.green-indicator {
  color: rgb(1, 204, 69);
}
</style>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const activeRouteName = computed(() => route.name);
</script>



