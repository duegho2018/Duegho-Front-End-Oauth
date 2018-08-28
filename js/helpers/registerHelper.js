document.addEventListener("DOMContentLoaded",()=>
{
  
	 	let passwordIcon= document.getElementById("showOrHidePassword");	
	 	let password= document.getElementById("password");	
	 	/* to show or hide the password */
		let showOrHidePassword=()=>{

  		if(passwordIcon.innerHTML=="visibility_off")
  	 	{
  	 		passwordIcon.innerHTML="visibility";
  	 		password.removeAttribute("type");
  	 		password.setAttribute("type","text");

  	 	}
  	 	else
  	 	{
  	 		passwordIcon.innerHTML="visibility_off";
  	 		password.removeAttribute("type");
  	 		password.setAttribute("type","password");
  	 	} 	 		
}

		/** the listener on passwordIcon **/
		passwordIcon.addEventListener("click",showOrHidePassword);
		
}

);
