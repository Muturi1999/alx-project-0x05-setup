import React, { useState } from "react";

const Home: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGenerateImage = async () => {
    if (!prompt.trim()) {
      alert("Please enter a prompt!");
      return;
    }

    setIsLoading(true);
    console.log("Generating Images for prompt:", prompt);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false);
      console.log("Image generation completed!");
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col items-center max-w-2xl w-full">
        <div className="text-center mb-8 mt-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Image Generation App</h1>
          <p className="text-lg text-gray-700 mb-4">
            Generate stunning images based on your prompts!
          </p>
        </div>

        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
              Enter your prompt:
            </label>
            <input
              id="prompt"
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt here..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              disabled={isLoading}
            />
          </div>
          
          <button
            onClick={handleGenerateImage}
            disabled={isLoading || !prompt.trim()}
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-200 font-medium"
          >
            {isLoading ? "Generating..." : "Generate Image"}
          </button>
        </div>

        {isLoading && (
          <div className="mt-8 text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-2 text-gray-600">Creating your image...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;