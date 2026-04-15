Build a full-stack AI Dance Analysis platform with advanced real-time capabilities and AI coaching.

------------------------------------
TECH STACK
------------------------------------
- Web Frontend: React (Vite)
- Mobile App: Flutter (Dart)
- Backend API: Node.js (Express)
- Database: MySQL
- AI Service: Python (FastAPI)
- Real-time processing: WebSocket
- Pose Estimation: MediaPipe or MoveNet
- ML Model: LSTM or Transformer
- Authentication: JWT

------------------------------------
PROJECT DESCRIPTION
------------------------------------

Create a professional AI-powered dance coaching platform where users can:

- Record or upload dance videos
- Analyze movements in real-time or post-upload
- Receive detailed AI feedback on posture, rhythm, and fluidity
- Compare performance with professional dancers
- Track progress over time
- Compete via leaderboard

------------------------------------
CORE FEATURES
------------------------------------

1) USER ROLES
- Admin
- Coach
- Dancer

2) AUTH SYSTEM
- JWT authentication
- Role-based access
- Secure storage (Flutter secure storage)

------------------------------------
3) REAL-TIME DANCE ANALYSIS (KEY FEATURE)
------------------------------------

Mobile (Flutter):
- Use camera stream
- Send frames via WebSocket to backend or AI service
- Display real-time skeleton overlay
- Show live feedback:
    - "Raise your arm"
    - "Bend your knees"
    - "Stay on rhythm"

Backend:
- Stream frames to AI microservice
- Return real-time pose + feedback

------------------------------------
4) VIDEO ANALYSIS (UPLOAD MODE)
------------------------------------

- Upload MP4
- Backend sends to AI service
- AI extracts pose sequence
- Model evaluates:

    - Arm posture
    - Leg posture
    - Body alignment
    - Fluidity
    - Rhythm

- Generate final score (0-100)

------------------------------------
5) AI COACH (PRO COMPARISON)
------------------------------------

- Store reference videos of professional dancers
- Extract reference keypoints
- Compare user vs pro:

    - Pose similarity (cosine distance)
    - Angle difference
    - Timing alignment

Return:
- Similarity score
- Improvement suggestions

------------------------------------
6) MACHINE LEARNING MODEL
------------------------------------

Use sequence model:

Option 1: LSTM
Option 2: Transformer

Input:
- Sequence of keypoints (frames × joints)

Output:
- Scores:
    - posture_score
    - fluidity_score
    - rhythm_score
    - final_score

Include training pipeline support:
- Dataset loader
- Training script
- Evaluation metrics

------------------------------------
7) LEADERBOARD SYSTEM
------------------------------------

- Rank users based on:
    - Average score
    - Best performance
- Display:
    - Top dancers
    - Weekly ranking
    - Personal rank

------------------------------------
8) ANALYTICS DASHBOARD
------------------------------------

Web dashboard:
- Performance trends
- Score evolution charts
- Heatmap of weak body parts
- Comparison over time

Use charts:
- Line charts
- Radar charts
- Progress bars

------------------------------------
9) DATABASE (MySQL)
------------------------------------

Users
Videos
Analysis
Leaderboard
Reference_Dancers

------------------------------------
10) FLUTTER MOBILE APP
------------------------------------

Screens:
- Login/Register
- Home
- Real-time camera analysis
- Upload video
- Result screen
- Leaderboard
- Profile with stats

Features:
- Camera stream
- WebSocket integration
- Animated UI
- Real-time feedback overlay

------------------------------------
11) BACKEND (EXPRESS)
------------------------------------

- REST API
- WebSocket server
- File upload (multer)
- AI service integration
- JWT middleware

------------------------------------
12) AI MICROSERVICE (FASTAPI)
------------------------------------

Endpoints:
- POST /analyze-video
- POST /analyze-realtime
- POST /compare-pro

Tasks:
- Pose estimation (MediaPipe)
- Feature extraction
- ML inference
- Return JSON

------------------------------------
13) DOCKER SUPPORT
------------------------------------

- Dockerfile for each service
- docker-compose

------------------------------------
14) OUTPUT REQUIRED
------------------------------------

- Full production-ready code
- Clean architecture
- README
- API docs
- Setup instructions
- Example test flow

Ensure modular, scalable, clean code with comments.