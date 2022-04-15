const navToggle = document.querySelector(".nav-toogle")
const navMenu = document.querySelector(".nav-menu")

document.addEventListener("keyup", e=>{

	if (e.target.matches("#buscador")){
  
		if (e.key ==="Escape")e.target.value = ""
  
		document.querySelectorAll(".articulo").forEach(fruta =>{
  
			fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
			  ?fruta.classList.remove("filtro")
			  :fruta.classList.add("filtro")
		})
  
	}
  
  
  })

navToggle.addEventListener("click", () => 
{
    navMenu.classList.toggle("nav-menu_visible")
})

window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 600,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});

});




