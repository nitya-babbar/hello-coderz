document.addEventListener("keyup", showDropdown);
document.addEventListener("click", showDropdown);

function plusSlides(n) 
{
	showSlides(slideIndex += n);
}

function currentSlide(n) 
{
	showSlides(slideIndex = n);
}

function showSlides(n)
{
	var i;
	var slides = document.getElementsByClassName("calendar");
	
	if (n > slides.length) 
	{
		slideIndex = 1;
	}		
	
	if (n < 1) 
	{
		slideIndex = slides.length
	}
	
	for (i = 0; i < slides.length; i++) 
	{
		slides[i].style.display = "none";	
	}

	slides[slideIndex-1].style.display = "block";
}

function plusQuote(n) 
{
	var slides = document.getElementsByClassName("quote");
	
	clearInterval(myTimer);
	
	if (n === 1)
	{
		slideRight(currentSlide);
	}
	
	else
	{
		slideLeft(currentSlide);
	}
	
	myTimer = setInterval(function(){plusQuote(1)}, 10000);
	
	currentSlide += n;
	
	if (currentSlide > slides.length) 
	{
		currentSlide = 1;
	}		
	
	if (currentSlide < 1) 
	{
		currentSlide = slides.length;
	}
}

function showQuote(n)
{
	var i;
	var slides = document.getElementsByClassName("quote");
	
	if (n > slides.length) 
	{
		currentSlide = 1;
	}		
	
	if (n < 1) 
	{
		currentSlide = slides.length;
	}

	for (i = 0; i < slides.length; i++)
	{
		slides[i].classList.remove("shown-quote");	
	}

	slides[currentSlide-1].classList.add("shown-quote");
	myTimer = setInterval(function(){plusQuote(1)}, 10000);
}

function slideRight(currentSlide)
{	
	var slideLength = window.innerWidth;
	var i;
	var slides = document.getElementsByClassName("quote");
	var slide = slides[currentSlide-1];
	var nextSlideNum = currentSlide + 1;
	
	if (nextSlideNum > slides.length) 
	{
		nextSlideNum = 1;
		
		var nextSlide = slides[nextSlideNum-1];
		nextSlide.classList.add("shown-quote");
	}		
	
	else if (nextSlideNum < 1) 
	{
		nextSlideNum = slides.length;
		
		var nextSlide = slides[nextSlideNum-1];
		nextSlide.classList.add("shown-quote");
	}
	
	else
	{
		var nextSlide = slides[nextSlideNum-1];
		nextSlide.classList.add("shown-quote");
	}
		
	nextSlide.style.left = slideLength + 'px';
	disable();
	
	var pos = 0;
	var id = setInterval(frame, 1);
	
	function frame() 
	{
		if (pos <= -slideLength) 
		{
			clearInterval(id);
			slide.classList.remove("shown-quote");
			enable();
		} 
		
		else 
		{
			pos-=10; 
			slide.style.left = pos + 'px';
			nextSlide.style.left = pos + slideLength + 'px';
		}
	}
}

function slideLeft(currentSlide)
{	
	var slideLength = window.innerWidth;
	var i;
	var slides = document.getElementsByClassName("quote");
	var slide = slides[currentSlide-1];
	var nextSlideNum = currentSlide-1;
	
	if (nextSlideNum > slides.length) 
	{
		nextSlideNum = 1;
		
		var nextSlide = slides[nextSlideNum-1];
		nextSlide.classList.add("shown-quote");
	}		
	
	else if (nextSlideNum < 1) 
	{
		nextSlideNum = slides.length;
		
		var nextSlide = slides[nextSlideNum-1];
		nextSlide.classList.add("shown-quote");
	}
	
	else
	{
		var nextSlide = slides[nextSlideNum-1];
		nextSlide.classList.add("shown-quote");
	}
	
	nextSlide.style.left = slideLength + 'px';
	disable();
	
	var pos = 0;
	var id = setInterval(frame, 1);
	
	function frame() 
	{
		if (pos >= slideLength) 
		{
			clearInterval(id);
			slide.classList.remove("shown-quote");
			enable();
		} 
		
		else 
		{
			pos+=10; 
			slide.style.left = pos + 'px';
			nextSlide.style.left = pos + -slideLength + 'px';
		}
	}
}

function quoteHeight()
{
	var quotes = document.getElementsByClassName("quote")
	var quotePics = []
	
	for (i = 0; i < quotes.length; i++)
	{
		quotePics.push(quotes[i].getElementsByTagName("img")[0]);
	}
	
	if (window.innerWidth < 920)
	{
		for (i = 0; i < quotePics.length; i++)
		{
			var picLength = quotePics[i].offsetWidth;
			quotePics[i].style.height = picLength + 'px';
		}
	}
	
	else
	{
		for (i = 0; i < quotePics.length; i++)
		{
			quotePics[i].style.height = "100%";
		}
	}
}

function showLesson()
{
	var i;
	var lessons = document.getElementsByClassName("lesson");
	var numbers = document.getElementsByClassName("timeline-number");

	for (i = 0; i < lessons.length; i++)
	{
		lessons[i].style.display="none";
		numbers[i].style.backgroundColor="white";
	}

	lessons[lessonIndex].style.display="block";
	numbers[lessonIndex].style.backgroundColor="var(--orange-color)";
}

function resizeFunction(height)
{
	var myform = document.getElementsByTagName("iframe")[0];
	
	if (window.innerWidth > 604)
	{
		myform.style.height = height+"px";
	}
	
	else
	{
		myform.style.height = height+100+"px";
	}
}

function scrollFunction() 
{
	var mynav = document.getElementsByTagName("nav")[0];
	var mylinks = mynav.getElementsByTagName("a");
	var mylogo = document.getElementsByClassName("left-side")[0];
	
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
	{
		mynav.style.backgroundColor = "white";
		mynav.style.boxShadow = "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)";
		
		var i;
		
		for (i = 0; i < mylinks.length; i++)
		{
			if (!mylinks[i].classList.contains("dropdown-link"))
			{
				mylinks[i].classList.add("scrolled-down");
			}
		}
		
		mylogo.classList.add("scrolled");
	} 
	
	else 
	{
		mynav.style.backgroundColor = "transparent";
		mynav.style.boxShadow = "none";
		
		var i;
		
		for (i = 0; i < mylinks.length; i++)
		{
			if (!mylinks[i].classList.contains("dropdown-link"))
			{
				mylinks[i].classList.remove("scrolled-down");
			}
		}
		
		mylogo.classList.remove("scrolled");
	}
}

function openNav() 
{
	document.getElementById("myNav").style.width = "100%";
}

function closeNav() 
{
	document.getElementById("myNav").style.width = "0%";
	reloadPage();
}

function reloadPage()
{
	location.reload();
}

function toggleDropdown() 
{
	document.getElementById('dropdown1').onclick = myclick; 
	document.getElementById('dropdown2').onclick = myclick; 
	document.getElementById('dropdown3').onclick = myclick; 
		
	function myclick(clicked) 
	{ 
		var mydropcontent = this.getElementsByClassName("dropdown-content");
		mydropcontent[0].classList.toggle("show");
		
		var mycarrot = this.getElementsByClassName("carrot");
		mycarrot[0].classList.toggle("shown");
	}
}

function showDropdown()
{
	var mydrop = document.getElementsByClassName('dropdown-content');
	
	var i;
	for (i = 0; i < mydrop.length; i++)
	{
		var mydroplink = mydrop[i].getElementsByClassName('dropdown-link');
		
		var isFocused = false;
		
		var j;
		for (j = 0; j < mydroplink.length; j++)
		{
			if (document.activeElement === mydroplink[j])
			{
				isFocused = true;
			}
		}
		
		if (isFocused)
		{
			mydrop[i].style.left = "0";
			mylink = mydrop[i].previousSibling.previousSibling.getElementsByTagName("A");
			mylink[0].classList.add("focused");
			
		}
		
		else
		{
			mydrop[i].style.left = "-999em";
			mylink = mydrop[i].previousSibling.previousSibling.getElementsByTagName("A");
			mylink[0].classList.remove("focused");
		}
	}
}

function enlargeLanguageChart()
{
    var modal = document.getElementById('myModal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById('language-chart');
    var modalImg = document.getElementById("img01");
    img.onclick = function()
    {
        modal.style.display = "block";
        modalImg.src = this.src;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() 
    { 
        modal.style.display = "none";
    }
}

function disable()
{
	var prevButton = document.getElementById("prev");
	var nextButton = document.getElementById("next");
	quoteEnabled = false;
	prevButton.style.pointerEvents="none";
	nextButton.style.pointerEvents="none";
}

function enable()
{
	var prevButton = document.getElementById("prev");
	var nextButton = document.getElementById("next");
	quoteEnabled = true;
	prevButton.style.pointerEvents="auto";
	nextButton.style.pointerEvents="auto";
}