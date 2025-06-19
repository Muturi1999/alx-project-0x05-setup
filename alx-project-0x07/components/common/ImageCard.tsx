import React from 'react';
import { ImageData } from '@/interfaces';

interface ImageCardProps {
  image: ImageData;
  onClick?: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200"
      onClick={onClick}
    >
      <div className="aspect-square relative">
        <img
          src={image.url}
          alt={image.prompt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-600 truncate" title={image.prompt}>
          {image.prompt}
        </p>
        <p className="text-xs text-gray-400 mt-1">
          {image.createdAt.toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;