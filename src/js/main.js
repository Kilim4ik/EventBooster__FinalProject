import renderPosts from "renderPosts.js";
async function startApp() {
  const posts = await getPosts();
  renderPosts(posts);
}
startApp();
