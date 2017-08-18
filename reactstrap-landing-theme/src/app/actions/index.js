export const SIGNUP = 'SIGNUP';
export const CONTACT = 'CONTACT';

export function signUp(values,callback){
	//Your signup logic here
	// Do something with values like, 
	// make an api call  
	const result = "Successfully signed up!";
	callback();
	return({
		type: SIGNUP,
		payload: result
	});
}

export function contact(values,callback){
	//Your signup logic here
	// Do something with values like, 
	// make an api call  
	const result = "We'll reach to you soon!";
	callback();
	return({
		type: CONTACT,
		payload: result
	});
}