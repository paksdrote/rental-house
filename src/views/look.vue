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
    
    <nav>

    </nav>
  </div>
  <router-view />

<div class="bottom" >
      <div class="poster"  v-for="item in reversedData" :key="item.name">
          <p class="txtInfo">Landlord: {{ item.name }}</p>
          <p class="txtInfo">House address: {{ item.house_address }}</p>
          <p class="txtInfo">Email: {{ item.email }}</p>
          <p class="txtInfo">Phone: {{ item.phone }}</p>
          <p class="txtInfo">Rent fee: {{ item.rent_fee }}</p>  
          <img src="@/assets/image_1.png" alt="">
      </div>
</div>>
</template>

<script>
export default {
  // name: "post",
  // props: ["items"],
  data() {
    return {
      items: JSON.parse(localStorage.getItem('items')) || []
    }
  },
  created() {
    this.arrayData = JSON.parse(localStorage.getItem('items')) || [];
  },
  computed: {
    reversedData() {
      return this.items.slice().reverse();
    }
  },
};
</script>

<style>
/* .optionInPost {
  margin-top: 0px;
  width: 680px;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.5);
  margin-left: 110px;
} */
.logo {
    height: 100;
    background-color: #640c0c;
    height: 100px;
    width: 1440px;
}
.xbtn {
  height: 20px;
  width: 20px;
}
.poster {
  margin-top: 20px;
  width: 680px;
  height: 300px;
  background-color: #c7d1db;
  margin-left: 110px;
}
.txtInfo {
  text-align: left;
  font-weight: right;
  margin-left: 10px;
  top: 20px;
}
.spacing {
  margin-left: 100px;
  padding: 20px;
  nav-left: auto;
}
/* this is the same as post */
.top {
  background-color: #c7d1db;
  position: fixed;
  width: 1440px;
  height: 100px;
  left: 0px;
  top: 0px;
  z-index: 100;
}
.bottom {
  background-image: url(@/assets/background.jpg);
  background-attachment: local;
  background-size: cover;
  top: 92px;
  display: grid;
  grid-template-columns: repeat(2, minmax(20px, 1fr));
  grid-gap: 0px;
  grid-column-gap: 0px;
  background-color: #ffff;
  position: absolute;
  width: 1440px;
  height: 1000px;
  right: 0px;
  
}

.btnLook {
  left: 600px;
  top: 20px;
  cursor: pointer;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
}
.btnPost {
  right: 620px;
  top: 20px;
  cursor: pointer;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
}

.red-indicator {
  color: #640c0c;
}

.green-indicator {
  color: rgb(1, 204, 69);
}

/* until here */
</style>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const activeRouteName = computed(() => route.name);
</script>
