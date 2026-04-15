import { useState } from "react";
import { Users, CheckCircle, AlertTriangle, TrendingUp, Target } from "lucide-react";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend } from "recharts";
import { mockProComparison, mockAnalysisHistory } from "../data/mockData";

const proDancers = [
  { id: "1", name: "Misty Copeland", specialty: "Ballet", image: "https://images.unsplash.com/photo-1675806528444-75a88ed9c014?w=400" },
  { id: "2", name: "Les Twins", specialty: "Hip Hop", image: "https://images.unsplash.com/photo-1770739723922-a4fd700bdb3b?w=400" },
  { id: "3", name: "Akram Khan", specialty: "Contemporary", image: "https://images.unsplash.com/photo-1760408582263-63f1377c7249?w=400" },
  { id: "4", name: "Savion Glover", specialty: "Jazz/Tap", image: "https://images.unsplash.com/photo-1649591833478-15cd1060e137?w=400" },
];

export function ComparePerformance() {
  const [selectedPro, setSelectedPro] = useState(proDancers[0]);
  const [selectedVideo, setSelectedVideo] = useState(mockAnalysisHistory[0]);

  const comparisonData = [
    { category: "Posture", user: selectedVideo.scores.posture, pro: 95 },
    { category: "Fluidity", user: selectedVideo.scores.fluidity, pro: 92 },
    { category: "Rhythm", user: selectedVideo.scores.rhythm, pro: 90 },
    { category: "Technique", user: 85, pro: 98 },
    { category: "Expression", user: 88, pro: 94 },
    { category: "Balance", user: 90, pro: 96 },
  ];

  const similarity = mockProComparison.similarity;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="flex items-center gap-3 mb-2">
          <Users className="w-10 h-10" />
          <h2 className="text-3xl font-bold">Compare with Professionals</h2>
        </div>
        <p className="text-indigo-100">
          Analyze your performance against professional dancers and get personalized improvement tips
        </p>
      </div>

      {/* Selection Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Select Your Video */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Your Performance</h3>
          <div className="space-y-3">
            {mockAnalysisHistory.slice(0, 3).map((video) => (
              <button
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg border-2 transition-all ${
                  selectedVideo.id === video.id
                    ? "border-purple-600 bg-purple-50"
                    : "border-gray-200 hover:border-purple-300"
                }`}
              >
                <img
                  src={video.thumbnail}
                  alt={video.videoTitle}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1 text-left">
                  <div className="font-semibold text-gray-900 text-sm">{video.videoTitle}</div>
                  <div className="text-xs text-gray-500">Score: {video.scores.final}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Select Pro Dancer */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Professional Dancer</h3>
          <div className="space-y-3">
            {proDancers.map((pro) => (
              <button
                key={pro.id}
                onClick={() => setSelectedPro(pro)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg border-2 transition-all ${
                  selectedPro.id === pro.id
                    ? "border-indigo-600 bg-indigo-50"
                    : "border-gray-200 hover:border-indigo-300"
                }`}
              >
                <img
                  src={pro.image}
                  alt={pro.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1 text-left">
                  <div className="font-semibold text-gray-900 text-sm">{pro.name}</div>
                  <div className="text-xs text-gray-500">{pro.specialty}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Similarity Score */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Similarity Score</h3>
          <div className="relative inline-flex items-center justify-center">
            <svg className="w-40 h-40 transform -rotate-90">
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="#e5e7eb"
                strokeWidth="12"
                fill="none"
              />
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="url(#gradient)"
                strokeWidth="12"
                fill="none"
                strokeDasharray={`${(similarity / 100) * 440} 440`}
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-4xl font-bold text-gray-900">{similarity}%</div>
              <div className="text-sm text-gray-600">Match</div>
            </div>
          </div>
          <p className="mt-4 text-gray-700">
            Your performance is <span className="font-semibold text-purple-600">{similarity}% similar</span> to {selectedPro.name}'s technique
          </p>
        </div>
      </div>

      {/* Comparison Chart */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold mb-6">Performance Comparison</h3>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart data={comparisonData}>
            <PolarGrid stroke="#e5e7eb" />
            <PolarAngleAxis dataKey="category" tick={{ fontSize: 12 }} />
            <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 12 }} />
            <Radar name={`You (${selectedVideo.videoTitle})`} dataKey="user" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.5} />
            <Radar name={selectedPro.name} dataKey="pro" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Detailed Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Strengths */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold">Your Strengths</h3>
          </div>
          <div className="space-y-3">
            {mockProComparison.strengths.map((strength, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">{strength}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Areas for Improvement */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold">Areas to Improve</h3>
          </div>
          <div className="space-y-3">
            {mockProComparison.improvements.map((improvement, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                <Target className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">{improvement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Metrics */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold mb-6">Detailed Metrics Comparison</h3>
        <div className="space-y-4">
          {comparisonData.map((metric) => (
            <div key={metric.category}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">{metric.category}</span>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-purple-600 font-semibold">You: {metric.user}</span>
                  <span className="text-blue-600 font-semibold">{selectedPro.name}: {metric.pro}</span>
                </div>
              </div>
              <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="absolute h-full bg-purple-600 rounded-full"
                  style={{ width: `${metric.user}%` }}
                />
                <div
                  className="absolute h-full border-2 border-blue-600 rounded-full"
                  style={{ width: `${metric.pro}%`, background: 'transparent' }}
                />
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs text-gray-500">Gap: {metric.pro - metric.user} points</span>
                {metric.user >= metric.pro ? (
                  <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> On par with pro!
                  </span>
                ) : (
                  <span className="text-xs text-gray-500">
                    {Math.round(((metric.pro - metric.user) / metric.pro) * 100)}% to improve
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Actionable Tips */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-indigo-600" />
          Recommended Practice Plan
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">This Week</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Practice leg extensions 15min daily</li>
              <li>• Focus on rotation drills</li>
              <li>• Work on landing control</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Next Steps</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Upload weekly progress videos</li>
              <li>• Track improvement in technique score</li>
              <li>• Review {selectedPro.name}'s reference videos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
