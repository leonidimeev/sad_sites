
// // Таймер для движущейся картинки
// function starttimer(){
// 	moving_image.onclick = function(){
// 	let start = Date.now();
// 	let timer = setInterval(function() {
//   		let timePassed = Date.now() - start;
// 		if (timePassed >= 2000) {
//     		clearInterval(timer); 
//     		return;
//   		}
//   		function stoptimer(){
// 			clearTimeout(timer);
// 		}
//   		draw(timePassed);
// 	}, 20);
// }
// }
// function draw(timePassed) {
//   moving_image.style.left = timePassed / 5 + 'px';
// }

// Замена картинки
function moveover(){
	document.getElementById('changing_image').src="css/images/changing1.jpeg";
}
function moveback(){
	document.getElementById('changing_image').src="css/images/changing2.jpeg";
}

// Увеличение картинки
function moveoverbigger(){
	document.getElementById('bigger_image').width="300";
	document.getElementById('bigger_image').height="400";
}
function movebackbigger(){
	document.getElementById('bigger_image').width="200";
	document.getElementById('bigger_image').height="300";
}

// Изменение прозрачности
function moveoveropacity(){
	document.getElementById('transparent_image').style.opacity = 0.5;
}
function movebackopacity(){
	document.getElementById('transparent_image').style.opacity = 1;
}

// Всплывающее сообщение
message="Здравствуйте! Я очень хочу получить зачет!";
pos=0;
maxlength=message.length+1;

function writemsg()
{
if (pos<maxlength)
	{
	txt=message.substring(pos,0);
	document.forms[0].msgfield.value=txt;
	pos++;
	timer=setTimeout("writemsg()",50);
	}
}
function moveoveropacityandwritemsg(){
	moveoveropacity();
	writemsg();
}
function movebackopacityandwritemsg(){
	movebackopacity();
	stoptimer();
}

function checkhisemail(){
	flag = false;
	for (i=0; i<document.check_user_form.email_input_box.length; i++){
		alert('a')
		if (document.check_user_form.email_input_box[i].value.equals('@')){
			flag = true;
			alert('s');
		}
	}
	alert(flag);
}










