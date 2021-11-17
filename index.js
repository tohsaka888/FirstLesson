let promote = document.getElementById("promote");
let promote_second = document.getElementById("promote-second");

const content = [
  {
    imgUrl:
      "https://i0.hdslb.com/bfs/feed-admin/1f6686726cabca6d4f334fbac7809ab7f4db207d.jpg@412w_232h_1c",
    title: "三体雾山时光动画人被催更",
  },
  {
    imgUrl:
      "https://i0.hdslb.com/bfs/archive/8fb0bbd047769e27648c2e876b421c349d342ab4.jpg@412w_232h_1c",
    title: "挑战全网最甜????抚摸抚摸????｜江湖英雄帖【安然×sora】",
  },
  {
    imgUrl:
      "https://i0.hdslb.com/bfs/archive/3b34cd6a19ea920b3184ebedcafb435befcaf455.jpg@412w_232h_1c",
    title: "挑战全网最甜????抚摸抚摸????｜江湖英雄帖【安然×sora】",
  },
  {
    imgUrl:
      "https://i0.hdslb.com/bfs/archive/821546c199c9e8f9e26427eba8d377b00cbd9552.jpg@412w_232h_1c",
    title: "【吴敏霞】孕期美食合集！跟着“金牌营养师”大饱口福？",
  },
  {
    imgUrl:
      "https://i0.hdslb.com/bfs/feed-admin/57232f20e3b9110e47d852838a025ac9ed233f7b.png@206w_116h_1c_100q.png",
    title: "【直播】英雄联盟手游破晓杯第四日！",
  },
];

const content_second = [
  {
    imgUrl:
      "https://i0.hdslb.com/bfs/archive/11e5d18ff52926f20f276c8d0ab270924bbdf250.jpg@283w_160h_1c_100q.webp",
    title: "请给我一首《Wake》的时间，让你感受平成假面骑士的魅力，这就是平成",
  },
  {
    imgUrl:
      "https://i2.hdslb.com/bfs/archive/a0980dc972b55587faa9c141e2edc47e40dc04e8.jpg@283w_160h_1c_100q.webp",
    title: "奇怪的知识又增加了",
  },
  {
    imgUrl:
      "https://i2.hdslb.com/bfs/archive/72c49b5c1bb1d09b7a4681076377ba3338069916.jpg@283w_160h_1c_100q.webp",
    title: "挑战全网最甜????抚摸抚摸????｜江湖英雄帖【安然×sora】",
  },
  {
    imgUrl:
      "https://i0.hdslb.com/bfs/archive/821546c199c9e8f9e26427eba8d377b00cbd9552.jpg@412w_232h_1c",
    title: "【东方MMD】和蕾米莉亚幽会R",
  },
  {
    imgUrl:
      "https://i2.hdslb.com/bfs/archive/cba8d04a062bf913f0ba2d3c97750fd487490a02.jpg@283w_160h_1c_100q.webp",
    title: "小恶魔嘉然",
  },
];

const create = () => {
  content_second.map((item, index) => {
    const container = document.createElement("div");
    const image = document.createElement("img");
    const title = document.createElement("p");

    image.src = item.imgUrl;
    title.innerHTML = item.title;
    container.appendChild(image);
    container.appendChild(title);
    promote.appendChild(container);
  });
};

const create_second = () => {
  content.map((item, index) => {
    const container = document.createElement("div");
    const image = document.createElement("img");
    const title = document.createElement("p");

    image.src = item.imgUrl;
    title.innerHTML = item.title;
    container.appendChild(image);
    container.appendChild(title);
    promote_second.appendChild(container);
  });
};

const createLoginDialog = () => {
  let dialog = document.getElementById("favDialog");
  const body = document.getElementById("body");
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
    dialog.style.display = "flex";
  } else {
    alert("The dialog API is not supported by this browser");
  }
};

let dialog = document.getElementById("favDialog");
const cancel = document.getElementById("cancel");
cancel.addEventListener("click", () => {
  if (typeof dialog.closeModal === "function") {
    dialog.addEventListener("close");
  }
  dialog.style.display = "none";
});

const login = document.getElementById("login");
login.addEventListener("click", () => {
  let user_input = document.getElementById("user_input");
  let password_input = document.getElementById("password_input");
  let radios = document.getElementsByName("radio");
  let checkboxs = document.getElementsByName("checkbox");
  console.log(radios);
  let selectedRadio = "";
  let checkboxsValue = "";
  if (radios.length) {
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        selectedRadio += radios[i].value;
      }
    }
  }
  if (checkboxs.length) {
    for (let i = 0; i < checkboxs.length; i++) {
      if (checkboxs[i].checked) {
        checkboxsValue += checkboxs[i].value;
      }
    }
  }
  alert(selectedRadio);
  alert(checkboxsValue);
  if (user_input.value === "admin" && password_input.value === "123456") {
    alert("登录成功");
    dialog.style.display = "none";
  } else {
    alert("登录失败");
    dialog.style.display = "none";
  }
});

const button = document.getElementById("button");
button.addEventListener("click", createLoginDialog);
create();
create_second();

var getDaysOfMonth = function (year, month) {
  month = month + 1;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? 29 : 28;
    default:
      return 0;
  }
};

let year = document.getElementById("year");
let month = document.getElementById("month");
let run = document.getElementById("run");
run.addEventListener("click", () => {
  let result = getDaysOfMonth(parseInt(year.value), parseInt(month.value));
  console.log(result);
});

const sum = (end) => {
  let sum = 0;
  for (let i = 1; i <= end; i++) {
    sum += i;
  }
  console.log(sum);
};

console.time("sum");
sum(10000);
console.timeEnd("sum");
