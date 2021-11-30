import { parseJSON } from "jquery";
import { doc } from "prettier";
import "./index.css";


const hamburger = document.getElementById('menu-navBar')
const menuBlock = document.getElementById('menu-block')
const body = document.getElementById('body-content')
const main = document.getElementById('main')

function controllerHamburger() {
  hamburger.addEventListener('click', function() {
    menuBlock.classList.toggle('hidden')
    main.classList.toggle('opacity-0')
    body.classList.toggle('overflow-y-hidden')
  })
}

controllerHamburger()



let plusBtn = document.getElementById("plusBtn");
let msgBtn = document.getElementById("msgBtn");
let notifyBtn = document.getElementById("notifyBtn");
let moreBtn = document.getElementById("moreBtn");

let plusPanel = document.getElementById("plus-panel");
let msgPanel = document.getElementById("msg-panel");
let notifyPanel = document.getElementById("notify-panel");
let morePanel = document.getElementById("more-panel");

const panelList = [plusPanel, msgPanel, notifyPanel, morePanel];
const btnList = [plusBtn, msgBtn, notifyBtn, moreBtn];

function controllerPanel(index) {
  // 循環控制按鈕列表，如果當前點擊事件等於 idx 則會 toggle hidden，則其他按鈕都設為隱藏
  panelList.forEach((item, idx) => {
    if (index === idx) {
      item.classList.toggle("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
  btnList.forEach((item, idx)=> {
    if (index === idx) {
        item.classList.toggle("focus:bg-blue-500");
      } 
    else {
        item.classList.remove("focus:bg-blue-500");
      }
    });
}

// 抓取其他區塊點擊事件，把彈窗訊息都關閉
window.addEventListener("click", function () {
  panelList.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  });
  controllerPanel(-1);
});
// 按鈕一
plusBtn.addEventListener("click", function (event) {
  event.stopPropagation(); // 父元素忽略
  controllerPanel(0); // 啟動函式
});
// 按鈕二
msgBtn.addEventListener("click", function (event) {
  event.stopPropagation(); // 父元素忽略
  controllerPanel(1); // 啟動函式
});
// 按鈕三
notifyBtn.addEventListener("click", function (event) {
  event.stopPropagation(); // 父元素忽略
  controllerPanel(2); // 啟動函式
});
// 按鈕四
moreBtn.addEventListener("click", function (event) {
  event.stopPropagation(); // 父元素忽略
  controllerPanel(3); // 啟動函式
});

// 導航欄物件
let nav1 = {
  icon: "https://upload.cc/i1/2021/10/06/iAMFSn.jpeg",
  text: "Harry",
};
let nav2 = {
  icon: "https://bruce-fe-fb.web.app/image/left/activity.svg",
  text: "活動",
};
let nav3 = {
  icon: "https://bruce-fe-fb.web.app/image/left/cloudy.png",
  text: "天氣",
};
let nav4 = {
  icon: "https://bruce-fe-fb.web.app/image/left/dynamic.svg",
  text: "災害應變中心",
};
let nav5 = {
  icon: "https://bruce-fe-fb.web.app/image/left/facemask.svg",
  text: "新冠肺炎資訊中心",
};
let nav6 = {
  icon: "https://bruce-fe-fb.web.app/image/left/friend.svg",
  text: "社團",
};
let nav7 = {
  icon: "https://bruce-fe-fb.web.app/image/left/job.png",
  text: "企業管理平台",
};
let nav8 = {
  icon: "https://bruce-fe-fb.web.app/image/left/messenger.svg",
  text: "Messenger",
};
let nav9 = {
  icon: "https://bruce-fe-fb.web.app/image/left/pay.png",
  text: "近期廣告動態",
};
let nav10 = {
  icon: "https://bruce-fe-fb.web.app/image/left/sale.png",
  text: "朋友名單",
};
let nav11 = {
  icon: "https://bruce-fe-fb.web.app/image/left/star.svg",
  text: "最愛",
};
let nav12 = {
  icon: "https://bruce-fe-fb.web.app/image/left/store.svg",
  text: "Makretplace",
};
let nav13 = {
  icon: "https://bruce-fe-fb.web.app/image/left/watchingTv.svg",
  text: "Watch",
};
let navArr = [
  nav1,
  nav2,
  nav3,
  nav4,
  nav5,
  nav6,
  nav7,
  nav8,
  nav9,
  nav10,
  nav11,
  nav12,
  nav13,
];
let styling = "rounded-full overflow-hidden";

function renderLeftNavgaivatorBar(id) {
  let tagetNavBar = document.getElementById(id);
  let renderResult = "";
  navArr.map((item, idx) => {
    if (idx === 0) {
      let template = `
            <div class='flex items-center p-[8px] mx-2 rounded-lg cursor-pointer hover:bg-fb-active dark:hover:bg-gray-300'>
                <div class="w-[34px] h-[34px] mr-2 ${styling}">
                    <img class='object-cover' src="${item.icon}" alt="">
                </div>
                <p class="text-white text-sm dark:text-black">${item.text}</p>
            </div>
            `;
      renderResult += template;
    } else {
      let template = `
            <div class='flex items-center p-[8px] mx-2 rounded-lg cursor-pointer hover:bg-fb-active dark:hover:bg-gray-300'>
                <div class="w-[34px] h-[34px] mr-2">
                <img src="${item.icon}" alt="">
                </div>
                <p class="text-white text-sm dark:text-black">${item.text}</p>
            </div>
            `;
      renderResult += template;
    }
  });

  tagetNavBar.innerHTML = renderResult;
}

renderLeftNavgaivatorBar("nav-bar-left");
renderLeftNavgaivatorBar("menu-nav-bar");



// 聯絡人區塊
let contect1 = {img:"https://upload.cc/i1/2021/09/16/Zsy1KE.jpg", nickName:'蔡承諺', school: '資訊網路工程系'}
let contect2 = {img:"https://upload.cc/i1/2021/09/16/cghaYu.jpg", nickName:'Winnie', school: '就讀於經國暨管理技術學院'}
let contect3 = {img:"https://upload.cc/i1/2021/10/06/LfZhMD.jpeg", nickName:'Philipp Berg', school: '就讀於龍華科技大學資訊網路工程系'}
let contect4 = {img:"https://upload.cc/i1/2021/09/16/85yUPZ.jpg", nickName:'文佳煐', school: '居住地大韓民國'}
let contect5 = {img:"https://upload.cc/i1/2021/09/16/ZyMdoQ.jpg", nickName:'雪茄', school: '就讀於家裡蹲大學'}
let contect6 = {img:"https://upload.cc/i1/2021/10/06/aQHcYA.jpeg", nickName:'Campbell', school: '就讀於龍華科技大學資訊網路工程系'}
let contect7 = {img:"https://upload.cc/i1/2021/10/06/I0psdW.jpeg", nickName:'Toni Hukkanen', school: '就讀於龍華科技大學資訊網路工程系'}
let contect8 = {img:"https://upload.cc/i1/2021/10/06/D6QKPl.jpeg", nickName:'Cornine', school: '就讀於龍華科技大學資訊網路工程系'}
let contect9 = {img:"https://upload.cc/i1/2021/10/06/iXhxzk.jpeg", nickName:'Michael Rodichev', school: '就讀於龍華科技大學資訊網路工程系'}
let contect10 = {img:"https://upload.cc/i1/2021/10/06/ntshHr.jpeg", nickName:'Kelly', school: '就讀於龍華科技大學資訊網路工程系'}
let contectArr = [contect1, contect2, contect3, contect4, contect5, contect6, contect7, contect8, contect9, contect10]

let contectResult = ''

function renderContectBlock(id) {
    let targetContect = document.getElementById(id)
    contectArr.forEach((item, idx)=> {
        let contectTemplate = `
            <div class="contect contect${idx} relative flex p-2 mr-2 rounded-sm items-center hover:bg-fb-input cursor-pointer dark:hover:bg-gray-300">
                <div class="w-[50px]">
                    <div class="relative w-[40px]">  
                    <!-- 會改變 img 大小 -->
                        <div class="w-[40px] h-[40px] rounded-full object-cover overflow-hidden cursor-pointer">
                            <img class='rounded-full' src="${item.img}" alt="">
                        </div>
                        <div class="absolute right-0 bottom-0 w-[8px] h-[8px] rounded ring-[2px] ring-black bg-green-500 dark:ring-gray-100"></div>
                    </div>
                </div>
                <p class="text-white text-sm dark:text-black">${item.nickName}</p>
                <div id='contect${idx}' class="contect-popover hidden">
                    <div class="flex items-center">
                        <div class='w-[110px]' >
                            <div class='relative w-[90px]'>
                                <div class='w-[90px] h-[90px] rounded-full overflow-hidden dark:ring-[1px] dark:ring-gray-200'>
                                    <img class='rounded-full' src="${item.img}" alt="">
                                </div>
                                <div class="absolute bottom-2 right-1 w-[12px] h-[12px] rounded-full ring-[2px] ring-black bg-green-500 dark:ring-white"></div>
                            </div>
                        </div>
                        <div class='w-full ml-2'>
                            <p class='text-white text-xl font-bold mb-2 dark:text-black'>${item.nickName}</p>
                            <p class='text-white dark:text-black'>${item.school}</p>
                        </div>
                    </div>
                </div>
            </div>
            `;
        contectResult += contectTemplate
    })

    targetContect.innerHTML = contectResult;
}
renderContectBlock('contect-right')

// 當滑鼠游標移到聯絡人上方跳出相關訊息

function moveContectBlockDisplayMessenger() {
    let targetAllContect = document.querySelectorAll('.contect')
    let contectLength = targetAllContect.length
    for(let i = 0; i < contectLength; i++) {
        targetAllContect[i].addEventListener('mousemove', function() {
            document.getElementById(`contect${i}`).classList.remove('hidden')
        })
        targetAllContect[i].addEventListener('mouseout', function() {
            document.getElementById(`contect${i}`).classList.add('hidden')
        })
    }
}
moveContectBlockDisplayMessenger()

//  限時動態
function renderStory() {
    let story = document.getElementById('storyCard')
    let story1 = {name:'Sam Chang', img:'https://upload.cc/i1/2021/09/16/bBpEF5.jpg', url:'https://upload.cc/i1/2021/10/06/Oj6dSI.jpeg'}
    let story2 = {name:'Alrick Gillard', img:'https://upload.cc/i1/2021/10/06/IlN7cg.jpeg', url:'https://upload.cc/i1/2021/10/06/AaFs3K.jpeg'}
    let story3 = {name:'Tanner Geringer', img:'https://upload.cc/i1/2021/10/06/h1d5nc.jpeg', url:'https://upload.cc/i1/2021/10/06/Iv2bH9.jpeg'}
    let story4 = {name:'Moreno Matković', img:'https://upload.cc/i1/2021/10/06/nvomIx.jpeg', url:'https://upload.cc/i1/2021/10/06/ocbRXq.jpeg'}
    let story5 = {name:'Toni Hukkanen', img:'https://upload.cc/i1/2021/10/06/I0psdW.jpeg', url:'https://upload.cc/i1/2021/10/06/ilS8fF.jpeg'}
    let story6 = {name:'Campbell', img:'https://upload.cc/i1/2021/10/06/aQHcYA.jpeg', url:'https://upload.cc/i1/2021/10/06/twfsVU.jpeg'}
    let story7 = {name:'Philipp Berg', img:'https://upload.cc/i1/2021/10/06/LfZhMD.jpeg', url:'https://upload.cc/i1/2021/10/06/HbOyNC.jpeg'}
    let story8 = {name:'Philipp Berg', img:'https://upload.cc/i1/2021/10/06/ViRUF8.jpeg', url:'https://upload.cc/i1/2021/10/06/onGgNy.jpeg'}
    let storyResult = [story1, story2, story3, story4, story5, story6, story7, story8,]
    storyResult.forEach((item, idx)=>{
        let divBox = document.createElement('div', story)
        divBox.classList.add('flex-1', 'px-[4px]', 'min-w-[120px]')
        divBox.innerHTML = `
        <div id='story${idx}' class="relative h-full flex-col rounded-xl overflow-hidden cursor-pointer">
            <div class="h-full overflow-hidden duration-500 hover:scale-110 cursor-pointer">
                <div class="absolute w-full h-full bg-gradient-to-b from-black/30 to-transparent hover:bg-black/10"></div>
                <img class='w-full h-full object-cover' src="${item.url}" alt="">
            </div>
            <p class="text-white text-xs absolute bottom-2 left-2">${item.name}</p>
            <button class="absolute top-4 left-4 z-10 w-[32px] h-[32px] bg-fb-active rounded-full ring-4 ring-fb text-white">
              <img class='w-full h-full rounded-full object-cover' src="${item.img}" alt="">
            </button>
        </div>
        `
        story.appendChild(divBox)
    })
    
}
renderStory()

// 直播包廂區塊 and Swiper

function renderSwiper() {
    let targetFbLive = document.getElementById('swiper-wrapper-fb-live')

    for(let i = 0; i < 30; i++) {
        let divBox = document.createElement('div', targetFbLive)
        divBox.classList.add('swiper-slide')
        divBox.innerHTML = `
        <div class="w-[50px] px-4">
            <div class="w-[40px] relative cursor-pointer">
                <div class="w-[40px] h-[40px] rounded-full overflow-hidden">
                    <img src="https://upload.cc/i1/2021/10/06/iAMFSn.jpeg" alt="">
                </div>
                <div class="absolute bottom-0 right-0 w-[8px] h-[8px] bg-green-500 rounded-full ring-[2px] ring-black dark:ring-white"></div>
            </div>
        </div>
        `
        targetFbLive.appendChild(divBox)
    }
    new Swiper(".fb-live", {
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
          },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        slidesPerView: 'auto',
        spaceBetween: 0.8,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
      });
}
renderSwiper()

// loading 頁面渲染

function renderLoadingPost() {
  let loading = document.getElementById('loading')
    for(let i = 0; i < 5; i++) {
        let divBox = document.createElement('div', loading)
        divBox.classList.add('bg-fb-card', 'w-full', 'mt-4', 'rounded-lg', 'flex-col', 'items-center', 'rounded-lg', 'mb-4', 'animate-pulse', 'dark:bg-white')
        divBox.innerHTML = `
        <div class="w-full flex items-center justify-between shadow-md">
            <div class="flex items-center p-2 ml-2 mt-1 mb-1">
              <div class="bg-fb-input w-[40px] h-[40px] rounded-full overflow-hidden mr-3 cursor-pointer dark:bg-gray-300"></div>
              <div class="flex-col content-evenly flex-wrap">
                <div class="bg-fb-input w-[150px] h-[15px] rounded-full mb-2 dark:bg-gray-300"></div>
                <div class="bg-fb-input w-[120px] h-[15px] rounded-full dark:bg-gray-300"></div>
              </div>
            </div>
          </div>
          <div class="w-full h-[300px] bg-fb-input rounded-b-lg dark:bg-gray-300"></div>
        `
        loading.appendChild(divBox)
    }
}

renderLoadingPost()


let lightBlock = document.getElementById('light-mode')
let moonBlock = document.getElementById('moon-mode')
let bgContainer = document.getElementById('bgContainer')
let circleBtn = document.getElementById('circleBtn')
let darkModeList = [lightBlock, moonBlock, circleBtn]
/* 
   預設為暗黑模式
   循環 darkModeList 元素，從 index 下去判斷點擊按鈕 做處理
   如果點到背景 或 circleBtn 都以 toogle 去判斷 lightBlock and moonBlock 兩顆按鈕是否存在 hidden
*/

function controlDarkMode() {
  bgContainer.addEventListener('click', function() {
    activeSpcialBtn()
  })
  darkModeList.forEach((item, index) => {
    item.addEventListener('click', function() {
      console.log(index)
      if (index == 0) {
        lightBlock.classList.add('hidden')
        moonBlock.classList.remove('hidden')
        bgContainer.classList.remove('bg-green-500')
        bgContainer.classList.add('bg-moon')
        document.documentElement.classList.remove('dark')
      }
      if (index == 1) {
        moonBlock.classList.add('hidden')
        lightBlock.classList.remove('hidden')
        bgContainer.classList.remove('bg-moon')
        bgContainer.classList.add('bg-green-500')
        document.documentElement.classList.add('dark');
      }
      if (index == 2) {
        activeSpcialBtn()
      }
    })
  })
}
  
controlDarkMode()

function activeSpcialBtn() {
  moonBlock.classList.toggle('hidden')
  bgContainer.classList.toggle('bg-moon')
  lightBlock.classList.toggle('hidden')
  bgContainer.classList.toggle('bg-green-500')
  document.documentElement.classList.toggle('dark')
}