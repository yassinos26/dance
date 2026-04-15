import { useState } from "react";
import { Upload, Play, CheckCircle, AlertCircle, TrendingUp } from "lucide-react";
import { mockAnalysisHistory } from "../data/mockData";

export function VideoAnalysis() {
  const [selectedVideo, setSelectedVideo] = useState(mockAnalysisHistory[0]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsUploading(false);
            setUploadProgress(0);
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <div className="space-y-6">
      {/* Upload Section */}
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold mb-6">Upload Video for Analysis</h2>
        
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-purple-400 transition-colors">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
              <Upload className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Drop your dance video here</h3>
              <p className="text-sm text-gray-500">or click to browse (MP4, MOV, AVI)</p>
            </div>
            <input
              type="file"
              accept="video/*"
              onChange={handleFileUpload}
              className="hidden"
              id="video-upload"
            />
            <label
              htmlFor="video-upload"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium cursor-pointer hover:shadow-lg transition-shadow"
            >
              Select Video
            </label>
          </div>

          {isUploading && (
            <div className="mt-6 max-w-md mx-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Uploading & Analyzing...</span>
                <span className="text-sm font-semibold text-purple-600">{uploadProgress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
            <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-medium text-gray-900">Real-time Analysis</div>
              <div className="text-sm text-gray-600">Get instant feedback as you dance</div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-pink-50 rounded-lg">
            <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-medium text-gray-900">AI Pose Detection</div>
              <div className="text-sm text-gray-600">Advanced skeleton tracking</div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-medium text-gray-900">Pro Comparison</div>
              <div className="text-sm text-gray-600">Compare with expert dancers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Analysis History */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold mb-6">Analysis History</h2>
        <div className="space-y-4">
          {mockAnalysisHistory.map((analysis) => (
            <div
              key={analysis.id}
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                selectedVideo.id === analysis.id
                  ? "border-purple-600 bg-purple-50"
                  : "border-gray-200 hover:border-purple-300"
              }`}
              onClick={() => setSelectedVideo(analysis)}
            >
              <div className="flex items-start gap-4">
                <div className="relative w-32 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                  <img
                    src={analysis.thumbnail}
                    alt={analysis.videoTitle}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{analysis.videoTitle}</h3>
                      <p className="text-sm text-gray-500">
                        {new Date(analysis.date).toLocaleDateString('en-US', { 
                          month: 'long', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">{analysis.scores.final}</div>
                        <div className="text-xs text-gray-500">Final Score</div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mt-3">
                    <ScorePill label="Posture" score={analysis.scores.posture} color="purple" />
                    <ScorePill label="Fluidity" score={analysis.scores.fluidity} color="pink" />
                    <ScorePill label="Rhythm" score={analysis.scores.rhythm} color="blue" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Analysis */}
      {selectedVideo && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold mb-6">Detailed Feedback</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Video Preview */}
            <div>
              <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img
                  src={selectedVideo.thumbnail}
                  alt={selectedVideo.videoTitle}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Play className="w-8 h-8 text-purple-600 ml-1" />
                  </button>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{selectedVideo.videoTitle}</h3>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>Duration: {Math.floor(selectedVideo.duration / 60)}:{String(selectedVideo.duration % 60).padStart(2, '0')}</span>
                <span>•</span>
                <span>{new Date(selectedVideo.date).toLocaleDateString()}</span>
              </div>
            </div>

            {/* Feedback */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">AI Coach Feedback</h3>
              <div className="space-y-3">
                {selectedVideo.feedback.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                  >
                    {index === 0 ? (
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    ) : index === selectedVideo.feedback.length - 1 ? (
                      <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    )}
                    <p className="text-sm text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-gray-900 mb-2">Next Steps</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Focus on maintaining core engagement during transitions</li>
                  <li>• Practice rhythm exercises with a metronome</li>
                  <li>• Review comparison with professional dancers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ScorePill({ label, score, color }: { label: string; score: number; color: string }) {
  const colorClasses = {
    purple: "bg-purple-100 text-purple-700",
    pink: "bg-pink-100 text-pink-700",
    blue: "bg-blue-100 text-blue-700",
  };

  return (
    <div className={`px-3 py-1.5 rounded-full text-xs font-medium ${colorClasses[color as keyof typeof colorClasses]}`}>
      <span className="opacity-75">{label}:</span> <span className="font-bold">{score}</span>
    </div>
  );
}
