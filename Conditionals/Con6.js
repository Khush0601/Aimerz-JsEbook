function evaluateGrade(score) {
    if (score >= 90 && score <= 100) {
        console.log("Grade: A. Excellent work!");
    } else if (score >= 80 && score < 90) {
        console.log("Grade: B. Good job!");
    } else if (score >= 70 && score < 80) {
        console.log("Grade: C. You passed.");
    } else if (score >= 60 && score < 70) {
        console.log("Grade: D. Needs improvement.");
    } else if (score >= 0 && score < 60) {
        console.log("Grade: F. Failed. Better luck next time.");
    } else {
        console.log("Invalid score. Please enter a score between 0 and 100.");
    }
}
// Example usage
let examScore = 85;  
// You can change this value to test different scores
evaluateGrade(examScore);