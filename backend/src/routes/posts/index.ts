import Elysia from "elysia";

const postRoutes = new Elysia({ prefix: "/posts" })
    .get("/", () => "get all posts")
    .get("/:id", () => "get post by id")
    .post("/", () => "create post")
    .patch("/:id", () => "updates post")
    .delete("/", () => "deletes post");

export default postRoutes