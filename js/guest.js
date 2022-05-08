"use strict"

// 任務看板-點擊換圖
let small_img_1 = document.getElementsByClassName("small_img_1")[0];
let small_img_2 = document.getElementsByClassName("small_img_2")[0];
let small_img_3 = document.getElementsByClassName("small_img_3")[0];
let small_img_4 = document.getElementsByClassName("small_img_4")[0];
let small_img_5 = document.getElementsByClassName("small_img_5")[0];

//let big_img = document.getElementsByClassName("big_img")[0];

let main_right = document.getElementsByClassName("main_right")[0];



small_img_1.addEventListener("click", function(){
    let small_img_src = small_img_1.getAttribute("src");
    //big_img.src = small_img_src;
    main_right.innerHTML = `
    <img class="big_img" src="${small_img_src}" alt="">
    <!-- 任務一內容 -->
    <div>
        <ul>
            <li><h2>獎勵 :</h2></li>
            <li><img class="coin"src="img/quest/coin.png" alt=""></li>
            <li><span>50</span></li>
        </ul>
        <h3>我的貓貓不見啦!!</h3>
        <p>麻瓜家庭楊小姐的愛貓逃家了!初步推斷是咬破紗窗離開原居所,於榭寄生街區走失約三天,請參照貓咪圖協尋</p>
        <h4>ps.校長表示若能尋回他的同類,加碼50金</h4>
        <a href="#">接受任務</a>
    </div>`
});

small_img_2.addEventListener("click", function(){
    let small_img_src = small_img_2.getAttribute("src");
    //big_img.src = small_img_src;

    main_right.innerHTML = `
    <img class="big_img" src="${small_img_src}" alt="">
    <!-- 任務二內容 -->
    <div>
        <ul>
            <li><h2>獎勵 :</h2></li>
            <li><img class="coin"src="img/quest/coin.png" alt=""></li>
            <li><span>100</span></li>
        </ul>
        <h3>請幫我占卜一下台積電</h3>
        <p>股市大跌,九天玄女認證姊妹我也找過了沒有用,需要找擅長占星術的巫師幫我算一下我手上的航運股還能不能起飛!</p>
        <h4>PS. 事成之後,雇主願意分紅10%</h4>
        <a href="#">接受任務</a>
    </div>`
});

small_img_3.addEventListener("click", function(){
    let small_img_src = small_img_3.getAttribute("src");
    //big_img.src = small_img_src;

    main_right.innerHTML = `
    <img class="big_img" src="${small_img_src}" alt="">
    <!-- 任務三內容 -->
    <div>
        <ul>
            <li><h2>獎勵 :</h2></li>
            <li><img class="coin"src="img/quest/coin.png" alt=""></li>
            <li><span>160</span></li>
        </ul>
        <h3>我的寵物貓頭鷹需要一個男朋友</h3>
        <p>我的貓頭鷹妹妹最近鬱鬱寡歡,正值尋找伴侶的年紀,希望能找到帥氣公貓頭鷹嘗試配對!</p>
        <h4>PS. 妹妹表示,希望捕食工作都交給男朋友</h4>
        <a href="#">接受任務</a>
    </div>`
});

small_img_4.addEventListener("click", function(){
    let small_img_src = small_img_4.getAttribute("src");
    //big_img.src = small_img_src;

    main_right.innerHTML = `
    <img class="big_img" src="${small_img_src}" alt="">
    <!-- 任務四內容 -->
    <div>
        <ul>
            <li><h2>獎勵 :</h2></li>
            <li><img class="coin"src="img/quest/coin.png" alt=""></li>
            <li><span>120</span></li>
        </ul>
        <h3>書本自燃事件</h3>
        <p>麻瓜世界的市立圖書館,近期陸續發生書本打開後自燃的事件,可能被心懷不軌的巫師施放了惡作劇的魔法陷阱,須立即清除</p>
        <h4>PS. 接取者至少要能施放初階火焰抗性咒文</h4>
        <a href="#">接受任務</a>
    </div>`
});

small_img_5.addEventListener("click", function(){
    let small_img_src = small_img_5.getAttribute("src");
    //big_img.src = small_img_src;
    main_right.innerHTML = `
    <img class="big_img" src="${small_img_src}" alt="">
    <!-- 任務五內容 -->
    <div>
        <ul>
            <li><h2>獎勵 :</h2></li>
            <li><img class="coin"src="img/quest/coin.png" alt=""></li>
            <li><span>200</span></li>
        </ul>
        <h3>疑似假冒巫師事件</h3>
        <p>麻瓜首都郊區,近期出現了疑似假冒巫師的麻瓜,招搖撞騙,進行不正當的勾當,須前往確認身分並協助警方取締</p>
        <h4>PS. 或許存在不確定之風險</h4>
        <a href="#">接受任務</a>
    </div>`
});

// scrollTop
// $('.toTop').click(function(){
//     $('html,body').animate({scrollTop: 0},500)
// })