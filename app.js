function validate() {
	var user = document.getElementById("username").value;
	var pass = document.getElementById("password").value;

	if (user == "admin" && pass == "1234") {
		alert("login succesfully");
		
	}
	else{
		alert("username and password does not match.");
	}

}
