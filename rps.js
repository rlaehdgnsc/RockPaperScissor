var choice = {
    rock: '0px',
    paper: '-284px',
    scissor: '-142px',
};

function intervalImage(){ // image sprite
    return setInterval(() => {
        if (left === choice.rock) {
            left = choice.scissor;
        } else if (left === choice.scissor) {
            left = choice.paper;
        } else left = choice.rock;
        document.querySelector("#computer").style.background = `url("https://en.pimg.jp/023/182/267/1/23182267.jpg")` + left + ' 0';
    }, 100);
}

function compare(target, my) {
    if (my === 'Scissor') {
        if (target === 'rock') {
            alert('you loose');
        } else if (target === 'paper') {
            alert('you win');
        } else {
            alert('draw');
        }
    } else if (my === 'Rock') {
        if (target === 'paper') {
            alert('you loose'); 
        } else if (target === 'scissor') {
            alert('you win');
        } else {
            alert('draw');
        }
    } else {
        if (target === 'scissor') {
            alert('you loose');
        } else if (target === 'rock') {
            alert('you win');
        } else {
            alert('draw');
        }
    }
    setTimeout(() => {
        image = intervalImage();
    }, 1000);
}
/*
    var point = {
        rock: 1,
        paper: 0,
        scissor: -1,
    };
    function compare_short(target, my){
        let m = point[my];
        let t = point[target];
        
        if(m-t === 0){
            draw
        }else if ([-1,2].includes(m-t)){
            win
        }else{
            loose
        }
    }
*/

let left = 0;
var image = intervalImage();

document.querySelectorAll('.button').forEach((items, index) => {
    items.addEventListener('click', (e) => {
        clearInterval(image);

        let target = left;
        let comp = Object.entries(choice).find((v) => {
            return v[1] === target;
        });
        console.log(items.textContent, comp[0]);
        compare(comp[0], items.textContent);
    });
});