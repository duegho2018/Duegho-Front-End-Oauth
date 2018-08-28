/* form verification*/
export class FormVerification
{
	
	constructor()
	{

		this.isOk=[false,false,false,false];	
		this.submitForm = document.getElementById("submitButton");
		this.nameInput = document.getElementById("last_name");
		this.emailInput = document.getElementById("email");
		this.numberInput = document.getElementById("number");
		this.passwordInput = document.getElementById("password");
		this.name=this.name.bind(this);
		this.email=this.email.bind(this);
		this.number=this.number.bind(this);
		this.password=this.password.bind(this);
		this.submit = this.submit.bind(this);
		
		if(this.nameInput!=null)
		this.nameInput.addEventListener("input",this.name);
		if(this.emailInput!=null)
		this.emailInput.addEventListener("input",this.email);
		if(this.numberInput!=null)
		this.numberInput.addEventListener("input",this.number);
		if(this.passwordInput!=null)
		this.passwordInput.addEventListener("input",this.password);
		if(this.submitForm!=null)
		this.submitForm.addEventListener("click",this.submit);

	}

	// for the name
	name()
	{
		let regEx = new RegExp("^.{2,30}$");
		if(this.nameInput!=null)	
		return this.isOk[0]=regEx.test(this.nameInput.value);
		return true;
	}

	// for the email
	email()
	{
		let regEx = new RegExp("^[a-z0-9_\.-]+@[\da-z\.-]+[\.][a-z\.]{2,6}$");

		if(this.emailInput.value!=null)
		return this.isOk[1]=regEx.test(this.emailInput.value);
		return true;
	}


	// for the number
	number()
	{
		let regEx = new RegExp("^[0-9]{8,9}$");
	
		if(this.numberInput!=null)
		return this.isOk[2]=regEx.test(this.numberInput.value);
		return true;
	}


	// for the password(at least one lowerCase,one UpperCase,one digit and 8 lenght min)
	password()
	{
		let regEx = new RegExp("^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))(?=.{8,})");
		
		if(this.passwordInput!=null)
		return this.isOk[3]=regEx.test(this.passwordInput.value);
		return true;
	}
	submit()
	{
		return this.isOk[0]&&this.isOk[1]&&this.isOk[2]&&this.isOk[3];
	}
}

