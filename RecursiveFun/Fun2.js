// Write a program in javascript where create and array of comments where each comments have id,
//  text and reply and reply recursively contains many reply.

// Example:

// Function to display comments and their nested replies
function displayComments(comments) {
  return comments.forEach((comment)=>{
    console.log('ID: ' + comment.id + ', Text: ' + comment.text);
    if (comment.replies) {
      displayComments(comment.replies); // Recursive call for replies
    }
  })
   

}

// Simplified comments array
const comments = [
  { id: 1, text: "First comment", replies: [
      { id: 2, text: "Reply to first", replies: [
          { id: 4, text: "Nested reply" }
        ]}
    ]},
  { id: 3, text: "Another comment" }
];

// Call the function
displayComments(comments);