<template>
  <body>
  <div>
    <header>
    <div>
      <nav>
        <router-link to="/HomePage"><img src="@/assets/images/white-frame-free-png.png" class="logo" draggable="false"></router-link>
        <ul>
          <li><router-link to="/Builder"><a>Builder</a></router-link></li>
          <li><router-link to="/Comparison"><a>Comparison</a></router-link></li>
          <li><router-link to="/PreBuild"><a>Build by Budget</a></router-link></li>
          <li><router-link to="/Support"><a>Support</a></router-link></li>
          <li><a @click="logout" class="logout-btn">Logout</a></li>

        </ul>
      </nav>
    </div>
  </header>
    <div class="contact-info">
      <h2>Contact Us</h2>
      <p>Email: support@gmail.com</p>
      <p>Phone: 091 123 4567</p>
      <p>Address: Westside, Galway</p>
    </div>
    <div class="feedback-form">
      <h2>Send Feedback</h2>
      <form @submit.prevent="submitFeedback">
        <label for="feedback">Your Feedback:</label>
        <textarea id="feedback" v-model="feedbackData" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
      
</body>
</template>

<script setup>

import { useRouter } from 'vue-router';
const router = useRouter();
function logout(){
    if(confirm("Are you sure you want to logout?")){
        router.push('/');
    }
}

  import { ref } from 'vue';
  
  const feedbackData = ref('');

  const submitFeedback = () => {
    fetch('https://submitfeedback-igki44h7vq-uc.a.run.app', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ feedback: feedbackData.value })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to submit feedback');
      }
      feedbackData.value = '';
      return response.json();
    })
    .then(data => {
      console.log('Feedback submitted successfully:', data);
      feedbackData.value = ''; // Clear the feedback textarea after submission
    })
    .catch(error => {
      console.error('Error submitting feedback:', error);
    });
  };
</script>

<style scoped>

.logout-btn {
  cursor: pointer; /* Change cursor to a hand on hover */
}

body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 18px;
      margin: 0;
      padding: 0;
      border: 0px;
      height: 100vh;
      background-color: #3f3f3f;
      overflow-x: hidden;
      overflow-y: auto;
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
  
    .contact-info {
      color: white;
      text-align: center;
    }
  
    .feedback-form {
      color: white;
      text-align: center;
      width: 60%;
      margin: 0 auto;
    }
  
    textarea {
      width: 100%;
      height: 300px;
      padding: 10px;
      margin-top: 10px;
      box-sizing: border-box;
      resize: none;
    }
  
    button[type="submit"] {
      padding: 10px 20px;
      background-color: #4ac94e;
      color: white;
      border: none;
      cursor: pointer;
      margin-top: 10px;
    }
  
    button[type="submit"]:hover {
      color: black;
      background-color: #fadf7f;
    }

    @media (max-width: 600px) {
      nav ul li {
        margin: 5px;
    
      }
    }

    @media (max-width: 465px) {
      nav ul li {
        display: block;
        margin: 0;
      }
    }
</style>
