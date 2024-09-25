<template>
  <body>
  <div>
    <nav>
      <router-link to="/HomePage"><img src="@/assets/images/white-frame-free-png.png" class="logo" draggable="false"></router-link>
      <ul>
        <li><router-link to="/Builder">Builder</router-link></li>
        <li><router-link to="/Comparison">Comparison</router-link></li>
        <li><router-link to="/PreBuild"><a>Build by Budget</a></router-link></li>
        <li><router-link to="/Support">Support</router-link></li>
        <li><a @click="logout" class="logout-btn">Logout</a></li>

      </ul>
    </nav>
    <div class="custom-select">
      <select v-model="selectedPart">
        <option value="CPU">CPU</option>
        <option value="Motherboard">Motherboard</option>
        <option value="Case">Case</option>
        <option value="GPU">GPU</option>
        <option value="RAM">RAM</option>
        <option value="PSU">PSU</option>
        <option value="Storage">Storage</option>
      </select>
    </div>
    <div class="rectangle-container">
      <div class="rectangle">
        <p class="info"><b>Pc part 1</b></p>
        <select class="myDropDown1" v-model="pcPart1">
          <option v-for="option in pcPart1Options" :key="option">{{ option }}</option>
        </select>
        <div v-if="selectedPart === 'CPU'">
          <div class="pcPart1details" v-if="pcPart1CPUDetails">
            <p>Cores: {{ pcPart1CPUDetails.Cores }}</p>
            <hr>
            <p>Threads: {{ pcPart1CPUDetails.Threads }}</p>
            <hr>
            <p>Cache: {{ pcPart1CPUDetails.Cache }}</p>
            <hr>
            <p>TDP: {{ pcPart1CPUDetails.TDP }}</p>
            <hr>
            <p>Speed: {{ pcPart1CPUDetails.Speed }}</p>
            <hr>
            <p>Price: {{ pcPart1CPUDetails.Price }}</p>
            <hr>
            <p>Name: {{ pcPart1CPUDetails.Name }}</p>
            <hr>
            <p>Integrated Graphics: {{ pcPart1CPUDetails["Integrated Graphics"] }}</p>
            <hr>
            <p>Compatibility: {{ pcPart1CPUDetails.Compatibility }}</p>
          </div>
         </div>
        <div v-if="selectedPart === 'Motherboard'">
          <div class="motherBoardStyle" v-if="pcPart1MotherboardDetails">
            <p>Bluetooth: {{ pcPart1MotherboardDetails.Bluetooth }}</p>
            <hr>
            <p>Chipset: {{ pcPart1MotherboardDetails.Chipset }}</p>
            <hr>
            <p>Compatibility: {{ pcPart1MotherboardDetails.Compatibility }}</p>
            <hr>
            <p>Ethernet: {{ pcPart1MotherboardDetails.Ethernet }}</p>
            <hr>
            <p>Form Factor: {{ pcPart1MotherboardDetails.FormFactor }}</p>
            <hr>
            <p>M.2 Ports: {{ pcPart1MotherboardDetails["M.2 Ports"] }}</p>
            <hr>
            <p>Output Ports: {{ pcPart1MotherboardDetails["Output Ports"] }}</p>
            <hr>
            <p>Price: {{ pcPart1MotherboardDetails.Price }}</p>
            <hr>
            <p>RAM Slots: {{ pcPart1MotherboardDetails["RAM Slots"] }}</p>
            <hr>
            <p>PCIe 3.0x1 Slots: {{ pcPart1MotherboardDetails["PCIe 3.0x1 Slots"] }}</p>
            <hr>
            <p>PCIe 3.0x16 Slots: {{ pcPart1MotherboardDetails["PCIe 3.0x16 Slots"] }}</p>
            <hr>
            <p>PCIe 4.0x16 Slots: {{ pcPart1MotherboardDetails["PCIe 4.0x16 Slots"] }}</p>
          </div>
        
        </div>
        <div v-if="selectedPart === 'GPU'">
          <div class="pcPart1details" v-if="pcPart1GPUDetails">
            <p>Base Clock: {{ pcPart1GPUDetails['Base Clock'] }}</p>
            <hr>
            <p>DirectX: {{ pcPart1GPUDetails.DirectX }}</p>
            <hr>
            <p>GDDR: {{ pcPart1GPUDetails.GDDR }}</p>
            <hr>
            <p>Output Ports: {{ pcPart1GPUDetails['Output Ports'] }}</p>
            <hr>
            <p>PCIe: {{ pcPart1GPUDetails.PCIe }}</p>
            <hr>
            <p>Price: {{ pcPart1GPUDetails.Price }}</p>
            <hr>
            <p>TDP: {{ pcPart1GPUDetails.TDP }}</p>
            <hr>
            <p>VRAM: {{ pcPart1GPUDetails.VRAM }}</p>
          </div>
        </div>
        <div v-if="selectedPart === 'Case'">
          <div class="pcPart1details" v-if="pcPart1CaseDetails">
            <p>Fan Capacity: {{ pcPart1CaseDetails['Fan Capacity'] }}</p>
            <hr>
            <p>Fans Included: {{ pcPart1CaseDetails['Fans Included'] }}</p>
            <hr>
            <p>Form Factor: {{ pcPart1CaseDetails['Form Factor'] }}</p>
            <hr>
            <p>Price: {{ pcPart1CaseDetails.Price }}</p>
            <hr>
            <p>RGB: {{ pcPart1CaseDetails.RGB }}</p>
            <hr>
            <p>Storage Capacity: {{ pcPart1CaseDetails['Storage Capacity'] }}</p>
            <hr>
            <p>Tempered Glass: {{ pcPart1CaseDetails['Tempered Glass'] }}</p>
          </div>
        </div>
        <div v-if="selectedPart === 'PSU'">
          <div class="pcPart1details" v-if="pcPart1PSUDetails">
            <p>Efficiency: {{ pcPart1PSUDetails.Efficiency }}</p>
            <hr>
            <p>Modularity: {{ pcPart1PSUDetails.Modularity }}</p>
            <hr>
            <p>Price: {{ pcPart1PSUDetails.Price }}</p>
            <hr>
            <p>Size: {{ pcPart1PSUDetails.Size }}</p>
            <hr>
            <p>Watt: {{ pcPart1PSUDetails.Watt }}</p>
          </div>
        </div>
        <div v-if="selectedPart === 'Storage'">
          <div class="pcPart1details" v-if="pcPart1StorageDetails">
            <p>Capacity: {{ pcPart1StorageDetails.Capacity }}</p>
            <hr>
            <p>Ports: {{ pcPart1StorageDetails.Ports }}</p>
            <hr>
            <p>Price: {{ pcPart1StorageDetails.Price }}</p>
            <hr>
            <p>Read Speed: {{ pcPart1StorageDetails['Read Speed'] }}</p>
            <hr>
            <p>Write Speed: {{ pcPart1StorageDetails['Write Speed'] }}</p>
          </div>
        </div>
        <div v-if="selectedPart === 'RAM'">
          <div class="pcPart1details" v-if="pcPart1RAMDetails">
            <p>Capacity: {{ pcPart1RAMDetails.Capacity }}</p>
            <hr>
            <p>DDR: {{ pcPart1RAMDetails.DDR }}</p>
            <hr>
            <p>Price: {{ pcPart1RAMDetails.Price }}</p>
            <hr>
            <p>Speed: {{ pcPart1RAMDetails.Speed }}</p>
          </div>
        </div>
      </div>
      <div class="rectangle">
        <p class="info"><b>Pc part 2</b></p>
        <select class="myDropDown1" v-model="pcPart2">
          <option v-for="option in pcPart2Options" :key="option">{{ option }}</option>
        </select>
        <div v-if="selectedPart === 'CPU'">
          <div class="pcPart2details" v-if="pcPart2CPUDetails">
            <p>Cores: {{ pcPart2CPUDetails.Cores }}</p>
            <hr>
            <p>Threads: {{ pcPart2CPUDetails.Threads }}</p>
            <hr>
            <p>Cache: {{ pcPart2CPUDetails.Cache }}</p>
            <hr>
            <p>TDP: {{ pcPart2CPUDetails.TDP }}</p>
            <hr>
            <p>Speed: {{ pcPart2CPUDetails.Speed }}</p>
            <hr>
            <p>Price: {{ pcPart2CPUDetails.Price }}</p>
            <hr>
            <p>Name: {{ pcPart2CPUDetails.Name }}</p>
            <hr>
            <p>Integrated Graphics: {{ pcPart2CPUDetails["Integrated Graphics"] }}</p>
            <hr>
            <p>Compatibility: {{ pcPart2CPUDetails.Compatibility }}</p>
          </div>
          </div>
        <div v-if="selectedPart === 'Motherboard'">
          <div class="motherBoardStyle" v-if="pcPart2MotherboardDetails">
            <p>Bluetooth: {{ pcPart2MotherboardDetails.Bluetooth }}</p>
            <hr>
            <p>Chipset: {{ pcPart2MotherboardDetails.Chipset }}</p>
            <hr>
            <p>Compatibility: {{ pcPart2MotherboardDetails.Compatibility }}</p>
            <hr>
            <p>Ethernet: {{ pcPart2MotherboardDetails.Ethernet }}</p>
            <hr>
            <p>Form Factor: {{ pcPart2MotherboardDetails["Form Factor "] }}</p>
            <hr>
            <p>M.2 Ports: {{ pcPart2MotherboardDetails["M.2 Ports"] }}</p>
            <hr>
            <p>Output Ports: {{ pcPart2MotherboardDetails["Output Ports"] }}</p>
            <hr>
            <p>Price: {{ pcPart2MotherboardDetails.Price }}</p>
            <hr>
            <p>RAM Slots: {{ pcPart2MotherboardDetails["RAM Slots"] }}</p>
            <hr>
            <p>PCIe 3.0x1 Slots: {{ pcPart2MotherboardDetails["PCIe 3.0x1 Slots"] }}</p>
            <hr>
            <p>PCIe 3.0x16 Slots: {{ pcPart2MotherboardDetails["PCIe 3.0x16 Slots"] }}</p>
            <hr>
            <p>PCIe 4.0x16 Slots: {{ pcPart2MotherboardDetails["PCIe 4.0x16 Slots"] }}</p>
          </div>
        </div>
        <div v-if="selectedPart === 'GPU'">
          <div class="pcPart2details" v-if="pcPart2GPUDetails">
            <p>Base Clock: {{ pcPart2GPUDetails['Base Clock'] }}</p>
            <hr>
            <p>DirectX: {{ pcPart2GPUDetails.DirectX }}</p>
            <hr>
            <p>GDDR: {{ pcPart2GPUDetails.GDDR }}</p>
            <hr>
            <p>Output Ports: {{ pcPart2GPUDetails['Output Ports'] }}</p>
            <hr>
            <p>PCIe: {{ pcPart2GPUDetails.PCIe }}</p>
            <hr>
            <p>Price: {{ pcPart2GPUDetails.Price }}</p>
            <hr>
            <p>TDP: {{ pcPart2GPUDetails.TDP }}</p>
            <hr>
            <p>VRAM: {{ pcPart2GPUDetails.VRAM }}</p>
          </div>
        </div>
        <div v-if="selectedPart === 'Case'">
          <div class="pcPart2details" v-if="pcPart2CaseDetails">
            <p>Fan Capacity: {{ pcPart2CaseDetails['Fan Capacity'] }}</p>
            <hr>
            <p>Fans Included: {{ pcPart2CaseDetails['Fans Included'] }}</p>
            <hr>
            <p>Form Factor: {{ pcPart2CaseDetails['Form Factor'] }}</p>
            <hr>
            <p>Price: {{ pcPart2CaseDetails.Price }}</p>
            <hr>
            <p>RGB: {{ pcPart2CaseDetails.RGB }}</p>
            <hr>
            <p>Storage Capacity: {{ pcPart2CaseDetails['Storage Capacity'] }}</p>
            <hr>
            <p>Tempered Glass: {{ pcPart2CaseDetails['Tempered Glass'] }}</p>
          </div>
        </div>
        <div v-if="selectedPart === 'PSU'">
          <div class="pcPart2details" v-if="pcPart2PSUDetails">
            <p>Efficiency: {{ pcPart2PSUDetails.Efficiency }}</p>
            <hr>
            <p>Modularity: {{ pcPart2PSUDetails.Modularity }}</p>
            <hr>
            <p>Price: {{ pcPart2PSUDetails.Price }}</p>
            <hr>
            <p>Size: {{ pcPart2PSUDetails.Size }}</p>
            <hr>
            <p>Watt: {{ pcPart2PSUDetails.Watt }}</p>
          </div>
        </div>
        <div v-if="selectedPart === 'Storage'">
          <div class="pcPart2details" v-if="pcPart2StorageDetails">
            <p>Capacity: {{ pcPart2StorageDetails.Capacity }}</p>
            <hr>
            <p>Ports: {{ pcPart2StorageDetails.Ports }}</p>
            <hr>
            <p>Price: {{ pcPart2StorageDetails.Price }}</p>
            <hr>
            <p>Read Speed: {{ pcPart2StorageDetails['Read Speed'] }}</p>
            <hr>
            <p>Write Speed: {{ pcPart2StorageDetails['Write Speed'] }}</p>
          </div>
        </div>
        <div v-if="selectedPart === 'RAM'">
          <div class="pcPart2details" v-if="pcPart2RAMDetails">
            <p>Capacity: {{ pcPart2RAMDetails.Capacity }}</p>
            <hr>
            <p>DDR: {{ pcPart2RAMDetails.DDR }}</p>
            <hr>
            <p>Price: {{ pcPart2RAMDetails.Price }}</p>
            <hr>
            <p>Speed: {{ pcPart2RAMDetails.Speed }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </body>
</template>

<script>
export default {
  name: 'Compare',
  data() {
    return {
      selectedPart: 'Please select',
      pcPart1: '',
      pcPart2: '',
      pcPart1Options: [],
      pcPart2Options: [],
      pcPart1MotherboardDetails: null,
      pcPart2MotherboardDetails: null,
      pcPart2CPUDetails: null,
      pcPart1CPUDetails: null,
      pcPart1GPUDetails: null,
      pcPart2GPUDetails: null,
      pcPart1CaseDetails: null,
      pcPart2CaseDetails: null,
      pcPart1PSUDetails: null,
      pcPart2PSUDetails: null,
      pcPart1StorageDetails: null,
      pcPart2StorageDetails: null,
      pcPart1RAMDetails: null,
      pcPart2RAMDetails: null,
    };
  },
  methods: {

    logout(){
    if(confirm("Are you sure you want to logout?")){
        this.$router.push('/');
    }
    },
    async fetchOptionsForPart(part, endpoint) {
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        console.log(data);
        if (part === 'CPU') {
          this.pcPart1MotherboardDetails = null; // Reset details for pcPart1 when changing options
          this.pcPart2MotherboardDetails = null; // Reset details for pcPart2 when changing options
          this.pcPart1GPUDetails = null;
          this.pcPart2GPUDetails = null;
          this.pcPart1CaseDetails = null;
          this.pcPart2CaseDetails = null;
          this.pcPart1PSUDetails = null;
          this.pcPart2PSUDetails = null;
          this.pcPart1StorageDetails = null;
          this.pcPart2StorageDetails = null;
          this.pcPart1RAMDetails= null;
          this.pcPart2RAMDetails= null;

          this.pcPart1Options = data.map(item => item.Name);
          this.pcPart2Options = data.map(item => item.Name);
        }
        if (part === 'Motherboard') {
          this.pcPart1CPUDetails = null; // Reset details for pcPart1 when changing options
          this.pcPart2CPUDetails = null; // Reset details for pcPart2 when changing options
          this.pcPart1GPUDetails = null;
          this.pcPart2GPUDetails = null;
          this.pcPart1CaseDetails = null;
          this.pcPart2CaseDetails = null;
          this.pcPart1PSUDetails = null;
          this.pcPart2PSUDetails = null;
          this.pcPart1StorageDetails = null;
          this.pcPart2StorageDetails = null;
          this.pcPart1RAMDetails= null;
          this.pcPart2RAMDetails= null;

          this.pcPart1Options = data.map(item => item.Name);
          this.pcPart2Options = data.map(item => item.Name);
        }
        if (part === 'GPU') {
          this.pcPart1CPUDetails = null;
          this.pcPart2CPUDetails = null;
          this.pcPart1MotherboardDetails = null;
          this.pcPart2MotherboardDetails = null;
          this.pcPart1CaseDetails = null;
          this.pcPart2CaseDetails = null;
          this.pcPart1PSUDetails = null;
          this.pcPart2PSUDetails = null;
          this.pcPart1StorageDetails = null;
          this.pcPart2StorageDetails = null;
          this.pcPart1RAMDetails= null;
          this.pcPart2RAMDetails= null;

          this.pcPart1Options = data.map(item => item.Name);
          this.pcPart2Options = data.map(item => item.Name);
        }  else if (part === 'Case') {
          this.pcPart1CPUDetails = null;
          this.pcPart2CPUDetails = null;
          this.pcPart1MotherboardDetails = null;
          this.pcPart2MotherboardDetails = null;
          this.pcPart1GPUDetails = null;
          this.pcPart2GPUDetails = null;
          this.pcPart1PSUDetails = null;
          this.pcPart2PSUDetails = null;
          this.pcPart1StorageDetails = null;
          this.pcPart2StorageDetails = null;
          this.pcPart1RAMDetails= null;
          this.pcPart2RAMDetails= null;

          this.pcPart1Options = data.map(item => item.Name);
          this.pcPart2Options = data.map(item => item.Name);
        } else if (part === 'PSU') {
          this.pcPart1CPUDetails = null;
          this.pcPart2CPUDetails = null;
          this.pcPart1MotherboardDetails = null;
          this.pcPart2MotherboardDetails = null;
          this.pcPart1GPUDetails = null;
          this.pcPart2GPUDetails = null;
          this.pcPart1CaseDetails = null;
          this.pcPart2CaseDetails = null;
          this.pcPart1StorageDetails = null;
          this.pcPart2StorageDetails = null;
          this.pcPart1RAMDetails= null;
          this.pcPart2RAMDetails= null;

          this.pcPart1Options = data.map(item => item.Name);
          this.pcPart2Options = data.map(item => item.Name);
        }
        else if (part === 'Storage') {
          this.pcPart1CPUDetails = null;
          this.pcPart2CPUDetails = null;
          this.pcPart1MotherboardDetails = null;
          this.pcPart2MotherboardDetails = null;
          this.pcPart1GPUDetails = null;
          this.pcPart2GPUDetails = null;
          this.pcPart1CaseDetails = null;
          this.pcPart2CaseDetails = null;
          this.pcPart1PSUDetails = null;
          this.pcPart2PSUDetails = null;
          this.pcPart1RAMDetails= null;
          this.pcPart2RAMDetails= null;
          this.pcPart1Options = data.map(item => item.Name);
          this.pcPart2Options = data.map(item => item.Name);
        }
        else if (part === 'RAM') {
          this.pcPart1MotherboardDetails = null;
          this.pcPart2MotherboardDetails = null;
          this.pcPart1GPUDetails = null;
          this.pcPart2GPUDetails = null;
          this.pcPart1CaseDetails = null;
          this.pcPart2CaseDetails = null;
          this.pcPart1PSUDetails = null;
          this.pcPart2PSUDetails = null;
          this.pcPart1StorageDetails = null;
          this.pcPart2StorageDetails = null;
          
          this.pcPart1Options = data.map(item => item.Name);
          this.pcPart2Options = data.map(item => item.Name);
        }
        else {
          // Handle other parts if needed
        }
      } catch (error) {
        console.error(`Error fetching options for ${part}:`, error);
      }
    },
    async fetchDetailsForPart(part, name) {
  try {
    console.log(`Fetching details for ${part} with name ${name}`);
    let endpoint = '';
    if (part === 'Motherboard') {
      endpoint = `https://getmotherboard-igki44h7vq-uc.a.run.app?Name=${name}`;
    } else if (part === 'CPU') {
      endpoint = `https://getcpu-igki44h7vq-uc.a.run.app?Name=${name}`;
    } 
    else if (part === 'GPU') {
          endpoint = `https://getgpu-igki44h7vq-uc.a.run.app?Name=${name}`;
        }
    else if (part === 'Case') {
        endpoint = `https://getcase-igki44h7vq-uc.a.run.app?Name=${name}`;
      }// Add conditions for other parts if needed
      else if (part === 'PSU') {
        endpoint = `https://getpsu-igki44h7vq-uc.a.run.app?Name=${name}`;
      }
      else if (part === 'Storage') {
          endpoint = `https://getstorage-igki44h7vq-uc.a.run.app?Name=${name}`;
        }
        else if (part === 'RAM') {
          endpoint = `https://getram-igki44h7vq-uc.a.run.app?Name=${name}`;
        }

    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(`Received data:`, data);
    if (data && data.length > 0) {
      const details = data[0];
      if (part === 'CPU') {
        if (this.pcPart1 === name) {
          this.pcPart1CPUDetails = details;
        } else if (this.pcPart2 === name) {
          this.pcPart2CPUDetails = details;
        }
      } else if (part === 'Motherboard') {
        if (this.pcPart1 === name) {
          this.pcPart1MotherboardDetails = details;
        } else if (this.pcPart2 === name) {
          this.pcPart2MotherboardDetails = details;
        }
      } 
      else if (part === 'GPU') {
        if (this.pcPart1 === name) {
          this.pcPart1GPUDetails = details; 
        } else if (this.pcPart2 === name) {
          this.pcPart2GPUDetails = details;
        }
       }
       else if (part === 'Case') {
        if (this.pcPart1 === name) {
          this.pcPart1CaseDetails = details; 
        } else if (this.pcPart2 === name) {
          this.pcPart2CaseDetails = details;
        }
       }
       else if (part === 'PSU') {
        if (this.pcPart1 === name) {
          this.pcPart1PSUDetails = details; 
        } else if (this.pcPart2 === name) {
          this.pcPart2PSUDetails = details;
        }
       }
       else if (part === 'Storage') {
            if (this.pcPart1 === name) {
              this.pcPart1StorageDetails = details;
            } else if (this.pcPart2 === name) {
              this.pcPart2StorageDetails = details;
            }
          }
          else if (part === 'RAM') {
            if (this.pcPart1 === name) {
              this.pcPart1RAMDetails = details;
            } else if (this.pcPart2 === name) {
              this.pcPart2RAMDetails = details;
            }
          }
    } else {
      console.error(`No data received for ${part} with name ${name}`);
    }
  } catch (error) {
    console.error(`Error fetching details for ${part} with name ${name}:`, error);
  }
}
  },
  watch: {
    selectedPart(newValue) {
      if (newValue === 'CPU' || newValue === 'Motherboard' || newValue === 'GPU' || newValue === "Case" || newValue === "PSU" || newValue === "Storage" || newValue === "RAM") {
        this.fetchOptionsForPart(newValue, `https://get${newValue.toLowerCase()}-igki44h7vq-uc.a.run.app`);
      }
    },
    pcPart1(newValue) {
      if (newValue) {
        this.fetchDetailsForPart(this.selectedPart, newValue);
      }
    },
    pcPart2(newValue) {
      if (newValue) {
        this.fetchDetailsForPart(this.selectedPart, newValue);
      }
    }
  }
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
      width: 80%;
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
  
  .myDropDown1{
    position: absolute;
    width: 80%;
    top: 8%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff
  }

  .info {
  position: absolute;
  top: 4%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
}

.pcPart1details,
.pcPart2details {
  position: relative;
  color: #f7ebeb;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 120px;
  text-align: center;
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

  .pcPart1details hr,
  .pcPart2details hr {
    margin: .5px ; /* Add margin above and below the horizontal line */
    border: none;
    border-top: 1px solid #f7ebeb; /* Specify color for horizontal line */
    width: 100%; /* Make the horizontal line span the entire width */
  }
  .motherBoardStyle {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #f7ebeb;
    font-size: .8rem; /* Increased font size */
    font-weight: bold; /* Bolder font weight */
    text-align: center; /* Center align text */
    width: 80%; /* Set width to 80% of parent container */
    max-width: 500px; /* Set maximum width for better readability */
  }
 
  </style>
  
