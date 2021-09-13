const toggleOn = document.querySelector(".toggle-on-cont");
const active = document.querySelector(".menu-container");

const toggleOff = document.querySelector(".toggle-off-cont");

toggleOn.addEventListener("click", function () {
	active.classList.toggle("press");
});

toggleOn.addEventListener("click", function () {
	toggleOff.classList.toggle("press2");
});

toggleOn.addEventListener("click", function() {
	toggleOn.classList.toggle("press3")
});

toggleOff.addEventListener("click", function() {
	active.classList.toggle("press")
});

toggleOff.addEventListener("click", function() {
	toggleOff.classList.toggle("press2")
});

toggleOff.addEventListener("click", function() {
	toggleOn.classList.toggle("press3")
});

let product;
let company;
let connect;
let arrows;

function show_hide_product() {
	if (product==1) {
		document.getElementById("product-links").style.display="none";
		document.getElementById("open-arrow-product").style.transform="rotate(0deg)";
		document.getElementById("open-arrow-product2").style.transform="rotate(0deg)";
		return product=0;
	}

	else {
		document.getElementById("product-links").style.display="block";
		document.getElementById("open-arrow-product").style.transform="rotate(180deg)";
		document.getElementById("open-arrow-product2").style.transform="rotate(180deg)";
		return product=1;
	}		
}

function show_hide_company() {
	if (company==1) {
		document.getElementById("company-links").style.display="none";
		document.getElementById("open-arrow-company").style.transform="rotate(0deg)";
		document.getElementById("open-arrow-company2").style.transform="rotate(0deg)";
		return company=0;
	}

	else {
		document.getElementById("company-links").style.display="block";
		document.getElementById("open-arrow-company").style.transform="rotate(180deg)";
		document.getElementById("open-arrow-company2").style.transform="rotate(180deg)";
		return company=1;
	}
}

function show_hide_connect() {
	if (connect==1) {
		document.getElementById("connect-links").style.display="none";
		document.getElementById("open-arrow-connect").style.transform="rotate(0deg)";
		document.getElementById("open-arrow-connect2").style.transform="rotate(0deg)";
		return connect=0;
	}

	else {
		document.getElementById("connect-links").style.display="block";
		document.getElementById("open-arrow-connect").style.transform="rotate(180deg)";
		document.getElementById("open-arrow-connect2").style.transform="rotate(180deg)";
		return connect=1;
	}
}
