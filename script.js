const buttons=document.querySelectorAll(".accordion-item button");



buttons.forEach((button)=>{
	
	button.addEventListener("click",show)	;
	function show(){
	var active=this.classList.contains("active");
		     for (let i = 0; i < buttons.length; i++) {
  buttons [i].classList.remove("active");
					buttons [i].nextElementSibling.classList.remove("active");
}

if (active===false) {

				this.classList.toggle('active');
				this.nextElementSibling.classList.toggle("active");
}

}
}			
);
