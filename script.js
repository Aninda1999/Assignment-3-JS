let low = 1;
let high = 10; 
  
  let correct_ans = getRandomInt(low,high);
  console.log(correct_ans);

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
let c = 3;
let input= [];
for (let i = 0; i < 3; i++){

input[i] = parseInt(prompt(`Guess a number between 1 to 10( ${c} chances left ):`));

if(input[i]< correct_ans){
  alert("Correct answer is higher!")
}
else if(input[i]> correct_ans){
  alert("Correct answer is lower!")
}

else if(input[i] === correct_ans){
  alert("Yahoo! You Win!!")
  break;
}
else{
  alert("Please input something!!")
}

c = c-1;

while(c === 0){
  alert("Oh No! You Lose!!");
  break;
}
}
