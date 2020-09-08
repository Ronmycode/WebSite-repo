
let alphabet = [{
    name: "letterA",
    img: "https://www.clipartmax.com/png/middle/408-4080827_%E1%8E%AF-c-%E2%80%BF%E2%9C%BF%E2%81%80-scrapbook-letters-clipart-alphabet-letters-%E1%8E%AF-c-%E2%80%BF%E2%9C%BF%E2%81%80-scrapbook.png",
    example: "A as in Apple"
},{
    name: "letterB",
    img: "https://www.yardgreetings.com/wp-content/uploads/2018/03/letter-b-green-and-white-yard-greeting-card-sign-happy-birthday-over-the-hill-plastic-300x300.jpg",
    example: "B as in Ballon" 
},{
    name: "letterC",
    img: "https://us.123rf.com/450wm/kchung/kchung1504/kchung150400623/38557397-stock-vector-close-up-look-at-3d-blue-letter-block-c.jpg?ver=6",
    example: "C as in Cat"
}];


function showletter(letter){
	let q = questions[runningQuestion];

	question.innerHTML = "<p>" + q.question + "</p>";
	qImg.innerHTML = "<img src=" + q.ImgScr + ">";
	choiceA.innerHTML = q.choiceA;
	choiceB.innerHTML = q.choiceB;
	choiceC.innerHTML = q.choiceC;
}