<template>
  <body>
    <div>
    <section>
        <div class="curve"></div>
    </section>
    <div>
        <nav id="homenav">
          <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">
            <a router-link to="/" draggable="false"><img src="@/assets/images/white-frame-free-png.png" class="logo"
                    draggable="false"></a>
                    <ul>
          <li><router-link to="/Register"><a>Register</a></router-link></li>
        <li><router-link to="/Login"><a>Login</a></router-link></li>
      
    </ul>
        </nav>
    </div>
    <div class="text-container">
        <h2>BUILD <br>YOUR PC<br> NOW</h2>
        <p>The best place to go if you want<br>to build and configure a custom<br>PC as fast and easily as
            possible.</p> 
            <router-link to="/Register">Get Started →</router-link>
    </div> 
    <div id="image-setone">
        <img class="image" src="@/assets/images/amd.jpg" draggable="false">
        <img class="image" src="@/assets/images/geforce.jpg" draggable="false">
    </div>
    <div id="image-settwo">
        <img class="image" src="@/assets/images/case1.jpg" draggable="false">
        <img class="image" src="@/assets/images/motherboard1.jpg" draggable="false"> 
    </div>
    <div id="image-setthree">
        <img class="image" src="@/assets/images/monitor.jpg" draggable="false">
        <img class="image" src="@/assets/images/intel.jpg" draggable="false">
    </div>
  </div>
  </body>
</template>

<script setup>

</script>

<style scoped>
body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 18px;
      margin: 0;
      padding: 0;
      border: 0px;
      height: 100vh;
      background-color: #3f3f3f;
      overflow-x: hidden;
      overflow-y:auto;
  }
  
  nav {
      display: flex;
      align-items: center;
      padding: 20px 10%;
      background-color: #2f2e2d;
  }
  
  #homenav {
      padding-bottom: 100px;
  }
  
  nav .menu {
      width: 25px;
      margin-right: 20px;
      cursor: pointer;
  }
  
  nav .logo {
      width: 60px;
      cursor: pointer;
      z-index: 5;
  }
  
  nav ul {
      flex: 1;
      text-align: right;
  }
  
  nav ul li {
      display: inline-block;
      list-style: none;
      margin: 0 20px;
  }
  
  nav ul li a {
      text-decoration: none;
      color: white;
  
  }
  
  nav ul li a:hover {
      color: #fadf7f;
  }
  
  h1 {
      color: #ffffff;
      background-color: #294d4a;
      margin-top: 0px;
      padding-top: 1rem;
      padding-bottom: 1rem;
      font-size: 140%;
      text-align: center;
  }
  
  .text-container h2 {
      color: #ffffff;
      font-size: 700%;
      font-family: 'Anton', sans-serif;
      line-height: 100%;
      margin-left: 10%;
      margin-top: 0px;
      margin-bottom: 30px;
      position: relative; /* Add position relative */
      z-index: 1; /* Ensure the h2 text has a higher z-index */
  }
  
  .text-container p {
      margin-top: 10px;
      margin-left: 10%;
      color:#ffffff;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 20px;
  }
  
  .text-container a {
      text-decoration: none;
      background: #5fbb97;
      padding: 14px 40px;
      margin-left: 10%;
      display: inline-block;
      color: #fff;
      font-size: 20px;
      border-radius: 30px;
  }
  
  section {
      margin: 0;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 0px;
      padding: 0px 10%;
  }
  
  .curve {
      position: absolute;
      height: 225px;
      width: 100%;
      bottom: 0;
  
  }
  
  .curve::before {
      content: '';
      display: block;
      position: absolute;
      border-radius: 100% 50%;
      width: 54.3%;
      height: 100%;
      background-color: #3f3f3f;
      transform: translate(85%, 137%);
  }
  
  .curve::after {
      content: '';
      display: block;
      position: absolute;
      border-radius: 100% 50%;
      width: 51.7%;
      height: 100%;
      background-color: #2f2e2d;
      transform: translate(-4%, 130%);
      z-index: 0;
  }
  
  table {
      margin-top: 50px;
      border-collapse: collapse;
      width: 70%;
      margin-left: 15%;
      box-shadow: 0 .1rem 1rem #000;
      border-radius: 1rem;
      color: #fff;
      /*border: 3px double hotpink;*/
  }
  
  th,
  td {
      height: 60px;
      padding: 0.6rem;
      text-align: left;
      /*border: 1px dashed hotpink;*/
  }
  
  th {
      background-color: #2f2e2d;
  }
  
  tbody tr:hover {
      background-color: #3336;
  }
  
  .status {
      margin-left: 37%;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      text-align: center;
      box-shadow: 0 .1rem .2rem #000;
  }
  
  .status.compatiable {
      background-color: #2a6863;
  }
  
  .status.uncompatiable {
      background-color: #ca3c3c;
  }
  
  a {
      color: #fff;
      text-decoration: none;
  }
  
  a:hover {
      color: #fadf7f;
  }
  
  .image1,
  .image2 {
      height: 30vmin;
      width: 40vmin;
      object-fit: cover;
      object-position: center;
      border-radius: 15%;
      filter: drop-shadow(10px 10px 10px #2d2f2e)
  }
  
  #image-setone {
      display: flex;
      gap: 10vmin;
      position: absolute;
      left: 49%;
      top: 15%;
      border-radius: 100% 50%;
  }
  
  #image-settwo {
      display: flex;
      gap: 10vmin;
      position: absolute;
      left: 38%;
      top: 35%;
      border-radius: 100% 50%;
  }
  
  #image-setthree {
      display: flex;
      gap: 10vmin;
      position: absolute;
      left: 49%;
      top: 60%;
      border-radius: 100% 50%;
  }
  
  select {
      box-shadow: 0 .1rem .3rem #000;
      font-size: 18px;
      padding: 0.3em 1.5em;
      background: #2f2e2d;
      color: #fff;
      border: none;
  }
  
  .custom-select {
      margin-top: 20px;
      margin-left: 45%;
      margin-right: 45%;
  }
  
  .rectangle-container {
      display: flex;
      justify-content: space-between;
  }
  
  .rectangle {
      flex: 1;
      height: 700px;
      background-color: #2f2e2d;
      margin: 5%;
      border-radius: 1% 1%;
      filter: drop-shadow(10px 10px 10px #2f2e2d)
  }
  
  .info {
      position: absolute;
      top: 4%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #ffffff
  }

  @media (max-width: 1500px) {
  .text-container h2 {
    margin-right: 70%;
  }
}

@media (max-width: 1200px) {
  .image2 {
    display: none;
  }
}

@media (max-width: 950px) {
  #image-settwo {
    left: 44%;
  }
}

@media (max-width: 900px) {
  .curve {
    display: none;
  }
  nav {
    padding: 20px 5%;
  }
  #homenav {
      padding-bottom: 25px;
  }
  h2 {
    padding-top: 20px;
  }
  .image1 {
    margin-top: 30px;
  }
}

@media (max-width: 780px) {
  #image-setone,
  #image-settwo,
  #image-setthree {
    display: none;
  }
}

@media (max-width: 730px) {
    nav ul li {
        margin: 5px;
    }
}

@media (max-width: 600px) {
  #image-setone,
  #image-settwo,
  #image-setthree {
    display: none;
  }
}

@media (max-width: 575px) {
    nav ul li {
        display: block;
        margin: 0;
    }
}
</style>
