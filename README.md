# Indian Mythology AI Chatbot

This project is an **Indian Mythology AI Chatbot** that provides answers and engages in conversations about the **Mahabharata** and **Ramayana**, two great epics of Indian mythology. The chatbot uses **Node.js** for the backend, **React.js** for the frontend, and leverages the **RAG (Retrieval-Augmented Generation)** pipeline with **LangChain** to retrieve and generate relevant responses.

---

## Features

- **Mythology Query Handling**: The chatbot responds to user queries about Mahabharata and Ramayana.
- **RAG Pipeline**: Combines retrieval and generation for accurate and relevant answers.
- **Frontend**: Built with React.js and styled using Tailwind CSS for a smooth and interactive user experience.
- **Backend**: Powered by Node.js for scalable and fast response handling.
- **Language Processing**: Utilizes LangChain to manage the retrieval and response generation process.

---

## Project Structure

### 1. Frontend (Client)
- **Framework**: React.js
- **Folder**: `Client/vite-project`
- Contains the frontend application built using Vite.js and React.js.

#### Key Files:
- `src/App.jsx`: Main component rendering the application.
- `src/assets`: Folder for static assets like images.
- `src/index.css`: CSS styles applied globally.
- `src/main.jsx`: Entry point for the React application.
- `index.html`: HTML template for the application.
- `tailwind.config.js`: Tailwind CSS configuration.
- `vite.config.js`: Vite.js configuration file.

### 2. Backend (Server)
- **Framework**: Node.js
- **Folder**: `Server/src`
- Handles the RAG pipeline, routing, and services.

#### Key Files:
- `src/config/ragConfig.js`: Configuration for the RAG pipeline.
- `src/controllers/chatController.js`: Manages chatbot interactions.
- `src/routes/chatRoutes.js`: Defines backend API routes.
- `src/services/ragService.js`: Core service for the retrieval and generation process.
- `src/data`: Contains the **Mahabharata** and **Ramayana** text files used for retrieval.
- `app.js` & `server.js`: Backend initialization and server setup.

---

## Prerequisites

Ensure you have the following installed:

1. **Node.js** (v14+ recommended)
2. **npm** or **yarn** for managing dependencies
3. **Git** for version control
4. **Vite.js** for React frontend development
5. **LangChain** library (installed via npm in the backend)

---

## How to Start the Project

### 1. Clone the Repository
```bash
git clone <your-repo-link>
cd chatbot-rag
