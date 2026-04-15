import { createBrowserRouter } from "react-router";
import { Dashboard } from "./components/Dashboard";
import { VideoAnalysis } from "./components/VideoAnalysis";
import { Leaderboard } from "./components/Leaderboard";
import { Profile } from "./components/Profile";
import { ComparePerformance } from "./components/ComparePerformance";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "analysis", Component: VideoAnalysis },
      { path: "leaderboard", Component: Leaderboard },
      { path: "profile", Component: Profile },
      { path: "compare", Component: ComparePerformance },
    ],
  },
]);
