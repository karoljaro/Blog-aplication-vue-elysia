import Elysia from "elysia";
import {getPostById, getPosts} from "../services/postService";

export const postController = new Elysia({ prefix: "/posts" })
    .get("/", () => getPosts())
    .get("/:id", ({ params: { id }}) => getPostById(id));
