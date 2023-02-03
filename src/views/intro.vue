<template>
    <div class="intro">
        <router-link to="/look">
            <p class="enter">Enter</p>
        </router-link>
        <center>
            <p class="qoute">Your Home Your Choice</p>
        </center>
        
    </div>
        <router-view/>
        
</template>
<style>

.intro {
      background: url("@/assets/doorknob1.png");
      position: absolute;
      width: 1440px;
      height: 1240px;
      right: 0px;
      top: 0px;
  }
.qoute {
    position: absolute;
    width: 720px;
    height: 65px;
    left: 450px;
    top: 100px;



    font-weight: 700;
    font-size: 48px;

    text-align: center;
    color: #640C0C;
}
.enter {
    width: 200px;
    height: 40px;
    border-radius: 40px;
    background-color:#ffff;
    cursor: pointer;
    margin-left: 50%;
    margin-top: 50px;
  
  
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 35px;
    text-align: center;
    color: #640C0C
  }
</style>