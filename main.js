

var phoneNumber = function() {
	
	var number = prompt('Please enter your phone number XXX-XXX-XXXX') 

	if (number.charAt(3) ==='-' && number.charAt(7) === '-' && number.length===12){

		alert('Thank You!')
		return true

	}

	
		else{
		
			 alert('Try Again')
		
		phoneNumber()	
		
	}



}

phoneNumber()



var birthday = function() {

	var date = prompt('Please enter your birthdate XX/XX/XX')

	if(date.charAt(2) === '/' && date.charAt(5) === '/' && date.length === 8){
		
		alert('Thank you!')
		return true
	}

	else{
		 alert('Oops Try Again')

		 birthday()
	}

}

birthday()



var postalCode = function() {

	var postal = prompt( 'Please enter your postal code')

	 if(postal.length === 5 && (!isNaN(postal))){ //|| postal.length === 10 && postal.charAt(5) === '-' && (!isNaN(postal))){ 

		alert('Thank You')
		return true

	}

	else if(postal.length === 10 && postal.charAt(5) === '-' && (!isNaN(postal))){

		alert('Thank You')
		return true
	}

	else{

		alert('Try Again')

		postalCode()


	}

}

postalCode()




var stateAbbreviation= function(){

	var state =  prompt('Enter the 2 letter abbreviation for your state')

	if(state.length === 2 && (isNaN(state)) && state === state.toUpperCase()){

		return true

	}

	else{

		alert('Try Again')

		stateAbbreviation()
	}
}

		stateAbbreviation()



var areYouMarried = function(){

	var married = prompt( 'Are you Married ?')

	if(married === 'yes' || married === 'no'){

		alert('Thanks!')
		return true
	}


	else{

		alert('Try again')

		areYouMarried()
	}


}

		areYouMarried()






























