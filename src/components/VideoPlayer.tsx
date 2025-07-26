import React, { useState } from 'react';
import { Video } from '../types/user';
import { Play, Clock, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface VideoPlayerProps {
  videos: Video[];
  isOpen: boolean;
  onClose: () => void;
  initialVideoIndex?: number;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videos,
  isOpen,
  onClose,
  initialVideoIndex = 0,
}) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(initialVideoIndex);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  if (!isOpen) return null;

  const categories = ['all', ...Array.from(new Set(videos.map((v) => v.category)))];
  const filteredVideos =
    selectedCategory === 'all'
      ? videos
      : videos.filter((v) => v.category === selectedCategory);

  const currentVideo = filteredVideos[currentVideoIndex];

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % filteredVideos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + filteredVideos.length) % filteredVideos.length);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg w-full max-w-6xl max-h-[95vh] overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-gray-900">Learning Videos</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row h-full max-h-[calc(95vh-80px)]">
          {/* Video Player */}
          <div className="lg:w-2/3 bg-black flex items-center justify-center p-4">
            {currentVideo && (
              <div className="relative w-full pb-[56.25%] h-0 rounded-lg overflow-hidden">
                <iframe
                  src={currentVideo.videoUrl}
                  title={currentVideo.title}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>

          {/* Video List */}
          <div className="lg:w-1/3 bg-gray-50 overflow-y-auto max-h-[calc(95vh-80px)]">
            <div className="p-4 space-y-4">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentVideoIndex(0);
                }}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              {/* Current Video Info */}
              {currentVideo && (
                <div className="p-3 bg-white rounded-lg border-2 border-green-500">
                  <h3 className="font-semibold text-gray-900 mb-2">{currentVideo.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{currentVideo.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{currentVideo.duration}</span>
                    <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      {currentVideo.category}
                    </span>
                  </div>
                </div>
              )}

              {/* Navigation */}
              {filteredVideos.length > 1 && (
                <div className="flex justify-between items-center">
                  <button
                    onClick={prevVideo}
                    className="flex items-center px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                  </button>
                  <span className="text-sm text-gray-600">
                    {currentVideoIndex + 1} of {filteredVideos.length}
                  </span>
                  <button
                    onClick={nextVideo}
                    className="flex items-center px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              )}

              {/* Video List */}
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">All Videos</h4>
                {filteredVideos.map((video, index) => (
                  <div
                    key={video.id}
                    onClick={() => setCurrentVideoIndex(index)}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      index === currentVideoIndex
                        ? 'bg-green-100 border-2 border-green-500'
                        : 'bg-white hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    <div className="flex items-start">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-16 h-12 object-cover rounded mr-3 flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h5 className="font-medium text-sm text-gray-900 truncate">
                          {video.title}
                        </h5>
                        <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                          {video.description}
                        </p>
                        <div className="flex items-center mt-2 text-xs text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{video.duration}</span>
                        </div>
                      </div>
                      {index === currentVideoIndex && (
                        <Play className="h-4 w-4 text-green-600 flex-shrink-0" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
