<template>
  <body>
   <div>
     <nav>
       <router-link to="/"><img src="@/assets/images/white-frame-free-png.png" class="logo" draggable="false"></router-link>
       <ul>
         <!--<li><router-link to="/Builder">Builder</router-link></li>
         <li><router-link to="/Comparison">Comparison</router-link></li>
         <li><router-link to="/Support">Support</router-link></li>-->
         <li v-if="!userRegistered"><router-link to="/Register"><a>Register</a></router-link></li>
         <li><router-link to="/Login"><a>Login</a></router-link></li>
       </ul>
     </nav>
    <div id="MainForm" class="w-25 m-4">
        <h2 class="mb-3">Register User</h2>
        <div class="form-floating mb-3">
          <label for="email">Email address: </label>
          <input type="email" class="form-control" id="email" v-model="emailInp" placeholder="name@example.com">
        </div>
        <div class="form-floating mb-3">
          <label for="password">Password: </label>
          <input type="password" class="form-control" id="password" v-model="passwordInp" placeholder="Password">
        </div>
        <div class="form-floating mb-3">
          <label for="fName">First Name: </label>
          <input type="text" class="form-control" id="fName" v-model="fnameInp" placeholder="First Name">
        </div>
        <div class="form-floating mb-3">
          <label for="lName">Last Name: </label>
          <input type="text" class="form-control" id="lName" v-model="lnameInp" placeholder="Last Name">
        </div>
        <button type="submit" class="btn btn-primary" @click="registerUser">Create New User</button>
        <!--<router-link v-if="error" to="/Register"><button type="button" class="btn btn-danger me-2">Error! Try Again</button></router-link>
        <router-link v-else to="/Builder"><button type="button" class="btn btn-danger me-2">User Registered Successfully</button></router-link>-->

        <p class="custom-font">Already have an account? Sign in below:</p>
        <router-link to="/Login"><button class="btn btn-primary me-2">Sign In</button></router-link>
    </div>
   </div>
  </body>
 </template>
 
 <script>
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

export default {
  name: "Register", data() {
    return {
      emailInp: "",
      passwordInp: "",
      fnameInp: "",
      lnameInp: "",
      userRegistered: false,
      error: false
    };
  },
  methods: {
    registerUser() {
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

      createUserWithEmailAndPassword(auth, this.emailInp, this.passwordInp)
        .then((credentials) => {
          
          set(ref(db, 'UsersAuthList/' + credentials.user.uid),{
            fname: this.fnameInp,
            lname: this.lnameInp
          });
          this.$router.push({path: '/HomePage'})
        })
        .catch((error) => {
          this.error = true;
          alert(error.message);
          console.log(error.code);
          console.log(error.message);
        });
      this.userRegistered = true;
    },

    saveUserData() {
      const userData = {
        fname: this.fnameInp,
        lname: this.lnameInp
      };

      fetch('https://saveusername-igki44h7vq-uc.a.run.app', {
        method: "POST",
        body: JSON.stringify(userData),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to post user data to the server');
        }
        // Handle success if needed
      })
      .catch(error => {
        console.error('Error posting user data:', error);
      });
    }
  }
    };

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
    color: white;
    overflow-x: hidden;
    overflow-y: auto;
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

/* Form container styles */
#MainForm {
  width: 80%;
  height: 300px;
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
  border-radius: 5px;
}

/* Button styles */
.btn-primary {
  background-color: #294d4a;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  color: #fff;
  margin-right: 10px;
}

.btn-primary:hover {
  background-color: #fadf7f;
  color: black;
}

.btn-primary.me-2 {
  margin-right: 10px;
}

@media (max-width: 410px) {
  #MainForm {
    width: 100%;
  }
}

@media (max-width: 327px) {
  #MainForm {
    height: 385px;
  }
  .form-floating {
    width: 100%;
  }
  .form-floating label {
    display: block;
  }
}

</style>
