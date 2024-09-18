let boxes = document.querySelectorAll('.box');
let rBtn = document.querySelector('#r-btn');
let msg = document.querySelector('#msg');
let msgCont = document.querySelector('.msg-cont');
let newBtn = document.querySelector('#new-btn');
let draw = document.querySelector('.draw');
let array = [rBtn,newBtn];
let winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
let count = 0;
let turn = 'O';
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('box was clicked');
        if(turn=='O'){
            box.innerText = 'O';
            turn = 'X';
        }else{
            box.innerText = 'X';
            box.style.color = 'black';
            turn = 'O';
        }
        count++;
        box.disabled = true;
        let isDraw = checkPattern();
        if (count === 9 && !isDraw){
            draw.innerText = 'The Game became a Draw. Click Reset Game to start again';
            draw.classList.remove('hide');
        }else{
            checkPattern();
        }

    })
});
let checkPattern =() => {
    for(let pattern of winPattern){
        if (boxes[pattern[0]].innerText != '' && boxes[pattern[1]].innerText != '' && boxes[pattern[2]].innerText != ''){
            if(boxes[pattern[0]].innerText == boxes[pattern[1]].innerText  && boxes[pattern[1]].innerText == boxes[pattern[2]].innerText != ''){
                console.log('winner',boxes[pattern[2]].innerText);
                showWinner(boxes[pattern[0]].innerText);
                return true;
            }
        }
    }
}
let showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgCont.classList.remove('hide');
    disabled();
}
let disabled = () => {
    for (i=0;i<boxes.length;i++){
        boxes[i].disabled = true;
    }
}
array.forEach((arr) =>{
    arr.addEventListener('click', () => {
        count = 0;
        turn = 'O';
        for (i=0;i<boxes.length;i++){
            boxes[i].disabled = false;
            boxes[i].innerText = '';
        }
        msgCont.classList.add('hide');
    })
})