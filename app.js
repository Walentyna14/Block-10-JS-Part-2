var main = function(){
	$('button').click(buttonClickHandler);
	$('.chat').keyup(chatKeyupHandler);
	$('button').addClass('disabled');
	hello();
}

$(document).ready(main);

odp = ['Lubię placki.', 'Bardzo ładny niebieski.', 'Powtórzysz? Nie zrozumiałem...', 'Lubię Cię.', ' :)', 'Lubisz mnie?'];

var hello = function(){
	var name = ['Robot','Janek','Mikołaj', 'Ryszard','Maciej','Kuba'];
	$('<li class="ans">').text("Cześć jestem "+(name[number(name)])+", napisz do mnie :)").prependTo('#chat-window');
};

var number = function(array){
	return (Math.floor(Math.random() * array.length));
};
	
var buttonClickHandler = function() {
	var post = $('.chat').val();
	$('<li class="que">').text(post).prependTo('#chat-window');
	$('.chat').val('');
	$('.counter').text('200');
	$('button').addClass('disabled'); 
	$('<li class="ans">').text(odp[number(odp)]).prependTo('#chat-window');
}

var chatKeyupHandler = function() {
	var postLength = $(this).val().length;
	var charactersLeft = 200 - postLength;
	$('.counter').text(charactersLeft);
	if(charactersLeft < 0){
		$('button').addClass('disabled'); 
	}
	else if(charactersLeft == 200) {
		$('button').addClass('disabled');
	}
	else {
		$('button').removeClass('disabled');
	}
}