import React, { useState } from "react";

function App() {
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (question.trim() === "") {
      alert("Please enter a question!");
      return;
    }

    // Add user question to chat
    setChatHistory(prev => [...prev, { 
      type: 'user', 
      content: question 
    }]);
    
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: question }),
      });

      const data = await response.json();
      
      // Add bot response with sources
      setChatHistory(prev => [...prev, { 
        type: 'bot', 
        content: data.answer,
        sources: data.sources
      }]);
    } catch (error) {
      console.error('Error:', error);
      setChatHistory(prev => [...prev, { 
        type: 'bot', 
        content: 'Sorry, I encountered an error. Please try again.'
      }]);
    }

    setIsLoading(false);
    setQuestion("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Indian Mythology Chat
        </h1>

        {/* Chat Area */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6 min-h-[400px] max-h-[600px] overflow-auto">
          {chatHistory.map((msg, index) => (
            <div 
              key={index} 
              className={`mb-4 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}
            >
              <div 
                className={`inline-block p-3 rounded-lg ${
                  msg.type === 'user' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 text-gray-800'
                } max-w-[80%]`}
              >
                <p className="mb-2">{msg.content}</p>
                {msg.sources && (
                  <div className="mt-3 text-sm border-t border-gray-300 pt-2">
                    <p className="font-semibold text-gray-600">Sources:</p>
                    {msg.sources.map((source, idx) => (
                      <p key={idx} className="text-xs text-gray-600 mt-1">
                        {source.content}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="text-left">
              <div className="inline-block bg-gray-200 text-gray-700 p-3 rounded-lg">
                Thinking...
              </div>
            </div>
          )}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask about Ramayana or Mahabharata..."
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-blue-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;