let score = 0;
let tracker = 1;
let showedScore;
let tempArray = [];
let imgArray = []
let storageArray = ["images/cat.png","images/pigeon.png","images/cheetah.png","images/turtle.png","images/dog.png","images/fish.png","images/whale.png","images/eagle.png","images/cat.png","images/pigeon.png","images/cheetah.png","images/turtle.png","images/dog.png","images/fish.png","images/whale.png","images/eagle.png"];

let initialize=()=>{
    showedScore = document.getElementById('userScore');
    assign();
}
let clicked=(a)=>{
    score++;
    console.log(a);
    //first click
    if(tracker%2===1){
        tempArray.push(a);
        const image = document.getElementById(`item-${a}`);
        image.src = imgArray[a];
    }else{
        tempArray.push(a);
        console.log(tempArray);
        const image = document.getElementById(`item-${a}`);
        image.src = imgArray[a];
        console.log(match());
        if(!match()){
            for(let i=0;i<2;i++){
                const image = document.getElementById(`item-${tempArray[i]}`);
                let reset =()=>image.src = "images/question_mark.jpg";
                setTimeout(reset, 700);
            }
        }
        tempArray = [];
    }
    
    tracker++;
    update();
}
let update = () => showedScore.innerHTML = `Score: ${score}`;
//assigns random positions for images
let assign=()=>{
    tempArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    for(let i=0; i < 16;i++){
        let temp= Math.floor(Math.random()*tempArray.length);
        imgArray.push(storageArray[tempArray[temp]]);
        tempArray.splice(temp,1)
    }
}
let match =()=>{
    return (imgArray[tempArray[0]] === imgArray[tempArray[1]]) ? true : false;
}
let resetGame=()=>{
    score = 0;
    tracker = 1;
    tempArray = [];
    imgArray = []
    assign();
    storageArray = ["images/cat.png","images/pigeon.png","images/cheetah.png","images/turtle.png","images/dog.png","images/fish.png","images/whale.png","images/eagle.png","images/cat.png","images/pigeon.png","images/cheetah.png","images/turtle.png","images/dog.png","images/fish.png","images/whale.png","images/eagle.png"];
    update();
    for(let k =0; k <16;k++){
        const image = document.getElementById(`item-${k}`);
        image.src = "images/question_mark.jpg";
    }

}