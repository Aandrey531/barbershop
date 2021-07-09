let btn_menu = document.querySelector(".btn_menu");
let nav_menu = document.querySelector(".nav_menu");
let barber_box = document.querySelector(".barber_box");
let soc_seti = document.querySelector(".soc_seti");
let certificate = document.querySelector(".certificate");
let barber = document.querySelectorAll(".barber");
let barber_info = [{
					name: "JERRY PATEL",
					instagram: "@jerrybarber",
					twitter: "@jerrybarber",
					facebook: "@jerrybarber",
					certifOne: "2021, Barber of the year from Barber Association",
					certifTwo: "2018, Best Barber from Official Cut",
					certifThree: "2016, Best Barber from Official Cut"
					}, 
					{
					name: "Andrey Drobnyi",
					instagram: "@andreyDrobnyi",
					twitter: "@andreyDrobnyi",
					facebook: "@andreyDrobnyi",
					certifOne: "2019, Barber of the year from Barber Association",
					certifTwo: "2018, Best Barber from Official Cut",
					certifThree: "2017, Best Barber from Official Cut"
					}, 
					{
					name: "Bob Parker",
					instagram: "@bobParker",
					twitter: "@bobParker",
					facebook: "@bobParker",
					certifOne: "2018, Barber of the year from Barber Association",
					certifTwo: "2017, Best Barber from Official Cut",
					certifThree: "2016, Best Barber from Official Cut"
					}, 
					{
					name: "Piter Jons",
					instagram: "@piterJons",
					twitter: "@piterJons",
					facebook: "@piterJons",
					certifOne: "2021, Barber of the year from Barber Association",
					certifTwo: "2020, Best Barber from Official Cut",
					certifThree: "2017, Best Barber from Official Cut"
					}];

btn_menu.addEventListener("click", openMenu);
barber_box.addEventListener("mouseover", seeInfo);



function seeInfo(event) {
	event.preventDefault();
	if (event.target.getAttribute("data-num")) {
		let num = event.target.getAttribute("data-num");
		soc_seti.innerHTML = `<h3>${barber_info[num].name}</h3>
		<p><i class="fab fa-instagram"></i>${barber_info[num].instagram}</p>
		<p><i class="fab fa-twitter"></i>${barber_info[num].twitter}</p>
		<p><i class="fab fa-facebook-f"></i>${barber_info[num].facebook}</p>`;
		certificate.innerHTML = `<h3>CERTIFICATE / AWARDs</h3>
		<p>${barber_info[num].certifOne}</p>
		<p>${barber_info[num].certifTwo}</p>
		<p>${barber_info[num].certifThree}</p>`
	}
}
function openMenu() {
	btn_menu.classList.toggle("trans");
	nav_menu.classList.toggle("none");
}


// Start Slick
$(document).ready(function(){
	$('.slider_box_one').slick({
		infinite: false,
		// centerMode: true,
  // 		centerPadding: '0px',
  		slidesToShow: 1.5,
		prevArrow: `<i class="fas fa-long-arrow-alt-left prev"></i>`,
		nextArrow: `<i class="fas fa-long-arrow-alt-right next"></i>`,
		responsive: [{
	      	breakpoint: 992,
	      	settings: {
				slidesToShow: 1.1,
	       	},
	       	},
	       	{
	       	breakpoint: 769,
	      	settings: {
	      		slidesToShow: 0.9
	      	},
	    }],
	});
	$('.slider_box_four').slick({
		infinite: false,
  		slidesToShow: 2.5,
  		slidesToScroll: 1,
  		prevArrow: `<i class="fas fa-long-arrow-alt-left prev"></i>`,
		nextArrow: `<i class="fas fa-long-arrow-alt-right next"></i>`,
		variableWidth: true,
		responsive: [{
	       	breakpoint: 769,
	      	settings: {
	      		slidesToShow: 1
	      	}
	      	},
	      	{
	       	breakpoint: 576,
	      	settings: {
	      		centerMode: true,
	      		slidesToShow: 1
	      	},
	    }],
	});
});
// End Slick

$("body").on('click', '[href*="#"]', function(e){
  	$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top }, 1000);
  	e.preventDefault();
});


AOS.init();