import ImageCard from "@/components/common/ImageCard";
import { ImageProps } from "@/interfaces";
import { useState } from "react";

const Home: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>(""); // must be used
  const [generatedImages, setGeneratedImages] = useState<ImageProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGenerateImage = async () => {
    setIsLoading(true);

    // Simulated image generation
    const fakeImageUrl = `https://via.placeholder.com/300x200.png?text=${encodeURIComponent(prompt)}`;

    // Store in state
    setImageUrl(fakeImageUrl);
    setGeneratedImages((prev) => [
      ...prev,
      { imageUrl: fakeImageUrl, prompt },
    ]);

    setIsLoading(false);
    setPrompt("");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-2">Image Generation App</h1>
        <p className="text-lg text-gray-700 mb-4">
          Generate stunning images based on your prompts!
        </p>

        <div className="w-full max-w-md">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt here..."
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          />
          <button
            onClick={handleGenerateImage}
            disabled={isLoading || !prompt.trim()}
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 disabled:opacity-50"
          >
            {isLoading ? "Loading..." : "Generate Image"}
          </button>
        </div>

        {/* Selected Image Preview */}
        {imageUrl && (
          <div className="mt-10 w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-2">Selected Image Preview</h2>
            <ImageCard
              imageUrl={imageUrl}
              prompt="Selected"
              action={() => setImageUrl("")}
            />
          </div>
        )}

        {/* Gallery of Generated Images */}
        {generatedImages.length > 0 && (
          <div className="mt-10 w-full grid gap-6 max-w-4xl">
            <h2 className="text-2xl font-semibold mb-2">Generated Images</h2>
            {generatedImages.map((img, index) => (
              <ImageCard
                key={index}
                imageUrl={img.imageUrl}
                prompt={img.prompt}
                action={() => setImageUrl(img.imageUrl)} // clicking sets imageUrl
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
