var main = function(){
	
	var fraza = function(){
		var number = 1 + Math.floor(Math.random() * 6);
			switch(number) {
				case 1:
					var name = "Robot";
					break;
				case 2:
					var name = "Janek";
					break;
				case 3:
					var name = "Mikołaj";
					break;
				case 4:
					var name = "Ryszard";
					break;
				case 5:
					var name = "Maciej";
					break;
				case 6:
					var name = "Kuba";
					break;
			}
			return "Cześć jestem "+name+".";
	};
	
	var fraza1 = function(){
		var number = 1 + Math.floor(Math.random() * 6);
			switch(number) {
				case 1:
					return "Lubię placki.";
					break;
				case 2:
					return "Bardzo ładny niebieski.";
					break;
				case 3:
					return "Powtórzysz? Nie zrozumiałem...";
					break;
				case 4:
					return "Lubię Cię.";
					break;
				case 5:
					return " :)";
					break;
				case 6:
					return "Lubisz mnie?";
					break;
			}
			
	};
	
	var licznik = 1;
	var odp = function(){
		if (licznik ==1)
		{
			licznik+=1;
			$('<li class="ans">').text(fraza()).prependTo('#chat-window');
		}
		else 
			$('<li class="ans">').text(fraza1()).prependTo('#chat-window');
		
	};
	
	$('button').click(function() {
		var post = $('.chat').val();
		$('<li class="que">').text(post).prependTo('#chat-window');
		$('.chat').val('');
		$('.counter').text('200');
		$('button').addClass('disabled'); 
		odp();
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
}

$(document).ready(main);