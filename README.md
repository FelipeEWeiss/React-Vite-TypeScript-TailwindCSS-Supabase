# React + TypeScript + Vite Boilerplate (Supabase Auth)

This is a robust, production-ready boilerplate designed to kickstart your web applications with a modern tech stack and pre-configured authentication.

## 🚀 Tech Stack

- **Framework:** [React 19](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/) (Ultra-fast frontend tooling)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Static typing for better DX)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS)
- **Backend & Auth:** [Supabase](https://supabase.com/) (Open source Firebase alternative)
- **Package Manager:** [Yarn](https://yarnpkg.com/)

---

## ✨ Features

This boilerplate comes out of the box with a fully functional authentication system:

- **Standard Auth:** Email and Password Login & Sign Up.
- **Social Auth (OAuth):**
- Log in with **GitHub**.
- Log in with **Google Account**.

- **Protected Routes:** Ready-to-use logic to restrict access to authenticated users only.
- **Responsive UI:** Clean layouts built with Tailwind CSS.

---

## 🛠️ Environment Setup

Before running the project, you need to connect it to your Supabase instance.

1. Create a `.env` file in the root directory.
2. Add the following variables (found in your Supabase Project Settings > API):

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

```

> **Note:** Make sure you have enabled Google and GitHub providers in the **Authentication > Providers** section of your Supabase dashboard.

---

## 📦 Getting Started

Follow these steps to get your local development environment running:

### 1. Clone the Repository

```bash
git clone https://github.com/FelipeEWeiss/ReactJS-Typescript-TailwindCSS-Supabase
cd ReactJS-Typescript-TailwindCSS-Supabase

```

### 2. Install Dependencies

This project uses **Yarn**. Run the following command to install all necessary packages:

```bash
yarn install

```

### 3. Run the Project

Start the development server with Vite:

```bash
yarn dev

```

The application will be available at `http://localhost:5173`.

---

## 📜 Scripts

- `yarn dev`: Starts the development server.
- `yarn build`: Builds the project for production.
- `yarn preview`: Locally previews the production build.
