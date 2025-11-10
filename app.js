// Circular Countdown Timer to Trip Start
function createCircularProgress(value, max, label, size = 100, color = '#667eea') {
  const radius = (size - 12) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = ((max - value) / max) * circumference;
  const center = size / 2;

  // Convert hex to rgba for background
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);

  return `
    <div class="circular-time-unit">
      <svg width="${size}" height="${size}" style="transform: rotate(-90deg);">
        <circle
          cx="${center}"
          cy="${center}"
          r="${radius}"
          stroke="rgba(${r}, ${g}, ${b}, 0.15)"
          stroke-width="6"
          fill="none"
        />
        <circle
          cx="${center}"
          cy="${center}"
          r="${radius}"
          stroke="${color}"
          stroke-width="6"
          fill="none"
          stroke-dasharray="${circumference}"
          stroke-dashoffset="${progress}"
          stroke-linecap="round"
          style="transition: stroke-dashoffset 1s linear;"
        />
      </svg>
      <div class="circular-value" style="width: ${size}px; height: ${size}px;">
        <span class="circular-number" style="color: ${color};">${value}</span>
      </div>
      <div class="circular-label">${label}</div>
    </div>
  `;
}

function updateCountdown() {
  const tripStart = new Date('February 5, 2026 00:00:00').getTime();
  const now = new Date().getTime();
  const distance = tripStart - now;

  if (distance < 0) {
    document.getElementById('countdown').innerHTML = '<div style="text-align: center; font-size: var(--font-size-xl); font-weight: bold;">🎉 Trip in Progress! 🎉</div>';
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const isMobile = window.innerWidth < 768;
  const size = isMobile ? 70 : 100;

  document.getElementById('countdown').innerHTML = `
    ${createCircularProgress(days, 90, 'Days', size, '#667eea')}
    ${createCircularProgress(hours, 24, 'Hours', size, '#764ba2')}
    ${createCircularProgress(minutes, 60, 'Minutes', size, '#4facfe')}
    ${createCircularProgress(seconds, 60, 'Seconds', size, '#43e97b')}
  `;
}

// Update countdown every second
updateCountdown();
setInterval(updateCountdown, 1000);

// Thailand Trip Data - Feb 5-22, 2026
// Only 3 domestic flights
const tripData = {
  cities: [
    { name: 'Bangkok', emoji: '🏛️', color: '#667eea', nights: 2, region: 'Central' },
    { name: 'Chiang Rai', emoji: '⛰️', color: '#f093fb', nights: 3, region: 'North' },
    { name: 'Chiang Mai', emoji: '🌳', color: '#764ba2', nights: 4, region: 'North' },
    { name: 'Ao Nam Mao Beach', emoji: '🏖️', color: '#4facfe', nights: 3, region: 'South' },
    { name: 'Ao Nang Beach', emoji: '🏝️', color: '#43e97b', nights: 3, region: 'South' },
    { name: 'Bangkok Airport', emoji: '✈️', color: '#667eea', nights: 1, region: 'Central' }
  ],

  accommodations: {
    bangkok1: {
      name: 'Baiyoke Sky Hotel',
      location: 'Bangkok (Pratunam)',
      address: '222 Rajprarop Road, Rajthevi, Ratchathewi, 10400 Bangkok, Thailand',
      nights: 2,
      checkIn: '2026-02-06',
      checkOut: '2026-02-08',
      totalCost: 283,
      costPerNight: 141.50,
      status: 'Reserved (Free Cancellation)',
      bookingUrl: 'https://www.booking.com/hotel/th/baiyoke-sky.lv.html',
      features: ['88-story tower', 'Rooftop revolving restaurant', 'City views', 'Multiple dining options'],
      images: [
        { url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/216005808.jpg?k=3365faed5ee94e38470f90a7d63c29eb69aaa4285d8c58b9bb6e8527055bf766&o=', title: 'Baiyoke Sky Hotel Exterior', credit: 'Booking.com' },
        { url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/216004769.jpg?k=067dd48118c5e11619cbdea272310e3abd3c2a5c91975a6dfd3ce48c234774a4&o=', title: 'Baiyoke Sky Hotel Room', credit: 'Booking.com' }
      ]
    },
    chiangRai: {
      name: 'Katiliya Mountain Resort and Spa',
      location: 'Chiang Rai (Mae Salong)',
      address: '388/1 Moo. 4, Ban Mea Slong Nai, Tambol Pha Sang, Mae Chan, Chiang Rai, Thailand',
      nights: 3,
      checkIn: '2026-02-08',
      checkOut: '2026-02-11',
      totalCost: 530,
      costPerNight: 176.67,
      status: 'Reserved (Paid)',
      bookingUrl: 'https://www.booking.com/hotel/th/katiliya-mountain-resort-and-spa.lv.html',
      features: ['Mountain views', 'Spa', 'Resort setting', 'Pool', 'Tea plantations'],
      images: [
        { url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/589474553.jpg?k=9ba89e3e792066a4c2d6f8cc8152fe09c3ef19feea8947e24a851b1101da9efd&o=', title: 'Katiliya Mountain Resort', credit: 'Booking.com' },
        { url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/472354469.jpg?k=98029f1a5f8271ee8233899f343ee79d697fea6095f4d7b43453a9fecaf621be&o=', title: 'Katiliya Resort Pool', credit: 'Booking.com' },
        { url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/589474539.jpg?k=f43d71d632d71271f15dedb3b42fa75685edd48a1435b12147c73cf0ea5f4377&o=', title: 'Katiliya Resort View', credit: 'Booking.com' }
      ]
    },
    chiangMai: {
      name: 'Prince Khum Phaya Resort & Spa',
      location: 'Chiang Mai',
      address: '137 Moo.5, T. Nong Pa Klang, A.Muang, Nong Pa Khrang, 50000 Chiang Mai, Thailand',
      nights: 4,
      checkIn: '2026-02-11',
      checkOut: '2026-02-15',
      totalCost: 792,
      costPerNight: 198,
      status: 'Reserved (Free Cancellation)',
      bookingUrl: 'https://www.booking.com/hotel/th/prince-khum-phaya-resort-spa.lv.html',
      features: ['Spa', 'Pool', 'Thai-style resort', 'Peaceful setting'],
      images: [
        { url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/271276279.jpg?k=3becd0076b906219c6d09d0da7b8eadac6871c668ad1f210ac12caa0eecb33f8&o=', title: 'Prince Khum Phaya Resort', credit: 'Booking.com' },
        { url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/271276373.jpg?k=ef40a696e0163998c9c9fc616e30b836c2c9a4afd65f6121cdb5efd264235fe8&o=', title: 'Prince Khum Phaya Pool', credit: 'Booking.com' },
        { url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/271276375.jpg?k=f573f06f1bd5d10a72c6880619593eb05938634c6bef29740a65ad1a405d1751&o=', title: 'Prince Khum Phaya Gardens', credit: 'Booking.com' }
      ]
    },
    klongMuang: {
      name: 'Venice Krabi Villa Resort',
      location: 'Ao Nam Mao Beach',
      address: '478 Moo 5, Sai Thai Muang, 81000 Ao Nam Mao, Thailand',
      nights: 3,
      checkIn: '2026-02-15',
      checkOut: '2026-02-18',
      totalCost: 1225,
      costPerNight: 408.33,
      status: 'Reserved (Free Cancellation)',
      bookingUrl: 'https://www.booking.com/hotel/th/venice-krabi-villa-resort.en-us.html',
      features: ['Beach location', 'Pool', 'Villa resort', 'Ao Nam Mao Beach area'],
      images: [
        { url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/679700235.jpg?k=d1845e8fd7bf6bea98e3888e4bcf9704f165c9e215470923cf136dc57b1fc163&o=', title: 'Venice Krabi Villa Resort', credit: 'Booking.com' },
        { url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/278092812.jpg?k=eacb37028dbe79e3f5e5c22bf625b05bdfa6c0993ce0f7b446a7a9328856723f&o=', title: 'Venice Krabi Pool', credit: 'Booking.com' },
        { url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/679742092.jpg?k=8e27b255f537fa15933c3c04104c8b4c21374c73300705108c3bfbb4f9e434f3&o=', title: 'Venice Krabi Room', credit: 'Booking.com' }
      ]
    },
    nopparatThara: {
      name: 'Aonang Fiore Resort',
      location: 'Ao Nang Beach',
      address: '764 Moo 2, T. Aonang A. Muang Krabi, 81180 Ao Nang Beach, Thailand',
      nights: 3,
      checkIn: '2026-02-18',
      checkOut: '2026-02-21',
      totalCost: 1225,
      costPerNight: 408.33,
      status: 'Reserved (Free Cancellation)',
      bookingUrl: 'https://www.booking.com/hotel/th/aonang-fiore-resort.en-us.html',
      features: ['Beach access', 'Pool', 'Ao Nang location', 'Close to Railay'],
      images: [
        { url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/221574504.jpg?k=a195e497c586c1cad26cf1b181a962da9bb2a9e5a406d03711d87289141d58b7&o=', title: 'Aonang Fiore Resort Pool', credit: 'Booking.com' },
        { url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/342649872.jpg?k=98419c37524d9a16947324d2ffd590795bf1698cf1931912ba9a183de40cbb24&o=', title: 'Aonang Fiore Resort Room', credit: 'Booking.com' },
        { url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/157363676.jpg?k=03a53f9e7ae84422c0f408ee64f0048c051827cb5166a78f667c61d35295550d&o=', title: 'Aonang Fiore Resort Exterior', credit: 'Booking.com' }
      ]
    },
    bangkok2: {
      name: 'Arte Hotel - SHA Extra Plus',
      location: 'Bangkok Sukhumvit',
      address: '29 Sukhumvit Soi 19, Sukhumvit Road, Wattana, 10110 Bangkok, Thailand',
      nights: 1,
      checkIn: '2026-02-21',
      checkOut: '2026-02-22',
      totalCost: 152,
      costPerNight: 152,
      status: 'Reserved',
      bookingUrl: 'https://www.booking.com/hotel/th/arte-bangkok.en-us.html',
      features: ['SHA Extra Plus certified', 'Sukhumvit location', 'Modern design', 'Close to BTS'],
      images: [
        { url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/80520735.jpg?k=3b451b23e1cf3463d4fc042f473af721dbe1c1e4dae1b3ec82584a26881661c5&o=', title: 'Arte Hotel Bangkok', credit: 'Booking.com' },
        { url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/80520857.jpg?k=81c8473623d0af87a21b2cf4d6ec27d3d4576948cffbf7d4830ec438f1fe7425&o=', title: 'Arte Hotel Room', credit: 'Booking.com' },
        { url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/86895286.jpg?k=12238b491e18ea041e7fdb002ca5da539d6cf95bb87e1b71e30db66c7c9055fd&o=', title: 'Arte Hotel Lobby', credit: 'Booking.com' }
      ]
    }
  },

  itinerary: [
    {
      day: 1, date: '2026-02-05', city: 'In Flight',
      morning: 'Depart Riga 11:40',
      afternoon: 'In flight - crossing time zones',
      evening: 'Continue journey to Thailand',
      activities: ['International flight', 'In-flight entertainment'],
      transport: 'International flight RIX→BKK',
      budget_eur: '0', accommodation_eur: '0',
      tips: 'Sleep on plane, set watch to Bangkok time',
      packing: ['Travel documents', 'Entertainment', 'Neck pillow'],
      images: [
        { url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'International Flight', credit: 'Anugrah Lohiya' }
      ]
    },
    {
      day: 2, date: '2026-02-06', city: 'Bangkok',
      accommodation_id: 'bangkok1',
      morning: 'Arrive Bangkok 08:40, immigration, currency exchange, Airport Rail Link to city',
      afternoon: 'Check into Baiyoke Sky Hotel, rest, light exploration of area',
      evening: 'Dinner at Thip Samai (famous Pad Thai) or river walk, early sleep for jet lag',
      activities: ['Airport arrival', 'Hotel check-in', 'Light exploration', 'Local dinner'],
      transport: 'Airport Rail Link + taxi',
      budget_eur: '50', accommodation_eur: '142',
      tips: 'Download Grab app, buy SIM card at airport (TrueMove), exchange some money',
      packing: ['Comfortable clothes', 'Sunscreen', 'Hat', 'Reusable water bottle'],
      images: [
        { url: 'https://images.unsplash.com/photo-1568321385520-b9252021b491?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Bangkok Skyline', credit: 'Daniel Cox' },
        { url: 'https://images.unsplash.com/photo-1613672803979-a6edfc5a179b?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Bangkok Temple Area', credit: 'Anantachai Saothong' }
      ]
    },
    {
      day: 3, date: '2026-02-07', city: 'Bangkok',
      accommodation_id: 'bangkok1',
      morning: 'Grand Palace & Wat Phra Kaew (8:30-11:30) - arrive early to beat crowds',
      afternoon: 'Wat Pho (Reclining Buddha), ferry to Wat Arun, climb for views',
      evening: 'Chao Phraya Princess Dinner Cruise (19:00-21:00) or street food tour',
      activities: ['Grand Palace', 'Wat Phra Kaew', 'Wat Pho', 'Wat Arun', 'River cruise'],
      transport: 'Walking, ferry, BTS',
      budget_eur: '35-45', accommodation_eur: '60-90',
      tips: 'Book Grand Palace online night before, strict dress code, bring water',
      packing: ['Modest clothing (covered shoulders/knees)', 'Walking shoes', 'Water bottle'],
      images: [
        { url: 'https://images.unsplash.com/photo-1678915554115-a5e2de853191?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Grand Palace', credit: 'Jochen van Wylick' },
        { url: 'https://images.unsplash.com/photo-1650021858406-3222764ea1f9?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Wat Pho - Reclining Buddha', credit: 'Mario La Pergola' },
        { url: 'https://images.unsplash.com/photo-1631609030728-9b0b525b60cf?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Wat Arun Temple', credit: 'Pradamas Gifarry' }
      ]
    },
    {
      day: 4, date: '2026-02-08', city: 'Bangkok → Chiang Rai',
      accommodation_id: 'chiangRai',
      morning: 'Early floating market tour (Damnoen Saduak), return to city',
      afternoon: 'FLIGHT 1: BKK→CEI 12:00-13:20 (Thai AirAsia/Vietjet, €36/person)',
      evening: 'Arrive Chiang Rai, check in, Clock Tower light show, Night Bazaar',
      activities: ['Floating market', 'Flight to north', 'Clock Tower', 'Night Bazaar'],
      transport: 'Tour bus + domestic flight',
      budget_eur: '60-80', accommodation_eur: '60-110',
      tips: 'Book flight 2-3 months ahead, Chiang Rai is cooler - bring light jacket',
      packing: ['Camera', 'Light jacket', 'Comfortable travel clothes'],
      images: [
        { url: 'https://images.unsplash.com/photo-1736492090594-88f85f405da0?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Damnoen Saduak Floating Market', credit: 'Dimitar Meddling' },
        { url: 'https://images.unsplash.com/photo-1718121842632-0bb5624f5097?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Chiang Rai Clock Tower', credit: 'aki võ' }
      ]
    },
    {
      day: 5, date: '2026-02-09', city: 'Chiang Rai',
      accommodation_id: 'chiangRai',
      morning: 'White Temple (Wat Rong Khun) 8:30AM - arrive early, FREE entry',
      afternoon: 'Black House Museum (80 THB), Blue Temple (FREE)',
      evening: 'Singha Park tea plantations or relax, Walking Street if Saturday',
      activities: ['White Temple', 'Black House', 'Blue Temple', 'Tea plantations'],
      transport: 'Scooter rental or taxi (1000 THB/day)',
      budget_eur: '25-35', accommodation_eur: '60-110',
      tips: 'White Temple best in morning light, Blue Temple allows photos inside',
      packing: ['Camera', 'Sunscreen', 'Water', 'Comfortable shoes'],
      images: [
        { url: 'https://images.unsplash.com/photo-1660964365980-95981659b572?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'White Temple (Wat Rong Khun)', credit: 'Miguel Urieta' },
        { url: 'https://images.unsplash.com/photo-1671188869143-317320213731?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Blue Temple (Wat Rong Suea Ten)', credit: 'Aleksandra B.' },
        { url: 'https://images.unsplash.com/photo-1678111196217-a205bc0622d8?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Black House Museum (Baan Dam)', credit: 'Ricky LK' }
      ]
    },
    {
      day: 6, date: '2026-02-10', city: 'Chiang Rai',
      accommodation_id: 'chiangRai',
      morning: 'Golden Triangle tour: Thailand-Laos-Myanmar border, Hall of Opium',
      afternoon: 'Mekong boat ride, Mae Sai border market, hill tribe village',
      evening: 'Return to city, prepare for Chiang Mai journey tomorrow',
      activities: ['Golden Triangle', 'Mekong River', 'Border market', 'Hill tribes'],
      transport: 'Tour van/boat',
      budget_eur: '35', accommodation_eur: '60-110',
      tips: 'Full-day tour ~€30-40/person including transport and guide',
      packing: ['Hat', 'Sunglasses', 'Cash for souvenirs'],
      images: [
        { url: 'https://images.unsplash.com/photo-1641381986664-b57538b94363?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Golden Triangle', credit: 'Kittitep Khotchalee' },
        { url: 'https://images.unsplash.com/photo-1707789436555-045803990c96?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Hall of Opium', credit: 'CJ' }
      ]
    },
    {
      day: 7, date: '2026-02-11', city: 'Chiang Rai → Chiang Mai',
      accommodation_id: 'chiangMai',
      morning: 'Green Bus VIP from Chiang Rai (10:00 departure)',
      afternoon: 'Arrive Chiang Mai 13:20, check into Old City hotel, rest',
      evening: 'Explore Old City, Wat Chedi Luang at night, local dinner',
      activities: ['Bus journey', 'Old City exploration', 'Temple visit'],
      transport: 'Green Bus VIP (400 THB/€11 per person)',
      budget_eur: '30-40', accommodation_eur: '60-110',
      tips: 'Book Green Bus VIP online at SiamTickets.com, AC very cold - bring jacket!',
      packing: ['Jacket for AC bus', 'Snacks for journey', 'Entertainment'],
      images: [
        { url: 'https://images.unsplash.com/photo-1679685809556-5b1b52eb4140?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Chiang Mai Old City', credit: 'Tai Bui' }
      ]
    },
    {
      day: 8, date: '2026-02-12', city: 'Chiang Mai',
      accommodation_id: 'chiangMai',
      morning: 'Old City temple hopping: Wat Phra Singh, Wat Chedi Luang, Wat Chiang Man',
      afternoon: 'Doi Suthep Temple - climb 306 steps, golden chedi, city views',
      evening: 'Nimman area dinner, craft beer or rooftop bar, Sunday Walking Street if Sunday',
      activities: ['Old City temples', 'Doi Suthep', 'Walking Street', 'Nimman nightlife'],
      transport: 'Songthaew to Doi Suthep (100 THB), walking/bicycle in city',
      budget_eur: '30', accommodation_eur: '60-110',
      tips: 'Doi Suthep early to avoid crowds, rent bicycle for Old City (50 THB/day)',
      packing: ['Modest clothing', 'Good walking shoes', 'Water bottle'],
      images: [
        { url: 'https://images.unsplash.com/photo-1719886369830-ce1e0e4a483d?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Doi Suthep Temple Aerial View', credit: 'Mike Holp' },
        { url: 'https://images.unsplash.com/photo-1679685809556-5b1b52eb4140?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Wat Chedi Luang', credit: 'Tai Bui' },
        { url: 'https://images.unsplash.com/photo-1578167635886-55908a3651e0?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Wat Phra Singh', credit: 'Worachat Sodsri' }
      ]
    },
    {
      day: 9, date: '2026-02-13', city: 'Chiang Mai',
      accommodation_id: 'chiangMai',
      morning: 'Full day at Elephant Nature Park - ethical sanctuary, NO riding',
      afternoon: 'Feed elephants, walk with them, watch river bathing, learn rescue stories',
      evening: 'Return to hotel, rest, casual dinner at Night Bazaar',
      activities: ['Elephant sanctuary', 'Elephant feeding', 'River bathing', 'Conservation education'],
      transport: 'Tour pickup/drop-off included',
      budget_eur: '75', accommodation_eur: '60-110',
      tips: 'Book sanctuary 2-3 weeks ahead! Bring change of clothes (will get muddy)',
      packing: ['Change of clothes', 'Mosquito repellent', 'Closed-toe shoes', 'Waterproof phone case'],
      images: [
        { url: 'https://images.unsplash.com/photo-1722102772916-1c3a19412736?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Elephant and Baby', credit: 'Catherine Zaidova' },
        { url: 'https://images.unsplash.com/photo-1755448648450-c3111c1987d8?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Elephants Drinking Water', credit: 'krzhck' }
      ]
    },
    {
      day: 10, date: '2026-02-14', city: 'Chiang Mai',
      accommodation_id: 'chiangMai',
      morning: 'Thai Cooking Class with market tour (8 AM-1 PM)',
      afternoon: 'Free time - spa/massage, Nimman cafes, or Sticky Waterfalls',
      evening: 'Shopping at Warorot Market, prepare for Krabi flight tomorrow',
      activities: ['Cooking class', 'Market tour', 'Massage', 'Shopping'],
      transport: 'Walking/Grab taxi',
      budget_eur: '50', accommodation_eur: '60-110',
      tips: 'Cooking class ~€25-40/person, includes lunch you cook yourself',
      packing: ['Light clothes', 'Shopping bag'],
      images: [
        { url: 'https://images.unsplash.com/photo-1710186012479-d79e9d2a7065?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Thai Cooking Class', credit: 'Natthawan Sittiphan' },
        { url: 'https://images.unsplash.com/photo-1696437492959-b9a8c37df4ad?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Warorot Market', credit: 'Pikacent' }
      ]
    },
    {
      day: 11, date: '2026-02-15', city: 'Chiang Mai → Ao Nam Mao Beach',
      accommodation_id: 'klongMuang',
      morning: 'Free time, pack for beach, checkout from hotel',
      afternoon: 'FLIGHT 2: CNX→KBV DIRECT 17:05 (Thai AirAsia, €115/person) - NO connection!',
      evening: 'Arrive Krabi ~19:00, transfer to Ao Nam Mao Beach (45 min), check-in, dinner',
      activities: ['Flight to beaches', 'Beach arrival', 'Sunset viewing'],
      transport: 'Direct flight + airport transfer (800-1000 THB)',
      budget_eur: '100', accommodation_eur: '60-100',
      tips: 'Book DIRECT flight only! Pre-arrange airport transfer with hotel',
      packing: ['Beach clothes', 'Swimwear', 'Sunscreen'],
      images: [
        { url: 'https://images.unsplash.com/photo-1552320892-2059c02de233?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Ao Nam Mao Beach', credit: 'Mike Swigunski' },
        { url: 'https://images.unsplash.com/photo-1500018208634-e633087e3bb1?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Krabi Beach Sunset', credit: 'Taweeroj Eawpanich' }
      ]
    },
    {
      day: 12, date: '2026-02-16', city: 'Ao Nam Mao - Phi Phi Islands',
      accommodation_id: 'klongMuang',
      morning: 'Early bird Phi Phi tour pickup 6:00-7:00 AM (beat crowds!)',
      afternoon: 'Maya Bay, Pileh Lagoon, Viking Cave, Monkey Bay, lunch at Phi Phi Don',
      evening: 'Bamboo Island, return to Ao Nam Mao 3-4 PM, rest, casual dinner',
      activities: ['Maya Bay', 'Pileh Lagoon', 'Viking Cave', 'Bamboo Island', 'Snorkeling'],
      transport: 'Speedboat tour with hotel pickup',
      budget_eur: '55', accommodation_eur: '60-100',
      tips: 'Maya Bay open in Feb! No swimming allowed (knee-deep only)',
      packing: ['Underwater camera', 'Dry bag', 'Reef-safe sunscreen', 'Towel'],
      images: [
        { url: 'https://images.unsplash.com/photo-1534008897995-27a23e859048?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Maya Bay - Phi Phi Islands', credit: 'Humphrey M' },
        { url: 'https://images.unsplash.com/photo-1671837827066-71d72d95cd3b?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Pileh Lagoon', credit: 'David Gardiner' },
        { url: 'https://images.unsplash.com/photo-1755891948002-4afec2115be2?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Longtail Boats at Phi Phi', credit: 'Tohozi' }
      ]
    },
    {
      day: 13, date: '2026-02-17', city: 'Ao Nam Mao - Hong Islands',
      accommodation_id: 'klongMuang',
      morning: 'Hong Islands speedboat tour 8:00 AM - famous emerald lagoon',
      afternoon: 'Ao Thalane mangrove kayaking tour (1:30 PM pickup)',
      evening: 'Return to hotel, beachfront dinner, fire show',
      activities: ['Hong Islands lagoon', 'Island snorkeling', 'Mangrove kayaking', 'Wildlife spotting'],
      transport: 'Tour boats with hotel pickup',
      budget_eur: '65', accommodation_eur: '60-100',
      tips: 'Two boat tours in one day - bring energy! Hong lagoon only accessible at low tide',
      packing: ['Snorkel gear', 'Waterproof bag', 'Insect repellent for mangroves'],
      images: [
        { url: 'https://images.unsplash.com/photo-1759853685531-bdf3d6d7d194?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Hong Islands with Karst Mountains', credit: 'Ama Journey' },
        { url: 'https://images.unsplash.com/photo-1761670835856-559ede6a86cc?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Longtail at Hong Lagoon', credit: 'Nicholas Ng' },
        { url: 'https://images.unsplash.com/photo-1618708018367-635b0809d05d?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Mangrove Kayaking', credit: 'Simon Hurry' }
      ]
    },
    {
      day: 14, date: '2026-02-18', city: 'Ao Nam Mao → Ao Nang Beach',
      accommodation_id: 'nopparatThara',
      morning: 'Check out Ao Nam Mao, transfer to Ao Nang Beach (20 min)',
      afternoon: '4 Islands sunset tour: Phra Nang Cave, Chicken Island, Tup Island, Poda Island',
      evening: 'Walk sandbar at low tide, sunset at Railay, Ao Nang Night Market dinner',
      activities: ['Hotel transfer', '4 Islands tour', 'Sandbar walk', 'Cave shrine', 'Night market'],
      transport: 'Taxi (300-500 THB) + longtail boat tour',
      budget_eur: '35', accommodation_eur: '70-110',
      tips: 'Sandbar between Tup-Mor islands only visible at low tide - magical!',
      packing: ['Beach essentials', 'Cash for night market'],
      images: [
        { url: 'https://images.unsplash.com/photo-1693629756372-a82588038d03?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: '4 Islands Tour - Krabi', credit: 'Romi Kalathiya' },
        { url: 'https://images.unsplash.com/photo-1631344197649-894f6101185e?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Tup Island Sandbar', credit: 'Mariola Grobelska' }
      ]
    },
    {
      day: 15, date: '2026-02-19', city: 'Ao Nang Beach - Railay Beach',
      accommodation_id: 'nopparatThara',
      morning: 'Longtail boat to Railay West (100 THB), explore peninsula',
      afternoon: 'Phra Nang Cave Beach, Railay Viewpoint hike (45 min), rock climbing',
      evening: 'Sunset from beach, longtail back to Ao Nang Beach, local dinner',
      activities: ['Railay exploration', 'Viewpoint hike', 'Cave beach', 'Rock climbing option'],
      transport: 'Longtail boats (200 THB return)',
      budget_eur: '25', accommodation_eur: '70-110',
      tips: 'Railay no roads - boat access only! Viewpoint steep but worth it',
      packing: ['Good shoes for hiking', 'Water', 'Camera'],
      images: [
        { url: 'https://images.unsplash.com/photo-1664543219977-ad362c2ec439?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Railay Beach with Longtail', credit: 'Steven Watson' },
        { url: 'https://images.unsplash.com/photo-1672932810946-a42ba7527121?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Phra Nang Cave Beach', credit: 'Yoav Aziz' },
        { url: 'https://images.unsplash.com/photo-1722483537740-2acc865a97ba?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Railay After Storm', credit: 'Mike Anderson' }
      ]
    },
    {
      day: 16, date: '2026-02-20', city: 'Ao Nang Beach - Bor Thor Caves',
      accommodation_id: 'nopparatThara',
      morning: 'Bor Thor sea cave kayaking tour - paddle through tunnel caves',
      afternoon: '3000-year-old cave paintings, Tha Pom emerald pools swimming',
      evening: 'Return to hotel, final Krabi seafood dinner, pack for departure',
      activities: ['Cave kayaking', 'Ancient cave art', 'Emerald pool swimming', 'Seafood feast'],
      transport: 'Tour with hotel pickup',
      budget_eur: '50', accommodation_eur: '70-110',
      tips: 'Different from mangrove kayaking - more caves, archaeological sites',
      packing: ['Waterproof torch', 'Reef shoes', 'Swimwear'],
      images: [
        { url: 'https://images.unsplash.com/photo-1618708018367-635b0809d05d?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Bor Thor Sea Caves', credit: 'Simon Hurry' },
        { url: 'https://images.unsplash.com/photo-1500018208634-e633087e3bb1?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Tha Pom Emerald Pools', credit: 'Taweeroj Eawpanich' }
      ]
    },
    {
      day: 17, date: '2026-02-21', city: 'Ao Nang Beach → Bangkok',
      accommodation_id: 'bangkok2',
      morning: 'Check out, airport transfer, FLIGHT 3: KBV→BKK 08:50 (€45/person)',
      afternoon: 'Arrive Bangkok ~10:20, transfer to airport hotel, last-minute shopping',
      evening: 'Dinner near hotel, final packing for early 05:50 departure tomorrow',
      activities: ['Flight to Bangkok', 'Airport hotel check-in', 'Last shopping'],
      transport: 'Airport taxi + domestic flight',
      budget_eur: '50', accommodation_eur: '40',
      tips: 'Book hotel VERY close to airport for 05:50 flight - suggest Novotel Suvarnabhumi',
      packing: ['Pack all luggage', 'Keep travel docs accessible', 'Set multiple alarms'],
      images: [
        { url: 'https://images.unsplash.com/photo-1631344197649-894f6101185e?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Koh Poda Backside', credit: 'Mariola Grobelska' },
        { url: 'https://images.unsplash.com/photo-1568321385520-b9252021b491?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Bangkok Airport Area', credit: 'Daniel Cox' }
      ]
    },
    {
      day: 18, date: '2026-02-22', city: 'Bangkok → Home',
      morning: 'EARLY DEPARTURE 05:50 - International flight BKK→RIX',
      afternoon: 'In flight, crossing time zones',
      evening: 'Arrive home with amazing memories!',
      activities: ['Airport departure', 'International flight', 'Arrival home'],
      transport: 'International flight BKK→RIX',
      budget_eur: '20', accommodation_eur: '0',
      tips: 'Wake up at 02:30, airport shuttle at 03:00, arrive 3h before flight!',
      packing: ['Travel documents', 'House keys', 'Downloaded entertainment'],
      images: [
        { url: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85', title: 'Journey Home', credit: 'Anugrah Lohiya' }
      ]
    }
  ],

  // Unified activities list - single source of truth for Budget, Activities, and Map views
  activities: [
    // Bangkok activities
    { name: 'Grand Palace & Temple Tickets', city: 'Bangkok', day: 3, perPerson: 25, total: 100, duration: '3-4 hours', difficulty: 'Easy', description: 'Stunning royal palace complex with intricate Thai architecture. Dress code strictly enforced.', lat: 13.7499, lng: 100.4916 },
    { name: 'Wat Pho entrance', city: 'Bangkok', day: 3, perPerson: 4, total: 16, duration: '2 hours', difficulty: 'Easy', description: 'Famous temple with the Reclining Buddha', lat: 13.7464, lng: 100.4928 },
    { name: 'Wat Arun entrance', city: 'Bangkok', day: 3, perPerson: 1.5, total: 6, duration: '1 hour', difficulty: 'Easy', description: 'Temple of Dawn across the river', lat: 13.7439, lng: 100.4884 },
    { name: 'Floating Market tour (Damnoen Saduak)', city: 'Bangkok', day: 4, perPerson: 20, total: 80, duration: '2-3 hours', difficulty: 'Easy', description: 'Traditional market on boats. Visit early morning (7-10 AM) for best experience.', lat: 13.5202, lng: 99.9586 },

    // Chiang Rai activities
    { name: 'White Temple, Blue Temple, Golden Triangle', city: 'Chiang Rai', day: 5, perPerson: 40, total: 160, duration: 'Full day', difficulty: 'Easy', description: 'Stunning all-white contemporary temple, vibrant blue temple, and Thailand-Laos-Myanmar border with Mekong boat ride.', lat: 19.8233, lng: 99.7627 },

    // Chiang Mai activities
    { name: 'Doi Suthep transport + entry', city: 'Chiang Mai', day: 8, perPerson: 30, total: 120, duration: '3 hours', difficulty: 'Medium', description: 'Mountain temple with 306 steps. Stunning city views from the top.', lat: 18.8050, lng: 98.9216 },
    { name: 'Elephant Nature Park (Chiang Mai)', city: 'Chiang Mai', day: 9, perPerson: 75, total: 300, duration: 'Full day', difficulty: 'Easy', description: 'Ethical elephant experience - feeding, bathing, walking. NO RIDING!', lat: 19.2144, lng: 98.8590 },
    { name: 'Thai Cooking Class', city: 'Chiang Mai', day: 10, perPerson: 35, total: 140, duration: '5 hours', difficulty: 'Easy', description: 'Market tour and hands-on cooking. Eat what you make!', lat: 18.7883, lng: 98.9853 },

    // Krabi/Ao Nam Mao activities
    { name: 'Phi Phi Islands Tour', city: 'Krabi', day: 12, perPerson: 55, total: 220, duration: 'Full day', difficulty: 'Easy', description: 'Maya Bay, Pileh Lagoon, Viking Cave, Bamboo Island. Speedboat with lunch.', lat: 7.6767, lng: 98.7664 },
    { name: 'Hong Islands Tour', city: 'Krabi', day: 13, perPerson: 65, total: 260, duration: 'Half day', difficulty: 'Easy', description: 'Emerald lagoon (tide dependent), white beaches, snorkeling.', lat: 8.1070, lng: 98.7660 },
    { name: 'Ao Thalane Mangrove Kayaking', city: 'Krabi', day: 13, perPerson: 30, total: 120, duration: '4 hours', difficulty: 'Easy', description: 'Kayak through stunning mangrove forests and lagoons', lat: 8.2775, lng: 98.7993 },

    // Ao Nang Beach/Railay activities
    { name: '4 Islands Sunset Tour', city: 'Krabi', day: 14, perPerson: 35, total: 140, duration: 'Half day', difficulty: 'Easy', description: 'Phra Nang Cave, Chicken Island, Tup sandbar, Poda Island.', lat: 8.0121, lng: 98.8177 },
    { name: 'Railay Beach & Viewpoint', city: 'Krabi', day: 15, perPerson: 25, total: 100, duration: 'Full day', difficulty: 'Medium', description: 'Boat access only! Viewpoint hike, Phra Nang Cave, rock climbing.', lat: 8.0130, lng: 98.8373 },
    { name: 'Bor Thor Cave Kayaking', city: 'Krabi', day: 16, perPerson: 50, total: 200, duration: 'Full day', difficulty: 'Medium', description: 'Bor Thor sea caves, 3000-year-old paintings, Tha Pom emerald pools.', lat: 8.1472, lng: 98.7929 },
    { name: 'Private longtail to hidden beaches', city: 'Bangkok', day: 17, perPerson: 20, total: 80, duration: '4 hours', difficulty: 'Easy', description: 'Explore hidden beaches accessible only by longtail boat', lat: 13.7563, lng: 100.5018 },

    // Miscellaneous
    { name: 'Extra temples & activities', city: 'Various', day: 0, perPerson: 50, total: 200, duration: 'Varies', difficulty: 'Easy', description: 'Additional temple visits and spontaneous activities throughout the trip', lat: null, lng: null },
    { name: 'Evening shows & experiences', city: 'Various', day: 0, perPerson: 37.5, total: 150, duration: 'Varies', difficulty: 'Easy', description: 'Cultural shows, night markets, and evening entertainment', lat: null, lng: null }
  ],

  budgetBreakdown: {
    'Domestic Flights (Only 3!)': '€196',
    'Accommodation (16 nights)': '€900-1,400',
    'Food & Dining (18 days)': '€300-380',
    'Activities & Tours': '€250-350',
    'Local Transport (Bus/Boats/Taxis)': '€120-160',
    'Miscellaneous': '€100-150'
  },

  packingList: {
    '📄 Documents': [
      'Passport (min 6 months validity)',
      'Flight tickets/e-tickets',
      'Hotel confirmations',
      'Travel insurance policy',
      'Copies of important documents'
    ],
    '👕 Clothing': [
      'Light t-shirts (5-6)',
      'Shorts (3-4)',
      'Light pants (2)',
      'Sundress or casual dresses',
      'Swimsuits (2-3)',
      'Light jacket/fleece',
      'Comfortable walking shoes',
      'Hiking boots (for Chiang Rai)',
      'Beach/water shoes',
      'Underwear (7-8)',
      'Socks (5 pairs)'
    ],
    '🧴 Toiletries & Health': [
      'Sunscreen SPF 50+ (ESSENTIAL!)',
      'Insect repellent (ESSENTIAL!)',
      'Toothbrush & toothpaste',
      'Deodorant',
      'Shampoo & conditioner',
      'Body soap',
      'Facial cleanser',
      'Moisturizer',
      'Feminine hygiene products',
      'Personal medications',
      'Allergy medication',
      'Anti-diarrhea medicine',
      'Pain relievers'
    ],
    '📱 Electronics': [
      'Phone + charging cable',
      'Laptop/tablet + charger (optional)',
      'Power bank (ESSENTIAL)',
      'Universal power adapter',
      'Camera (recommended)',
      'Headphones'
    ],
    '🏖️ Beach Gear': [
      'Snorkel gear (or rent there)',
      'Underwater camera',
      'Dry bag for electronics',
      'Beach towel',
      'Water shoes',
      'Hat/cap',
      'Sunglasses'
    ],
    '🎒 Miscellaneous': [
      'Reusable water bottle',
      'Daypack (20-30L)',
      'Travel wallet',
      'ATM/credit cards',
      'Cash (EUR to exchange)',
      'Travel journal',
      'Pen',
      'Zip-lock bags'
    ]
  },

  tips: [
    {
      title: '🛂 Visa Information',
      content: 'Latvia citizens: 60-day visa exemption! Just need passport with 6+ months validity.'
    },
    {
      title: '☀️ Weather in February',
      content: 'Dry season - ideal! 27-30°C daytime, 20-22°C nights. Minimal rain. Bring sunscreen SPF 50+!'
    },
    {
      title: '💰 Money & Payments',
      content: '1 EUR ≈ 37 THB. ATMs everywhere (Bangkok, Chiang Mai, Krabi). Cash for street food, cards for hotels. No tipping required but appreciated (5-10%).'
    },
    {
      title: '🍜 Food & Dining',
      content: 'Street food is safe and delicious (€2-5). Try Pad Thai, Tom Yum, Som Tam, Massaman curry, Khao Soi (north). Mango sticky rice for dessert! Water from taps: NOT drinkable, buy bottled water.'
    },
    {
      title: '🚌 Transport Tips',
      content: 'Grab (Uber-like) in Bangkok/Chiang Mai. Buses are comfortable and frequent. Book flights 2-4 weeks in advance. Arrive 2h early for domestic, 3h for international flights.'
    },
    {
      title: '🛡️ Safety',
      content: 'Thailand is very safe! Avoid valuables on streets, don\'t carry passport outside hotel, be respectful of royal family and monks.'
    },
    {
      title: '🙏 Cultural Etiquette',
      content: 'Dress respectfully at temples (shoulders & knees covered). Remove shoes when entering homes/temples. Don\'t point at people. Smile = very important!'
    },
    {
      title: '📱 Communication',
      content: 'Buy AIS or TrueMove SIM card (€7-10/week). 4G coverage excellent. WhatsApp/Viber/Telegram work great. Google Maps works offline.'
    },
    {
      title: '✈️ Domestic Flights',
      content: '3 domestic flights total: Bangkok→Chiang Rai, Chiang Mai→Krabi (direct), Krabi→Bangkok. Island exploration via boat tours from Krabi base.'
    }
  ]
};

// State management
let currentView = 'main';
let selectedDay = 1;
let checkedItems = {};

// Get city color
function getCityColor(cityName) {
  const city = tripData.cities.find(c => cityName.includes(c.name));
  return city ? city.color : '#667eea';
}

// Get city emoji
function getCityEmoji(cityName) {
  const city = tripData.cities.find(c => cityName.includes(c.name));
  return city ? city.emoji : '📍';
}

// Initialize the app
function init() {
  renderDayList();
  setupNavigation();
  renderContent();
}

// Render day list in sidebar
function renderDayList() {
  const dayList = document.getElementById('dayList');
  dayList.innerHTML = tripData.itinerary.map(day => {
    const color = getCityColor(day.city);
    return `
      <div class="day-card ${selectedDay === day.day ? 'active' : ''}"
           data-day="${day.day}"
           style="border-color: ${color}; ${selectedDay === day.day ? `border-color: ${color};` : ''}">
        <div class="day-card-header">
          <span class="day-number">Day ${day.day}</span>
          <span class="day-date">${formatDate(day.date)}</span>
        </div>
        <div class="day-city" style="color: ${color};">
          ${getCityEmoji(day.city)} ${day.city}
        </div>
        <div class="day-preview">
          ${day.activities.slice(0, 2).join(', ')}
        </div>
      </div>
    `;
  }).join('');

  // Add click handlers
  document.querySelectorAll('.day-card').forEach(card => {
    card.addEventListener('click', () => {
      selectedDay = parseInt(card.dataset.day);

      // Always switch to Itinerary tab when a day is selected
      currentView = 'itinerary';
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      document.querySelector('.nav-btn[data-view="itinerary"]').classList.add('active');

      renderDayList();
      renderItineraryView();
    });
  });
}

// Setup navigation
function setupNavigation() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentView = btn.dataset.view;
      renderContent();
    });
  });
}

// Render content based on current view
function renderContent() {
  // Stop any running carousel auto-play when switching views
  stopAutoPlay();

  switch (currentView) {
    case 'main':
      renderMainView();
      break;
    case 'itinerary':
      renderItineraryView();
      break;
    case 'budget':
      renderBudgetView();
      break;
    case 'accommodations':
      renderAccommodationsView();
      break;
    case 'packing':
      renderPackingView();
      break;
    case 'activities':
      renderActivitiesView();
      break;
    case 'map':
      renderMapView();
      break;
    case 'tips':
      renderTipsView();
      break;
  }
}

// Render main view
function renderMainView() {
  const content = document.getElementById('mainContent');

  // Google Drive video ID - Thailand_v2_2026.mp4
  const googleDriveFileId = '1cQXlwcG4qRJ2wUpXoulZxWj65EympSQt';

  content.innerHTML = `
    <div class="main-view">
      <div class="main-video-container">
        <div class="video-responsive">
          <iframe
            src="https://drive.google.com/file/d/${googleDriveFileId}/preview"
            width="640"
            height="360"
            allow="autoplay"
            allowfullscreen>
          </iframe>
        </div>
      </div>

      <div class="main-summary">
        <h2>🌴 Thailand Adventure 2026</h2>

        <div class="summary-section">
          <h3>✈️ Our Route</h3>
          <p>
            18-day adventure (Feb 5-22, 2026) exploring temples, mountains, and tropical islands.
            Bangkok → Chiang Rai (flight) → Chiang Mai (bus) → Krabi (direct flight) → Bangkok (flight home)
          </p>
        </div>

        <div class="summary-section">
          <h3>🗺️ Where We're Going</h3>
          <div class="destination-grid">
            <div class="destination-card">
              <div class="destination-emoji">🏛️</div>
              <h4>Bangkok</h4>
              <p>Grand Palace, temples & vibrant street life</p>
            </div>
            <div class="destination-card">
              <div class="destination-emoji">⛰️</div>
              <h4>Chiang Rai</h4>
              <p>White Temple, Blue Temple & Golden Triangle</p>
            </div>
            <div class="destination-card">
              <div class="destination-emoji">🌳</div>
              <h4>Chiang Mai</h4>
              <p>Mountains, temples & elephant sanctuary</p>
            </div>
            <div class="destination-card">
              <div class="destination-emoji">🏖️</div>
              <h4>Ao Nam Mao</h4>
              <p>Phi Phi tours, Hong Islands & beach bliss</p>
            </div>
            <div class="destination-card">
              <div class="destination-emoji">🏝️</div>
              <h4>Ao Nang Beach</h4>
              <p>Railay Beach, cave kayaking & boat adventures</p>
            </div>
          </div>
        </div>

        <div class="summary-section">
          <h3>🎯 What We'll Do</h3>
          <div class="highlights-grid">
            <div class="highlight-item">🐘 Ethical elephant sanctuary experience</div>
            <div class="highlight-item">🛶 Multiple boat tours - Phi Phi, Hong Islands, 4 Islands</div>
            <div class="highlight-item">⛩️ White & Blue Temples in Chiang Rai</div>
            <div class="highlight-item">🏊 Snorkeling in Maya Bay & Pileh Lagoon</div>
            <div class="highlight-item">🍜 Thai cooking class in Chiang Mai</div>
            <div class="highlight-item">🏛️ Ancient temples & palaces</div>
            <div class="highlight-item">🌅 Railay Beach viewpoint hike</div>
            <div class="highlight-item">🚌 Scenic Green Bus ride through mountains</div>
            <div class="highlight-item">🎨 Golden Triangle border crossing</div>
            <div class="highlight-item">🍛 Night markets & street food adventures</div>
          </div>
        </div>

        <div class="summary-section">
          <h3>📊 Trip Overview</h3>
          <div class="trip-stats">
            <div class="stat-item">
              <div class="stat-number">18</div>
              <div class="stat-label">Days</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">6</div>
              <div class="stat-label">Cities</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">3</div>
              <div class="stat-label">Flights</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">€1,690-2,400</div>
              <div class="stat-label">Budget/Person</div>
            </div>
          </div>
        </div>

        <div class="summary-cta">
          <button class="btn-primary" onclick="currentView = 'itinerary'; document.querySelector('[data-view=\\'itinerary\\']').click();">
            View Full Itinerary →
          </button>
        </div>
      </div>
    </div>
  `;
}

// Render itinerary view
function renderItineraryView() {
  const day = tripData.itinerary.find(d => d.day === selectedDay);
  const color = getCityColor(day.city);
  const emoji = getCityEmoji(day.city);

  const content = document.getElementById('mainContent');

  // Generate image carousel HTML if images exist
  let imageHTML = '';
  if (day.images && day.images.length > 0) {
    if (day.images.length === 1) {
      const img = day.images[0];
      const imgUrl = typeof img === 'string' ? img : img.url;
      const imgTitle = typeof img === 'string' ? '' : img.title;
      imageHTML = `
        <div class="image-wrapper">
          <img src="${imgUrl}" alt="${day.city}" class="itinerary-image" style="width: 100%; height: 450px; object-fit: cover; border-radius: 8px 8px 0 0; margin-bottom: 20px;">
          ${imgTitle ? `<div class="image-title">${imgTitle}</div>` : ''}
        </div>
      `;
    } else {
      imageHTML = `
        <div class="image-carousel">
          <div class="carousel-images" id="carouselImages-${day.day}">
            ${day.images.map((img, index) => {
              const imgUrl = typeof img === 'string' ? img : img.url;
              const imgTitle = typeof img === 'string' ? '' : img.title;
              return `
                <div class="carousel-slide ${index === 0 ? 'active' : ''}">
                  <img src="${imgUrl}" alt="${day.city} ${index + 1}" class="carousel-image" style="width: 100%; height: 450px; object-fit: cover; border-radius: 8px 8px 0 0;">
                  ${imgTitle ? `<div class="image-title">${imgTitle}</div>` : ''}
                </div>
              `;
            }).join('')}
          </div>
          <button class="carousel-btn prev" onclick="changeImage(${day.day}, -1)">‹</button>
          <button class="carousel-btn next" onclick="changeImage(${day.day}, 1)">›</button>
          <div class="carousel-dots">
            ${day.images.map((_, index) => `
              <span class="dot ${index === 0 ? 'active' : ''}" onclick="goToImage(${day.day}, ${index})"></span>
            `).join('')}
          </div>
        </div>
      `;
    }
  }

  // Generate accommodation HTML if this day has accommodation
  let accommodationHTML = '';
  if (day.accommodation_id && tripData.accommodations[day.accommodation_id]) {
    const accom = tripData.accommodations[day.accommodation_id];

    // Generate accommodation image carousel
    let accomImageHTML = '';
    if (accom.images && accom.images.length > 0) {
      if (accom.images.length === 1) {
        const img = accom.images[0];
        accomImageHTML = `
          <div class="accommodation-image-single">
            <img src="${img.url}" alt="${accom.name}">
          </div>
        `;
      } else {
        accomImageHTML = `
          <div class="accommodation-carousel">
            <div class="carousel-images" id="accomCarousel-${day.day}">
              ${accom.images.map((img, index) => `
                <div class="carousel-slide ${index === 0 ? 'active' : ''}">
                  <img src="${img.url}" alt="${accom.name} ${index + 1}" class="carousel-image">
                </div>
              `).join('')}
            </div>
            <button class="carousel-btn accom-carousel-btn prev" onclick="changeAccomImage(${day.day}, -1)">‹</button>
            <button class="carousel-btn accom-carousel-btn next" onclick="changeAccomImage(${day.day}, 1)">›</button>
            <div class="carousel-dots">
              ${accom.images.map((_, index) => `
                <span class="dot ${index === 0 ? 'active' : ''}" onclick="goToAccomImage(${day.day}, ${index})"></span>
              `).join('')}
            </div>
          </div>
        `;
      }
    }

    accommodationHTML = `
      <div class="accommodation-block">
        <div class="accommodation-header">
          <h3>🏨 Where You're Staying</h3>
          <span class="accommodation-status ${accom.status.includes('Reserved') ? 'status-reserved' : 'status-pending'}">${accom.status}</span>
        </div>

        ${accomImageHTML}

        <div class="accommodation-details">
          <h4>${accom.name}</h4>
          <p class="accommodation-location">📍 ${accom.location}</p>
          ${accom.address ? `<p class="accommodation-address">${accom.address}</p>` : ''}

          <div class="accommodation-dates">
            <span>📅 Check-in: ${formatDate(accom.checkIn)}</span>
            <span>📅 Check-out: ${formatDate(accom.checkOut)}</span>
            <span>🌙 ${accom.nights} night${accom.nights > 1 ? 's' : ''}</span>
          </div>

          ${accom.features && accom.features.length > 0 ? `
            <div class="accommodation-features">
              ${accom.features.map(feature => `<span class="feature-tag">✓ ${feature}</span>`).join('')}
            </div>
          ` : ''}

          <div class="accommodation-cost">
            <div class="cost-item">
              <span class="cost-label">Total Cost:</span>
              <span class="cost-value">€${accom.totalCost}</span>
            </div>
            <div class="cost-item">
              <span class="cost-label">Per Night:</span>
              <span class="cost-value">€${accom.costPerNight.toFixed(2)}</span>
            </div>
          </div>

          ${accom.bookingUrl ? `
            <a href="${accom.bookingUrl}" target="_blank" class="booking-link">
              View on Booking.com →
            </a>
          ` : ''}
        </div>
      </div>
    `;
  }

  content.innerHTML = `
    <div class="detail-card">
      ${imageHTML}

      ${accommodationHTML}

      <div class="detail-header">
        <h2 style="color: ${color};">Day ${day.day}: ${emoji} ${day.city}</h2>
        <div class="detail-meta">
          <span>📅 ${formatDate(day.date)}</span>
          <span>🚗 ${day.transport}</span>
          <span>💰 €${day.budget_eur}</span>
          ${day.accommodation_eur !== '0' ? `<span>🏨 €${day.accommodation_eur}/night</span>` : ''}
        </div>
      </div>

      <div class="detail-section">
        <h3>☀️ Morning</h3>
        <p>${day.morning}</p>
      </div>

      <div class="detail-section">
        <h3>🌤️ Afternoon</h3>
        <p>${day.afternoon}</p>
      </div>

      <div class="detail-section">
        <h3>🌙 Evening</h3>
        <p>${day.evening}</p>
      </div>

      <div class="detail-section">
        <h3>🎯 Activities</h3>
        <ul>
          ${day.activities.map(activity => `<li>${activity}</li>`).join('')}
        </ul>
      </div>

      ${day.packing ? `
      <div class="detail-section">
        <h3>🎒 What to Pack</h3>
        <ul>
          ${day.packing.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
      ` : ''}

      <div class="detail-section">
        <h3>💡 Tips</h3>
        <p>${day.tips}</p>
        ${day.difficulty ? `<p><span class="badge badge-warning">${day.difficulty}</span></p>` : ''}
        ${day.special_note ? `<p><span class="badge badge-info">${day.special_note}</span></p>` : ''}
        ${day.accommodation_type ? `<p><span class="badge badge-success">${day.accommodation_type}</span></p>` : ''}
      </div>

      <!-- Mobile Day Selector (horizontal scroll) -->
      <div class="mobile-day-selector">
        <div class="mobile-day-scroll">
          ${tripData.itinerary.map(d => {
            const dayEmoji = getCityEmoji(d.city);
            return `
              <button
                class="mobile-day-btn ${d.day === selectedDay ? 'active' : ''}"
                onclick="selectDay(${d.day})"
                data-day="${d.day}">
                <div class="mobile-day-number">Day ${d.day}</div>
                <div class="mobile-day-city">${dayEmoji} ${d.city.split(' ')[0]}</div>
                <div class="mobile-day-date">${formatDate(d.date)}</div>
              </button>
            `;
          }).join('')}
        </div>
      </div>

      <div class="navigation-buttons">
        <button class="btn" onclick="navigateDay(-1)" ${selectedDay === 1 ? 'disabled' : ''}>
          ← Previous Day
        </button>
        <button class="btn" onclick="navigateDay(1)" ${selectedDay === 19 ? 'disabled' : ''}>
          Next Day →
        </button>
      </div>
    </div>
  `;

  // Start auto-play for carousel if it has multiple images
  if (day.images && day.images.length > 1) {
    // Reset the current index for this day
    currentImageIndex[day.day] = 0;
    // Start auto-play after a short delay to ensure DOM is ready
    setTimeout(() => startAutoPlay(day.day), 100);
  }
}

// Render budget view
function renderBudgetView() {
  const content = document.getElementById('mainContent');

  // Accommodation costs for 4 people (all nights included)
  const accomCosts = {
    bangkok1: 283, // €283 for 4 people, 2 nights
    chiangRai: 530, // €530 for 4 people, 3 nights - Katiliya Mountain Resort
    chiangMai: 792, // €792 for 4 people, 4 nights
    klongMuang: 1225, // €1,225 for 4 people, 3 nights - Venice Krabi Villa Resort
    nopparatThara: 1225, // €1,225 for 4 people, 3 nights
    bangkok2: 152 // €152 for 4 people, 1 night - Arte Hotel
  };

  const totalAccom = Object.values(accomCosts).reduce((sum, cost) => sum + cost, 0);

  // Flight costs for 4 people (including checked bags)
  const flights = [
    { route: 'Bangkok → Chiang Rai', cost: 36, total: 144 },
    { route: 'Chiang Mai → Krabi (Direct)', cost: 115, total: 460 },
    { route: 'Krabi → Bangkok', cost: 45, total: 180 }
  ];
  const totalFlights = flights.reduce((sum, f) => sum + f.total, 0);

  // Food costs for 18 days, 4 people
  const foodPerDay = 120; // €30/person/day × 4
  const totalFood = foodPerDay * 18;

  // Use unified activities list from tripData
  const activities = tripData.activities;
  const totalActivities = activities.reduce((sum, a) => sum + a.total, 0);

  // Transport costs for 4 people
  const transport = [
    { name: 'Green Bus Chiang Rai → Chiang Mai', perPerson: 11, total: 44 },
    { name: 'Airport transfers, taxis, Grab', perPerson: 125, total: 500 },
    { name: 'Boat transfers & longtails', perPerson: 100, total: 400 }
  ];
  const totalTransport = transport.reduce((sum, t) => sum + t.total, 0);

  // Miscellaneous
  const misc = 400; // €100/person × 4

  const grandTotal = totalAccom + totalFlights + totalFood + totalActivities + totalTransport + misc;
  const perPerson = grandTotal / 4;

  content.innerHTML = `
    <div class="detail-card">
      <div class="detail-header">
        <h2>💰 Complete Budget Breakdown</h2>
        <p style="color: var(--color-text-secondary);">Detailed costs for 4 people (excluding international flights - already paid)</p>
      </div>

      <div class="budget-grid">
        <div class="budget-card">
          <h4>Total Budget</h4>
          <div class="amount">€${grandTotal.toLocaleString()}</div>
        </div>
        <div class="budget-card">
          <h4>Per Person</h4>
          <div class="amount">€${perPerson.toLocaleString()}</div>
        </div>
        <div class="budget-card">
          <h4>Daily Average</h4>
          <div class="amount">€${Math.round(perPerson/18)}/day</div>
        </div>
        <div class="budget-card">
          <h4>Trip Duration</h4>
          <div class="amount">18 Days</div>
        </div>
      </div>

      <!-- Charts Section -->
      <div class="detail-section">
        <h3>📊 Budget Visualizations</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 24px;">
          <div style="background: var(--color-surface); padding: 24px; border-radius: 12px; box-shadow: var(--shadow-md);">
            <h4 style="margin-bottom: 16px; text-align: center; color: var(--color-text-primary);">Category breakdown per person</h4>
            <div style="position: relative; max-width: 450px; max-height: 450px; margin: 0 auto;">
              <canvas id="categoryDonutChart"></canvas>
              <div id="donutLegend" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 10px; line-height: 1.4; text-align: left; pointer-events: none;"></div>
            </div>
          </div>
          <div style="background: var(--color-surface); padding: 24px; border-radius: 12px; box-shadow: var(--shadow-md);">
            <h4 style="margin-bottom: 16px; text-align: center; color: var(--color-text-primary);">Daily cost breakdown per person</h4>
            <div style="height: 400px;">
              <canvas id="dailyBarChart"></canvas>
            </div>
          </div>
        </div>
      </div>

      <div class="detail-section">
        <h3>🏨 Accommodations (16 nights)</h3>
        <table class="budget-table">
          <thead>
            <tr>
              <th>Hotel</th>
              <th>Nights</th>
              <th>Total (4 people)</th>
              <th>Per Person</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Baiyoke Sky Hotel (Bangkok)</td>
              <td>2</td>
              <td>€${accomCosts.bangkok1}</td>
              <td>€${(accomCosts.bangkok1/4).toFixed(0)}</td>
            </tr>
            <tr>
              <td>Katiliya Mountain Resort (Chiang Rai)</td>
              <td>3</td>
              <td>€${accomCosts.chiangRai}</td>
              <td>€${(accomCosts.chiangRai/4).toFixed(0)}</td>
            </tr>
            <tr>
              <td>Prince Khum Phaya Resort (Chiang Mai)</td>
              <td>4</td>
              <td>€${accomCosts.chiangMai}</td>
              <td>€${(accomCosts.chiangMai/4).toFixed(0)}</td>
            </tr>
            <tr>
              <td>Venice Krabi Villa Resort (Ao Nam Mao)</td>
              <td>3</td>
              <td>€${accomCosts.klongMuang}</td>
              <td>€${(accomCosts.klongMuang/4).toFixed(0)}</td>
            </tr>
            <tr>
              <td>Aonang Fiore Resort (Ao Nang Beach)</td>
              <td>3</td>
              <td>€${accomCosts.nopparatThara}</td>
              <td>€${(accomCosts.nopparatThara/4).toFixed(0)}</td>
            </tr>
            <tr>
              <td>Bangkok Airport Hotel (TBD)</td>
              <td>1</td>
              <td>€${accomCosts.bangkok2} <em>(estimate)</em></td>
              <td>€${(accomCosts.bangkok2/4).toFixed(0)}</td>
            </tr>
            <tr class="total-row">
              <td><strong>TOTAL ACCOMMODATIONS</strong></td>
              <td><strong>16</strong></td>
              <td><strong>€${totalAccom}</strong></td>
              <td><strong>€${(totalAccom/4).toFixed(0)}</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="detail-section">
        <h3>✈️ Domestic Flights (3 flights)</h3>
        <table class="budget-table">
          <thead>
            <tr>
              <th>Route</th>
              <th>Total (4 people)</th>
              <th>Per Person</th>
            </tr>
          </thead>
          <tbody>
            ${flights.map(f => `
              <tr>
                <td>${f.route}</td>
                <td>€${f.total}</td>
                <td>€${f.cost}</td>
              </tr>
            `).join('')}
            <tr class="total-row">
              <td><strong>TOTAL FLIGHTS</strong></td>
              <td><strong>€${totalFlights}</strong></td>
              <td><strong>€${(totalFlights/4).toFixed(0)}</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="detail-section">
        <h3>🍜 Food & Dining (18 days)</h3>
        <table class="budget-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Total (4 people)</th>
              <th>Per Person</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Meals (18 days × €30/person/day)</td>
              <td>€${totalFood}</td>
              <td>€${(totalFood/4).toFixed(0)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="detail-section">
        <h3>🎯 Activities & Tours</h3>
        <table class="budget-table">
          <thead>
            <tr>
              <th>Activity</th>
              <th>Total (4 people)</th>
              <th>Per Person</th>
            </tr>
          </thead>
          <tbody>
            ${activities.map(a => `
              <tr>
                <td>${a.name}</td>
                <td>€${a.total}</td>
                <td>€${a.perPerson}</td>
              </tr>
            `).join('')}
            <tr class="total-row">
              <td><strong>TOTAL ACTIVITIES</strong></td>
              <td><strong>€${totalActivities}</strong></td>
              <td><strong>€${(totalActivities/4).toFixed(0)}</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="detail-section">
        <h3>🚗 Local Transport</h3>
        <table class="budget-table">
          <thead>
            <tr>
              <th>Transport</th>
              <th>Total (4 people)</th>
              <th>Per Person</th>
            </tr>
          </thead>
          <tbody>
            ${transport.map(t => `
              <tr>
                <td>${t.name}</td>
                <td>€${t.total}</td>
                <td>€${t.perPerson}</td>
              </tr>
            `).join('')}
            <tr class="total-row">
              <td><strong>TOTAL TRANSPORT</strong></td>
              <td><strong>€${totalTransport}</strong></td>
              <td><strong>€${(totalTransport/4).toFixed(0)}</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="detail-section">
        <h3>🛍️ Miscellaneous</h3>
        <table class="budget-table">
          <tbody>
            <tr>
              <td>Shopping, tips, extras</td>
              <td>€${misc}</td>
              <td>€${(misc/4).toFixed(0)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="detail-section" style="background: var(--color-bg-3); padding: 20px; border-radius: 8px; margin-top: 20px;">
        <h3>📊 GRAND TOTAL</h3>
        <table class="budget-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Total (4 people)</th>
              <th>Per Person</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Accommodations</td>
              <td>€${totalAccom}</td>
              <td>€${(totalAccom/4).toFixed(0)}</td>
            </tr>
            <tr>
              <td>Domestic Flights</td>
              <td>€${totalFlights}</td>
              <td>€${(totalFlights/4).toFixed(0)}</td>
            </tr>
            <tr>
              <td>Food & Dining</td>
              <td>€${totalFood}</td>
              <td>€${(totalFood/4).toFixed(0)}</td>
            </tr>
            <tr>
              <td>Activities & Tours</td>
              <td>€${totalActivities}</td>
              <td>€${(totalActivities/4).toFixed(0)}</td>
            </tr>
            <tr>
              <td>Local Transport</td>
              <td>€${totalTransport}</td>
              <td>€${(totalTransport/4).toFixed(0)}</td>
            </tr>
            <tr>
              <td>Miscellaneous</td>
              <td>€${misc}</td>
              <td>€${(misc/4).toFixed(0)}</td>
            </tr>
            <tr class="total-row" style="font-size: 18px; background: rgba(34, 197, 94, 0.1);">
              <td><strong>TOTAL (excl. international flights)</strong></td>
              <td><strong>€${grandTotal.toLocaleString()}</strong></td>
              <td><strong>€${perPerson.toLocaleString()}</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="detail-section" style="margin-top: 40px;">
        <h3>📅 Daily Cost Breakdown (Sorted by Date)</h3>
        <table class="budget-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Date</th>
              <th>Location</th>
              <th>Accommodation</th>
              <th>Food</th>
              <th>Activities</th>
              <th>Transport</th>
              <th>Daily Total</th>
            </tr>
          </thead>
          <tbody>
            ${tripData.itinerary.map(day => {
              // Calculate accommodation cost per day
              let accomCost = 0;
              if (day.accommodation_id) {
                const accomKey = day.accommodation_id;
                const accom = tripData.accommodations[accomKey];
                if (accom && accom.nights > 0) {
                  if (accomKey === 'bangkok1') accomCost = 283 / 2; // €283 total for 2 nights
                  else if (accomKey === 'chiangRai') accomCost = 530 / 3; // €530 for 3 nights
                  else if (accomKey === 'chiangMai') accomCost = 792 / 4; // €792 for 4 nights
                  else if (accomKey === 'klongMuang') accomCost = 1225 / 3; // €1,225 for 3 nights
                  else if (accomKey === 'nopparatThara') accomCost = 1225 / 3; // €1,225 for 3 nights
                  else if (accomKey === 'bangkok2') accomCost = 152; // €152 for 1 night - Arte Hotel
                }
              }

              // Food cost - €120/day for 4 people (€30/person/day)
              const foodCost = 120;

              // Activities cost per day
              let activityCost = 0;
              if (day.city.includes('Chiang Mai') && day.day === 9) activityCost = 300; // Elephant sanctuary
              else if (day.city.includes('Chiang Mai') && day.day === 10) activityCost = 140; // Cooking class
              else if (day.city.includes('Chiang Mai') && day.day === 8) activityCost = 120; // Doi Suthep
              else if (day.city.includes('Phi Phi')) activityCost = 220; // Phi Phi tour
              else if (day.city.includes('Hong Islands')) activityCost = 380; // Hong Islands + Mangrove Kayaking
              else if (day.city.includes('4 Islands')) activityCost = 140; // 4 Islands
              else if (day.city.includes('Railay')) activityCost = 100; // Railay
              else if (day.city.includes('Bor Thor')) activityCost = 200; // Bor Thor kayaking
              else if (day.city === 'Bangkok' && day.day === 3) activityCost = 122; // Grand Palace + Wat Pho + Wat Arun
              else if (day.city.includes('Bangkok → Chiang Rai') && day.day === 4) activityCost = 80; // Floating Market
              else if (day.city.includes('Chiang Rai') && day.day === 5) activityCost = 160; // White/Blue Temple tour
              else if (day.city.includes('Chiang Rai') && day.day === 6) activityCost = 160; // Golden Triangle tour
              else if (day.city.includes('Bangkok') && day.day === 17) activityCost = 80; // Private longtail

              // Transport cost per day
              let transportCost = 0;
              if (day.city.includes('→')) {
                if (day.city.includes('Chiang Rai')) transportCost = 200; // Flight BKK→CEI
                else if (day.city.includes('Ao Nam Mao')) transportCost = 620; // Flight CNX→KBV
                else if (day.city.includes('Bangkok') && day.day === 17) transportCost = 350; // Flight KBV→BKK
                else if (day.city.includes('Chiang Mai') && day.day === 7) transportCost = 44; // Green Bus
              } else {
                // Regular daily transport (taxis, grab, boats)
                transportCost = 900 / 18; // €900 total (taxis + boats) spread over 18 days ≈ €50/day
              }

              const dailyTotal = accomCost + foodCost + activityCost + transportCost;

              return `
                <tr>
                  <td><strong>Day ${day.day}</strong></td>
                  <td>${day.date}</td>
                  <td>${day.city}</td>
                  <td>€${accomCost.toFixed(0)}</td>
                  <td>€${foodCost}</td>
                  <td>€${activityCost}</td>
                  <td>€${transportCost.toFixed(0)}</td>
                  <td><strong>€${dailyTotal.toFixed(0)}</strong></td>
                </tr>
              `;
            }).join('')}
            <tr class="total-row">
              <td colspan="3"><strong>TOTAL (18 DAYS)</strong></td>
              <td><strong>€${totalAccom}</strong></td>
              <td><strong>€${totalFood}</strong></td>
              <td><strong>€${totalActivities}</strong></td>
              <td><strong>€${totalFlights + totalTransport}</strong></td>
              <td><strong>€${(totalAccom + totalFood + totalActivities + totalFlights + totalTransport).toLocaleString()}</strong></td>
            </tr>
          </tbody>
        </table>
        <p style="margin-top: 16px; color: var(--color-text-secondary); font-size: var(--font-size-sm);">
          <em>Note: Miscellaneous costs (€400) not included in daily breakdown. All costs shown for 4 people.</em>
        </p>
      </div>

      <div class="detail-section">
        <h3>💡 Money Saving Tips</h3>
        <ul>
          <li>Book all 3 domestic flights NOW - prices increase closer to dates</li>
          <li>Eat at street food stalls (€2-5) - authentic and delicious</li>
          <li>Use Grab app for fair taxi pricing</li>
          <li>Book accommodation with free breakfast included</li>
          <li>Buy water and snacks from 7-Eleven (very cheap)</li>
          <li>Book boat tours one day in advance for better rates</li>
          <li>Share taxi costs between 4 people</li>
        </ul>
      </div>
    </div>
  `;

  // Create Donut Chart for Category Breakdown (Per Person)
  const ctxDonut = document.getElementById('categoryDonutChart');
  const donutData = {
    labels: ['Accommodations', 'Flights', 'Food & Dining', 'Activities', 'Local Transport', 'Miscellaneous'],
    values: [totalAccom/4, totalFlights/4, totalFood/4, totalActivities/4, totalTransport/4, misc/4],
    colors: ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b', '#fa709a']
  };

  new Chart(ctxDonut, {
    type: 'doughnut',
    data: {
      labels: donutData.labels,
      datasets: [{
        data: donutData.values,
        backgroundColor: donutData.colors,
        borderWidth: 2,
        borderColor: '#fff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      cutout: '60%',
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const label = context.label || '';
              const value = context.parsed || 0;
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = Math.round((value / total) * 100);
              return label + ': €' + value.toLocaleString() + ' (' + percentage + '%)';
            }
          }
        },
        datalabels: {
          color: '#000',
          font: {
            weight: 'bold',
            size: 11
          },
          formatter: function(value, context) {
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = Math.round((value / total) * 100);
            return '€' + Math.round(value).toLocaleString() + '\n' + percentage + '%';
          },
          textAlign: 'center'
        }
      }
    },
    plugins: [ChartDataLabels]
  });

  // Populate center legend with just category names and colors
  const legendHTML = donutData.labels.map((label, i) => {
    return `<div style="margin-bottom: 6px; display: flex; align-items: center;">
      <span style="display: inline-block; width: 12px; height: 12px; background: ${donutData.colors[i]}; border-radius: 2px; margin-right: 6px;"></span>
      <span style="font-size: 11px; font-weight: 500;">${label}</span>
    </div>`;
  }).join('');

  document.getElementById('donutLegend').innerHTML = legendHTML;

  // Create Stacked Bar Chart for Daily Breakdown (Per Person)
  const dailyData = tripData.itinerary.map(day => {
    // Calculate accommodation cost per day
    let accomCost = 0;
    if (day.accommodation_id) {
      const accomKey = day.accommodation_id;
      if (accomKey === 'bangkok1') accomCost = 283 / 2 / 4; // divided by 4 for per person
      else if (accomKey === 'chiangRai') accomCost = 530 / 3 / 4;
      else if (accomKey === 'chiangMai') accomCost = 792 / 4 / 4;
      else if (accomKey === 'klongMuang') accomCost = 1225 / 3 / 4;
      else if (accomKey === 'nopparatThara') accomCost = 1225 / 3 / 4;
      else if (accomKey === 'bangkok2') accomCost = 152 / 4;
    }

    const foodCost = 120 / 4; // per person

    // Activities cost per day
    let activityCost = 0;
    if (day.city.includes('Chiang Mai') && day.day === 9) activityCost = 300 / 4;
    else if (day.city.includes('Chiang Mai') && day.day === 10) activityCost = 140 / 4;
    else if (day.city.includes('Chiang Mai') && day.day === 8) activityCost = 120 / 4;
    else if (day.city.includes('Phi Phi')) activityCost = 220 / 4;
    else if (day.city.includes('Hong Islands')) activityCost = 380 / 4;
    else if (day.city.includes('4 Islands')) activityCost = 140 / 4;
    else if (day.city.includes('Railay')) activityCost = 100 / 4;
    else if (day.city.includes('Bor Thor')) activityCost = 200 / 4;
    else if (day.city === 'Bangkok' && day.day === 3) activityCost = 122 / 4;
    else if (day.city.includes('Bangkok → Chiang Rai') && day.day === 4) activityCost = 80 / 4;
    else if (day.city.includes('Chiang Rai') && day.day === 5) activityCost = 160 / 4;
    else if (day.city.includes('Chiang Rai') && day.day === 6) activityCost = 160 / 4;
    else if (day.city.includes('Bangkok') && day.day === 17) activityCost = 80 / 4;

    // Transport cost per day
    let transportCost = 0;
    if (day.city.includes('→')) {
      if (day.city.includes('Chiang Rai')) transportCost = 200 / 4;
      else if (day.city.includes('Ao Nam Mao')) transportCost = 620 / 4;
      else if (day.city.includes('Bangkok') && day.day === 17) transportCost = 350 / 4;
      else if (day.city.includes('Chiang Mai') && day.day === 7) transportCost = 44 / 4;
    } else {
      transportCost = 900 / 18 / 4;
    }

    return {
      day: day.day,
      accom: Math.round(accomCost),
      food: Math.round(foodCost),
      activities: Math.round(activityCost),
      transport: Math.round(transportCost)
    };
  });

  const ctxBar = document.getElementById('dailyBarChart');
  new Chart(ctxBar, {
    type: 'bar',
    data: {
      labels: dailyData.map(d => 'Day ' + d.day),
      datasets: [
        {
          label: 'Accommodation',
          data: dailyData.map(d => d.accom),
          backgroundColor: '#667eea'
        },
        {
          label: 'Food',
          data: dailyData.map(d => d.food),
          backgroundColor: '#f093fb'
        },
        {
          label: 'Activities',
          data: dailyData.map(d => d.activities),
          backgroundColor: '#4facfe'
        },
        {
          label: 'Transport',
          data: dailyData.map(d => d.transport),
          backgroundColor: '#43e97b'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false
          },
          ticks: {
            maxRotation: 90,
            minRotation: 45,
            font: {
              size: 10
            }
          }
        },
        y: {
          stacked: true,
          beginAtZero: true,
          grid: {
            display: false
          },
          ticks: {
            callback: function(value) {
              return '€' + value;
            }
          }
        }
      },
      plugins: {
        legend: {
          position: 'top',
          labels: {
            padding: 10,
            font: {
              size: 11
            }
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.dataset.label + ': €' + context.parsed.y;
            }
          }
        },
        datalabels: {
          display: false
        }
      }
    }
  });
}

// Render accommodations view
function renderAccommodationsView() {
  const content = document.getElementById('mainContent');

  // Calculate total accommodation costs
  const totalCost = Object.values(tripData.accommodations)
    .reduce((sum, accom) => sum + accom.totalCost, 0);
  const totalNights = Object.values(tripData.accommodations)
    .reduce((sum, accom) => sum + accom.nights, 0);
  const avgPerNight = totalCost / totalNights;

  // Count reserved vs pending
  const reserved = Object.values(tripData.accommodations)
    .filter(a => a.status.includes('Reserved')).length;
  const pending = Object.values(tripData.accommodations).length - reserved;

  content.innerHTML = `
    <div class="detail-card">
      <div class="detail-header">
        <h2>🏨 Accommodations Overview</h2>
        <p style="color: var(--color-text-secondary);">All your stays for the Thailand trip</p>
      </div>

      <div class="budget-grid">
        <div class="budget-card">
          <h4>Total Cost</h4>
          <div class="amount">€${totalCost.toLocaleString()}</div>
        </div>
        <div class="budget-card">
          <h4>Total Nights</h4>
          <div class="amount">${totalNights} nights</div>
        </div>
        <div class="budget-card">
          <h4>Avg Per Night</h4>
          <div class="amount">€${avgPerNight.toFixed(2)}</div>
        </div>
        <div class="budget-card">
          <h4>Status</h4>
          <div class="amount" style="font-size: 14px;">
            ${reserved} Reserved<br>${pending} Pending
          </div>
        </div>
      </div>

      ${Object.entries(tripData.accommodations).map(([key, accom]) => {
        // Generate accommodation image carousel
        let accomImageHTML = '';
        if (accom.images && accom.images.length > 0) {
          if (accom.images.length === 1) {
            const img = accom.images[0];
            accomImageHTML = `
              <div class="accommodation-image-single">
                <img src="${img.url}" alt="${accom.name}">
              </div>
            `;
          } else {
            const carouselId = `accom-overview-${key}`;
            accomImageHTML = `
              <div class="accommodation-carousel">
                <div class="carousel-images" id="${carouselId}">
                  ${accom.images.map((img, index) => `
                    <div class="carousel-slide ${index === 0 ? 'active' : ''}">
                      <img src="${img.url}" alt="${accom.name} ${index + 1}" class="carousel-image">
                    </div>
                  `).join('')}
                </div>
                <button class="carousel-btn accom-carousel-btn prev" onclick="changeOverviewAccomImage('${key}', -1)">‹</button>
                <button class="carousel-btn accom-carousel-btn next" onclick="changeOverviewAccomImage('${key}', 1)">›</button>
                <div class="carousel-dots">
                  ${accom.images.map((_, index) => `
                    <span class="dot ${index === 0 ? 'active' : ''}" onclick="goToOverviewAccomImage('${key}', ${index})"></span>
                  `).join('')}
                </div>
              </div>
            `;
          }
        } else if (accom.name === 'TBD' || accom.name.includes('TBD')) {
          accomImageHTML = `
            <div class="accommodation-image-single" style="background: var(--color-bg-2); display: flex; align-items: center; justify-content: center; height: 450px; border-radius: 8px;">
              <p style="color: var(--color-text-secondary); font-size: 18px; font-weight: 500;">📍 ${accom.location} - To Be Determined</p>
            </div>
          `;
        }

        return `
          <div class="accommodation-block">
            <div class="accommodation-header">
              <h3>${accom.name === 'TBD' || accom.name.includes('TBD') ? '📍 ' + accom.location : accom.name}</h3>
              <span class="accommodation-status ${accom.status.includes('Reserved') ? 'status-reserved' : 'status-pending'}">${accom.status}</span>
            </div>

            ${accomImageHTML}

            <div class="accommodation-details">
              ${!(accom.name === 'TBD' || accom.name.includes('TBD')) ? `
                <h4>${accom.name}</h4>
                <p class="accommodation-location">📍 ${accom.location}</p>
              ` : ''}
              ${accom.address ? `<p class="accommodation-address">${accom.address}</p>` : ''}

              <div class="accommodation-dates">
                <span>📅 Check-in: ${formatDate(accom.checkIn)}</span>
                <span>📅 Check-out: ${formatDate(accom.checkOut)}</span>
                <span>🌙 ${accom.nights} night${accom.nights > 1 ? 's' : ''}</span>
              </div>

              ${accom.features && accom.features.length > 0 ? `
                <div class="accommodation-features">
                  ${accom.features.map(feature => `<span class="feature-tag">✓ ${feature}</span>`).join('')}
                </div>
              ` : ''}

              ${accom.totalCost > 0 ? `
                <div class="accommodation-cost">
                  <div class="cost-item">
                    <span class="cost-label">Total Cost:</span>
                    <span class="cost-value">€${accom.totalCost}</span>
                  </div>
                  <div class="cost-item">
                    <span class="cost-label">Per Night:</span>
                    <span class="cost-value">€${accom.costPerNight.toFixed(2)}</span>
                  </div>
                </div>
              ` : ''}

              ${accom.bookingUrl ? `
                <a href="${accom.bookingUrl}" target="_blank" class="booking-link">
                  View on Booking.com →
                </a>
              ` : ''}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// Render packing view
function renderPackingView() {
  const content = document.getElementById('mainContent');

  content.innerHTML = `
    <div class="detail-card">
      <div class="detail-header">
        <h2>🎒 Packing List</h2>
        <p style="color: var(--color-text-secondary);">Check off items as you pack them</p>
      </div>

      ${Object.entries(tripData.packingList).map(([category, items]) => `
        <div class="packing-category">
          <h3>${category}</h3>
          <div class="packing-list">
            ${items.map((item, index) => {
              const itemId = `${category}-${index}`;
              const isChecked = checkedItems[itemId] || false;
              return `
                <div class="packing-item">
                  <input type="checkbox"
                         id="${itemId}"
                         ${isChecked ? 'checked' : ''}
                         onchange="togglePackingItem('${itemId}')">
                  <label for="${itemId}">${item}</label>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `).join('')}

      <div class="detail-section">
        <h3>💡 Packing Tips</h3>
        <ul>
          <li>Pack light - you can buy most things in Thailand cheaply</li>
          <li>Bring a small daypack for daily excursions</li>
          <li>Use packing cubes to organize your luggage</li>
          <li>Keep important documents in a waterproof bag</li>
          <li>Bring a reusable water bottle to save money and reduce plastic</li>
          <li>Pack a separate bag for dirty/wet clothes</li>
          <li>Check airline baggage allowance before you fly</li>
          <li>DRY BAG is essential for all boat tours!</li>
        </ul>
      </div>
    </div>
  `;
}

// Render activities view
function renderActivitiesView() {
  const content = document.getElementById('mainContent');

  // Group activities by city from unified tripData.activities
  const citiesWithActivities = [
    {
      name: 'Bangkok',
      emoji: '🏛️',
      color: '#667eea',
      activities: tripData.activities.filter(a => a.city === 'Bangkok')
    },
    {
      name: 'Chiang Rai',
      emoji: '⛰️',
      color: '#f093fb',
      activities: tripData.activities.filter(a => a.city === 'Chiang Rai')
    },
    {
      name: 'Chiang Mai',
      emoji: '🌳',
      color: '#764ba2',
      activities: tripData.activities.filter(a => a.city === 'Chiang Mai')
    },
    {
      name: 'Krabi Area',
      emoji: '🏖️',
      color: '#4facfe',
      activities: tripData.activities.filter(a => a.city === 'Krabi')
    }
  ].filter(city => city.activities.length > 0);

  content.innerHTML = `
    <div class="detail-card">
      <div class="detail-header">
        <h2>🎯 Activities by Destination</h2>
        <p style="color: var(--color-text-secondary);">Highlights and must-do experiences</p>
      </div>

      <div class="activity-grid">
        ${citiesWithActivities.map(city => `
          <div class="activity-card" style="border-left: 4px solid ${city.color};">
            <h3 style="color: ${city.color};">${city.emoji} ${city.name}</h3>
            ${city.activities.map(activity => `
              <div style="margin-bottom: 16px; padding: 12px; background-color: var(--color-bg-1); border-radius: var(--radius-base);">
                <div style="font-weight: var(--font-weight-semibold); margin-bottom: 4px;">${activity.name}</div>
                <div class="activity-details">
                  <span class="badge badge-info">⏱️ ${activity.duration}</span>
                  <span class="badge badge-success">💰 €${activity.perPerson}</span>
                  <span class="badge badge-${activity.difficulty === 'Hard' ? 'warning' : 'info'}">📊 ${activity.difficulty}</span>
                </div>
                <p style="color: var(--color-text-secondary); font-size: var(--font-size-sm); margin-top: 8px;">${activity.description}</p>
              </div>
            `).join('')}
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Render tips view
function renderTipsView() {
  const content = document.getElementById('mainContent');

  content.innerHTML = `
    <div class="detail-card">
      <div class="detail-header">
        <h2>💡 Travel Tips & Information</h2>
        <p style="color: var(--color-text-secondary);">Everything you need to know before you go</p>
      </div>

      <div class="tips-grid">
        ${tripData.tips.map(tip => `
          <div class="tip-card">
            <h3>${tip.title}</h3>
            <p>${tip.content}</p>
          </div>
        `).join('')}
      </div>

      <div class="detail-section">
        <h3>🌟 Trip Highlights</h3>
        <ul>
          <li>White Temple & Blue Temple - stunning architecture</li>
          <li>Golden Triangle - 3-country border experience</li>
          <li>Elephant sanctuary - ethical wildlife experience</li>
          <li>Thai cooking class - learn authentic recipes</li>
          <li>Green Bus VIP - scenic mountain journey</li>
          <li>Phi Phi Islands - Maya Bay & Pileh Lagoon</li>
          <li>Hong Islands - emerald lagoon magic</li>
          <li>Railay Beach - boat-access-only paradise</li>
          <li>Multiple boat tours - explore islands by sea</li>
          <li>Thai cuisine - some of world's best food</li>
        </ul>
      </div>

      <div class="detail-section">
        <h3>✅ Booking Priority List</h3>
        <p><strong>Book NOW:</strong></p>
        <ul>
          <li>All 3 domestic flights (high season!)</li>
          <li>All accommodation (16 nights)</li>
          <li>Travel insurance</li>
        </ul>
        <p><strong>Book 2-3 weeks before:</strong></p>
        <ul>
          <li>Elephant sanctuary in Chiang Mai</li>
          <li>Green Bus VIP tickets</li>
          <li>Thai cooking class</li>
        </ul>
        <p><strong>Book on arrival or day before:</strong></p>
        <ul>
          <li>All boat tours in Krabi</li>
          <li>Temple entrance tickets</li>
          <li>Local transport</li>
        </ul>
      </div>
    </div>
  `;
}

// Render map view
let mapInstance = null;
let mapMarkers = [];

function renderMapView() {
  const content = document.getElementById('mainContent');

  content.innerHTML = `
    <div class="detail-card">
      <div class="detail-header">
        <h2>🗺️ Trip Route Map</h2>
        <p style="color: var(--color-text-secondary);">Interactive map showing optimized route with only 3 flights</p>
      </div>

      <div id="map"></div>

      <div class="detail-section">
        <h3>Journey Stops</h3>
        <div class="map-stops-list" id="mapStopsList"></div>
      </div>

      <div class="map-legend">
        <h3>Trip Highlights</h3>
        <div class="map-legend-item">
          <span class="map-legend-icon">🏛️</span> Temples & Culture
        </div>
        <div class="map-legend-item">
          <span class="map-legend-icon">⛰️</span> Mountains & Nature
        </div>
        <div class="map-legend-item">
          <span class="map-legend-icon">🏖️</span> Beaches & Islands
        </div>
        <div class="map-legend-item">
          <span class="map-legend-icon">🛶</span> Boat Adventures
        </div>
        <div class="map-legend-item">
          <span class="map-legend-icon">✈️</span> Only 3 Flights!
        </div>
      </div>
    </div>
  `;

  // Wait for DOM to be ready
  setTimeout(() => {
    initializeMap();
  }, 100);
}

function initializeMap() {
  // Helper function to get activities summary for each city
  const getActivitiesSummary = (cityName) => {
    const cityActivities = tripData.activities
      .filter(a => a.city === cityName)
      .map(a => a.name.split(' (')[0].split(' entrance')[0].split(' transport')[0]) // Clean up names
      .slice(0, 4); // Limit to first 4
    return cityActivities.join(', ');
  };

  // Define stops with accurate coordinates for optimized route
  const stops = [
    {
      num: 1,
      name: "Bangkok",
      dates: "Feb 6-8",
      days: "2 nights",
      lat: 13.7563,
      lng: 100.5018,
      activities: getActivitiesSummary('Bangkok') || "Grand Palace, Wat Pho, Wat Arun, Floating Market",
      icon: "🏛️"
    },
    {
      num: 2,
      name: "Chiang Rai",
      dates: "Feb 8-11",
      days: "3 nights",
      lat: 19.9105,
      lng: 99.8328,
      activities: getActivitiesSummary('Chiang Rai') || "White Temple, Blue Temple, Golden Triangle",
      icon: "⛰️"
    },
    {
      num: 3,
      name: "Chiang Mai",
      dates: "Feb 11-15",
      days: "4 nights",
      lat: 18.7883,
      lng: 98.9853,
      activities: getActivitiesSummary('Chiang Mai') || "Doi Suthep, Elephant Sanctuary, Cooking Class",
      icon: "🌳"
    },
    {
      num: 4,
      name: "Ao Nam Mao Beach",
      dates: "Feb 15-18",
      days: "3 nights",
      lat: 8.0295643,
      lng: 98.8621932,
      activities: tripData.activities.filter(a => a.city === 'Krabi' && a.day >= 12 && a.day <= 13).map(a => a.name.split(' Tour')[0]).join(', ') || "Phi Phi tour, Hong Islands",
      icon: "🏖️"
    },
    {
      num: 5,
      name: "Ao Nang Beach",
      dates: "Feb 18-21",
      days: "3 nights",
      lat: 8.0314669,
      lng: 98.8218458,
      activities: tripData.activities.filter(a => a.city === 'Krabi' && a.day >= 14 && a.day <= 16).map(a => a.name.split(' Tour')[0].split(' &')[0]).join(', ') || "Railay Beach, 4 Islands, Cave kayaking",
      icon: "🏝️"
    },
    {
      num: 6,
      name: "Bangkok Airport",
      dates: "Feb 21-22",
      days: "1 night",
      lat: 13.6900,
      lng: 100.7501,
      activities: "Airport hotel, Early 05:50 departure",
      icon: "✈️"
    }
  ];

  // Color palette for stops
  const colors = ['#667eea', '#f093fb', '#764ba2', '#4facfe', '#43e97b', '#667eea'];

  // SYSTEMATICALLY VERIFIED - All 45 attractions geocoded with Google Geocoding API
  const attractions = [
    // Bangkok - Day 2-3 (5 attractions)
    { name: "Grand Palace", lat: 13.7499, lng: 100.4916, icon: "🏛️", city: "Bangkok", day: "2-3" },
    { name: "Wat Pho (Reclining Buddha)", lat: 13.7464, lng: 100.4928, icon: "🛕", city: "Bangkok", day: "3" },
    { name: "Wat Arun (Temple of Dawn)", lat: 13.7439, lng: 100.4884, icon: "🛕", city: "Bangkok", day: "3" },
    { name: "Damnoen Saduak Floating Market", lat: 13.5202, lng: 99.9586, icon: "🛶", city: "Bangkok", day: "4" },
    { name: "Chatuchak Weekend Market", lat: 13.7998, lng: 100.5504, icon: "🛍️", city: "Bangkok", day: "2-3" },

    // Chiang Rai - Day 4-6 (8 attractions)
    { name: "Wat Rong Khun (White Temple)", lat: 19.8233, lng: 99.7627, icon: "⛩️", city: "Chiang Rai", day: "5" },
    { name: "Wat Rong Suea Ten (Blue Temple)", lat: 19.9234, lng: 99.8419, icon: "🔵", city: "Chiang Rai", day: "5" },
    { name: "Baan Dam Museum (Black House)", lat: 19.9920, lng: 99.8608, icon: "⬛", city: "Chiang Rai", day: "5" },
    { name: "Golden Triangle", lat: 20.3529, lng: 100.0830, icon: "🔺", city: "Chiang Rai", day: "6" },
    { name: "Hall of Opium", lat: 20.3646, lng: 100.0735, icon: "🏛️", city: "Chiang Rai", day: "6" },
    { name: "Mae Sai Border Market", lat: 20.4437, lng: 99.8808, icon: "🛍️", city: "Chiang Rai", day: "6" },
    { name: "Singha Park", lat: 19.8531, lng: 99.7430, icon: "🌳", city: "Chiang Rai", day: "5" },
    { name: "Chiang Rai Clock Tower", lat: 19.9071, lng: 99.8310, icon: "🕐", city: "Chiang Rai", day: "4" },

    // Chiang Mai - Day 7-10 (8 attractions)
    { name: "Doi Suthep Temple", lat: 18.8050, lng: 98.9216, icon: "⛩️", city: "Chiang Mai", day: "8" },
    { name: "Wat Phra Singh", lat: 18.7885, lng: 98.9820, icon: "🛕", city: "Chiang Mai", day: "8" },
    { name: "Wat Chedi Luang", lat: 18.7870, lng: 98.9866, icon: "🛕", city: "Chiang Mai", day: "7-8" },
    { name: "Wat Chiang Man", lat: 18.7938, lng: 98.9893, icon: "🛕", city: "Chiang Mai", day: "8" },
    { name: "Elephant Nature Park", lat: 19.2144, lng: 98.8590, icon: "🐘", city: "Chiang Mai", day: "9" },
    { name: "Chiang Mai Night Bazaar", lat: 18.7852, lng: 99.0003, icon: "🛍️", city: "Chiang Mai", day: "8" },
    { name: "Nimman Road", lat: 18.7958, lng: 98.9657, icon: "🍜", city: "Chiang Mai", day: "8-10" },
    { name: "Warorot Market", lat: 18.7898, lng: 99.0010, icon: "🛍️", city: "Chiang Mai", day: "10" },

    // Phi Phi Islands (Day trip from Ao Nam Mao - Day 12) (6 attractions)
    { name: "Maya Bay", lat: 7.6767, lng: 98.7664, icon: "🏝️", city: "Phi Phi", day: "12" },
    { name: "Pileh Lagoon", lat: 7.6834, lng: 98.7675, icon: "💎", city: "Phi Phi", day: "12" },
    { name: "Viking Cave", lat: 7.6911, lng: 98.7668, icon: "⛰️", city: "Phi Phi", day: "12" },
    { name: "Bamboo Island (Koh Phai)", lat: 7.7511, lng: 98.7578, icon: "🏝️", city: "Phi Phi", day: "12" },
    { name: "Monkey Bay", lat: 7.7214, lng: 98.7697, icon: "🐒", city: "Phi Phi", day: "12" },
    { name: "Phi Phi Don (Tonsai Bay)", lat: 7.7387, lng: 98.7699, icon: "🏝️", city: "Phi Phi", day: "12" },

    // Hong Islands (Day trip from Ao Nam Mao - Day 13) (3 attractions)
    { name: "Hong Islands (Koh Hong)", lat: 8.0781, lng: 98.6783, icon: "💚", city: "Hong Islands", day: "13" },
    { name: "Hong Lagoon (Emerald)", lat: 8.0793, lng: 98.6809, icon: "💎", city: "Hong Islands", day: "13" },
    { name: "Lading Island", lat: 8.0450, lng: 98.6980, icon: "🏝️", city: "Hong Islands", day: "13" },

    // Ao Thalane Mangroves (Day 13) (1 attraction)
    { name: "Ao Thalane Mangroves", lat: 8.1432, lng: 98.7469, icon: "🌴", city: "Krabi", day: "13" },

    // 4 Islands Tour (Day trip from Ao Nang Beach - Day 14) (5 attractions)
    { name: "Phra Nang Cave Beach", lat: 8.0059, lng: 98.8375, icon: "⛰️", city: "Krabi", day: "14-15" },
    { name: "Chicken Island (Koh Kai)", lat: 7.9533, lng: 98.8064, icon: "🐓", city: "Krabi", day: "14" },
    { name: "Tup Island (Koh Tup)", lat: 7.9608, lng: 98.8121, icon: "🏝️", city: "Krabi", day: "14" },
    { name: "Mor Island (Sandbar)", lat: 7.9609, lng: 98.8098, icon: "🏖️", city: "Krabi", day: "14" },
    { name: "Poda Island (Koh Poda)", lat: 7.9710, lng: 98.8094, icon: "🏝️", city: "Krabi", day: "14-17" },

    // Railay Beach (Day 15) (3 attractions)
    { name: "Railay West Beach", lat: 8.0132, lng: 98.8371, icon: "🏖️", city: "Railay", day: "15" },
    { name: "Railay East Beach", lat: 8.0103, lng: 98.8413, icon: "🏖️", city: "Railay", day: "15" },
    { name: "Railay Viewpoint", lat: 8.0126, lng: 98.8433, icon: "👁️", city: "Railay", day: "15" },

    // Bor Thor Caves (Day 16) (2 attractions)
    { name: "Bor Thor Sea Caves", lat: 8.1432, lng: 98.7469, icon: "🛶", city: "Krabi", day: "16" },
    { name: "Tha Pom Khlong Song Nam", lat: 8.2136, lng: 98.7757, icon: "💚", city: "Krabi", day: "16" },

    // Ao Nang Area (2 attractions)
    { name: "Ao Nang Beach", lat: 8.0292, lng: 98.8240, icon: "🏖️", city: "Krabi", day: "14-17" },
    { name: "Ao Nang Night Market", lat: 8.0426, lng: 98.8115, icon: "🛍️", city: "Krabi", day: "14" },

    // Hidden beaches (Day 17) (2 attractions)
    { name: "Koh Poda Backside", lat: 7.9750, lng: 98.8150, icon: "🏝️", city: "Krabi", day: "17" },
    { name: "Koh Ya Wa Sam", lat: 8.0050, lng: 98.8380, icon: "🏝️", city: "Krabi", day: "17" }
  ];

  // Destroy existing map if it exists
  if (mapInstance) {
    mapInstance.remove();
    mapInstance = null;
  }

  // Initialize map
  mapInstance = L.map('map').setView([13.5, 100.5], 6);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors © CARTO',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(mapInstance);

  // Create custom icon function for main stops
  const createIcon = (num, color) => {
    return L.divIcon({
      html: `<div style="background: ${color}; color: white; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; font-weight: bold; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">${num}</div>`,
      iconSize: [40, 40],
      className: 'custom-icon'
    });
  };

  // Create custom icon for attractions
  const createAttractionIcon = (emoji) => {
    return L.divIcon({
      html: `<div style="background: white; border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; font-size: 16px; border: 2px solid #667eea; box-shadow: 0 1px 4px rgba(0,0,0,0.3);">${emoji}</div>`,
      iconSize: [28, 28],
      className: 'attraction-icon'
    });
  };

  // Add main stop markers
  mapMarkers = [];
  stops.forEach((stop, idx) => {
    const marker = L.marker([stop.lat, stop.lng], {
      icon: createIcon(stop.num, colors[idx])
    }).bindTooltip(`
      <div style="font-family: Arial; font-size: 12px; min-width: 250px; max-width: 350px;">
        <h3 style="margin: 0 0 10px 0; color: #2c3e50;">${stop.icon} ${stop.name}</h3>
        <p style="margin: 5px 0;"><strong>When:</strong> ${stop.dates}</p>
        <p style="margin: 5px 0;"><strong>Stay:</strong> ${stop.days}</p>
        <p style="margin: 5px 0;"><strong>Things:</strong> ${stop.activities}</p>
      </div>
    `, { permanent: false, direction: 'top' }).addTo(mapInstance);
    mapMarkers.push(marker);
  });

  // Add attraction markers
  attractions.forEach(attraction => {
    const marker = L.marker([attraction.lat, attraction.lng], {
      icon: createAttractionIcon(attraction.icon)
    }).bindTooltip(`
      <div style="font-family: Arial; font-size: 12px; min-width: 200px; max-width: 280px;">
        <h4 style="margin: 0 0 8px 0; color: #667eea;">${attraction.icon} ${attraction.name}</h4>
        <p style="margin: 0; color: #666; font-size: 11px;">📍 ${attraction.city}</p>
        <p style="margin: 4px 0 0 0; color: #999; font-size: 10px;">📅 Day ${attraction.day}</p>
      </div>
    `, { permanent: false, direction: 'top' }).addTo(mapInstance);
    mapMarkers.push(marker);
  });

  // Draw route lines
  const routeCoordinates = stops.map(s => [s.lat, s.lng]);
  L.polyline(routeCoordinates, {
    color: '#667eea',
    weight: 3,
    opacity: 0.6,
    dashArray: '10, 5'
  }).addTo(mapInstance);

  // Create stops list
  const stopsList = document.getElementById('mapStopsList');
  if (stopsList) {
    stopsList.innerHTML = stops.map((stop, idx) => {
      let html = `
        <div class="map-stop" data-stop-index="${idx}">
          <div class="map-stop-number">${stop.num}</div>
          <span class="map-stop-name">${stop.icon} ${stop.name}</span>
          <span class="badge badge-info" style="margin-left: 8px;">${stop.days}</span>
          <div class="map-stop-date">${stop.dates}</div>
          <div class="map-stop-activities">${stop.activities}</div>
        </div>
      `;

      if (idx < stops.length - 1) {
        const nextStop = stops[idx + 1];
        // Add transport icons
        let transportIcon = '✈️';
        if (stop.num === 2) transportIcon = '🚌'; // Chiang Rai to Chiang Mai by bus
        if (stop.num === 4) transportIcon = '🚕'; // Ao Nam Mao to Ao Nang Beach by taxi
        html += `<div class="map-route-info">${transportIcon} → ${nextStop.name}</div>`;
      }

      return html;
    }).join('');

    // Add click handlers to stops
    document.querySelectorAll('.map-stop').forEach((stopEl, idx) => {
      stopEl.addEventListener('click', () => {
        mapInstance.setView([stops[idx].lat, stops[idx].lng], 9);
        mapMarkers[idx].openPopup();

        document.querySelectorAll('.map-stop').forEach(s => s.classList.remove('active'));
        stopEl.classList.add('active');
      });
    });
  }

  // Fit map to show all markers
  const group = new L.featureGroup(mapMarkers);
  mapInstance.fitBounds(group.getBounds().pad(0.1));
}

// Helper functions
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function navigateDay(direction) {
  const newDay = selectedDay + direction;
  if (newDay >= 1 && newDay <= 19) {
    selectedDay = newDay;
    renderDayList();
    renderItineraryView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Mobile day selector function
function selectDay(day) {
  selectedDay = parseInt(day);
  renderDayList();
  renderItineraryView();

  // Scroll to top of page
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Scroll the selected day button into view (center it)
  setTimeout(() => {
    const activeBtn = document.querySelector('.mobile-day-btn.active');
    if (activeBtn) {
      activeBtn.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, 100);
}

function togglePackingItem(itemId) {
  checkedItems[itemId] = !checkedItems[itemId];
}

// Image carousel functions
let currentImageIndex = {};
let carouselTimer = null;

function startAutoPlay(day) {
  // Clear any existing timer
  if (carouselTimer) {
    clearInterval(carouselTimer);
  }

  // Get the carousel for this day
  const carousel = document.querySelector(`#carouselImages-${day}`);
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.carousel-slide');
  if (slides.length <= 1) return; // Don't auto-play if only one image

  // Start auto-advancing every 3 seconds
  carouselTimer = setInterval(() => {
    changeImage(day, 1);
  }, 3000);
}

function stopAutoPlay() {
  if (carouselTimer) {
    clearInterval(carouselTimer);
    carouselTimer = null;
  }
}

function changeImage(day, direction) {
  const slides = document.querySelectorAll(`#carouselImages-${day} .carousel-slide`);
  const dots = document.querySelectorAll('.carousel-dots .dot');

  if (!currentImageIndex[day]) currentImageIndex[day] = 0;

  slides[currentImageIndex[day]].classList.remove('active');
  dots[currentImageIndex[day]].classList.remove('active');

  currentImageIndex[day] = (currentImageIndex[day] + direction + slides.length) % slides.length;

  slides[currentImageIndex[day]].classList.add('active');
  dots[currentImageIndex[day]].classList.add('active');

  // Restart auto-play timer after manual navigation
  stopAutoPlay();
  startAutoPlay(day);
}

function goToImage(day, index) {
  const slides = document.querySelectorAll(`#carouselImages-${day} .carousel-slide`);
  const dots = document.querySelectorAll('.carousel-dots .dot');

  if (!currentImageIndex[day]) currentImageIndex[day] = 0;

  slides[currentImageIndex[day]].classList.remove('active');
  dots[currentImageIndex[day]].classList.remove('active');

  currentImageIndex[day] = index;

  slides[currentImageIndex[day]].classList.add('active');
  dots[currentImageIndex[day]].classList.add('active');

  // Restart auto-play timer after manual navigation
  stopAutoPlay();
  startAutoPlay(day);
}

// Accommodation carousel functions (for itinerary view)
const currentAccomImageIndex = {};

function changeAccomImage(day, direction) {
  const slides = document.querySelectorAll(`#accomCarousel-${day} .carousel-slide`);
  const dots = document.querySelectorAll(`#accomCarousel-${day} ~ .carousel-dots .dot`);

  if (!currentAccomImageIndex[day]) currentAccomImageIndex[day] = 0;

  slides[currentAccomImageIndex[day]].classList.remove('active');
  if (dots.length > 0) dots[currentAccomImageIndex[day]].classList.remove('active');

  currentAccomImageIndex[day] = (currentAccomImageIndex[day] + direction + slides.length) % slides.length;

  slides[currentAccomImageIndex[day]].classList.add('active');
  if (dots.length > 0) dots[currentAccomImageIndex[day]].classList.add('active');
}

function goToAccomImage(day, index) {
  const slides = document.querySelectorAll(`#accomCarousel-${day} .carousel-slide`);
  const dots = document.querySelectorAll(`#accomCarousel-${day} ~ .carousel-dots .dot`);

  if (!currentAccomImageIndex[day]) currentAccomImageIndex[day] = 0;

  slides[currentAccomImageIndex[day]].classList.remove('active');
  if (dots.length > 0) dots[currentAccomImageIndex[day]].classList.remove('active');

  currentAccomImageIndex[day] = index;

  slides[currentAccomImageIndex[day]].classList.add('active');
  if (dots.length > 0) dots[currentAccomImageIndex[day]].classList.add('active');
}

// Accommodation carousel functions (for accommodations overview view)
const currentOverviewAccomImageIndex = {};

function changeOverviewAccomImage(accomKey, direction) {
  const slides = document.querySelectorAll(`#accom-overview-${accomKey} .carousel-slide`);
  const dots = document.querySelectorAll(`#accom-overview-${accomKey} ~ .carousel-dots .dot`);

  if (!currentOverviewAccomImageIndex[accomKey]) currentOverviewAccomImageIndex[accomKey] = 0;

  slides[currentOverviewAccomImageIndex[accomKey]].classList.remove('active');
  if (dots.length > 0) dots[currentOverviewAccomImageIndex[accomKey]].classList.remove('active');

  currentOverviewAccomImageIndex[accomKey] = (currentOverviewAccomImageIndex[accomKey] + direction + slides.length) % slides.length;

  slides[currentOverviewAccomImageIndex[accomKey]].classList.add('active');
  if (dots.length > 0) dots[currentOverviewAccomImageIndex[accomKey]].classList.add('active');
}

function goToOverviewAccomImage(accomKey, index) {
  const slides = document.querySelectorAll(`#accom-overview-${accomKey} .carousel-slide`);
  const dots = document.querySelectorAll(`#accom-overview-${accomKey} ~ .carousel-dots .dot`);

  if (!currentOverviewAccomImageIndex[accomKey]) currentOverviewAccomImageIndex[accomKey] = 0;

  slides[currentOverviewAccomImageIndex[accomKey]].classList.remove('active');
  if (dots.length > 0) dots[currentOverviewAccomImageIndex[accomKey]].classList.remove('active');

  currentOverviewAccomImageIndex[accomKey] = index;

  slides[currentOverviewAccomImageIndex[accomKey]].classList.add('active');
  if (dots.length > 0) dots[currentOverviewAccomImageIndex[accomKey]].classList.add('active');
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
