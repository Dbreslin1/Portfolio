<template>
  <body>
    <div>
      <header>
        <div>
          <nav>
            <router-link to="/"><img src="@/assets/images/white-frame-free-png.png" class="logo" draggable="false"></router-link>
            <ul>
              <li><router-link to="/Builder" draggable="false">Builder</router-link></li>
              <li><router-link to="/Comparison" draggable="false">Comparison</router-link></li>
              <li><router-link to="/PreBuild"><a>Build by Budget</a></router-link></li>
              <li><router-link to="/Support" draggable="false">Support</router-link></li>
              <li><a @click="logout" class="logout-btn">Logout</a></li>

      

            </ul>
          </nav>
        </div>
      </header>
      <h1>Choose Your Budget</h1>
    </div>
    <div class="centered">
      <select v-model="selectedBudget">
        <option value="750">€750</option>
        <option value="1150">€1150</option>
        <option value="1400">€1400</option>
        <option value="1750">€1750</option>
      </select>
    </div>
    <button class="btn" @click="build">BUILD</button>
    <div>
      </div>
      <table>
        <thead>
          <tr>
            <th style="width: 20%">Component</th>
            <th>Part Name</th>
            <th style="width: 100px;">Price</th>
            <th style="width: 100px;">Compatibility</th>
            <th style="width: 100px;">Link</th> 
          </tr>
        </thead>
        <tbody>
          <tr> 
            <td><router-link to="/Comparison">Motherboard</router-link></td>
            <td>
              {{ selectedMotherboard ? selectedMotherboard.Name : 'Select Budget' }}
            </td>
            <td>{{ selectedMotherboard ? selectedMotherboard.Price: '' }}</td>
            <td></td>
            <td>
    <a :href="selectedMotherboard ? selectedMotherboard.AmazonLink : ''" target="_blank" v-if="selectedMotherboard && selectedMotherboard.AmazonLink">Amazon</a>
  </td>
          </tr>
          <tr>
            <td><router-link to="/Comparison">CPU</router-link></td>
            <td>
              {{ selectedCpu ? selectedCpu.Name: 'Select Budget' }}
            </td>
            <td>{{ selectedCpu ? selectedCpu.Price: '' }}</td>
            <td></td>
            <td>
    <a :href="selectedCpu ? selectedCpu.AmazonLink : ''" target="_blank" v-if="selectedCpu && selectedCpu.AmazonLink">Amazon</a>
  </td>
          </tr>
          <tr> 
            <td><router-link to="/Comparison">Case</router-link></td>
            <td>
              {{ selectedCase ? selectedCase.Name: 'Select Budget'}}
            </td>
            <td>{{ selectedCase ? selectedCase.Price : '' }}</td>
            <td></td>
            <td>
    <a :href="selectedCase ? selectedCase.AmazonLink : ''" target="_blank" v-if="selectedCase && selectedCase.AmazonLink">Amazon</a>
  </td>
          </tr>
          <tr> 
            <td><router-link to="/Comparison">GPU</router-link></td>
            <td>
              {{ selectedGpu ? selectedGpu.Name: 'Select Budget' }}
            </td>
              <td>{{ selectedGpu ? selectedGpu.Price : '' }}</td> <!-- Make sure selectedGpuPrice is correctly bound here -->
              <td></td>
              <td>
    <a :href="selectedGpu ? selectedGpu.AmazonLink : ''" target="_blank" v-if="selectedGpu && selectedGpu.AmazonLink">Amazon</a>
  </td>
          </tr>
          <tr> 
            <td><router-link to="/Comparison">RAM</router-link></td>
            <td>
               {{ selectedRAM ? selectedRAM.Name: 'Select Budget' }}
            </td>
            <td>{{ selectedRAM ? selectedRAM.Price : '' }}</td>
            <td></td>
            <td>
    <a :href="selectedRAM ? selectedRAM.AmazonLink : ''" target="_blank" v-if="selectedRAM && selectedRAM.AmazonLink">Amazon</a>
  </td>
          </tr>
          <tr> 
            <td><router-link to="/Comparison">Storage</router-link></td>
            <td>
               {{ selectedStorage ? selectedStorage.Name: 'Select Budget' }}
            </td>
            <td>{{ selectedStorage ? selectedStorage.Price : '' }}</td>
            <td></td>
            <td>
    <a :href="selectedStorage ? selectedStorage.AmazonLink : ''" target="_blank" v-if="selectedStorage && selectedStorage.AmazonLink">Amazon</a>
  </td>
          </tr>
          <tr> 
            <td><router-link to="/Comparison">PSU</router-link></td>
            <td>
               {{ selectedPSU ? selectedPSU.Name: 'Select Budget' }}
            </td>
            <td>{{ selectedPSU ? selectedPSU.Price : '' }}</td>
            <td></td>
            <td>
              <a :href="selectedPSU ? selectedPSU.AmazonLink : ''" target="_blank" v-if="selectedPSU && selectedPSU.AmazonLink">Amazon</a>
  </td>
          </tr>
          <tr class="total-row">
            <td>Total</td>
            <td></td>
            <td>{{ totalPrice }}</td>
            <td>
              <div v-if="compatibility !== null" :class="{'status': true, 'compatible': compatibility === 'Compatible', 'incompatible': compatibility !== 'Compatible'}">
                <span v-if="compatibility === 'Compatible'">✔</span>
                <span v-else>✘</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
</template>

<script>
export default {
  name: 'ChooseYourParts',
  data() {
    return {
      cpus: [],
      motherboards: [],
      cases: [],
      gpus: [],
      rams: [],
      storages: [],
      psus: [],
      selectedGpu: null,  // Initialize selectedGpu to null
      selectedCase: null,  // Initialize selectedGpu to null
      selectedCpu: null,
      selectedMotherboard: null,
      selectedRAM: null,
      selectedStorage: null,
      selectedPSU: null,
      compatibility: null,
      totalPrice: 0,
      selectedBudget: '' // Added selectedBudget property
    };
  },
  mounted() {
    this.fetchCPUs();
    this.fetchMotherboards();
    this.fetchCases();
    this.fetchGpus();
    this.fetchRAM();
    this.fetchStorages();
    this.fetchPsus();
  },
  methods: {

    logout(){
    if(confirm("Are you sure you want to logout?")){
        this.$router.push('/');
    }
    },

    async fetchCPUs() {
      try {
        const response = await fetch('https://getcpu-igki44h7vq-uc.a.run.app');
        const data = await response.json();
        console.log(data); // Log the response data to the console
        this.cpus = data; // Assuming data is an array of CPU objects with 'id' and 'Name' properties
      } catch (error) {
        console.error('Error fetching CPUs:', error);
      }
    },
    async fetchMotherboards() {
      try {
        const response = await fetch('https://getmotherboard-igki44h7vq-uc.a.run.app');
        const data = await response.json();
        console.log(data); // Log the response data to the console
        this.motherboards = data; // Assuming data is an array of motherboard objects with 'id' and 'Name' properties
      } catch (error) {
        console.error('Error fetching motherboards:', error);
      }
    },
    async fetchCases() {
      try {
        const response = await fetch('https://getcase-igki44h7vq-uc.a.run.app');
        const data = await response.json();
        console.log(data); // Log the response data to the console
        this.cases = data; // Assuming data is an array of cases objects with 'id' and 'Name' properties
      } catch (error) {
        console.error('Error fetching Cases:', error);
      }
    },
    async fetchGpus() {
      try {
        const response = await fetch('https://getgpu-igki44h7vq-uc.a.run.app');
        const data = await response.json();
        console.log(data); // Log the response data to the console
        this.gpus = data; // Assuming data is an array of Gpus objects with 'id' and 'Name' properties
      } catch (error) {
        console.error('Error fetching Gpus:', error);
      }
    },
    async fetchRAM() {
      try {
        const response = await fetch('https://getram-igki44h7vq-uc.a.run.app');
        const data = await response.json();
        console.log(data); // Log the response data to the console
        this.rams = data; // Assuming data is an array of rams objects with 'id' and 'Name' properties
      } catch (error) {
        console.error('Error fetching Rams:', error);
      }
    },
    async fetchStorages() {
      try {
        const response = await fetch('https://getstorage-igki44h7vq-uc.a.run.app');
        const data = await response.json();
        console.log(data); // Log the response data to the console
        this.storages = data; // Assuming data is an array of storages objects with 'id' and 'Name' properties
      } catch (error) {
        console.error('Error fetching Storages:', error);
      }
    },
    async fetchPsus() {
      try {
        const response = await fetch('https://getpsu-igki44h7vq-uc.a.run.app');
        const data = await response.json();
        console.log(data); // Log the response data to the console
        this.psus = data; // Assuming data is an array of Psus objects with 'id' and 'Name' properties
      } catch (error) {
        console.error('Error fetching Psus:', error);
      }
    },
    checkComp() {
      if (this.selectedCpu && this.selectedMotherboard) {
        if ((this.selectedCpu.Compatibility === this.selectedMotherboard.Compatibility) || (this.selectedCpu.Compatibility === this.selectedMotherboard.Compatibility1)) {
          this.compatibility = 'Compatible';
        } else {
          this.compatibility = 'Not Compatible';
        }
      } else {
        this.compatibility = null; // Reset to null if button is not pressed
      }
      this.totalPrice = this.calculateTotalPrice();
    },
    calculateTotalPrice() {
      let totalPrice = 0;
      if (this.selectedMotherboard) {
        totalPrice += parseFloat(this.selectedMotherboard.Price);
      }
      if (this.selectedCpu) {
        totalPrice += parseFloat(this.selectedCpu.Price);
      }
      if (this.selectedGpu) {
        totalPrice += parseFloat(this.selectedGpu.Price);
      }
      if (this.selectedCase) {
        totalPrice += parseFloat(this.selectedCase.Price);
      }
      if (this.selectedRAM) {
        totalPrice += parseFloat(this.selectedRAM.Price);
      }
      if (this.selectedPSU) {
        totalPrice += parseFloat(this.selectedPSU.Price);
      }
      if (this.selectedStorage) {
        totalPrice += parseFloat(this.selectedStorage.Price);
      }
      return totalPrice;
    },
    async build() {
  // Here you should write logic to populate selected* variables based on the selected budget
  // For example:
  if (this.selectedBudget === '750') {
    // Find the motherboard with Budget = 750
    this.selectedMotherboard = this.motherboards.find(motherboard => motherboard.Budget === '750');
    // Find the CPU with Budget = 750
    this.selectedCpu = this.cpus.find(cpu => cpu.Budget === '750');
    // Find the case with Budget = 750
    this.selectedCase = this.cases.find(caseItem => caseItem.Budget === '750');
    // Find the GPU with Budget = 750
    this.selectedGpu = this.gpus.find(gpu => gpu.Budget === '750');
    // Find the RAM with Budget = 750
    this.selectedRAM = this.rams.find(ram => ram.Budget === '750');
    // Find the storage with Budget = 750
    this.selectedStorage = this.storages.find(storage => storage.Budget === '750');
    // Find the PSU with Budget = 750
    this.selectedPSU = this.psus.find(psu => psu.Budget === '750');
  }
  else if (this.selectedBudget === '1150') {
    // Find the motherboard with Budget = 750
    this.selectedMotherboard = this.motherboards.find(motherboard => motherboard.Budget === '1150');
    // Find the CPU with Budget = 750
    this.selectedCpu = this.cpus.find(cpu => cpu.Budget === '1150');
    // Find the case with Budget = 750
    this.selectedCase = this.cases.find(caseItem => caseItem.Budget === '1150');
    // Find the GPU with Budget = 750
    this.selectedGpu = this.gpus.find(gpu => gpu.Budget === '1150');
    // Find the RAM with Budget = 750
    this.selectedRAM = this.rams.find(ram => ram.Budget === '1150');
    // Find the storage with Budget = 750
    this.selectedStorage = this.storages.find(storage => storage.Budget === '1150');
    // Find the PSU with Budget = 750
    this.selectedPSU = this.psus.find(psu => psu.Budget === '1150');
  } else if (this.selectedBudget === '1400') {
    // Logic for budget 1000
    // Find the motherboard with Budget = 750
    this.selectedMotherboard = this.motherboards.find(motherboard => motherboard.Budget === '1400');
    // Find the CPU with Budget = 750
    this.selectedCpu = this.cpus.find(cpu => cpu.Budget === '1400');
    // Find the case with Budget = 750
    this.selectedCase = this.cases.find(caseItem => caseItem.Budget === '1400');
    // Find the GPU with Budget = 750
    this.selectedGpu = this.gpus.find(gpu => gpu.Budget === '1400');
    // Find the RAM with Budget = 750
    this.selectedRAM = this.rams.find(ram => ram.Budget === '1400');
    // Find the storage with Budget = 750
    this.selectedStorage = this.storages.find(storage => storage.Budget === '1400');
    // Find the PSU with Budget = 750
    this.selectedPSU = this.psus.find(psu => psu.Budget === '1400');

  } else if (this.selectedBudget === '1750') {
    // Logic for budget 1500
    // Find the motherboard with Budget = 750
    this.selectedMotherboard = this.motherboards.find(motherboard => motherboard.Budget === '1750');
    // Find the CPU with Budget = 750
    this.selectedCpu = this.cpus.find(cpu => cpu.Budget === '1750');
    // Find the case with Budget = 750
    this.selectedCase = this.cases.find(caseItem => caseItem.Budget === '1750');
    // Find the GPU with Budget = 750
    this.selectedGpu = this.gpus.find(gpu => gpu.Budget === '1750');
    // Find the RAM with Budget = 750
    this.selectedRAM = this.rams.find(ram => ram.Budget === '1750');
    // Find the storage with Budget = 750
    this.selectedStorage = this.storages.find(storage => storage.Budget === '1750');
    // Find the PSU with Budget = 750
    this.selectedPSU = this.psus.find(psu => psu.Budget === '1750');
  } else {
    // Handle invalid selection
    console.error('Invalid budget selection');
    return;
  }

    // Call checkComp method to update compatibility and total price
    this.checkComp();
  }
  }
}
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
    background-color: #3f3f3f;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
}
.btn {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 5%;
  margin-left: 47.5%;
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
}

.text-container p {
    margin-top: 0px;
    margin-left: 10%;
    color: #9da2ab;
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
    z-index: -1;
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

.image {
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
    width: 500px;
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
.status {
  font-size: 20px;
}

.compatible {
  color: green;
}

.incompatible {
  color: red;
}

tr.total-row {
  border-top: 1px solid white;
}

.centered {
text-align: center;
align-items: center; /* Set the container height to full viewport height */
}
.phone-compatability {
  visibility: collapse;
}

@media (max-width: 650px) {
  table {
    width: 100%;
    margin: 0;
  }
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

@media (max-width: 444px) {
  .compatibility-column,
  .status-column {
    display: none;
  }
  .phone-compatability {
    color: white;
    text-align: center;
    visibility: visible;
  }
}
</style>
