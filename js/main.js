var yPos 
var banner

function parallax() {
	yPos = window.pageYOffset;
	banner = document.getElementById('banner')
	banner.style.top = yPos * .6 + 'px';
}

window.addEventListener('scroll', parallax);
