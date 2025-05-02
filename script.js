// Department and Doctor Data
const departments = {
    "111": "General Practitioner",
    "112": "Pediatrician",
    "113": "Neurologist",
    "114": "Rheumatologist",
    "115": "Psychiatrist",
    "116": "Nephrologist",
    "117": "Pulmonologist",
    "118": "Surgeon",
    "119": "Dermatologist",
    "120": "Radiologist",
    "121": "Cardiologist",
    "122": "Orthopedist",
    "123": "ENT",
    "124": "Oncologist"
};

const doctors = {
    "111": [
        { name: "Dr. Rashmika Shindae", code: "1111", availabilityTime: "8:00 am - 11:00 am" },
        { name: "Dr. Neeraj Rastogi", code: "1112", availabilityTime: "2:00 pm - 4:00 pm" },
        { name: "Dr. Aayush Sharma", code: "1113", availabilityTime: "5:00 pm - 8:00 pm" }
    ],
    "112": [
        { name: "Dr. Manasvi Sinha", code: "1121", availabilityTime: "8:00 am - 11:00 am" },
        { name: "Dr. Priya Singh", code: "1122", availabilityTime: "2:00 pm - 4:00 pm" },
        { name: "Dr. Neerja Chopra", code: "1123", availabilityTime: "5:00 pm - 8:00 pm" }
    ],
    "113": [
        { name: "Dr. Rajesh Kumar", code: "1131", availabilityTime: "8:00 am - 11:00 am" },
        { name: "Dr. Kushagra Kushwaha", code: "1132", availabilityTime: "2:00 pm - 4:00 pm" },
        { name: "Dr. Aditya Mishra", code: "1133", availabilityTime: "5:00 pm - 8:00 pm" }
    ],
    "114": [
        { name: "Dr. Garvit Pandey", code: "1141", availabilityTime: "8:00 am - 11:00 am" },
        { name: "Dr. Akshita Poddar", code: "1142", availabilityTime: "2:00 pm - 4:00 pm" },
        { name: "Dr. Sia Bhakuni", code: "1143", availabilityTime: "5:00 pm - 8:00 pm" }
    ],
    "115": [
        { name: "Dr. Mansi Shahi", code: "1151", availabilityTime: "8:00 am - 11:00 am" },
        { name: "Dr. Sona Tiwari", code: "1152", availabilityTime: "2:00 pm - 4:00 pm" },
        { name: "Dr. Vivek Bisht", code: "1153", availabilityTime: "5:00 pm - 8:00 pm" }
    ],
    "116": [
        { name: "Dr. Prince Verma", code: "1161", availabilityTime: "8:00 am - 11:00 am" },
        { name: "Dr. Raj Arayan", code: "1162", availabilityTime: "2:00 pm - 4:00 pm" },
        { name: "Dr. Sameer Singh", code: "1163", availabilityTime: "5:00 pm - 8:00 pm" }
    ],
    "117": [
        { name: "Dr. Rakesh Thakur", code: "1171", availabilityTime: "8:00 am - 11:00 am" },
        { name: "Dr. Himanshu Pant", code: "1172", availabilityTime: "2:00 pm - 4:00 pm" },
        { name: "Dr. Neha Roy", code: "1173", availabilityTime: "5:00 pm - 8:00 pm" }
    ],
    "118": [
        { name: "Dr. Hasan Ali", code: "1181", availabilityTime: "8:00 am - 11:00 am" },
        { name: "Dr. Aadarsh Gupta", code: "1182", availabilityTime: "2:00 pm - 4:00 pm" },
        { name: "Dr. Payal Mehta", code: "1183", availabilityTime: "5:00 pm - 8:00 pm" }
    ],
    "119": [
        { name: "Dr. Komal Singhania", code: "1191", availabilityTime: "8:00 am - 11:00 am" },
        { name: "Dr. Rishita Tiwari", code: "1192", availabilityTime: "2:00 pm - 4:00 pm" },
        { name: "Dr. Dheeraj Oberoi", code: "1193", availabilityTime: "5:00 pm - 8:00 pm" }
    ],
    "120": [
        { name: "Dr. Madan Bora", code: "1201", availabilityTime: "8:00 am - 11:00 am" },
        { name: "Dr. Harish Rawat", code: "1202", availabilityTime: "2:00 pm - 4:00 pm" },
        { name: "Dr. Jeevan Rautela", code: "1203", availabilityTime: "5:00 pm - 8:00 pm" }
    ],
    "121": [
        { name: "Dr. Khuswant Bhatt", code: "1211", availabilityTime: "8:00 am - 11:00 am" },
        { name: "Dr. Deepak Joshi", code: "1212", availabilityTime: "2:00 pm - 4:00 pm" },
        { name: "Dr. Kamlesh Yadav", code: "1213", availabilityTime: "5:00 pm - 8:00 pm" }
    ],
    "122": [
        { name: "Dr. Kailsahnath Dhami", code: "1221", availabilityTime: "8:00 am - 11:00 am" },
        { name: "Dr. Yogendra Kandpal", code: "1222", availabilityTime: "2:00 pm - 4:00 pm" },
        { name: "Dr. Dikshika Joshi", code: "1223", availabilityTime: "5:00 pm - 8:00 pm" }
    ],
    "123": [
        { name: "Dr. Rajendra Prasad", code: "1231", availabilityTime: "8:00 am - 11:00 am" },
        { name: "Dr. Rakesh Maurya", code: "1232", availabilityTime: "2:00 pm - 4:00 pm" },
        { name: "Dr. Mahesh Bhati", code: "1233", availabilityTime: "5:00 pm - 8:00 pm" }
    ],
    "124": [
        { name: "Dr. Rajeev Rajput", code: "1241", availabilityTime: "8:00 am - 11:00 am" },
        { name: "Dr. Ashish Parasher", code: "1242", availabilityTime: "2:00 pm - 4:00 pm" },
        { name: "Dr. Sheetal Anand", code: "1243", availabilityTime: "5:00 pm - 8:00 pm" }
    ]
    // Additional departments can be added here...
};

const tests = [
    { name: "X-ray", cost: 550 },
    { name: "CT-scan", cost: 1000 },
    { name: "MRI", cost: 3000 },
    { name: "ECG", cost: 200 },
    { name: "Thyroid function test", cost: 600 },
    { name: "Cholesterol test", cost: 400 },
    { name: "Blood sugar test", cost: 500 },
    { name: "Complete Blood count", cost: 350 },
    { name: "Liver function test", cost: 780 },
    { name: "Echocardiogram", cost: 1800 },
    { name: "Kidney function test", cost: 740 },
    { name: "Serology", cost: 1000 },
    { name: "Lipid profile", cost: 950 },
    { name: "HIV test", cost: 540 },
    { name: "Creatine test", cost: 180 },
    { name: "Vitamin-D test", cost: 650 },
    { name: "Urea test", cost: 150 },
    { name: "Ultrasound", cost: 700 }
    // Additional tests can be added here...
];

// Event Listener for Patient Form Submission
document.getElementById('patient-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Hide patient details and show service selection
    document.getElementById('patient-details').style.display = 'none';
    document.getElementById('service-selection').style.display = 'block';
});

// Event Listeners for Service Selection
document.getElementById('consult-doctor').addEventListener('click', showDepartments);
document.getElementById('medical-test').addEventListener('click', showMedicalTests);

// Show Departments for Doctor Consultation
function showDepartments() {
    const departmentContainer = document.getElementById('departments');
    departmentContainer.innerHTML = '';

    for (let code in departments) {
        const button = document.createElement('button');
        button.innerText = `${departments[code]} (Code: ${code})`;
        button.onclick = () => showDoctors(code);
        departmentContainer.appendChild(button);
    }

    // Hide service selection and show department selection
    document.getElementById('service-selection').style.display = 'none';
    document.getElementById('doctor-selection').style.display = 'block';
}

// Show Available Doctors for Selected Department
function showDoctors(departmentCode) {
    const doctorContainer = document.getElementById('doctors');
    doctorContainer.innerHTML = '';

    const availableDoctors = doctors[departmentCode];

    availableDoctors.forEach(doc => {
        const button = document.createElement('button');
        button.innerText = `${doc.name} (Code: ${doc.code})`;
        button.onclick = () => confirmAppointment(doc.name, departmentCode);
        doctorContainer.appendChild(button);
    });

    // Hide department selection and show doctor details
    document.getElementById('doctor-selection').style.display = 'none';
    document.getElementById('doctor-details').style.display = 'block';
}

// Show Medical Tests
function showMedicalTests() {
    const testContainer = document.getElementById('tests');
    testContainer.innerHTML = '';

    tests.forEach((test) => {
        const button = document.createElement('button');
        button.innerText = `${test.name} (Cost: $${test.cost})`;
        button.onclick = () => confirmTest(test);
        testContainer.appendChild(button);
    });

    // Hide service selection and show test selection
    document.getElementById('service-selection').style.display = 'none';
    document.getElementById('test-selection').style.display = 'block';
}

// Confirm Appointment
function confirmAppointment(doctorName, departmentCode) {
    const appointmentReceipt = `
        Appointment Confirmed!
        Doctor: ${doctorName}
        Department: ${departments[departmentCode]}
    `;
    displayReceipt(appointmentReceipt);
}

// Confirm Medical Test
function confirmTest(test) {
    const testReceipt = `
        Test Booked!
        Test Name: ${test.name}
        Cost: $${test.cost}
    `;
    displayReceipt(testReceipt);
}

// Display Receipt
function displayReceipt(receipt) {
    document.getElementById('receipt-output').innerText = receipt;
    document.getElementById('doctor-details').style.display = 'none';
    document.getElementById('test-selection').style.display = 'none';
    document.getElementById('receipt').style.display = 'block';
}

// Event Listener for New Appointment/Test
document.getElementById('new-appointment').addEventListener('click', function() {
    location.reload(); // Reload the page to start over
});

// Print Receipt functionality
document.getElementById('print-receipt').addEventListener('click', function() {
    const receiptContent = document.getElementById('receipt-output').innerText;
    const newWindow = window.open('', '', 'height=600,width=800');
    newWindow.document.write('<html><head><title>Receipt</title></head><body>');
    newWindow.document.write('<h1>Receipt</h1>');
    newWindow.document.write('<pre>' + receiptContent + '</pre>');
    newWindow.document.write('</body></html>');
    newWindow.document.close();
    newWindow.print();
});
