const statesElem = document.querySelector(".states-name");

const regForm = document.querySelector("form");
const usernameInput = regForm.querySelector("#username");
const passwordInput = regForm.querySelector("#pw");
const eyeIcon = regForm.querySelector(".eye-icon");
const checkIcon = regForm.querySelector(".check-icon");
const passwordError = regForm.querySelector("#pw-error");
const phoneNumberInput = regForm.querySelector("#ph-no");

const STATES_NAME = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
];

// validate username
let isValidUsername = false;
validateUsername();

// validating password
let isValidPassword = false;
validatePassword();

// toggle show/hide password
let isOpen = false;
eyeIcon.addEventListener("click", function () {
  isOpen = !isOpen;
  this.src = isOpen ? "../assets/eye.svg" : "../assets/eye-slash.svg";
  passwordInput.type = isOpen ? "text" : "password";
});

// validate phone number
let isValidPhoneNumber = false;
validatePhoneNumber();

const keys_map = [
  "username",
  "male",
  "female",
  "fatherName",
  "pw",
  "email",
  "countries-name",
  "states-name",
  "ph-num-code",
  "ph-no",
  "currency-code",
  "amount",
];
// send data
regForm.onsubmit = sendData;

// switch themes
switchThemes();

function validatePhoneNumber() {
  phoneNumberInput.onchange = function () {
    let msg = "";
    if (this.value.length < 10 || this.value.length > 10) {
      msg = "phone number should be 10 characters long!";
      document.querySelector("#ph-no-error").classList.add("alert-warning");
    } else {
      isValidPhoneNumber = true;
    }
    document.querySelector("#ph-no-error").innerHTML = msg;
  };
}

function switchThemes() {
  const themeSwitchers = document.querySelectorAll(
    ".theme input[type='radio']"
  );
  themeSwitchers.forEach((s) => {
    s.onchange = (e) => {
      const theme = e.target.id;
      document.documentElement.dataset.theme = theme;
    };
  });
}

function sendData(e) {
  e.preventDefault();

  if (!isValidPassword && !isValidUsername && !isValidPhoneNumber) return;

  let data = {};

  keys_map.forEach((key) => {
    if (this.elements[key].name === "gender") {
      if (this.elements[key].checked) {
        data["gender"] = this.elements[key].value;
      }
      return;
    }
    data[key] = this.elements[key].value;
  });

  console.log(data);
  const submitBtn = regForm.querySelector(".submit");
  submitBtn.disabled = true;
  submitBtn.style.opacity = ".75";
  submitBtn.querySelector(".loader").classList.add("loading");

  setTimeout(() => {
    location.href = "http://127.0.0.1:5500/src/home/home.html";
  }, 2000);
}

function validatePassword() {
  passwordInput.onchange = function () {
    let str = this.value;
    let msg = "";

    if (str.length <= 5) {
      msg = "Password must be at least 6 characters!";
      passwordError.classList.add("alert-warning");
      passwordInput.classList.add("invalid");
      checkIcon.style.opacity = 0;
    } else if (str.length >= 6) {
      msg = "";
      isValidPassword = true;
      passwordInput.classList.remove("invalid");
      checkIcon.style.opacity = 1;
    }
    passwordError.innerText = msg;
  };
}

function validateUsername() {
  let msg = "";
  usernameInput.onchange = function () {
    if (/\d/.test(this.value) && /[a-zA-Z]/.test(this.value)) {
      isValidUsername = true;
      this.classList.remove("invalid");
      msg = "";
    } else {
      msg = "username must be alphanumeric";
      this.nextElementSibling.classList.add("alert-warning");
      this.classList.add("invalid");
    }

    this.nextElementSibling.innerText = msg;
  };
}
function alterCurrencySymbol() {
  const currencySymbolElem = document.querySelector(".currency-symbol");
  const currencyCodeElem = document.querySelector(".currency-code");

  let symbolsMap = {
    IND: "₹",
    USD: "$",
    JPY: "¥",
  };
  currencyCodeElem.onchange = function () {
    currencySymbolElem.innerHTML = symbolsMap[this.value];
  };
}

alterCurrencySymbol();

function appendStatesName() {
  STATES_NAME.sort().forEach((s) => {
    const opt = document.createElement("option");
    opt.value = s.toLowerCase();
    opt.innerText = s;
    statesElem.append(opt);
  });
}
appendStatesName();
