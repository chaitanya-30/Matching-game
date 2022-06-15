const cards=document.querySelectorAll(".card");
let matchedcount=0;
let cardone, cardtwo;
let disabledeck=false;
function flipcard(e){
    var clickcard=e.target;
    clickcard.classList.add("flip")
    if(clickcard !==cardone && !disabledeck){
      
        if(!cardone){
            return cardone=clickcard;
        }
        cardtwo=clickcard;
        disabledeck=true;
        let cardoneimg=cardone.querySelector("img").src;
        let cardtwoimg=cardtwo.querySelector("img").src;
   
        matchcareds(cardoneimg,cardtwoimg);

        
    }
 
}
function matchcareds(img1,img2){
  
    if(img1===img2){
matchedcount++;
if(matchedcount ==8){
    setTimeout(() => {
        return shufflecard();
    }, 1000); 
  
}
        cardone.removeEventListener("click",flipcard);
        cardtwo.removeEventListener("click",flipcard);
        cardone=cardtwo="";
        return   disabledeck=false;;
    }
        setTimeout(()=>{
           
            cardone.classList.add("shake");
            cardtwo.classList.add("shake");
        },400);
        setTimeout(()=>{
            cardone.classList.remove("shake", "flip");
            cardtwo.classList.remove("shake" ,"flip");
            cardone=cardtwo="";
            disabledeck=false;
        },1200);
       

   
   
    }
function shufflecard(){
     matchedcount=0;
cardone=cardtwo="";
disabledeck=false;
let arr=[1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
arr.sort(()=>Math.random()>0.5?1:-1);
console.log(arr);
cards.forEach( (card, index )=> {
    card.classList.remove("flip");
    let imgtag=card.querySelector("img");
    imgtag.src=`images/img-${arr[index]}.png`
    card.addEventListener("click", flipcard);
    // console.log(card)
});
}
shufflecard();
cards.forEach(card => {

    card.addEventListener("click", flipcard);
    // console.log(card)
});