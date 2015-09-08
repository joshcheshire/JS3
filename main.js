

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





