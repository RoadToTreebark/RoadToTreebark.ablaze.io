function openSideNav(){
  document.getElementById('mobileSideNav').style.width = "100%";
}

function closeSideNav(){
  document.getElementById('mobileSideNav').style.width = "0";
}

$(function(){
      $(".typed-text").typed({
        strings: ["We are <strong>not</strong> typical highschool hotshots. ^1000", "We are <strong>not</strong> typical graphic designers ^1000","We are <strong>not</strong> typical video makers ^1000", "We are <strong>not</strong> typical social media managers ^1000","We are <p id = \"dick\" class = \"red logo\">ablaze</p> ^1000"  ],
        typeSpeed: 8,
        backSpeed: 10,
        contentType: 'html',
        showCursor: true,
      });
  });


$(document).scroll(function(){
	
    if($(this).scrollTop() > 250)
    {
		
       $('.topNav').css({"background":"#FFF"});
       document.getElementById("dick").className = "red";
    } else {
       $('.topNav').css({"background":"transparent"});
       document.getElementById("dick").className = "white";
    }
	if($(this).scrollTop() < 250)
	{
		var x = 0.8 - ($(this).scrollTop()/250) + "";
		console.log(x);
		$('.introTop').css({"opacity" : x})
	}
});

function openLinkedIn(){
  window.open("https://www.linkedin.com/in/shrujan-kalidindi-62098978/");
}

function openGitHub(){
  window.open("https://github.com/kshrujan");
}

function openTwitter(){
  window.open("https://twitter.com/shrujiy");
}

function openFacebook(){
  window.open("https://www.facebook.com/shrujan.kalidindi");
}




window.sr = ScrollReveal();
sr.reveal('.narrative', {duration: 2000, origin: 'top'})
sr.reveal('.personnel-card', {duration: 2000});
