// Description:write simple JavaScript program that checks if a user is eligible 
// to vote based on their age.
//  The program will ask for the user's age and then tell them if they are eligible to vote
//  (in most countries, the voting age is 18 or older).




function checkVotingEligibility(age) {
  if(age>=18){
    console.log('elogible for vote');
    
  }
  else{
    console.log('not eligible');
    
  }
}
// Example usage
let userAge = 20; // Set the user's age
checkVotingEligibility(userAge);