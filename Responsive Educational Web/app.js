const doc = document;

function select(el, all = false) {
  return all ? doc.querySelectorAll(el) : doc.querySelector(el);
}

// Global Variable
let areMenusOpen = false;

onload = () => {
  const header = select("header"),
    nav = select("nav"),
    links = doc.querySelectorAll(".links li"),
    dropdownBtn = select("#dropdownBtn");
  dropdown = select("#coursesDropdown");

  // dropdown
  dropdown.innerHTML = renderDropdown();

  dropdownBtn.onclick = openDropdown;

  // toggle menu & nav
  const toggleSidebar = () => {
    doc.onclick = (e) => {
      if (!nav.contains(e.target) && nav.classList.contains("visible")) {
        nav.classList.remove("visible");
        menu.classList.remove("active");
        overlayBg.classList.remove("visible");
        areMenusOpen = false;
      } else if (menu.contains(e.target)) {
        menu.classList.toggle("active");
        nav.classList.toggle("visible");
        overlayBg.classList.add("visible");
        areMenusOpen = true;
      }
    };
  };

  toggleSidebar();

  const activateHeaderOnScroll = () => {
    let lastScroll = 0;

    window.onscroll = () => {
      if (window.scrollY < 200 && !areMenusOpen) {
        header.classList.remove("hide", "active");
        return;
      }
      if (lastScroll > window.scrollY || areMenusOpen) {
        header.classList.add("active");
        header.classList.remove("hide");
        scrollTopBtn.classList.add("active");
      } else {
        header.classList.remove("active");
        header.classList.add("hide");
        scrollTopBtn.classList.remove("active");
      }

      lastScroll = window.scrollY;
    };

    scrollTopBtn.onclick = () => {
      window.scrollTo(0, 0);
    };
  };

  activateHeaderOnScroll();

  // add transitionDelay to nav link & active link
  addStyleToLinks(links);

  // Open Modal
  loginBtn.onclick = openModal;

  function openModal() {
    const modal = select(".modal_wrapper");
    modal.classList.add("open");
    // close Modal
    const closeBtn = select(".close");
    closeBtn.onclick = (e) => {
      modal.classList.remove("open");
    };
  }

  // show password
  let isOpened = false;
  function showPassword() {
    isOpened = !isOpened;
    // eyeIcon.innerHTML = isOpened ?

    loginForm.password.type = isOpened ? "text" : "password";
  }

  // Intro Animation
  animateIntroText(introText);

  renderSvgIcons();
  function renderSvgIcons() {
    const iconWrappers = select(".course-icon", true);
    iconWrappers.forEach(
      (d) => (d.innerHTML = ` <i class="fa-solid fa-book-open-reader"></i>`)
    );
  }
};

function addStyleToLinks(links) {
  links.forEach((li, i) => {
    li.style.transitionDelay = `${i + 1}00ms`;

    if (li.id === "dropdownBtn") {
      return;
    }

    li.onclick = (e) => {
      links.forEach((el) => el.classList.remove("active"));
      li.classList.add("active");
    };
  });
}

function animateIntroText(parentElement) {
  let i = 0;
  const text = "Welcome".split("");
  for (i; i < text.length; i++) {
    let txt = document.createElement("span");
    txt.innerHTML = text[i];
    txt.style.animationDelay = `${i + 1}00ms`;
    parentElement.appendChild(txt);
  }
}

function openDropdown() {
  this.classList.toggle("open");
  if (this.classList.contains("open")) {
    dropdown.style.height = dropdown.scrollHeight + "px";
  } else {
    dropdown.style.height = 0;
  }
}

// Watch default Theme
function watchMedia() {
  let dark = "(prefers-color-scheme: dark)";
  if (window.matchMedia && window.matchMedia(dark).matches) {
    doc.documentElement.dataset.theme = "dark";
  } else {
    doc.documentElement.dataset.theme = "light";
  }
}

watchMedia();

//theme toggler
function toggleTheme() {
  const html = doc.documentElement;
  const theme = html.getAttribute("data-theme");
  html.setAttribute("data-theme", theme === "dark" ? "light" : "dark");
}

function renderDropdown() {
  const arr = [
    { label: "Web development", href: "#" },
    { label: "Animation", href: "#" },
    { label: "Android development", href: "#" },
  ];

  const ul = doc.createElement("ul");
  return arr
    .map((item) => `<li><a href=${item.href}>${item.label}</a></li>`)
    .join("");
}
