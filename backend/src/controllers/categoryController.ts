import Elysia from "elysia";
import {getAllCategories, getPostByCategory, getPostCategory } from "../services/categoryService";

export const categoryController = new Elysia({ prefix: "/category" })
    .get('/categories', () => getAllCategories())
    .get('/postByCategory/:categoryId', ({ params: { categoryId } }) => getPostByCategory(categoryId))
    .get('/categoryOnPost/:postId', ({ params: { postId } }) => getPostCategory(postId))