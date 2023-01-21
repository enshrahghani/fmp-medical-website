function abc(para) {
    para.src = ("https://theoriginalguidetomenshealth.org/wp-content/uploads/2019/12/naturopathic-opt.jpg")
}

function xyz(para) {
    para.src = ("https://tse3.mm.bing.net/th?id=OIP.V_hRF4u-Gp3LXAZ8dfRdsgEsDh&pid=Api&P=0")
}

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-analytics.js";
import { getDatabase, push, set, ref, onValue, update, remove } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyAZRvgYzOAKGsoTD1bTmSBSIr4ru_4taXE",
    authDomain: "fmp-website-e5961.firebaseapp.com",
    databaseURL: "https://fmp-website-e5961-default-rtdb.firebaseio.com",
    projectId: "fmp-website-e5961",
    storageBucket: "fmp-website-e5961.appspot.com",
    messagingSenderId: "972467108217",
    appId: "1:972467108217:web:4c0ca344ddb3462be417a8",
    measurementId: "G-M90LM9M7W5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Db = getDatabase();

//FIreBase Khtm//


window.addingValue = function () {
    var c_name = document.getElementById('contact_name').value;
    var c_email = document.getElementById('contact_email').value;
    var c_phone = document.getElementById('contact_phone').value;
    var c_address = document.getElementById('contact_address').value;
    var c_message = document.getElementById('contact_message').value;
    if (c_name == '') {
        alert('Please Enter Name')
    } else if (c_email == '' || c_email.indexOf('@') == -1) {
        alert('Please Enter Email')
    } else if (c_phone.length != 11) {
        alert('Please Enter Correct Number')
    } else if (c_message.length < 5) {
        alert('Please Enter Proper Message')
    } else if (c_address.length < 3) {
        alert('please enter address')
    } else {
        var obj = {
            name: c_name,
            email: c_email,
            phone: c_phone,
            address: c_address,
            messgae: c_message,
        }
        var Userref = push(ref(Db, 'Contact/'))
        obj.id = Userref.key

        set(Userref, obj)
        document.getElementById('contact_name').value = '';
        document.getElementById('contact_email').value = '';
        document.getElementById('contact_phone').value = '';
        document.getElementById('contact_address').value = '';
        document.getElementById('contact_message').value = '';
    }
}