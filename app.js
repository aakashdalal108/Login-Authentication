function validate() {
	var user = document.getElementById("username").value;
	var pass = document.getElementById("password").value;

	if (user == "admin" && pass == "1234") {
		window.alert("login succesfully");
		
	}
	else{
		window.alert("username and password does not match.");
	}

}
