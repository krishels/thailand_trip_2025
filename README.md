# Thailand Trip 2026 - Interactive Trip Planner

A beautiful, interactive website to plan and share our Thailand adventure!

## Live Website

**View the site:** https://krishels.github.io/thailand_trip_2025/

## Features

### 🎬 Main Landing Page
- **4K Video Player**: Watch our trip preview video in stunning 4K quality (hosted on Google Drive)
- **Trip Overview**: Beautiful summary with destination cards and highlights
- **Trip Statistics**: Key information at a glance
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Horizontal Day Selector**: Smooth scrolling day navigation

### 📅 Itinerary (18 Days)
- Complete day-by-day trip plan with detailed schedules
- **High-Quality Image Carousel**: 60+ professional photos from Unsplash
- **Larger Image Blocks**: 50% bigger images (450px) for immersive viewing
- **Auto-play slideshow**: Images advance every 3 seconds
- **Photographer Credits**: Attribution for all images
- Navigate between days with smooth transitions

### 🖼️ Image Library
- **45 verified attractions** with geocoded coordinates
- **60+ high-quality images** from Unsplash API
- Full-size images (q=85) optimized for any display
- Multiple images per major attraction
- Complete photographer attribution

### 🎥 Gemini Veo Video Prompts
- **18 cinematic 4K video prompts** (8 seconds each)
- Tailored to each day's activities and emotions
- **Audio specifications**: No speech - only nature sounds and Thai traditional music
- Ready to generate with Gemini Veo 2
- Professional cinema-quality descriptions

### 💰 Budget Tracker
- Complete cost breakdown by category
- Flight, accommodation, transport, and activity costs
- Visual budget overview
- Only 3 domestic flights for efficient travel

### 🎒 Packing List
- Interactive checklist with categories
- Check off items as you pack
- Organized by clothing, toiletries, electronics, and documents
- Day-specific packing recommendations

### 🎯 Activities
- **45 curated attractions** across Thailand
- Beautiful high-quality images for each location
- Organized by day and region
- Real activity photos from Unsplash

### 🗺️ Interactive Map
- Route visualization with Leaflet.js
- **45 attractions** marked with verified coordinates
- All 6 cities marked on the map
- Travel route displayed with connections
- Google Geocoding API verified locations

### 💡 Travel Tips
- Essential Thailand travel information
- Currency, language, weather, and culture tips
- Practical advice for first-time visitors
- Safety and etiquette guidelines

## Technical Details

### Built With
- **HTML5** + **CSS3** + **Vanilla JavaScript**
- **Leaflet.js** for interactive maps
- **Unsplash API** for high-quality attraction photos (60+ images)
- **Google Geocoding API** for verified location coordinates
- **Google Drive** for 4K video hosting

### APIs Used
- **Unsplash API**: Fetched 60+ high-quality images for 45 attractions
- **Google Geocoding API**: Verified exact coordinates for all 45 locations
- **Gemini Veo 2**: AI video generation prompts (4K quality)

### Video Hosting
This project uses **Google Drive** to host the 4K video with reliable embedding and playback across all devices.

## How to View Locally

### Option 1: Open Directly (Quick)
1. Clone the repository:
   ```bash
   git clone https://github.com/krishels/thailand_trip_2025.git
   ```
2. Double-click `index.html` to open in your browser

### Option 2: Local Server (Recommended)
Using Python:
```bash
python -m http.server 8000
# Then open: http://localhost:8000
```

Using Node.js:
```bash
npx serve
```

### Video Note
The 4K video is hosted on Google Drive and will load automatically when you open the site.

## Trip Overview

- **Dates**: February 5-22, 2026
- **Duration**: 18 days (16 nights)
- **Travelers**: 2 people
- **Regions**: North, Central, and South Thailand
- **Cities/Areas**: 6 main destinations
  - **Bangkok** (2 nights) - Temples & culture
  - **Chiang Rai** (3 nights) - White Temple, Golden Triangle
  - **Chiang Mai** (4 nights) - Old City, Doi Suthep, Elephants
  - **Klong Muang Beach** (3 nights) - Phi Phi Islands, Hong Islands
  - **Nopparat Thara/Railay** (3 nights) - 4 Islands Tour, Railay Beach
  - **Bangkok Airport** (1 night) - Last night before 05:50 AM departure
- **Attractions**: 45 verified locations
- **Flights**: Only 3 domestic flights (optimized route!)
  - Bangkok → Chiang Rai
  - Chiang Mai → Krabi
  - Krabi → Bangkok
- **Budget**: ~€3,000-4,500 per person (including flights)

## Project Structure

```
thailand_trip_2025/
├── index.html                       # Main HTML structure
├── app.js                           # Application logic and trip data
├── style.css                        # Styling and responsive design
├── README.md                        # This file
├── .gitignore                       # Git ignore rules
│
├── gemini_veo_prompts.txt          # 18 AI video prompts (4K, 8 sec each)
├── IMAGE_LIBRARY_README.md         # Image library documentation
├── OPTIMIZED_TRIP_EXPORT.md        # Full trip export
│
├── attractions_verified.csv         # 45 attractions with verified coordinates
├── attractions_with_images.csv      # Attractions with Unsplash images
├── attractions_images.json          # Full image library with metadata
└── attractions_to_geocode.csv       # Original geocoding input
```

## Data Files

### Image Library
- **attractions_images.json**: Complete image database with 60+ high-quality photos
- **attractions_with_images.csv**: Quick reference with primary images
- **attractions_verified.csv**: All 45 attractions with Google-verified coordinates

### Video Prompts
- **gemini_veo_prompts.txt**: Ready-to-use prompts for Gemini Veo 2
  - 18 days of 4K cinematic prompts
  - 8 seconds each
  - Audio: Nature sounds + Thai traditional music only

### Documentation
- **IMAGE_LIBRARY_README.md**: Complete guide to the image library
- **OPTIMIZED_TRIP_EXPORT.md**: Full trip details and optimization notes

## Development

All trip data is stored in the `tripData` object in `app.js`. To update itinerary, budget, or activities, simply modify the JavaScript object.

### Key Features Added
- ✅ Efficient route with only 3 flights
- ✅ 60+ high-quality Unsplash images
- ✅ 50% larger image displays (450px)
- ✅ Google-verified coordinates for all attractions
- ✅ 18 Gemini Veo 4K video prompts
- ✅ Mobile-friendly horizontal day selector
- ✅ Photographer attribution for all images

Enjoy the trip! 🌴✈️🏝️
