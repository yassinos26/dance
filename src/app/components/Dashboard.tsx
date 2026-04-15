import { TrendingUp, TrendingDown, Clock, Video, Award, Target } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from "recharts";
import { mockProgressData, mockAnalysisHistory, weeklyStats, bodyPartWeakness } from "../data/mockData";

export function Dashboard() {
  const latestAnalysis = mockAnalysisHistory[0];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-2">Welcome back, Sarah! 👋</h2>
        <p className="text-purple-100">
          You've improved by {weeklyStats.improvement}% this week. Keep up the great work!
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Practice Time"
          value={`${weeklyStats.totalPracticeTime}h`}
          subtitle="This week"
          icon={Clock}
          color="bg-blue-500"
          trend={12}
        />
        <StatCard
          title="Videos Analyzed"
          value={weeklyStats.videosAnalyzed}
          subtitle="This week"
          icon={Video}
          color="bg-purple-500"
          trend={20}
        />
        <StatCard
          title="Average Score"
          value={weeklyStats.averageScore}
          subtitle="Overall performance"
          icon={Award}
          color="bg-pink-500"
          trend={weeklyStats.improvement}
        />
        <StatCard
          title="Best Score"
          value={latestAnalysis.scores.final}
          subtitle="Personal record: 91"
          icon={Target}
          color="bg-indigo-500"
          trend={-3}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Progress Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Performance Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockProgressData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              />
              <YAxis tick={{ fontSize: 12 }} domain={[0, 100]} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                labelFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              />
              <Legend />
              <Line type="monotone" dataKey="posture" stroke="#8b5cf6" strokeWidth={2} name="Posture" />
              <Line type="monotone" dataKey="fluidity" stroke="#ec4899" strokeWidth={2} name="Fluidity" />
              <Line type="monotone" dataKey="rhythm" stroke="#3b82f6" strokeWidth={2} name="Rhythm" />
              <Line type="monotone" dataKey="overall" stroke="#10b981" strokeWidth={3} name="Overall" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Body Part Analysis */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Body Part Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={bodyPartWeakness}>
              <PolarGrid stroke="#e5e7eb" />
              <PolarAngleAxis dataKey="part" tick={{ fontSize: 12 }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 12 }} />
              <Radar name="Score" dataKey="score" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px' }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Analysis */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Recent Analysis</h3>
          <a href="/analysis" className="text-sm text-purple-600 hover:text-purple-700 font-medium">
            View all →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockAnalysisHistory.slice(0, 2).map((analysis) => (
            <AnalysisCard key={analysis.id} analysis={analysis} />
          ))}
        </div>
      </div>

      {/* Body Part Details */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Detailed Body Analysis</h3>
        <div className="space-y-3">
          {bodyPartWeakness.map((item) => (
            <div key={item.part} className="flex items-center gap-4">
              <div className="w-32 text-sm font-medium text-gray-700">{item.part}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        item.score >= 90
                          ? "bg-green-500"
                          : item.score >= 80
                          ? "bg-blue-500"
                          : item.score >= 70
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 w-12 text-right">
                    {item.score}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, subtitle, icon: Icon, color, trend }: any) {
  const isPositive = trend > 0;
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-start justify-between mb-4">
        <div className={`${color} w-12 h-12 rounded-lg flex items-center justify-center`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          {Math.abs(trend)}%
        </div>
      </div>
      <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-sm text-gray-500">{subtitle}</div>
    </div>
  );
}

function AnalysisCard({ analysis }: { analysis: any }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-40">
        <img
          src={analysis.thumbnail}
          alt={analysis.videoTitle}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {Math.floor(analysis.duration / 60)}:{String(analysis.duration % 60).padStart(2, '0')}
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-gray-900 mb-1">{analysis.videoTitle}</h4>
        <p className="text-sm text-gray-500 mb-3">
          {new Date(analysis.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
        <div className="flex items-center gap-2 mb-3">
          <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
              style={{ width: `${analysis.scores.final}%` }}
            />
          </div>
          <span className="text-sm font-bold text-gray-900">{analysis.scores.final}</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div>
            <div className="text-gray-500">Posture</div>
            <div className="font-semibold">{analysis.scores.posture}</div>
          </div>
          <div>
            <div className="text-gray-500">Fluidity</div>
            <div className="font-semibold">{analysis.scores.fluidity}</div>
          </div>
          <div>
            <div className="text-gray-500">Rhythm</div>
            <div className="font-semibold">{analysis.scores.rhythm}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
