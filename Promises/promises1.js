// Write a function quizWithTimeout(question, answer, timeout) that takes a question,
//  expected answer, and timeout. If the answer is provided within the timeout, resolve with "Correct!".
//  Otherwise, reject with "Time s up!".

function quizWithTimeout(question, expectedAnswer, timeout) {
  console.log(question)
  return new Promise((resolve,reject)=>{
    const timer=setTimeout(()=>{
    reject('Times up')
    },timeout);

    setTimeout(()=>{
    
     if(expectedAnswer){
        clearTimeout(timer)
       resolve('correct')
     }
    },1000)
  })
}

// Example Usage
quizWithTimeout("What is 2+2?", "4", 3000)
  .then(console.log)
  .catch(console.log);
