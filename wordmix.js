//문장에 단어 섞고 / 추가하는 코드
const input = "apple banana candy dark egg fork grape";
const arr1 = input.split(" ");
let eng=[];
let shuffled =[];

function shuffle(){//피셔 예이츠 셔플
    for(let i=0;arr1.length> 0;i+=1){
        const randomIndex = Math.floor(Math.random() * arr1.length );
        shuffled = arr1.splice(randomIndex,1); //arr1은 하나씩 없어져서 반복문이 다돌면 길이가 0이됨
        eng += shuffled +' / ';
       // console.log(shuffled);
    }
}

shuffle();
console.log(eng);
