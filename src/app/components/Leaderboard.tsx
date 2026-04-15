import { Trophy, TrendingUp, TrendingDown, Medal, Crown, Award } from "lucide-react";
import { mockLeaderboard } from "../data/mockData";

export function Leaderboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-2xl p-8 text-white">
        <div className="flex items-center gap-3 mb-2">
          <Trophy className="w-10 h-10" />
          <h2 className="text-3xl font-bold">Global Leaderboard</h2>
        </div>
        <p className="text-white/90">
          Top dancers ranked by average performance scores this week
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white rounded-xl p-2 shadow-sm border border-gray-200 inline-flex gap-2">
        <button className="px-6 py-2 bg-purple-600 text-white rounded-lg font-medium">
          This Week
        </button>
        <button className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium">
          This Month
        </button>
        <button className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium">
          All Time
        </button>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockLeaderboard.slice(0, 3).map((entry, index) => (
          <PodiumCard key={entry.rank} entry={entry} position={index} />
        ))}
      </div>

      {/* Full Leaderboard */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Rank
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Dancer
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Avg Score
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Best Score
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Videos
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Trend
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mockLeaderboard.map((entry) => (
                <LeaderboardRow key={entry.rank} entry={entry} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Your Stats */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-purple-600" />
          Your Performance
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-1">Current Rank</div>
            <div className="text-2xl font-bold text-purple-600">#2</div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-1">Average Score</div>
            <div className="text-2xl font-bold text-gray-900">88</div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-1">Best Score</div>
            <div className="text-2xl font-bold text-gray-900">91</div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-1">Videos</div>
            <div className="text-2xl font-bold text-gray-900">45</div>
          </div>
        </div>
        <div className="mt-4 p-4 bg-white rounded-lg">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span>You're 8% better than last week! Keep it up to reach #1</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PodiumCard({ entry, position }: { entry: any; position: number }) {
  const icons = [Crown, Medal, Award];
  const Icon = icons[position];
  const colors = [
    { bg: "from-yellow-400 to-yellow-500", border: "border-yellow-300", text: "text-yellow-600" },
    { bg: "from-gray-300 to-gray-400", border: "border-gray-300", text: "text-gray-600" },
    { bg: "from-orange-400 to-orange-500", border: "border-orange-300", text: "text-orange-600" },
  ];
  const color = colors[position];
  const heights = ["h-48", "h-40", "h-36"];

  return (
    <div className={`bg-white rounded-xl p-6 shadow-lg border-2 ${color.border} ${position === 0 ? 'md:order-2' : position === 1 ? 'md:order-1' : 'md:order-3'}`}>
      <div className="text-center">
        <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${color.bg} rounded-full flex items-center justify-center`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img src={entry.avatar} alt={entry.name} className="w-full h-full object-cover" />
        </div>
        <h3 className="font-bold text-lg text-gray-900 mb-1">{entry.name}</h3>
        <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r ${color.bg} text-white text-sm font-semibold mb-3`}>
          #{entry.rank}
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Avg Score</span>
            <span className="font-bold text-gray-900">{entry.averageScore}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Best</span>
            <span className="font-bold text-gray-900">{entry.bestScore}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Videos</span>
            <span className="font-bold text-gray-900">{entry.videosAnalyzed}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeaderboardRow({ entry }: { entry: any }) {
  const isCurrentUser = entry.rank === 2; // Sarah Chen
  const isPositive = entry.improvement > 0;

  return (
    <tr className={`hover:bg-gray-50 transition-colors ${isCurrentUser ? 'bg-purple-50/50' : ''}`}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center gap-2">
          {entry.rank <= 3 ? (
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm text-white ${
              entry.rank === 1 ? 'bg-yellow-500' : entry.rank === 2 ? 'bg-gray-400' : 'bg-orange-500'
            }`}>
              {entry.rank}
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm text-gray-600 bg-gray-100">
              {entry.rank}
            </div>
          )}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center gap-3">
          <img src={entry.avatar} alt={entry.name} className="w-10 h-10 rounded-full" />
          <div>
            <div className="font-semibold text-gray-900 flex items-center gap-2">
              {entry.name}
              {isCurrentUser && (
                <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-medium rounded">
                  You
                </span>
              )}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-semibold text-gray-900">{entry.averageScore}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-semibold text-gray-900">{entry.bestScore}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-600">{entry.videosAnalyzed}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className={`flex items-center gap-1 text-sm font-medium ${
          isPositive ? 'text-green-600' : entry.improvement === 0 ? 'text-gray-500' : 'text-red-600'
        }`}>
          {isPositive ? (
            <>
              <TrendingUp className="w-4 h-4" />
              +{entry.improvement}%
            </>
          ) : entry.improvement === 0 ? (
            <span>—</span>
          ) : (
            <>
              <TrendingDown className="w-4 h-4" />
              {entry.improvement}%
            </>
          )}
        </div>
      </td>
    </tr>
  );
}
