$(document).ready(function() {

//STEP 1: Initially, the Tweet button and the character count button below should be hidden.
    $('#tweet-submit').hide();
	$('#char-count').hide();
   
    
//STEP 2: When the user clicks on the textarea, the textarea should double in size and the character count and Tweet buttons should be revealed.
    $('.tweet-compose').on('click', function(){
         $(this).css("height", "5em");
         $('#tweet-submit').show();
         $('#char-count').show();
    });
    
//STEP 3: As the user types the character count should decrease. Once it hits 10 character or less the count should turn red
    $('.tweet-compose').keyup(function() {
		var charCount = 140 - $('.tweet-compose').val().length;
		$('#char-count').html(charCount);
		if (charCount < 10) {
			$('#char-count').css('color', 'red');
		}
		else {
			$('#char-count').css('color');
		}
        
//STEP 4: If the user puts in more than 140 characters, the tweet button should be disabled (and re-enabled when there are <= 140 chars)
		if (charCount === 140 || charCount < 0) {
			$('#tweet-controls button').prop('disabled', true);
		}
		else {
			$('#tweet-controls button').prop('disabled', false);
		}
    });

//STEP 5: When the user successfully inputs characters and clicks the “Tweet” button, a new tweet should be created and added to the tweet stream in the main column, using the user’s fake profile image in the top left and username/fullname.
    function tweets() {
      var newTweetText = $('.tweet-compose').val();
      var newTweet = '<div class="tweet">' + '<div class="content">' + '<img class="avatar" src="img/damenleeturks.jpg" />' + '<strong class="fullname">Adam McNevin</strong>' + '<span class="username">@awesome</span>' + '<p class="tweet-text">' + newTweetText + '</p>' + '</div>' + '</div>';
    return newTweet;
    }
    $('.button').on('click', function() {
        $('#stream').prepend(tweets);
    
  });
    
//STEP 6: The tweet actions below should only show up when you hover over the tweet. Otherwise, they should be hidden.
    $('.tweet-actions').hide();
    $('.tweet').hover(function() {
		$(this).find('.tweet-actions').show();
	    });
    
//STEP 7: The Retweets/timestamp/Reply areas below should also be hidden by default. These should only expand if you click on the tweet. Use a jQuery animation to accomplish the reveal, similar to how it’s done on Twitter.com -- HINT: jQuery ".on" eventHandler
    $('.reply').hide();
    $('.tweet').on('click', function() {
        $('.reply').show();
    });
    
});