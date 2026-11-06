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
    "category_id": "1004",
    "category_name": "Programming",
    "video_id": "vid001",
    "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=85",
    "title": "JavaScript Fundamentals: Variables, Functions & Loops",
    "authors": [
      {
        "channel_id": "channel001",
        "profile_picture": "https://i.pravatar.cc/120?img=1",
        "profile_name": "Nusrat Jahan",
        "verified": true,
        "subscribers": "19K"
      }
    ],
    "others": {
      "views": "128K",
      "posted_date": "786600",
      "duration": "18:42",
      "likes": "8.4K",
      "comments": "326"
    },
    "description": "Learn JavaScript from the ground up with practical examples of variables, functions, loops, and clean coding habits.",
    "published_at": "2026-10-28T09:30:00Z",
    "tags": [
      "javascript",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1004",
    "category_name": "Programming",
    "video_id": "vid002",
    "thumbnail": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=85",
    "title": "Build Your First React App Step by Step",
    "authors": [
      {
        "channel_id": "channel002",
        "profile_picture": "https://i.pravatar.cc/120?img=2",
        "profile_name": "Tanvir Ahmed",
        "verified": true,
        "subscribers": "26K"
      }
    ],
    "others": {
      "views": "96K",
      "posted_date": "1029000",
      "duration": "26:15",
      "likes": "6.1K",
      "comments": "214"
    },
    "description": "Create a small React application and understand components, props, state, and event handling.",
    "published_at": "2026-10-25T14:10:00Z",
    "tags": [
      "build",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1007",
    "category_name": "Education",
    "video_id": "vid003",
    "thumbnail": "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=85",
    "title": "C Programming: Pointers Explained Visually",
    "authors": [
      {
        "channel_id": "channel003",
        "profile_picture": "https://i.pravatar.cc/120?img=3",
        "profile_name": "Rafiul Islam",
        "verified": false,
        "subscribers": "33K"
      }
    ],
    "others": {
      "views": "214K",
      "posted_date": "1483200",
      "duration": "31:08",
      "likes": "15K",
      "comments": "802"
    },
    "description": "A beginner-friendly visual introduction to pointers, memory addresses, and dereferencing in C.",
    "published_at": "2026-10-20T08:00:00Z",
    "tags": [
      "c",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1003",
    "category_name": "Design",
    "video_id": "vid004",
    "thumbnail": "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=85",
    "title": "Figma Auto Layout for Real Projects",
    "authors": [
      {
        "channel_id": "channel004",
        "profile_picture": "https://i.pravatar.cc/120?img=4",
        "profile_name": "Maliha Rahman",
        "verified": true,
        "subscribers": "40K"
      }
    ],
    "others": {
      "views": "73K",
      "posted_date": "1642500",
      "duration": "14:36",
      "likes": "4.2K",
      "comments": "126"
    },
    "description": "Design flexible interfaces with Auto Layout, constraints, reusable components, and responsive spacing.",
    "published_at": "2026-10-18T11:45:00Z",
    "tags": [
      "figma",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1008",
    "category_name": "Technology",
    "video_id": "vid005",
    "thumbnail": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=85",
    "title": "How the Internet Works: DNS, HTTP and HTTPS",
    "authors": [
      {
        "channel_id": "channel005",
        "profile_picture": "https://i.pravatar.cc/120?img=5",
        "profile_name": "Sabbir Hossain",
        "verified": true,
        "subscribers": "47K"
      }
    ],
    "others": {
      "views": "182K",
      "posted_date": "1885200",
      "duration": "22:51",
      "likes": "12K",
      "comments": "497"
    },
    "description": "Follow a web request from your browser to a server and learn the roles of DNS, HTTP, and HTTPS.",
    "published_at": "2026-10-15T16:20:00Z",
    "tags": [
      "how",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1004",
    "category_name": "Programming",
    "video_id": "vid006",
    "thumbnail": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=85",
    "title": "Python Automation: Organize Files Automatically",
    "authors": [
      {
        "channel_id": "channel006",
        "profile_picture": "https://i.pravatar.cc/120?img=6",
        "profile_name": "Farzana Akter",
        "verified": false,
        "subscribers": "54K"
      }
    ],
    "others": {
      "views": "64K",
      "posted_date": "2177100",
      "duration": "19:27",
      "likes": "3.8K",
      "comments": "98"
    },
    "description": "Use Python scripts to sort folders, rename files, and automate repetitive desktop tasks.",
    "published_at": "2026-10-12T07:15:00Z",
    "tags": [
      "python",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1005",
    "category_name": "Career",
    "video_id": "vid007",
    "thumbnail": "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=85",
    "title": "How to Prepare for Your First Tech Interview",
    "authors": [
      {
        "channel_id": "channel007",
        "profile_picture": "https://i.pravatar.cc/120?img=7",
        "profile_name": "Mahmudul Hasan",
        "verified": true,
        "subscribers": "61K"
      }
    ],
    "others": {
      "views": "301K",
      "posted_date": "2329200",
      "duration": "28:04",
      "likes": "21K",
      "comments": "1.1K"
    },
    "description": "Prepare a study plan, explain projects clearly, and approach common entry-level software interview questions.",
    "published_at": "2026-10-10T13:00:00Z",
    "tags": [
      "how",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1006",
    "category_name": "Gaming",
    "video_id": "vid008",
    "thumbnail": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=85",
    "title": "Cozy Indie Games Worth Playing This Year",
    "authors": [
      {
        "channel_id": "channel008",
        "profile_picture": "https://i.pravatar.cc/120?img=8",
        "profile_name": "Ayesha Karim",
        "verified": true,
        "subscribers": "68K"
      }
    ],
    "others": {
      "views": "48K",
      "posted_date": "2482200",
      "duration": "16:52",
      "likes": "2.9K",
      "comments": "173"
    },
    "description": "A curated tour of creative indie games with memorable worlds, soundtracks, and thoughtful mechanics.",
    "published_at": "2026-10-08T18:30:00Z",
    "tags": [
      "cozy",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1007",
    "category_name": "Education",
    "video_id": "vid009",
    "thumbnail": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=85",
    "title": "Data Structures: Stack and Queue Made Simple",
    "authors": [
      {
        "channel_id": "channel009",
        "profile_picture": "https://i.pravatar.cc/120?img=9",
        "profile_name": "Imran Chowdhury",
        "verified": false,
        "subscribers": "75K"
      }
    ],
    "others": {
      "views": "155K",
      "posted_date": "2685600",
      "duration": "24:19",
      "likes": "10K",
      "comments": "405"
    },
    "description": "Understand stack and queue operations through everyday analogies and short programming examples.",
    "published_at": "2026-10-06T10:00:00Z",
    "tags": [
      "data",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1003",
    "category_name": "Design",
    "video_id": "vid010",
    "thumbnail": "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=85",
    "title": "Color Theory for Better Website Design",
    "authors": [
      {
        "channel_id": "channel010",
        "profile_picture": "https://i.pravatar.cc/120?img=10",
        "profile_name": "Oishi Sultana",
        "verified": true,
        "subscribers": "82K"
      }
    ],
    "others": {
      "views": "87K",
      "posted_date": "2848800",
      "duration": "12:33",
      "likes": "5.7K",
      "comments": "188"
    },
    "description": "Learn contrast, color harmony, accessible palettes, and how to build a consistent design system.",
    "published_at": "2026-10-04T12:40:00Z",
    "tags": [
      "color",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1004",
    "category_name": "Programming",
    "video_id": "vid011",
    "thumbnail": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=85",
    "title": "Node.js REST API with Express and MongoDB",
    "authors": [
      {
        "channel_id": "channel011",
        "profile_picture": "https://i.pravatar.cc/120?img=11",
        "profile_name": "Fahim Reza",
        "verified": true,
        "subscribers": "89K"
      }
    ],
    "others": {
      "views": "119K",
      "posted_date": "3034800",
      "duration": "37:12",
      "likes": "7.9K",
      "comments": "352"
    },
    "description": "Build a REST API with routes, controllers, validation, and MongoDB data persistence.",
    "published_at": "2026-10-02T09:00:00Z",
    "tags": [
      "node.js",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1008",
    "category_name": "Technology",
    "video_id": "vid012",
    "thumbnail": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=85",
    "title": "Cybersecurity: Spot Phishing and Fake Websites",
    "authors": [
      {
        "channel_id": "channel012",
        "profile_picture": "https://i.pravatar.cc/120?img=12",
        "profile_name": "Samira Noor",
        "verified": false,
        "subscribers": "96K"
      }
    ],
    "others": {
      "views": "206K",
      "posted_date": "3271200",
      "duration": "20:45",
      "likes": "14K",
      "comments": "621"
    },
    "description": "Recognize suspicious links, inspect website signals, and practice safer browsing habits.",
    "published_at": "2026-09-29T15:20:00Z",
    "tags": [
      "cybersecurity",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1001",
    "category_name": "Music",
    "video_id": "vid013",
    "thumbnail": "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800&q=85",
    "title": "Acoustic Guitar Practice: 5 Easy Chord Changes",
    "authors": [
      {
        "channel_id": "channel013",
        "profile_picture": "https://i.pravatar.cc/120?img=13",
        "profile_name": "Arif Mahbub",
        "verified": true,
        "subscribers": "103K"
      }
    ],
    "others": {
      "views": "92K",
      "posted_date": "3437400",
      "duration": "11:28",
      "likes": "6.4K",
      "comments": "231"
    },
    "description": "Practice five beginner chord transitions with a slow demonstration and a simple daily routine.",
    "published_at": "2026-09-27T17:10:00Z",
    "tags": [
      "acoustic",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1007",
    "category_name": "Education",
    "video_id": "vid014",
    "thumbnail": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=85",
    "title": "Algebra Basics: Understand Linear Equations",
    "authors": [
      {
        "channel_id": "channel014",
        "profile_picture": "https://i.pravatar.cc/120?img=14",
        "profile_name": "Jannatul Ferdous",
        "verified": true,
        "subscribers": "110K"
      }
    ],
    "others": {
      "views": "133K",
      "posted_date": "3726600",
      "duration": "17:56",
      "likes": "9.1K",
      "comments": "309"
    },
    "description": "Solve linear equations step by step and learn how to check your answers confidently.",
    "published_at": "2026-09-24T08:50:00Z",
    "tags": [
      "algebra",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1009",
    "category_name": "Lifestyle",
    "video_id": "vid015",
    "thumbnail": "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=85",
    "title": "A Productive Day as a Remote Developer",
    "authors": [
      {
        "channel_id": "channel015",
        "profile_picture": "https://i.pravatar.cc/120?img=15",
        "profile_name": "Nabil Huda",
        "verified": false,
        "subscribers": "117K"
      }
    ],
    "others": {
      "views": "58K",
      "posted_date": "3907200",
      "duration": "13:14",
      "likes": "3.1K",
      "comments": "144"
    },
    "description": "A realistic look at planning focused work, collaborating remotely, and protecting personal time.",
    "published_at": "2026-09-22T06:40:00Z",
    "tags": [
      "a",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1004",
    "category_name": "Programming",
    "video_id": "vid016",
    "thumbnail": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=85",
    "title": "SQL Joins Explained with Simple Tables",
    "authors": [
      {
        "channel_id": "channel016",
        "profile_picture": "https://i.pravatar.cc/120?img=16",
        "profile_name": "Tasmia Islam",
        "verified": true,
        "subscribers": "124K"
      }
    ],
    "others": {
      "views": "171K",
      "posted_date": "4153800",
      "duration": "21:06",
      "likes": "11K",
      "comments": "468"
    },
    "description": "Learn INNER, LEFT, RIGHT, and FULL joins using small datasets and clear visual examples.",
    "published_at": "2026-09-19T10:10:00Z",
    "tags": [
      "sql",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1008",
    "category_name": "Technology",
    "video_id": "vid017",
    "thumbnail": "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=85",
    "title": "Linux Command Line: 15 Commands to Know",
    "authors": [
      {
        "channel_id": "channel017",
        "profile_picture": "https://i.pravatar.cc/120?img=17",
        "profile_name": "Shakib Mahmud",
        "verified": true,
        "subscribers": "131K"
      }
    ],
    "others": {
      "views": "144K",
      "posted_date": "4336200",
      "duration": "15:49",
      "likes": "8.7K",
      "comments": "277"
    },
    "description": "Get comfortable navigating files, searching text, managing processes, and working in the terminal.",
    "published_at": "2026-09-17T07:30:00Z",
    "tags": [
      "linux",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1003",
    "category_name": "Design",
    "video_id": "vid018",
    "thumbnail": "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=85",
    "title": "Create a Clean Mobile App Onboarding Flow",
    "authors": [
      {
        "channel_id": "channel018",
        "profile_picture": "https://i.pravatar.cc/120?img=18",
        "profile_name": "Priya Das",
        "verified": false,
        "subscribers": "138K"
      }
    ],
    "others": {
      "views": "42K",
      "posted_date": "4572000",
      "duration": "10:57",
      "likes": "2.4K",
      "comments": "89"
    },
    "description": "Plan a helpful onboarding experience with clear screens, friendly copy, and accessible controls.",
    "published_at": "2026-09-14T14:00:00Z",
    "tags": [
      "create",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1004",
    "category_name": "Programming",
    "video_id": "vid019",
    "thumbnail": "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=800&q=85",
    "title": "Git Branching and Merge Conflicts for Beginners",
    "authors": [
      {
        "channel_id": "channel019",
        "profile_picture": "https://i.pravatar.cc/120?img=19",
        "profile_name": "Rashed Kabir",
        "verified": true,
        "subscribers": "145K"
      }
    ],
    "others": {
      "views": "198K",
      "posted_date": "4761300",
      "duration": "29:31",
      "likes": "13K",
      "comments": "544"
    },
    "description": "Practice feature branches, commits, pull requests, and resolving a simple merge conflict.",
    "published_at": "2026-09-12T09:25:00Z",
    "tags": [
      "git",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1002",
    "category_name": "Comedy",
    "video_id": "vid020",
    "thumbnail": "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=85",
    "title": "Debugging Stories: The Bug That Took 6 Hours",
    "authors": [
      {
        "channel_id": "channel020",
        "profile_picture": "https://i.pravatar.cc/120?img=20",
        "profile_name": "Sanjida Ahmed",
        "verified": true,
        "subscribers": "152K"
      }
    ],
    "others": {
      "views": "76K",
      "posted_date": "4986000",
      "duration": "9:42",
      "likes": "5.2K",
      "comments": "203"
    },
    "description": "A lighthearted walkthrough of a tricky bug and the debugging steps that finally revealed it.",
    "published_at": "2026-09-09T19:00:00Z",
    "tags": [
      "debugging",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1004",
    "category_name": "Programming",
    "video_id": "vid021",
    "thumbnail": "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=85",
    "title": "TypeScript Generics Through Practical Examples",
    "authors": [
      {
        "channel_id": "channel021",
        "profile_picture": "https://i.pravatar.cc/120?img=21",
        "profile_name": "Adnan Faruk",
        "verified": false,
        "subscribers": "159K"
      }
    ],
    "others": {
      "views": "83K",
      "posted_date": "5185800",
      "duration": "23:18",
      "likes": "4.9K",
      "comments": "167"
    },
    "description": "Learn generic functions, reusable types, constraints, and how they improve application code.",
    "published_at": "2026-09-07T11:30:00Z",
    "tags": [
      "typescript",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1005",
    "category_name": "Career",
    "video_id": "vid022",
    "thumbnail": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=85",
    "title": "Build a Portfolio Website That Gets Noticed",
    "authors": [
      {
        "channel_id": "channel022",
        "profile_picture": "https://i.pravatar.cc/120?img=22",
        "profile_name": "Mehjabin Sarker",
        "verified": true,
        "subscribers": "166K"
      }
    ],
    "others": {
      "views": "267K",
      "posted_date": "5438700",
      "duration": "25:40",
      "likes": "18K",
      "comments": "736"
    },
    "description": "Organize your projects, write strong case studies, and present your skills in a polished portfolio.",
    "published_at": "2026-09-04T13:15:00Z",
    "tags": [
      "build",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1006",
    "category_name": "Gaming",
    "video_id": "vid023",
    "thumbnail": "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=85",
    "title": "Beginner Guide to Strategy Games",
    "authors": [
      {
        "channel_id": "channel023",
        "profile_picture": "https://i.pravatar.cc/120?img=23",
        "profile_name": "Rakib Hasan",
        "verified": true,
        "subscribers": "173K"
      }
    ],
    "others": {
      "views": "39K",
      "posted_date": "5586600",
      "duration": "14:22",
      "likes": "2.1K",
      "comments": "118"
    },
    "description": "Explore resource management, map control, and planning in approachable strategy games.",
    "published_at": "2026-09-02T20:10:00Z",
    "tags": [
      "beginner",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1007",
    "category_name": "Education",
    "video_id": "vid024",
    "thumbnail": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=85",
    "title": "Binary Search: Why It Is So Fast",
    "authors": [
      {
        "channel_id": "channel024",
        "profile_picture": "https://i.pravatar.cc/120?img=24",
        "profile_name": "Lamia Akter",
        "verified": false,
        "subscribers": "180K"
      }
    ],
    "others": {
      "views": "221K",
      "posted_date": "5889600",
      "duration": "18:09",
      "likes": "16K",
      "comments": "590"
    },
    "description": "Visualize binary search, understand its prerequisites, and compare it with a linear search.",
    "published_at": "2026-08-30T08:00:00Z",
    "tags": [
      "binary",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1008",
    "category_name": "Technology",
    "video_id": "vid025",
    "thumbnail": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=85",
    "title": "Cloud Computing: IaaS, PaaS and SaaS",
    "authors": [
      {
        "channel_id": "channel025",
        "profile_picture": "https://i.pravatar.cc/120?img=25",
        "profile_name": "Shahriar Alam",
        "verified": true,
        "subscribers": "187K"
      }
    ],
    "others": {
      "views": "109K",
      "posted_date": "6117300",
      "duration": "16:37",
      "likes": "7.2K",
      "comments": "245"
    },
    "description": "Compare common cloud service models and see when teams use each approach.",
    "published_at": "2026-08-27T16:45:00Z",
    "tags": [
      "cloud",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1003",
    "category_name": "Design",
    "video_id": "vid026",
    "thumbnail": "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=85",
    "title": "Design a Dashboard: From Wireframe to UI",
    "authors": [
      {
        "channel_id": "channel026",
        "profile_picture": "https://i.pravatar.cc/120?img=26",
        "profile_name": "Nadia Ahmed",
        "verified": true,
        "subscribers": "194K"
      }
    ],
    "others": {
      "views": "62K",
      "posted_date": "6307200",
      "duration": "20:03",
      "likes": "3.5K",
      "comments": "131"
    },
    "description": "Turn rough requirements into a dashboard wireframe and refine it into a consistent interface.",
    "published_at": "2026-08-25T12:00:00Z",
    "tags": [
      "design",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1004",
    "category_name": "Programming",
    "video_id": "vid027",
    "thumbnail": "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?auto=format&fit=crop&w=800&q=85",
    "title": "PHP 8: Build a Secure Login System",
    "authors": [
      {
        "channel_id": "channel027",
        "profile_picture": "https://i.pravatar.cc/120?img=27",
        "profile_name": "Sohag Mia",
        "verified": false,
        "subscribers": "201K"
      }
    ],
    "others": {
      "views": "116K",
      "posted_date": "6574200",
      "duration": "34:26",
      "likes": "7.8K",
      "comments": "318"
    },
    "description": "Create login and registration flows while learning password hashing, sessions, and input validation.",
    "published_at": "2026-08-22T09:50:00Z",
    "tags": [
      "php",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1001",
    "category_name": "Music",
    "video_id": "vid028",
    "thumbnail": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=85",
    "title": "Study Music: Soft Piano for Deep Focus",
    "authors": [
      {
        "channel_id": "channel028",
        "profile_picture": "https://i.pravatar.cc/120?img=28",
        "profile_name": "Elma Tasnim",
        "verified": true,
        "subscribers": "208K"
      }
    ],
    "others": {
      "views": "412K",
      "posted_date": "6764400",
      "duration": "1:02:15",
      "likes": "24K",
      "comments": "902"
    },
    "description": "A calm instrumental piano session for reading, studying, and concentration.",
    "published_at": "2026-08-20T05:00:00Z",
    "tags": [
      "study",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1007",
    "category_name": "Education",
    "video_id": "vid029",
    "thumbnail": "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=800&q=85",
    "title": "Physics for Beginners: Newton's Three Laws",
    "authors": [
      {
        "channel_id": "channel029",
        "profile_picture": "https://i.pravatar.cc/120?img=29",
        "profile_name": "Zubair Ahmed",
        "verified": true,
        "subscribers": "215K"
      }
    ],
    "others": {
      "views": "94K",
      "posted_date": "7003800",
      "duration": "19:58",
      "likes": "6.6K",
      "comments": "222"
    },
    "description": "Understand inertia, force, and action-reaction through familiar experiments and examples.",
    "published_at": "2026-08-17T10:30:00Z",
    "tags": [
      "physics",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1009",
    "category_name": "Lifestyle",
    "video_id": "vid030",
    "thumbnail": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=85",
    "title": "Minimal Desk Setup for Better Focus",
    "authors": [
      {
        "channel_id": "channel030",
        "profile_picture": "https://i.pravatar.cc/120?img=30",
        "profile_name": "Rumana Haque",
        "verified": false,
        "subscribers": "222K"
      }
    ],
    "others": {
      "views": "71K",
      "posted_date": "7188000",
      "duration": "12:48",
      "likes": "4.1K",
      "comments": "156"
    },
    "description": "Set up a practical workspace with comfortable lighting, cable management, and fewer distractions.",
    "published_at": "2026-08-15T07:20:00Z",
    "tags": [
      "minimal",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1004",
    "category_name": "Programming",
    "video_id": "vid031",
    "thumbnail": "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=85",
    "title": "React Native: Your First Android App",
    "authors": [
      {
        "channel_id": "channel031",
        "profile_picture": "https://i.pravatar.cc/120?img=31",
        "profile_name": "Aminul Islam",
        "verified": true,
        "subscribers": "229K"
      }
    ],
    "others": {
      "views": "152K",
      "posted_date": "7421100",
      "duration": "32:17",
      "likes": "9.8K",
      "comments": "413"
    },
    "description": "Create a simple cross-platform mobile app and explore components, styling, and navigation.",
    "published_at": "2026-08-12T14:35:00Z",
    "tags": [
      "react",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1008",
    "category_name": "Technology",
    "video_id": "vid032",
    "thumbnail": "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=85",
    "title": "Artificial Intelligence vs Machine Learning",
    "authors": [
      {
        "channel_id": "channel032",
        "profile_picture": "https://i.pravatar.cc/120?img=32",
        "profile_name": "Ishrat Jahan",
        "verified": true,
        "subscribers": "236K"
      }
    ],
    "others": {
      "views": "329K",
      "posted_date": "7615200",
      "duration": "18:26",
      "likes": "22K",
      "comments": "1.3K"
    },
    "description": "Discover how AI, machine learning, and deep learning relate, with everyday examples.",
    "published_at": "2026-08-10T08:40:00Z",
    "tags": [
      "artificial",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1003",
    "category_name": "Design",
    "video_id": "vid033",
    "thumbnail": "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=800&q=85",
    "title": "Photography Basics: Framing and Composition",
    "authors": [
      {
        "channel_id": "channel033",
        "profile_picture": "https://i.pravatar.cc/120?img=33",
        "profile_name": "Raihan Kabir",
        "verified": false,
        "subscribers": "243K"
      }
    ],
    "others": {
      "views": "104K",
      "posted_date": "7842900",
      "duration": "15:11",
      "likes": "7.3K",
      "comments": "290"
    },
    "description": "Improve your photos by practicing leading lines, framing, balance, and the rule of thirds.",
    "published_at": "2026-08-07T17:25:00Z",
    "tags": [
      "photography",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1004",
    "category_name": "Programming",
    "video_id": "vid034",
    "thumbnail": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=85",
    "title": "Learn Java: Classes, Objects and Inheritance",
    "authors": [
      {
        "channel_id": "channel034",
        "profile_picture": "https://i.pravatar.cc/120?img=34",
        "profile_name": "Sadia Afrin",
        "verified": true,
        "subscribers": "250K"
      }
    ],
    "others": {
      "views": "188K",
      "posted_date": "8042100",
      "duration": "27:44",
      "likes": "12K",
      "comments": "479"
    },
    "description": "Explore object-oriented programming with a small Java project and practical class examples.",
    "published_at": "2026-08-05T10:05:00Z",
    "tags": [
      "learn",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1005",
    "category_name": "Career",
    "video_id": "vid035",
    "thumbnail": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=85",
    "title": "Freelancing 101: Find Your First Client",
    "authors": [
      {
        "channel_id": "channel035",
        "profile_picture": "https://i.pravatar.cc/120?img=35",
        "profile_name": "Muntasir Rahman",
        "verified": true,
        "subscribers": "257K"
      }
    ],
    "others": {
      "views": "245K",
      "posted_date": "8288100",
      "duration": "22:32",
      "likes": "17K",
      "comments": "688"
    },
    "description": "Learn how to define a service, write a proposal, build trust, and communicate with clients.",
    "published_at": "2026-08-02T13:45:00Z",
    "tags": [
      "freelancing",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1007",
    "category_name": "Education",
    "video_id": "vid036",
    "thumbnail": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85",
    "title": "English Speaking Practice: Daily Conversations",
    "authors": [
      {
        "channel_id": "channel036",
        "profile_picture": "https://i.pravatar.cc/120?img=36",
        "profile_name": "Faria Islam",
        "verified": false,
        "subscribers": "264K"
      }
    ],
    "others": {
      "views": "137K",
      "posted_date": "8573400",
      "duration": "16:08",
      "likes": "9.3K",
      "comments": "351"
    },
    "description": "Practice useful everyday phrases and build confidence with short conversation exercises.",
    "published_at": "2026-07-30T06:30:00Z",
    "tags": [
      "english",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1008",
    "category_name": "Technology",
    "video_id": "vid037",
    "thumbnail": "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=800&q=85",
    "title": "Docker Compose: Run Your App and Database",
    "authors": [
      {
        "channel_id": "channel037",
        "profile_picture": "https://i.pravatar.cc/120?img=37",
        "profile_name": "Ehsanul Haque",
        "verified": true,
        "subscribers": "271K"
      }
    ],
    "others": {
      "views": "89K",
      "posted_date": "8801100",
      "duration": "24:53",
      "likes": "5.4K",
      "comments": "192"
    },
    "description": "Connect a web application and database with Docker Compose for local development.",
    "published_at": "2026-07-27T15:15:00Z",
    "tags": [
      "docker",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1006",
    "category_name": "Gaming",
    "video_id": "vid038",
    "thumbnail": "https://images.unsplash.com/photo-1603481546238-487240415921?auto=format&fit=crop&w=800&q=85",
    "title": "Minecraft Redstone Machines for Beginners",
    "authors": [
      {
        "channel_id": "channel038",
        "profile_picture": "https://i.pravatar.cc/120?img=38",
        "profile_name": "Tawhid Zaman",
        "verified": true,
        "subscribers": "278K"
      }
    ],
    "others": {
      "views": "63K",
      "posted_date": "9044400",
      "duration": "17:21",
      "likes": "4.7K",
      "comments": "208"
    },
    "description": "Build simple redstone circuits and understand the logic behind switches and automated doors.",
    "published_at": "2026-07-24T19:40:00Z",
    "tags": [
      "minecraft",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1003",
    "category_name": "Design",
    "video_id": "vid039",
    "thumbnail": "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=800&q=85",
    "title": "Canva Design Tips for Class Presentations",
    "authors": [
      {
        "channel_id": "channel039",
        "profile_picture": "https://i.pravatar.cc/120?img=39",
        "profile_name": "Nafisa Chowdhury",
        "verified": false,
        "subscribers": "285K"
      }
    ],
    "others": {
      "views": "53K",
      "posted_date": "9329700",
      "duration": "11:36",
      "likes": "3.2K",
      "comments": "104"
    },
    "description": "Make classroom presentations easier to follow with clear layouts, typography, and visual hierarchy.",
    "published_at": "2026-07-21T12:25:00Z",
    "tags": [
      "canva",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  },
  {
    "category_id": "1004",
    "category_name": "Programming",
    "video_id": "vid040",
    "thumbnail": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=85",
    "title": "Make a Weather App Using a Public API",
    "authors": [
      {
        "channel_id": "channel040",
        "profile_picture": "https://i.pravatar.cc/120?img=40",
        "profile_name": "Arafat Hossain",
        "verified": true,
        "subscribers": "292K"
      }
    ],
    "others": {
      "views": "176K",
      "posted_date": "9600600",
      "duration": "30:05",
      "likes": "11K",
      "comments": "437"
    },
    "description": "Fetch weather data from an API, handle loading states, and display useful forecast information.",
    "published_at": "2026-07-18T09:10:00Z",
    "tags": [
      "make",
      "tutorial",
      "beginner"
    ],
    "language": "English",
    "visibility": "public"
  }
]

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