import { Calendar, Award, TrendingUp, Video, Clock, Target } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { mockProgressData, mockAnalysisHistory, weeklyStats } from "../data/mockData";

export function Profile() {
  const totalVideos = mockAnalysisHistory.length;
  const bestScore = Math.max(...mockAnalysisHistory.map(a => a.scores.final));
  const totalPracticeTime = weeklyStats.totalPracticeTime * 6; // Simulate 6 weeks

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
        <div className="flex items-start gap-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img 
              src="https://i.pravatar.cc/150?img=5" 
              alt="Sarah Chen" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2">Sarah Chen</h2>
            <p className="text-purple-100 mb-4">Dancer • Advanced Level</p>
            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                Contemporary
              </div>
              <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                Ballet
              </div>
              <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                Hip Hop
              </div>
              <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                Jazz
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-purple-100 mb-1">Member since</div>
            <div className="font-semibold">January 2026</div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Video}
          label="Total Videos"
          value={totalVideos.toString()}
          subtitle="Analyzed"
          color="bg-blue-500"
        />
        <StatCard
          icon={Award}
          label="Best Score"
          value={bestScore.toString()}
          subtitle="Personal record"
          color="bg-purple-500"
        />
        <StatCard
          icon={Clock}
          label="Practice Time"
          value={`${totalPracticeTime}h`}
          subtitle="Total hours"
          color="bg-pink-500"
        />
        <StatCard
          icon={TrendingUp}
          label="Improvement"
          value={`+${weeklyStats.improvement}%`}
          subtitle="This week"
          color="bg-green-500"
        />
      </div>

      {/* Performance Over Time */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold mb-6">Performance Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={mockProgressData}>
            <defs>
              <linearGradient id="colorOverall" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
              </linearGradient>
            </defs>
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
            <Area 
              type="monotone" 
              dataKey="overall" 
              stroke="#8b5cf6" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorOverall)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold mb-6">Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Achievement
            icon="🏆"
            title="Top 10 Dancer"
            description="Ranked in the top 10 globally"
            earned={true}
          />
          <Achievement
            icon="🔥"
            title="Week Streak"
            description="7 days practice streak"
            earned={true}
          />
          <Achievement
            icon="⭐"
            title="Perfect Score"
            description="Achieve a score of 95+"
            earned={false}
          />
          <Achievement
            icon="📈"
            title="Rapid Improver"
            description="10% improvement in a week"
            earned={true}
          />
          <Achievement
            icon="🎯"
            title="Century Club"
            description="Analyze 100 videos"
            earned={false}
          />
          <Achievement
            icon="👑"
            title="Master Dancer"
            description="Master all dance styles"
            earned={false}
          />
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold mb-6">Recent Activity</h3>
        <div className="space-y-4">
          <ActivityItem
            icon={Video}
            title="Uploaded new video"
            description="Contemporary Dance - Morning Practice"
            time="2 hours ago"
            color="text-purple-600"
          />
          <ActivityItem
            icon={Award}
            title="Achieved new best score"
            description="Scored 91 on Ballet Technique"
            time="1 day ago"
            color="text-yellow-600"
          />
          <ActivityItem
            icon={TrendingUp}
            title="Improved performance"
            description="8% improvement this week"
            time="2 days ago"
            color="text-green-600"
          />
          <ActivityItem
            icon={Target}
            title="Completed weekly goal"
            description="Analyzed 8 videos this week"
            time="3 days ago"
            color="text-blue-600"
          />
        </div>
      </div>

      {/* Goals */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold mb-6">Weekly Goals</h3>
        <div className="space-y-4">
          <GoalProgress
            title="Practice Time"
            current={12.5}
            target={15}
            unit="hours"
          />
          <GoalProgress
            title="Videos Analyzed"
            current={8}
            target={10}
            unit="videos"
          />
          <GoalProgress
            title="Average Score"
            current={86}
            target={90}
            unit="points"
          />
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, subtitle, color }: any) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className={`${color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="text-sm text-gray-600 mb-1">{label}</div>
      <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-sm text-gray-500">{subtitle}</div>
    </div>
  );
}

function Achievement({ icon, title, description, earned }: any) {
  return (
    <div className={`p-4 rounded-lg border-2 transition-all ${
      earned 
        ? 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200' 
        : 'bg-gray-50 border-gray-200 opacity-60'
    }`}>
      <div className="text-3xl mb-2">{icon}</div>
      <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
      {earned && (
        <div className="mt-2">
          <span className="text-xs text-purple-600 font-medium">✓ Earned</span>
        </div>
      )}
    </div>
  );
}

function ActivityItem({ icon: Icon, title, description, time, color }: any) {
  return (
    <div className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0">
      <div className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center ${color}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-xs text-gray-500 mt-1">{time}</p>
      </div>
    </div>
  );
}

function GoalProgress({ title, current, target, unit }: any) {
  const percentage = Math.min((current / target) * 100, 100);
  
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">{title}</span>
        <span className="text-sm font-semibold text-gray-900">
          {current} / {target} {unit}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="mt-1 text-xs text-gray-500">
        {percentage.toFixed(0)}% complete
      </div>
    </div>
  );
}
