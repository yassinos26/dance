// Mock data for the dance analysis platform

export interface AnalysisResult {
  id: string;
  videoTitle: string;
  date: string;
  thumbnail: string;
  scores: {
    posture: number;
    fluidity: number;
    rhythm: number;
    final: number;
  };
  feedback: string[];
  duration: number;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  avatar: string;
  averageScore: number;
  bestScore: number;
  videosAnalyzed: number;
  improvement: number;
}

export interface ProgressData {
  date: string;
  posture: number;
  fluidity: number;
  rhythm: number;
  overall: number;
}

export interface ProComparison {
  proDancer: string;
  similarity: number;
  strengths: string[];
  improvements: string[];
}

export const mockAnalysisHistory: AnalysisResult[] = [
  {
    id: "1",
    videoTitle: "Contemporary Dance - Morning Practice",
    date: "2026-03-18",
    thumbnail: "https://images.unsplash.com/photo-1760408582263-63f1377c7249?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBkYW5jZSUyMG1vdmVtZW50fGVufDF8fHx8MTc3MzkxMzM1M3ww&ixlib=rb-4.1.0&q=80&w=400",
    scores: {
      posture: 88,
      fluidity: 92,
      rhythm: 85,
      final: 88,
    },
    feedback: [
      "Excellent arm extension in transitions",
      "Maintain core engagement during turns",
      "Timing slightly ahead of the beat in measures 12-16",
    ],
    duration: 180,
  },
  {
    id: "2",
    videoTitle: "Hip Hop Routine - Final Performance",
    date: "2026-03-16",
    thumbnail: "https://images.unsplash.com/photo-1770739723922-a4fd700bdb3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXAlMjBob3AlMjBkYW5jZXIlMjB1cmJhbnxlbnwxfHx8fDE3NzM4MzgyMjF8MA&ixlib=rb-4.1.0&q=80&w=400",
    scores: {
      posture: 82,
      fluidity: 79,
      rhythm: 94,
      final: 85,
    },
    feedback: [
      "Perfect rhythm synchronization",
      "Sharper isolations needed in chest pops",
      "Great energy and stage presence",
    ],
    duration: 150,
  },
  {
    id: "3",
    videoTitle: "Ballet Technique - Pirouettes",
    date: "2026-03-15",
    thumbnail: "https://images.unsplash.com/photo-1675806528444-75a88ed9c014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBiYWxsZXQlMjBkYW5jZXIlMjBwZXJmb3JtaW5nfGVufDF8fHx8MTc3Mzk1ODIyMXww&ixlib=rb-4.1.0&q=80&w=400",
    scores: {
      posture: 95,
      fluidity: 90,
      rhythm: 88,
      final: 91,
    },
    feedback: [
      "Exceptional balance and alignment",
      "Spotting technique is on point",
      "Controlled landing on double pirouettes",
    ],
    duration: 120,
  },
  {
    id: "4",
    videoTitle: "Jazz Combo - Practice Session",
    date: "2026-03-12",
    thumbnail: "https://images.unsplash.com/photo-1649591833478-15cd1060e137?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYW5jZSUyMHN0dWRpbyUyMGVtcHR5fGVufDF8fHx8MTc3Mzk1ODIyMnww&ixlib=rb-4.1.0&q=80&w=400",
    scores: {
      posture: 80,
      fluidity: 84,
      rhythm: 82,
      final: 82,
    },
    feedback: [
      "Work on hip flexibility for deeper lunges",
      "Smooth transitions between movements",
      "Add more dynamic range to jumps",
    ],
    duration: 200,
  },
];

export const mockLeaderboard: LeaderboardEntry[] = [
  {
    rank: 1,
    name: "Emma Martinez",
    avatar: "https://i.pravatar.cc/150?img=1",
    averageScore: 94,
    bestScore: 98,
    videosAnalyzed: 127,
    improvement: 12,
  },
  {
    rank: 2,
    name: "Sarah Chen",
    avatar: "https://i.pravatar.cc/150?img=5",
    averageScore: 88,
    bestScore: 91,
    videosAnalyzed: 45,
    improvement: 8,
  },
  {
    rank: 3,
    name: "Marcus Johnson",
    avatar: "https://i.pravatar.cc/150?img=12",
    averageScore: 87,
    bestScore: 92,
    videosAnalyzed: 89,
    improvement: 15,
  },
  {
    rank: 4,
    name: "Yuki Tanaka",
    avatar: "https://i.pravatar.cc/150?img=32",
    averageScore: 86,
    bestScore: 90,
    videosAnalyzed: 103,
    improvement: -2,
  },
  {
    rank: 5,
    name: "Lisa Anderson",
    avatar: "https://i.pravatar.cc/150?img=45",
    averageScore: 85,
    bestScore: 89,
    videosAnalyzed: 67,
    improvement: 6,
  },
  {
    rank: 6,
    name: "Carlos Rivera",
    avatar: "https://i.pravatar.cc/150?img=33",
    averageScore: 84,
    bestScore: 88,
    videosAnalyzed: 55,
    improvement: 10,
  },
  {
    rank: 7,
    name: "Aisha Patel",
    avatar: "https://i.pravatar.cc/150?img=47",
    averageScore: 83,
    bestScore: 87,
    videosAnalyzed: 72,
    improvement: 4,
  },
  {
    rank: 8,
    name: "Oliver Kim",
    avatar: "https://i.pravatar.cc/150?img=14",
    averageScore: 82,
    bestScore: 86,
    videosAnalyzed: 41,
    improvement: 7,
  },
];

export const mockProgressData: ProgressData[] = [
  { date: "2026-02-01", posture: 75, fluidity: 72, rhythm: 78, overall: 75 },
  { date: "2026-02-08", posture: 77, fluidity: 74, rhythm: 80, overall: 77 },
  { date: "2026-02-15", posture: 79, fluidity: 76, rhythm: 81, overall: 79 },
  { date: "2026-02-22", posture: 80, fluidity: 78, rhythm: 83, overall: 80 },
  { date: "2026-03-01", posture: 82, fluidity: 80, rhythm: 85, overall: 82 },
  { date: "2026-03-08", posture: 85, fluidity: 84, rhythm: 88, overall: 86 },
  { date: "2026-03-15", posture: 87, fluidity: 86, rhythm: 87, overall: 87 },
  { date: "2026-03-19", posture: 88, fluidity: 90, rhythm: 89, overall: 89 },
];

export const mockProComparison: ProComparison = {
  proDancer: "Misty Copeland",
  similarity: 78,
  strengths: [
    "Excellent posture alignment matches professional standards",
    "Fluid arm movements comparable to reference",
    "Strong core control throughout sequences",
  ],
  improvements: [
    "Extend leg lines further in arabesque position",
    "Increase rotation speed in pirouettes",
    "Soften landing transitions for smoother flow",
  ],
};

export const bodyPartWeakness = [
  { part: "Arms", score: 92, status: "excellent" },
  { part: "Legs", score: 85, status: "good" },
  { part: "Core", score: 88, status: "excellent" },
  { part: "Neck/Head", score: 78, status: "needs-improvement" },
  { part: "Hips", score: 82, status: "good" },
  { part: "Feet", score: 90, status: "excellent" },
];

export const weeklyStats = {
  totalPracticeTime: 12.5, // hours
  videosAnalyzed: 8,
  averageScore: 86,
  improvement: 5,
};
