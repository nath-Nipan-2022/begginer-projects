const nav = document.querySelector("nav");
const navLinks = nav.querySelector(".nav-links");
const humbuggerMenu = document.querySelector(".menu");

// get active nav link and style the bar
getActiveLink();
// hovering effect!
navLinks.onmouseover = (e) => {
  if (e.target.nodeName === "A") {
    const link = e.target;
    getPosition(link);

    link.onclick = () => {
      navLinks
        .querySelectorAll("a")
        .forEach((link) => link.classList.remove("active"));

      link.classList.add("active");
    };
  }
};

navLinks.onmouseleave = () => getActiveLink();

function getActiveLink() {
  const activeLink = navLinks.querySelector("a.active");
  getPosition(activeLink);
}

function getPosition(elem) {
  const x = elem.offsetLeft;
  const w = elem.offsetWidth;

  nav.style.setProperty("--w", `${w}px`);
  nav.style.setProperty("--x", `${x}px`);
}

// form validation!
// const loginFormContainer = document.querySelector("#loginFormContainer");
// const registerFormContainer = document.querySelector("#registerFormContainer");

const loginForm = loginFormContainer.querySelector("#loginForm");
const registerForm = registerFormContainer.querySelector("#registerForm");

const msgDiv = document.createElement("div");
const fetchingOutput = document.createElement("div");

loginForm.onsubmit = (event) => {
  event.preventDefault();

  const pw = loginForm.elements.password;
  const isValid = validatePassword(pw);

  if (isValid) {
    const parent = loginForm.parentElement;

    fetchingOutput.className = "form-fetching";
    fetchingOutput.innerHTML = "Fetching the information ...";

    parent.appendChild(fetchingOutput);
  }
};

function validatePassword(pw) {
  const value = pw.value;

  const validityMsg = (msg) => {
    msgDiv.innerHTML = `<span class="invalid">${msg}</span>`;
    pw.parentElement.insertBefore(msgDiv, pw.parentElement.firstChild);
  };

  if (value.length < 6) {
    validityMsg("Password must contain 6 characters");
    return false;
  } else {
    msgDiv.remove();
    return true;
  }
}

// open active tab

getActiveAccountForm({
  activeForm: loginForm.parentElement,
  initializer: document.querySelectorAll('[data-account_type="login"]'),
  inactiveFrom: registerForm.parentElement,
});

getActiveAccountForm({
  activeForm: registerForm.parentElement,
  initializer: document.querySelectorAll('[data-account_type="register"]'),
  inactiveFrom: loginForm.parentElement,
});

function getActiveAccountForm(form) {
  const { activeForm, initializer, inactiveFrom } = form;

  if (initializer.length) {
    initializer.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (!activeForm.classList.contains("active")) {
          activeForm.classList.add("active");
        }
        inactiveFrom.classList.remove("active");
      });
    });
  }
}

// add active menu
humbuggerMenu.addEventListener("click", (event) => {
  event.target.classList.toggle("active");
  nav.classList.toggle("active");
});
