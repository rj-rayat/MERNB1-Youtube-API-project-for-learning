const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
const cateogry = [
    { "category_id": "1001", "category": "Music" },
    { "category_id": "1002", "category": "Comedy" },
    { "category_id": "1003", "category": "Drawing" },
    { "category_id": "1004", "category": "Coding" },
    { "category_id": "1005", "category": "Podcasts" },
    { "category_id": "1006", "category": "Gaming" },
    { "category_id": "1007", "category": "Education" },
    { "category_id": "1008", "category": "Tech & AI" },
    { "category_id": "1009", "category": "Vlogs" },
    { "category_id": "1010", "category": "Fitness" }
]

const allVideos = [
  {
    category_id: "1001",
    video_id: "aaac",
    thumbnail: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&auto=format&fit=crop",
    title: "Building a Winning UX Strategy Using the Kano Model",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: true }],
    others: { views: "91K", posted_date: "14160" },
    description: "Learn how to shape product roadmap with user satisfaction frameworks."
  },
  {
    category_id: "1001",
    video_id: "aaab",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop",
    title: "Python Full Course for free 🐍",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: true }],
    others: { views: "91K", posted_date: "" },
    description: "Comprehensive Python programming course covering fundamentals to basic OOP."
  },
  {
    category_id: "1003",
    video_id: "aaaf",
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop",
    title: "Make A Website With Login And Register | HTML CSS",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: false }],
    others: { views: "91K", posted_date: "16200" },
    description: "Step-by-step UI design guide for authentication pages using HTML5 and CSS3."
  },
  {
    category_id: "1004",
    video_id: "aaad",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop",
    title: "JavaScript DOM Manipulation Masterclass",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: true }],
    others: { views: "45K", posted_date: "3200" },
    description: "Master dynamic HTML manipulation using vanilla JavaScript."
  },
  {
    category_id: "1004",
    video_id: "aaae",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop",
    title: "React JS Crash Course for Beginners 2026",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: true }],
    others: { views: "120K", posted_date: "8500" },
    description: "Learn components, props, hooks, and state management in React."
  },
  {
    category_id: "1008",
    video_id: "aaag",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=600&auto=format&fit=crop",
    title: "Generative AI in Modern Software Development",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: true }],
    others: { views: "60K", posted_date: "1100" },
    description: "Understand how AI tools transform coding workflows."
  },
  {
    category_id: "1004",
    video_id: "aaah",
    thumbnail: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&auto=format&fit=crop",
    title: "Node.js & Express REST API Architecture",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: true }],
    others: { views: "82K", posted_date: "24000" },
    description: "Build robust backend applications using Node and Express."
  },
  {
    category_id: "1006",
    video_id: "aaai",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop",
    title: "Top 10 Open World RPG Games to Play",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop", profile_name: "Rj Rayat", verified: false }],
    others: { views: "15K", posted_date: "50000" },
    description: "A quick look at immersive role-playing video games."
  },
  {
    category_id: "1007",
    video_id: "aaaj",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop",
    title: "CS50 Computer Science Lecture Breakdown",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: true }],
    others: { views: "210K", posted_date: "72000" },
    description: "Deep dive into algorithms, sorting logic, and memory."
  },
  {
    category_id: "1005",
    video_id: "aaak",
    thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&auto=format&fit=crop",
    title: "Tech Entrepreneurship & Startup Mindset",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: true }],
    others: { views: "34K", posted_date: "1800" },
    description: "How to scale small digital agencies into corporate firms."
  },
  {
    category_id: "1002",
    video_id: "aaal",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop",
    title: "Programmer Humor: Bugs That Make No Sense",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: false }],
    others: { views: "88K", posted_date: "9000" },
    description: "A hilarious compilation of coding errors and midnight debugging."
  },
  {
    category_id: "1003",
    video_id: "aaam",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&auto=format&fit=crop",
    title: "Figma UI/UX Dashboard Layout Design",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: true }],
    others: { views: "53K", posted_date: "15000" },
    description: "Designing modern administrative dashboards using Figma."
  },
  {
    category_id: "1004",
    video_id: "aaan",
    thumbnail: "https://images.unsplash.com/photo-1516116211223-48a989688680?w=600&auto=format&fit=crop",
    title: "TypeScript Fundamentals for React Developers",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: true }],
    others: { views: "67K", posted_date: "12000" },
    description: "Write type-safe frontend code with TypeScript."
  },
  {
    category_id: "1004",
    video_id: "aaao",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop",
    title: "Laravel & Inertia.js Setup Guide",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: true }],
    others: { views: "29K", posted_date: "7000" },
    description: "Building SPAs with Laravel backend and React frontend."
  },
  {
    category_id: "1008",
    video_id: "aaap",
    thumbnail: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&auto=format&fit=crop",
    title: "Linux Mint Customization & Terminal Themes",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop", profile_name: "Rj Rayat", verified: true }],
    others: { views: "41K", posted_date: "4300" },
    description: "Optimizing developer environments on Linux Mint Cinnamon."
  },
  {
    category_id: "1004",
    video_id: "aaaq",
    thumbnail: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop",
    title: "Next.js App Router Masterclass",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: true }],
    others: { views: "95K", posted_date: "16000" },
    description: "Server components, routing, and deployment in Next.js."
  },
  {
    category_id: "1004",
    video_id: "aaar",
    thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&auto=format&fit=crop",
    title: "FastAPI Crash Course with Python",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: true }],
    others: { views: "51K", posted_date: "19000" },
    description: "High-performance API development using Python FastAPI."
  },
  {
    category_id: "1009",
    video_id: "aaas",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop",
    title: "A Day in the Life of a Full Stack Developer",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: true }],
    others: { views: "110K", posted_date: "30000" },
    description: "Coding routines, meetings, and project workflows."
  },
  {
    category_id: "1010",
    video_id: "aaat",
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&auto=format&fit=crop",
    title: "Developer Health: Posture & Eye Strain Tips",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: false }],
    others: { views: "22K", posted_date: "40000" },
    description: "Maintaining physical well-being during long coding sessions."
  },
  {
    category_id: "1001",
    video_id: "aaau",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop",
    title: "Lofi Beats for Coding & Deep Work",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: true }],
    others: { views: "300K", posted_date: "5000" },
    description: "Relaxing instrumentals to improve focus and productivity."
  },
  {
    category_id: "1004",
    video_id: "aaav",
    thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&auto=format&fit=crop",
    title: "MongoDB Aggregation Pipeline Explained",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: true }],
    others: { views: "38K", posted_date: "13000" },
    description: "Advanced data querying and transformation in MongoDB."
  },
  {
    category_id: "1004",
    video_id: "aaaw",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop",
    title: "PostgreSQL Indexing & Performance Tuning",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: true }],
    others: { views: "42K", posted_date: "21000" },
    description: "Optimizing relational database execution times."
  },
  {
    category_id: "1004",
    video_id: "aaax",
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop",
    title: "Tailwind CSS Responsive Design Tricks",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: true }],
    others: { views: "74K", posted_date: "8900" },
    description: "Build mobile-first layouts instantly with utility classes."
  },
  {
    category_id: "1007",
    video_id: "aaay",
    thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&auto=format&fit=crop",
    title: "Data Structures and Algorithms in C",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: true }],
    others: { views: "99K", posted_date: "35000" },
    description: "Understanding pointers, arrays, and memory management."
  },
  {
    category_id: "1004",
    video_id: "aaaz",
    thumbnail: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=600&auto=format&fit=crop",
    title: "PHP & MySQL Secure Authentication",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: false }],
    others: { views: "56K", posted_date: "28000" },
    description: "Preventing SQL injection and handling sessions securely."
  },
  {
    category_id: "1008",
    video_id: "aaba",
    thumbnail: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&auto=format&fit=crop",
    title: "Docker Containers for Full Stack Developers",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: true }],
    others: { views: "63K", posted_date: "17000" },
    description: "Containerizing web services for smooth deployment."
  },
  {
    category_id: "1005",
    video_id: "aabb",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop",
    title: "The Future of Web Development in 2026",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: true }],
    others: { views: "89K", posted_date: "6000" },
    description: "Discussing upcoming frameworks, AI agents, and standards."
  },
  {
    category_id: "1002",
    video_id: "aabc",
    thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop",
    title: "Junior vs Senior Developer Memes",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: false }],
    others: { views: "140K", posted_date: "11000" },
    description: "Classic software engineer humor on code optimization."
  },
  {
    category_id: "1003",
    video_id: "aabd",
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop",
    title: "Canva vs Figma: Which UI Tool Wins?",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: true }],
    others: { views: "33K", posted_date: "22000" },
    description: "Comparing design capabilities for rapid prototyping."
  },
  {
    category_id: "1004",
    video_id: "aabe",
    thumbnail: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&auto=format&fit=crop",
    title: "Supabase Complete Backend Setup",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: true }],
    others: { views: "48K", posted_date: "9500" },
    description: "Authentication, database, and real-time features with Supabase."
  },
  {
    category_id: "1004",
    video_id: "aabf",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop",
    title: "Firebase Realtime Database Tutorial",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: true }],
    others: { views: "59K", posted_date: "14000" },
    description: "Building live web apps with Firestore and Firebase Auth."
  },
  {
    category_id: "1007",
    video_id: "aabg",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop",
    title: "Object Oriented Programming in C++",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: true }],
    others: { views: "77K", posted_date: "26000" },
    description: "Classes, inheritance, polymorphism, and encapsulation."
  },
  {
    category_id: "1004",
    video_id: "aabh",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop",
    title: "Django REST Framework Essentials",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: true }],
    others: { views: "40K", posted_date: "18000" },
    description: "Building powerful APIs rapidly using Python Django."
  },
  {
    category_id: "1004",
    video_id: "aabi",
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop",
    title: "WordPress Custom Theme Development",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: true }],
    others: { views: "35K", posted_date: "31000" },
    description: "Creating custom PHP layouts for WordPress CMS."
  },
  {
    category_id: "1009",
    video_id: "aabj",
    thumbnail: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=600&auto=format&fit=crop",
    title: "My Workspace Setup as a Software Engineer",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: true }],
    others: { views: "92K", posted_date: "12500" },
    description: "Laptops, monitors, themes, and productivity gadgets."
  },
  {
    category_id: "1010",
    video_id: "aabk",
    thumbnail: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&auto=format&fit=crop",
    title: "Home Exercises for Desk Workers",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: false }],
    others: { views: "28K", posted_date: "20000" },
    description: "Simple stretches to prevent back pain and stiffness."
  },
  {
    category_id: "1005",
    video_id: "aabl",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop",
    title: "How to Crack Coding Interviews",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: true }],
    others: { views: "115K", posted_date: "15500" },
    description: "Tips from tech leads on problem solving and communication."
  },
  {
    category_id: "1004",
    video_id: "aabm",
    thumbnail: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&auto=format&fit=crop",
    title: "Git and GitHub Branching Strategies",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: true }],
    others: { views: "68K", posted_date: "8000" },
    description: "Collaborative workflows for developer teams."
  },
  {
    category_id: "1008",
    video_id: "aabn",
    thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop",
    title: "Cybersecurity Basics for Web Developers",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: true }],
    others: { views: "52K", posted_date: "16500" },
    description: "Protecting applications against common web vulnerabilities."
  },
  {
    category_id: "1001",
    video_id: "aabo",
    thumbnail: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop",
    title: "Classical Piano Music for Focus",
    authors: [{ profile_picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop", profile_name: "Awlad Hossain", verified: true }],
    others: { views: "180K", posted_date: "41000" },
    description: "Peaceful piano melodies for studying and programming."
  }
];


app.get('/', (req, res)=>{
    res.send("Twoinsoft API Class Project API");
})
app.get('/categories', (req, res)=>{
    res.send(cateogry);
})

app.get("/videos", (req, res)=>{
    res.send(allVideos)
})

app.get("/category/:id", (req, res)=>{
    const id = req.params.id
    const videos_by_category = allVideos.filter(element => element.category_id == id)
    res.send(videos_by_category);
})

app.get("/videos/:id", (req, res)=>{
    const id = req.params.id;

    const single_video = allVideos.find(element => element.video_id == id);
    res.send(single_video);
})

app.listen(PORT, ()=>{
    console.log(`Example app listening on port ${PORT}`)
})