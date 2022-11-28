
//windows object that should be loaded
 window.addEventListener("load",init);
//Setting up some variables
 const myWords=["insideout","onedirection","dream","harrypotter","javascript","fruits"];
 let cur=0;
 let startTime;

//A function init() that contains all the interaction for the game.
function init(){
let div = document.createElement("div");
div.setAttribute("class","message");
div.innerText="Press start button";
document.body.appendChild(div);
let button = document.createElement("button");
button.type="button";
button.innerText="Start Game";
button.addEventListener("click",start);
document.body.appendChild(button);
let div1=document.createElement("div");
div1.classList.add("game");
document.body.appendChild(div1);
}

function start(){
    cur=0;
    startTime=Date.parse(new Date());
    this.style.display="none";
    let tempArr=myWords.slice(0);
    tempArr.sort(function(a,b){
        return 0.5-Math.random();
    });
    myWords.sort(function(a,b){
        return 0.5-Math.random();
    });
    const game = document.querySelector(".game");
    tempArr.forEach(function(item){
        let temp=item.split("");
        temp.sort(function(a,b){return 0.5-Math.random()
        });
        let temp1=temp.join("");
        let div = document.createElement("div");
        div.innerText="Select";
        div.classList.add("box");
        div.style.backgroundColor="grey";
        div.word=item;
        div.addEventListener("mouseenter",function(){
           div.style.backgroundColor="lightblue";
           div.innerText=temp1;
        })
        div.addEventListener("mouseleave",function(){
            div.style.backgroundColor="grey";
            div.innerText="Select";
        })
        div.addEventListener("click",function(){
            if(div.word===myWords[cur]){
              this.classList.add("hidden");
               cur++;
               nextWord(); 
            }else{
                console.log("wrong");
            }
        })
        game.appendChild(div);
    })
    nextWord();
     }
     
function nextWord(){
   if(cur>=myWords.length){
    let endTime = Date.parse(new Date());
    let duration= (endTime-startTime)/1000;
    document.querySelector(".game").innerHTML="";
    document.querySelector("button").style.display="block";
    message("Game Over played "+duration+ " seconds");
   }else{
    message("Select this Word "+myWords[cur]);
   }
    
}
function message(output){
  document.querySelector(".message").innerHTML=output;

}
