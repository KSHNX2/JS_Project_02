
//각 이미지 표시 함수
/*
//show() 함수로 대체
const showFlower = () =>{
    const imgView1 = document.querySelector("#imgView1");

    const txtWrap = document.querySelector(".txtWarp");
    const imgViewText = document.querySelector("#imgViewText");

    imgView1.setAttribute("src","./images/cityFlower.png");
    imgViewText.innerHTML = "동백꽃";
    txtWrap.style.display = "block";
    
}
const showBird = () =>{
    const imgView1 = document.querySelector("#imgView1");
    imgView1.setAttribute("src","./images/cityBird.png");
}
const showFish = () =>{ 
    const imgView1 = document.querySelector("#imgView1");
    imgView1.setAttribute("src","./images/cityFish.png");
}
*/


//하나의 함수로 처리
const show=(idx)=>{
    const pngName = ['cityFlower','cityBird','cityFish'];
    const txt = ['동백꽃', "갈매기", "고등어"];

    console.log(pngName[idx], txt[idx]);

    const imgView1 = document.querySelector("#imgView1");    
    const txtWrap = document.querySelector(".txtWrap");
    const imgViewText = document.querySelector("#imgViewText");

    imgView1.setAttribute("src", `./images/${pngName[idx]}.png`);
    imgViewText.innerHTML = txt[idx];
    txtWrap.style.display = "block";


}


//dom 로드 후
document.addEventListener("DOMContentLoaded",()=>{
    /*
    const imgIcon1 = document.getElementById("imgIcon1");
    const imgIcon2 = document.getElementById("imgIcon2");
    const imgIcon3 = document.getElementById("imgIcon3");

    imgIcon1.addEventListener("mouseover",() => show(0));
    imgIcon2.addEventListener("mouseover",() => show(1));
    imgIcon3.addEventListener("mouseover",() => show(2));
    */

    const imgIconItems = document.querySelectorAll(".imgIconItem");
    for(let [k, item] of imgIconItems.entries()){    
        console.log(item, k)
        item.addEventListener("mouseover", ()=>show(k))
    }
});


