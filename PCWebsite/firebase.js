/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin")
// const functions = require("firebase-functions")
// Import the functions you need from the SDKs you need
// const { initializeApp } = require("firebase/app");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


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
const app = admin.initializeApp(firebaseConfig);

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest({cors: true}, (request, response) => {
//     logger.info("Hello logs!", { structuredData: true });
//     response.send("Hello from Firebase!");
// });

exports.getCpu = onRequest({cors: true}, (request, response) => {
    // 1. Connect to our Firestore database
    let cpusToReturn = []
    let query = admin.firestore().collection('CPU');

    // Adding filters based on query parameters
    if (request.query.Name) {
        query = query.where('Name', '==', request.query.Name);
    }
    if (request.query.Cache) {
        query = query.where('Cache', '==', parseInt(request.query.Cache));
    }
    if (request.query.Cores) {
        query = query.where('Cores', '==', parseInt(request.query.Cores));
    }
    if (request.query.IntegratedGraphics) {
        query = query.where('Integrated Graphics', '==', boolean(request.query.IntegratedGraphics));
    }
    if (request.query.Price) {
        query = query.where('Price', '==', parseFloat(request.query.Price));
    }
    if (request.query.Speed) {
        query = query.where('Speed', '==', parseFloat(request.query.Speed));
    }
    if (request.query.TPD) {
        query = query.where('TPD', '==', parseInt(request.query.TPD));
    }
    if (request.query.Threads) {
        query = query.where('Threads', '==', parseInt(request.query.Threads));
    }

    // Executing the query
    query.get().then((cpusSnapshot) => {
        if (cpusSnapshot.empty) {
            console.log('No matching documents.');
            response.send('No data in database');
            return;
        }
        cpusSnapshot.forEach(doc => {
            cpusToReturn.push(doc.data());
        });
        // 2. Send data back to client
        response.send(cpusToReturn);
    }).catch(error => {
        console.error('Error getting documents:', error);
        response.status(500).send('Error getting documents');
    });
});

//get cases
exports.getCase = onRequest({cors: true}, (request, response) => {
    // 1. Connect to our Firestore database
    let casesToReturn = []
    let query = admin.firestore().collection('Case');

    // Adding filters based on query parameters
    if (request.query.Name) {
        query = query.where('Name', '==', request.query.Name);
    }
    if (request.query['Fan Capacity']) {
        query = query.where('FanCapacity', '==', parseInt(request.query['Fan Capacity']));
    }
    if (request.query['Fans Included']) {
        query = query.where('FansIncluded', '==', request.query['Fans Included']);
    }
    if (request.query['Form Factor']) {
        query = query.where('FormFactor', '==', request.query['Form Factor']);
    }
    if (request.query.Price) {
        query = query.where('Price', '==', parseFloat(request.query.Price));
    }
    if (request.query.RGB) {
        query = query.where('RGB', '==', request.query.RGB === 'true');
    }
    if (request.query['Storage Capacity']) {
        query = query.where('StorageCapacity', '==', parseInt(request.query['Storage Capacity']));
    }
    if (request.query['Tempered Glass']) {
        query = query.where('TemperedGlass', '==', request.query['Tempered Glass'] === 'true');
    }

    // Executing the query
    query.get().then((casesSnapshot) => {
        if (casesSnapshot.empty) {
            console.log('No matching documents.');
            response.send('No data in database');
            return;
        }
        casesSnapshot.forEach(doc => {
            casesToReturn.push(doc.data());
        });
        // 2. Send data back to client
        response.send(casesToReturn);
    }).catch(error => {
        console.error('Error getting documents:', error);
        response.status(500).send('Error getting documents');
    });
});

//get gpus
exports.getGpu = onRequest({cors: true}, (request, response) => {
    // 1. Connect to our Firestore database
    let gpusToReturn = []
    let query = admin.firestore().collection('GPU');

    // Adding filters based on query parameters
    if (request.query.Name) {
        query = query.where('Name', '==', request.query.Name);
    }
    if (request.query['Base Clock']) {
        query = query.where('BaseClock', '==', parseFloat(request.query['Base Clock']));
    }
    if (request.query.DirectX) {
        query = query.where('DirectX', '==', parseFloat(request.query.DirectX));
    }
    if (request.query.GDDR) {
        query = query.where('GDDR', '==', parseInt(request.query.GDDR));
    }
    if (request.query['Output Ports']) {
        query = query.where('OutputPorts', '==', parseInt(request.query['Output Ports']));
    }
    if (request.query.PCIe) {
        query = query.where('PCIe', '==', parseInt(request.query.PCIe));
    }
    if (request.query.Price) {
        query = query.where('Price', '==', parseFloat(request.query.Price));
    }
    if (request.query.TDP) {
        query = query.where('TDP', '==', parseInt(request.query.TDP));
    }
    if (request.query.VRAM) {
        query = query.where('VRAM', '==', parseFloat(request.query.VRAM));
    }

    // Executing the query
    query.get().then((gpusSnapshot) => {
        if (gpusSnapshot.empty) {
            console.log('No matching documents.');
            response.send('No data in database');
            return;
        }
        gpusSnapshot.forEach(doc => {
            gpusToReturn.push(doc.data());
        });
        // 2. Send data back to client
        response.send(gpusToReturn);
    }).catch(error => {
        console.error('Error getting documents:', error);
        response.status(500).send('Error getting documents');
    });
});

//get motherboards
exports.getMotherboard = onRequest({cors: true}, (request, response) => {
    // 1. Connect to our Firestore database
    let motherboardsToReturn = []
    let query = admin.firestore().collection('Motherboard');

    // Adding filters based on query parameters
    if (request.query.Name) {
        query = query.where('Name', '==', request.query.Name);
    }
    if (request.query.Bluetooth) {
        query = query.where('Bluetooth', '==', request.query.Bluetooth == 'true');
    }
    if (request.query.Chipset) {
        query = query.where('Chipset', '==', request.query.Chipset);
    }
    if (request.query.Ethernet) {
        query = query.where('Ethernet', '==', request.query.Ethernet === 'true');
    }
    if (request.query['Form Factor']) {
        query = query.where('FormFactor', '==', request.query['Form Factor']);
    }
    if (request.query['M.2 Ports']) {
        query = query.where('M2Ports', '==', parseInt(request.query['M.2 Ports']));
    }
    if (request.query['Output Ports']) {
        query = query.where('OutputPorts', '==', parseInt(request.query['Output Ports']));
    }
    if (request.query['PCIe 3.0x1 Slots']) {
        query = query.where('PCIe3x1Slots', '==', parseInt(request.query['PCIe 3.0x1 Slots']));
    }
    if (request.query['PCIe 3.0x16 Slots']) {
        query = query.where('PCIe3x16Slots', '==', parseInt(request.query['PCIe 3.0x16 Slots']));
    }
    if (request.query['PCIe 4.0x16 Slots']) {
        query = query.where('PCIe4x16Slots', '==', parseInt(request.query['PCIe 4.0x16 Slots']));
    }
    if (request.query.Price) {
        query = query.where('Price', '==', parseFloat(request.query.Price));
    }
    if (request.query['RAM Slots']) {
        query = query.where('RAMSlots', '==', parseInt(request.query['RAM Slots']));
    }
    if (request.query['Sata Ports']) {
        query = query.where('SataPorts', '==', parseInt(request.query['Sata Ports']));
    }
    if (request.query['Socket Type']) {
        query = query.where('SocketType', '==', request.query['Socket Type']);
    }
    if (request.query['USB 2.0 Ports']) {
        query = query.where('USB2Ports', '==', parseInt(request.query['USB 2.0 Ports']));
    }
    if (request.query['USB 3.2 Ports']) {
        query = query.where('USB32Ports', '==', parseInt(request.query['USB 3.2 Ports']));
    }
    if (request.query.WiFi) {
        query = query.where('WiFi', '==', request.query.WiFi === 'true');
    }

    // Executing the query
    query.get().then((motherboardsSnapshot) => {
        if (motherboardsSnapshot.empty) {
            console.log('No matching documents.');
            response.send('No data in database');
            return;
        }
        motherboardsSnapshot.forEach(doc => {
            motherboardsToReturn.push(doc.data());
        });
        // 2. Send data back to client
        response.send(motherboardsToReturn);
    }).catch(error => {
        console.error('Error getting documents:', error);
        response.status(500).send('Error getting documents');
    });
});

//get psus
exports.getPsu = onRequest({cors: true}, (request, response) => {
    // 1. Connect to our Firestore database
    let psusToReturn = []
    admin.firestore().collection('PSU').get().then((psuSnapshot) => {
        if (psuSnapshot.empty) {
            console.log('No matching documents.');
            response.send('No data in database');
            return;
        }
        psuSnapshot.forEach(doc => {
            //get names of psus from db using query
            if (request.query.Name) {
                if (request.query.Name == doc.data().Name) {
                    psusToReturn.push(doc.data());
                }
            } else {
                psusToReturn.push(doc.data());
            }

        });
        // 2. Send data back to client
        response.send(psusToReturn);
    })
});

//get RAM
exports.getRam = onRequest({cors: true}, (request, response) => {
    // 1. Connect to our Firestore database
    let ramToReturn = []
    admin.firestore().collection('RAM').get().then((ramSnapshot) => {
        if (ramSnapshot.empty) {
            console.log('No matching documents.');
            response.send('No data in database');
            return;
        }
        ramSnapshot.forEach(doc => {
            //get names of RAM from db using query
            if (request.query.Name) {
                if (request.query.Name == doc.data().Name) {
                    ramToReturn.push(doc.data());
                }
            } else {
                ramToReturn.push(doc.data());
            }

        });
        // 2. Send data back to client
        response.send(ramToReturn);
    })
});

//get Storage
exports.getStorage = onRequest({cors: true}, (request, response) => {
    // 1. Connect to our Firestore database
    let storageToReturn = []
    admin.firestore().collection('Storage').get().then((storageSnapshot) => {
        if (storageSnapshot.empty) {
            console.log('No matching documents.');
            response.send('No data in database');
            return;
        }
        storageSnapshot.forEach(doc => {
            //get names of storage from db using query
            if (request.query.Name) {
                if (request.query.Name == doc.data().Name) {
                    storageToReturn.push(doc.data());
                }
            } else {
                storageToReturn.push(doc.data());
            }

        });
        // 2. Send data back to client
        response.send(storageToReturn);
    })
});
