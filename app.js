var main = function(){
	
	var fraza = function(){
		var name = ['Robot','Janek','Mikołaj', 'Ryszard','Maciej','Kuba'];
		var number = 1 + Math.floor(Math.random() * name.length);
		$('<li class="ans">').text("Cześć jestem "+name[number]+", napisz do mnie :)").prependTo('#chat-window');
		console.log(number)
	};
	
	var ans = function(){
		var odp = ['Lubię placki.', 'Bardzo ładny niebieski.',  'Powtórzysz? Nie zrozumiałem...', 'Lubię Cię.', ' :)', 'Lubisz mnie?'];
		var number_o = 1 + Math.floor(Math.random() * odp.length);
		$('<li class="ans">').text(odp[number_o]).prependTo('#chat-window');		
	};
	
	
	$('button').click(function() {
		var post = $('.chat').val();
		$('<li class="que">').text(post).prependTo('#chat-window');
		$('.chat').val('');
		$('.counter').text('200');
		$('button').addClass('disabled'); 
		ans();
	});

	$('.chat').keyup(function() {
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
	});

	$('button').addClass('disabled');
	fraza();
}

$(document).ready(main);