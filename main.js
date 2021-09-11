let product;
let company;
let connect;

function show_hide_product() {
	if (product==1) {
		document.getElementById("product-links").style.display="block";
		return product=0;
	}

	else {
		document.getElementById("product-links").style.display="none";
		return product=1;
	}
}

function show_hide_company() {
	if (company==1) {
		document.getElementById("company-links").style.display="block";
		return company=0;
	}

	else {
		document.getElementById("company-links").style.display="none";
		return company=1;
	}
}

function show_hide_connect() {
	if (connect==1) {
		document.getElementById("connect-links").style.display="block";
		return connect=0;
	}

	else {
		document.getElementById("connect-links").style.display="none";
		return connect=1;
	}
}

