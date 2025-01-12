# Indian Mythology Chatbot using RAG

A chatbot built using the RAG (Retrieval Augmented Generation) approach that answers questions about Indian mythology, specifically focusing on the Ramayana and Mahabharata epics.

## Features

- Real-time chat interface
- Context-aware responses using RAG
- Source attribution for answers
- Efficient text chunking and retrieval
- Built with MERN stack + LangChain

## Tech Stack

- Frontend: React (Vite) + Tailwind CSS
- Backend: Node.js + Express
- AI/ML: LangChain + OpenAI
- Text Processing: Character Text Splitter
- Vector Store: Memory Vector Store

## Project Structure
```
project/
├── client/                # Frontend (Vite + React)
│   └── vite-project/
│       ├── src/
│       │   ├── App.jsx
│       │   └── index.css
│       └── package.json
│
└── server/               # Backend (Node + Express)
    ├── src/
    │   ├── config/
    │   │   └── ragConfig.js
    │   ├── controllers/
    │   │   └── chatController.js
    │   ├── data/
    │   │   ├── mahabharata.txt
    │   │   └── ramayana.txt
    │   ├── routes/
    │   │   └── chatRoutes.js
    │   ├── services/
    │   │   └── ragService.js
    │   └── utils/
    │       ├── downloadTexts.js
    │       └── usageTracker.js
    ├── app.js
    └── server.js
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenAI API key

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Chatbot
   ```

2. **Backend Setup**
   ```bash
   cd server
   npm install
   ```

   Create a `.env` file in the server directory:
   ```
   OPENAI_API_KEY=your_api_key_here
   PORT=3000
   ```

3. **Frontend Setup**
   ```bash
   cd client/vite-project
   npm install
   ```

4. **Download Text Files**
   ```bash
   cd server
   node src/utils/downloadTexts.js
   ```

## Running the Application

1. **Start the Backend Server**
   ```bash
   cd server
   npm run dev
   ```
   The server will start on http://localhost:3000

2. **Start the Frontend Development Server**
   ```bash
   cd client/vite-project
   npm run dev
   ```
   The frontend will start on http://localhost:5173

## API Endpoints

- `POST /api/chat` - Send questions and get responses
  ```json
  {
    "message": "Who is Krishna?"
  }
  ```

## Important Notes

- The first request might take longer as it initializes the RAG system
- Subsequent requests will be faster
- The OpenAI API key should be kept secret
- Text files are automatically downloaded on setup

## Development

- Backend development server (with hot reload):
  ```bash
  cd server
  npm run dev
  ```

- Frontend development server:
  ```bash
  cd client/vite-project
  npm run dev
  ```

## Troubleshooting

1. If you encounter CORS issues, ensure the backend is running on port 3000
2. If responses are slow, check the chunk size in ragService.js
3. For OpenAI API errors, verify your API key in .env file



## Acknowledgments

- OpenAI for the API
- LangChain for the RAG implementation
- Project texts from Project Gutenberg
