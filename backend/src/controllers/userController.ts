import Elysia from "elysia";
import { createdPostsByUser } from "../services/userService";

export const userController = new Elysia({ prefix: '/user' })
    .get('createdPost/:userId', ({ params: { userId }}) => createdPostsByUser(userId))