# Thailand Trip 2026 - Interactive Trip Planner

A beautiful, interactive website to plan and share our Thailand adventure!

## Live Website

**View the site:** https://krishels.github.io/thailand_trip_2025/

## Features

### 🎬 Main Landing Page
- **4K Video Player**: Watch our trip preview video in full 4K quality
- **Trip Overview**: Beautiful summary with destination cards and highlights
- **Trip Statistics**: Key information at a glance
- **Responsive Design**: Works perfectly on all devices

### 📅 Itinerary
- Day-by-day trip plan with detailed schedules
- **Image Carousel**: View activity photos for each day
- **Auto-play slideshow**: Images advance every 3 seconds
- Navigate between days easily

### 💰 Budget Tracker
- Complete cost breakdown by category
- Flight, accommodation, transport, and activity costs
- Visual budget overview

### 🎒 Packing List
- Interactive checklist with categories
- Check off items as you pack
- Organized by clothing, toiletries, electronics, and documents

### 🎯 Activities
- **Photo Gallery**: Beautiful images for each activity
- **Auto-navigation**: Scroll through 66 activities with photos
- Organized by day and location
- Real activity photos from Unsplash

### 🗺️ Interactive Map
- Route visualization with Leaflet.js
- All 8 cities marked on the map
- Travel route displayed with connections

### 💡 Travel Tips
- Essential Thailand travel information
- Currency, language, weather, and culture tips
- Practical advice for travelers

## Technical Details

### Built With
- **HTML5** + **CSS3** + **Vanilla JavaScript**
- **Leaflet.js** for interactive maps
- **Unsplash API** for high-quality activity photos
- **Git LFS** for 4K video hosting

### Video Hosting
This project uses **Git LFS (Large File Storage)** to host the 4K video directly on GitHub. The video is automatically served via GitHub's CDN for optimal performance.

## How to View Locally

### Option 1: Open Directly (Quick)
1. Clone the repository:
   ```bash
   git clone https://github.com/krishels/thailand_trip_2025.git
   ```
2. Double-click `index.html` to open in your browser

### Option 2: Local Server (Recommended for video playback)
Using Python:
```bash
python -m http.server 8000
# Then open: http://localhost:8000
```

Using Node.js:
```bash
npx serve
```

### Note about Git LFS
If you clone the repo and the video doesn't load, you may need to install Git LFS:
```bash
git lfs install
git lfs pull
```

## Trip Overview

- **Dates**: February 5-22, 2026
- **Duration**: 17 days
- **Travelers**: 4 people
- **Cities**: 8 destinations
  - Bangkok
  - Chiang Mai
  - Chiang Rai
  - Krabi (Railay Beach)
  - Khao Sok National Park
  - Phi Phi Islands
  - Koh Samui
- **Budget**: €8,000 total

## Project Structure

```
thailand_trip_2025/
├── index.html                    # Main HTML structure
├── app.js                        # Application logic and data
├── style.css                     # Styling and responsive design
├── thailand_trip_2026.mp4        # 4K trip video (via Git LFS)
└── README.md                     # This file
```

## Development

All trip data is stored in the `tripData` object in `app.js`. To update itinerary, budget, or activities, simply modify the JavaScript object.

Enjoy the trip! 🌴✈️
