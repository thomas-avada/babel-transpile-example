import posts from "./posts";
// Optional chaining syntax
posts.forEach(post => {
    const authorName = post?.author?.name;
    console.log(authorName);
});



