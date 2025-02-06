// Write a function groupByCategory that takes an array of blog post objects and groups them by their categories.



function groupByCategory(posts) {
    let groupedPosts={}
    posts.forEach((post)=>{
        if(!groupedPosts[post.category]){
            groupedPosts[post.category]=[]
        }
        groupedPosts[post.category].push(post.title)
    })
    return groupedPosts

}

// Example Usage:
const posts = [
  { title: "Learn JS", category: "Programming" },
  { title: "CSS Tips", category: "Web Dev" },
  { title: "Master React", category: "Programming" },
  { title: "HTML Basics", category: "Web Dev" }
];

const result = groupByCategory(posts);
console.log(result);
// Output: 
// {
//   "Programming": ["Learn JS", "Master React"],
//   "Web Dev": ["CSS Tips", "HTML Basics"]
// }