# Blog-aplication-vue-elysia (Full-stack application)

![Thumbnail](https://github.com/user-attachments/assets/5eb1476f-35ad-4c53-83aa-c60d7907889e)

## Project Description
**Blog Application** is an advanced blogging platform built with Nuxt 3 and TypeScript, designed to provide a dynamic and scalable solution for content management. The project uses Elysia.js for the backend, Prisma as the ORM, Tailwind CSS for styling, Vitest for testing, and is powered by Bun.js. Additionally, the project is integrated with Docker, making deployment and management easier.

> [!Note]
> The application is under development.

> [!Important]
> For full functionality of the application, you need a docker where the API will be stored.


## UI Link
You can access the user interface here: [Blog Application UI](https://www.figma.com/design/dQGNXRodRq0ujCAGPFjNt0/AI-Blog-Website-UI-Template---Dark-Theme-%7C-Produce-UI-(Community)?node-id=18-400&node-type=frame&t=CjICjX841xZqDQIo-0)

## Technologies
- **Framework**: [Nuxt 3](https://nuxtjs.org/) (with TypeScript)
- **Animations** : [GSAP](https://gsap.com/)
- **Backend**: [Elysia.js](https://elysia.js.org/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Testing**: [Vitest](https://vitest.dev/)
- **Tooling**: [Bun.js](https://bun.sh/)
- **Containerization**: [Docker](https://www.docker.com/)

## Features
- Dynamic content management for blogs.
- Advanced search and filtering of posts.
- Responsive and modern UI.
- Robust unit and integration testing.
- Docker support for easy deployment.

## Installation
To install and run the project locally, follow these steps:

### Cloning the Repository
First, clone the repository to your local machine:

```bash
git clone https://github.com/karoljaro/Blog-aplication-vue-elysia.git
cd Blog-aplication-vue-elysia
```
### Installing Dependencies
Next, install all required dependencies:

```bash
cd frontend && bun install
```
```bash
cd ../backend && bun install
```

## Database Configuration
Set up the database with Prisma:

```bash
docker compose up -d 
```

```bash
bun run prisma:dev
```

## Running the Application
To run the application locally:
```bash
bun run dev
```
In second terminal
```bash
cd frontend && bun run dev
```
