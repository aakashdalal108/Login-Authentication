function validate() {
	var user = document.getElementById("username").value;
	var pass = document.getElementById("password").value;

	if (user == "admin" && pass == "1234") {
		document.write("login succesfully");
		
	}
	else{
		document.write("username and password does not match.");
	}

}
