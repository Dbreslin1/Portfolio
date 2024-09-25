<template>
  <body>
    <div>
      <nav>
        <router-link to="/"><img src="@/assets/images/white-frame-free-png.png" class="logo" draggable="false"></router-link>
        <ul>
          <!--<li><router-link to="/Builder">Builder</router-link></li>
          <li><router-link to="/Comparison">Comparison</router-link></li>
          <li><router-link to="/Support">Support</router-link></li>-->
          <li><router-link to="/Register"><a>Register</a></router-link></li>
          <li><router-link to="/Login"><a>Login</a></router-link></li>
        </ul>
      </nav>
      <div id="MainForm" class="w-25 m-4">
        <h2 class="mb-3">Login User</h2>
        <div class="form-floating mb-3">
          <label for="floatingInput">Email address: </label>
          <input type="email" class="form-control" v-model="email" placeholder="name@example.com">
        </div>
        <div class="form-floating mb-3">
          <label for="floatingPassword">Password: </label>
          <input type="password" class="form-control" v-model="password" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary mb-3" @click="login">Login</button>

        <div class="sign-upsection">
          <p class="custom-font">Don't have an account? Sign up</p>
          <router-link to="/Register"><button type="button" class="btn btn-primary me-2 mb-3">Sign Up</button></router-link>

        </div>
        <!--<p class="custom-font">Don't have an account? Create one:</p>-->

        <!--<router-link v-if="error" to="/Login"><button type="button" class="btn btn-danger me-2">Error! Try Again</button></router-link>
        <router-link v-else to="/Register"><button type="button" style="float: left;" class="btn btn-primary me-2">Sign Up</button></router-link>-->

      </div>
    </div>
  </body>
</template>

<script>
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
export default {
  name: "Login", data() {
      return {
          email: "",
          password: "",
          error: false
      }
  },
  methods: {
      login() {

        // Your web app's Firebase configuration
     const firebaseConfig = {
       apiKey: "AIzaSyBa09ABvbjGW0sAK0xHcJknr1QQQgx4_ug",
       authDomain: "ct216-project-57225.firebaseapp.com",
       projectId: "ct216-project-57225",
       storageBucket: "ct216-project-57225.appspot.com",
       messagingSenderId: "33393096037",
       appId: "1:33393096037:web:c0d77b7619216bdd1fdd8c"
     };

     // Initialize Firebase
     const app = initializeApp(firebaseConfig);
     const db = getDatabase();
     const auth = getAuth(app);

          signInWithEmailAndPassword(auth, this.email, this.password)
              .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  console.log(user)
                  this.$router.push({path: '/HomePage'})
                  
              })
              .catch((error) => {
                  const errorCode = error.code; 
                  const errorMessage = error.message; 
                  alert(error.message);
                  console.log(errorCode)
                  console.log(errorMessage)
                            
              });
      }
  }
}
</script>




<style scoped>
/* Component-specific styles go here */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 18px;
    margin: 0;
    padding: 0;
    border: 0px;
    height: 100vh;
    background-color: #3f3f3f;
    overflow-x:hidden;
    overflow-y:auto;
}

nav {
  display: flex;
  align-items: center;
  padding: 20px 10%;
  background-color: #2f2e2d;
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

#MainForm {
  color: white;
  width: 80%;
  height: 200px;
  margin: 50px auto;
  background-color: #292b29;
  border-radius: 10px;
  box-shadow: 0 .1rem .3rem #000;
  text-align: center;
}

/* Form input styles */
.form-floating {
  margin-bottom: 20px;
}

.form-floating label {
  color: white;
}

.form-control {
  border-radius: 6px;
}

/* Button container styles */
.button-container {
  display: flex;
  justify-content: center;
}

/* Button styles */
.btn {
  margin: 0 10px;
}

.btn-primary {
  background-color: #294d4a;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  color: #fff;
}

.btn-primary:hover {
  background-color: #fadf7f;
  color: black;
}

.btn-danger {
  background-color: #ca3c3c;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  color: #fff;
}

.btn-danger:hover {
  background-color: #ff6961;
  color: black;
}

@media (max-width: 410px) {
  #MainForm {
    width: 100%;
  }
}

@media (max-width: 327px) {
  #MainForm {
    height: 250px;
  }
  .form-floating {
    width: 100%;
  }
  .form-floating label {
    display: block;
  }
}

</style>
