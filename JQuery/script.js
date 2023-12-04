// $(document).on("mousemove", function (e) {
// 	const div = document.createElement("div");
// 	div.className = "blob";
// 	const blob = $(".blob");

// 	blob.css("left", e.pageX - blob.innerWidth() / 2);
// 	blob.css("top", e.pageY - blob.innerHeight() / 2);

// 	$("body").append(div);

// 	setTimeout(() => {
// 		div.remove();
// 	}, 200);
// });

// console.log($(document));

const submenusArr = [
  {
    title: "services",
    submenu: ["A", "B", "C"],
    submenusInner: [
      {
        title: "A",
        submenu: ["A 1.0", "A 2.0", "A 2.0", "A 3.0"],
      },
    ],
  },
  {
    title: "categories",
    submenu: ["A", "B", "C"],
    submenusInner: [
      {
        title: "B",
        submenu: ["B 1.0", "B 2.0", "B 2.0", "B 3.0"],
      },
    ],
  },
  {
    title: "connections",
    submenu: ["A", "B", "C"],
    // submenusInner: [
    // 	{
    // 		title: "C",
    // 		submenu: ["C 1.0", "C 2.0", "C 2.0", "C 3.0"],
    // 	},
    // ],
  },
];

let open = false;
$("nav ul li").each(function () {
  $(this).click(function () {
    handleLinkHover($(this), submenusArr);
  });
});
function handleLinkHover(link) {
  open = !open;
  let linkText = link.find("a").text();
  // for comparing which submenu to open
  if (open) {
    const _submenuObj = submenusArr.find(
      ({ title }) => title.toLowerCase() === linkText.toLowerCase()
    );

    if (_submenuObj) {
      const submenu = createSubMenu(_submenuObj.submenu);
      const wrapper = document.createElement("div");
      wrapper.className = "submenu-wrapper";
      const innerWrapper = document.createElement("div");
      innerWrapper.className = "submenu-wrapper-inner";

      innerWrapper.appendChild(submenu);
      wrapper.appendChild(innerWrapper);
      link.append(wrapper);

      $(".submenu-wrapper")
        .find("li")
        .each(function () {
          let open = false;
          $(this).hover(function () {
            open = !open;
            if (open) {
              const submenu_ = createSubMenu(_submenuObj.submenusInner.submenu);
              $(".submenu-wrapper-inner").append(submenu_);
            } else {
              // $(".submenu-wrapper-inner").remove();
              console.log("remove");
            }
          });
        });
    }
  } else {
    link.find(".submenu-wrapper").remove();
  }
}

function createMenuItem(menuItem) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.innerText = menuItem.charAt(0).toUpperCase() + menuItem.slice(1);
  a.href = menuItem;
  li.appendChild(a);
  return li;
}

function createSubMenu(arr) {
  const container = document.createElement("ul");

  arr.forEach((menuItem) => {
    const li = createMenuItem(menuItem);
    container.appendChild(li);
  });

  return container;
}
