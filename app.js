// Trip Data
const tripData = {
  cities: [
    { name: 'Bangkok', emoji: '🏛️', color: '#667eea', nights: 2, region: 'Central' },
    { name: 'Chiang Mai', emoji: '🌳', color: '#764ba2', nights: 3, region: 'North' },
    { name: 'Chiang Rai', emoji: '⛰️', color: '#f093fb', nights: 2, region: 'North' },
    { name: 'Krabi', emoji: '🏖️', color: '#4facfe', nights: 4, region: 'South' },
    { name: 'Khao Sok', emoji: '🌴', color: '#00f2fe', nights: 1, region: 'South' },
    { name: 'Phi Phi', emoji: '🏝️', color: '#43e97b', nights: 2, region: 'South' },
    { name: 'Koh Samui', emoji: '🌊', color: '#fa709a', nights: 2, region: 'South' }
  ],
  
  itinerary: [
    {
      day: 1, date: '2026-02-06', city: 'Bangkok',
      morning: 'Flight Riga 08:40 → Bangkok ~21:00 (with connection)',
      afternoon: 'Arrival late evening, check into hotel',
      evening: 'Rest at hotel, early sleep for jet lag',
      activities: ['Long flight', 'Hotel check-in'],
      transport: 'International flight',
      budget_eur: '500-700', accommodation_eur: '50-80',
      tips: 'Sleep well to recover from jet lag',
      packing: ['Comfortable clothes', 'Toiletries']
    },
    {
      day: 2, date: '2026-02-07', city: 'Bangkok',
      morning: 'Grand Palace (9:00-15:00) - mandatory dress code: covered shoulders & knees',
      afternoon: 'Wat Pho (Reclining Buddha), Wat Arun',
      evening: 'Chao Phraya River cruise, Night Bazaar (Chatuchak/Rot Fai)',
      activities: ['Grand Palace', 'Wat Pho', 'Wat Arun', 'River cruise', 'Night market'],
      transport: 'Local taxis/BTS',
      budget_eur: '30-40', accommodation_eur: '50-80',
      tips: 'Book Grand Palace early, dress appropriately, bring water',
      packing: ['Light clothes', 'Sunscreen', 'Hat']
    },
    {
      day: 3, date: '2026-02-08', city: 'Bangkok → Chiang Mai',
      morning: 'Floating market (7:00-10:00) - Damnoen Saduak or Amphawa',
      afternoon: 'Store luggage at Suvarnabhumi (100 THB/day), flight to Chiang Mai 13:00',
      evening: 'Arrive Chiang Mai 14:20, settle in hotel',
      activities: ['Floating market', 'Flight to north'],
      transport: 'Domestic flight BKK→CNX (1h 20m)',
      budget_eur: '40-50', accommodation_eur: '40-70',
      tips: 'Early morning for floating market, book flight in advance',
      packing: ['Camera', 'Light jacket']
    },
    {
      day: 4, date: '2026-02-09', city: 'Chiang Mai',
      morning: 'Doi Suthep temple - mountain temple with 400 steps, great city views',
      afternoon: 'Old City exploration - Wat Chedi Luang, Wat Phra Singh',
      evening: 'Night Bazaar shopping, local food sampling',
      activities: ['Doi Suthep', 'Old temples', 'Night market', 'Local cuisine'],
      transport: 'Taxis/tuk-tuks',
      budget_eur: '20-30', accommodation_eur: '40-70',
      tips: 'Wear comfortable hiking shoes for Doi Suthep, lots of stairs',
      packing: ['Hiking shoes', 'Water bottle']
    },
    {
      day: 5, date: '2026-02-10', city: 'Chiang Mai',
      morning: 'Elephant Nature Park - ethical elephant sanctuary (NO riding)',
      afternoon: 'Elephant feeding, bathing, walking with elephants',
      evening: 'Thai cooking class or local café exploration',
      activities: ['Elephant sanctuary', 'Cooking class', 'Local culture'],
      transport: 'Tour pickup/drop-off',
      budget_eur: '40-50', accommodation_eur: '40-70',
      tips: 'Book ethical elephant sanctuary in advance, bring change of clothes',
      packing: ['Swimwear', 'Quick-dry clothes']
    },
    {
      day: 6, date: '2026-02-11', city: 'Chiang Mai → Chiang Rai',
      morning: 'Bus from Chiang Mai (7:00-11:00, 3-4 hours)',
      afternoon: 'White Temple (Wat Rong Khun) - stunning all-white temple',
      evening: 'Blue Temple (Wat Rong Suea Ten), hot springs',
      activities: ['Bus journey', 'White Temple', 'Blue Temple', 'Hot springs'],
      transport: 'Bus (Green Bus or local), taxis',
      budget_eur: '25-35', accommodation_eur: '40-60',
      tips: 'White Temple is very popular, arrive early to avoid crowds',
      packing: ['Comfortable bus clothes']
    },
    {
      day: 7, date: '2026-02-12', city: 'Chiang Rai',
      morning: 'FULL DAY JUNGLE TREKKING (~10km) starting 7:00 AM',
      afternoon: 'Trekking through bamboo forests, Lahu/Akha hill tribe villages, rice paddies',
      evening: 'Huai Kaew waterfall, bamboo cooking, hot springs for rest',
      activities: ['10km jungle trek', 'Hill tribe visit', 'Waterfall', 'Bamboo cooking', 'Hot springs'],
      transport: 'Hiking',
      budget_eur: '50-60', accommodation_eur: '40-60',
      tips: 'Bring lots of water, insect repellent ESSENTIAL, wear hiking shoes',
      packing: ['Hiking boots', 'Insect repellent', 'Water', 'Snacks', 'Quick-dry shirt'],
      difficulty: 'Medium - Long hike in tropical heat'
    },
    {
      day: 8, date: '2026-02-13', city: 'Chiang Rai → Bangkok → Krabi',
      morning: 'Flight Chiang Rai → Bangkok (11:00-13:15)',
      afternoon: 'Connection flight Bangkok → Krabi (15:30-16:55, 1h 25m)',
      evening: 'Arrive Krabi 17:00, settle in Ao Nang area hotel',
      activities: ['Two flights', 'Hub transition'],
      transport: 'Domestic flights',
      budget_eur: '80-100', accommodation_eur: '60-100',
      tips: 'Check baggage allowance for connections',
      packing: ['Light layer for flights']
    },
    {
      day: 9, date: '2026-02-14', city: 'Krabi',
      morning: 'Boat to Railay Beach (only accessible by boat!)',
      afternoon: 'Railay West (turquoise waters, rock formations) or Railay East (quiet, many cafés)',
      evening: 'Kayaking, Phra Nang Cave Shrine with stalactites, sunset',
      activities: ['Railay Beach', 'Kayaking', 'Cave shrine', 'Rock climbing viewpoint'],
      transport: 'Long-tail boats',
      budget_eur: '30-40', accommodation_eur: '60-100',
      tips: 'Railay is magical, bring underwater camera for snorkeling',
      packing: ['Swimwear', 'Beach towel', 'Snorkel gear']
    },
    {
      day: 10, date: '2026-02-15', city: 'Khao Sok',
      morning: 'Minivan from Krabi to Khao Sok (8:00-10:30, 2.5 hours)',
      afternoon: 'Check into TREEHOUSE accommodation (Our Jungle House or similar)',
      evening: 'Jungle trekking, wildlife watching, jungle sounds night',
      activities: ['Khao Sok arrival', 'Treehouse stay', 'Jungle hike', 'Wildlife'],
      transport: 'Minivan shuttle',
      budget_eur: '60-80', accommodation_eur: '60-120',
      tips: 'This is the MUST-DO jungle experience, bring insect repellent, sleep early',
      packing: ['Light clothes', 'Flashlight', 'Insect repellent'],
      accommodation_type: 'Treehouse - Unique experience!'
    },
    {
      day: 11, date: '2026-02-16', city: 'Khao Sok',
      morning: 'Cheow Lan Lake - stunning limestone cliffs over emerald water',
      afternoon: 'FLOATING BUNGALOWS experience - sleep on the lake!',
      evening: 'Kayaking, swimming, sunset over limestone cliffs, return to Krabi late (~19:00)',
      activities: ['Cheow Lan Lake', 'Kayaking', 'Floating bungalows', 'Swimming'],
      transport: 'Minivan return to Krabi',
      budget_eur: '30-40', accommodation_eur: '60-100',
      tips: 'Cheow Lan Lake is one of Thailand\'s best kept secrets, bring camera',
      packing: ['Camera', 'Dry bag'],
      special_note: 'Sleep on floating bungalows - unforgettable!'
    },
    {
      day: 12, date: '2026-02-17', city: 'Krabi → Phi Phi',
      morning: 'Ferry from Krabi to Phi Phi (10:00-11:30, 1.5 hours)',
      afternoon: 'Phi Phi Don island exploration, Tonsai Beach, long-tail boats',
      evening: 'Snorkeling, sunset, beach dinner',
      activities: ['Ferry ride', 'Phi Phi island arrival', 'Beach time', 'Snorkeling'],
      transport: 'Ferry from Ao Nang',
      budget_eur: '40-60', accommodation_eur: '60-100',
      tips: 'Phi Phi is touristy but beautiful, book ferry in advance',
      packing: ['Snorkel gear', 'Underwater camera']
    },
    {
      day: 13, date: '2026-02-18', city: 'Phi Phi',
      morning: 'ISLAND HOPPING BOAT TOUR to Phi Phi Leh',
      afternoon: 'Maya Bay (from \'The Beach\' movie), Viking Cave, Pileh Lagoon (blue lagoon!)',
      evening: 'Snorkeling with tropical fish, relaxation on beach',
      activities: ['Maya Bay', 'Viking Cave', 'Pileh Lagoon', 'Snorkeling', 'Beach relaxation'],
      transport: 'Long-tail boat tour',
      budget_eur: '40-50', accommodation_eur: '60-100',
      tips: 'Maya Bay can be crowded, the blue lagoon is worth it, bring underwater camera',
      packing: ['Snorkel gear', 'Rash guard', 'Sunscreen SPF 50+']
    },
    {
      day: 14, date: '2026-02-19', city: 'Phi Phi → Koh Samui',
      morning: 'Ferry Phi Phi → Phuket (10:00-11:30)',
      afternoon: 'Flight Phuket → Koh Samui (12:30-13:30)',
      evening: 'Arrive Koh Samui, settle in Chaweng or Lamai Beach hotel',
      activities: ['Ferry + Flight', 'Island transition'],
      transport: 'Ferry + Domestic flight',
      budget_eur: '80-120', accommodation_eur: '60-100',
      tips: 'Tight timing, have luggage at ready, don\'t miss flight',
      packing: ['Small daypack']
    },
    {
      day: 15, date: '2026-02-20', city: 'Koh Samui',
      morning: 'Big Buddha (Wat Phra Yai) - mountaintop temple with massive Buddha',
      afternoon: 'Chaweng Beach (lively) or Lamai Beach (more relaxed) or Silver Beach (Crystal Bay - most beautiful)',
      evening: 'Thai massage, seafood dinner, sunset',
      activities: ['Big Buddha', 'Beaches', 'Swimming', 'Massage', 'Local food'],
      transport: 'Taxis/motorbike rentals',
      budget_eur: '30-40', accommodation_eur: '60-100',
      tips: 'Silver Beach (Crystal Bay) is worth the trip for best sunset',
      packing: ['Casual clothes']
    },
    {
      day: 16, date: '2026-02-21', city: 'Koh Samui → Bangkok',
      morning: 'Flight Koh Samui → Bangkok (10:00-11:30)',
      afternoon: 'Roof-top bar, last-minute shopping at Emporium or CentralWorld',
      evening: 'Luxury dinner or traditional Thai massage',
      activities: ['Flight', 'Last shopping', 'Roof-top bars', 'Dinner', 'City exploration'],
      transport: 'Flight + Grab/taxi',
      budget_eur: '40-60', accommodation_eur: '40-60',
      tips: 'Last night in Thailand - enjoy! Hotel near airport for early flight',
      packing: ['Casual/formal clothes for dinner']
    },
    {
      day: 17, date: '2026-02-22', city: 'Bangkok',
      morning: 'EARLY WAKE UP 3:30 AM for 5:50 AM flight!',
      afternoon: 'Flight Bangkok → Riga (05:50), arrives day 2 ~13:00-15:00',
      evening: 'Home in Latvia!',
      activities: ['Early morning flight', 'Journey home'],
      transport: 'International flight',
      budget_eur: '500-700', accommodation_eur: '0',
      tips: 'Set multiple alarms! Arrange hotel near airport (BKK has airport hotels)',
      special_note: 'LONG FLIGHT HOME - bring entertainment!'
    }
  ],
  
  budgetBreakdown: {
    'International Flights (Roundtrip)': '€500-700',
    'Domestic Flights': '€150-250',
    'Accommodation (16 nights)': '€800-1,280',
    'Food & Dining (17 days)': '€250-340',
    'Activities & Entrance Fees': '€200-300',
    'Local Transport': '€150-200',
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
    '🥾 Hiking Gear': [
      'Hiking boots (Chiang Rai trek)',
      'Quick-dry shirt',
      'Hiking shorts',
      'Water bottle',
      'Backpack (20-30L)'
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
    }
  ]
};

// State management
let currentView = 'itinerary';
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
      renderDayList();
      if (currentView === 'itinerary') {
        renderItineraryView();
      }
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
  switch (currentView) {
    case 'itinerary':
      renderItineraryView();
      break;
    case 'budget':
      renderBudgetView();
      break;
    case 'packing':
      renderPackingView();
      break;
    case 'activities':
      renderActivitiesView();
      break;
    case 'tips':
      renderTipsView();
      break;
  }
}

// Render itinerary view
function renderItineraryView() {
  const day = tripData.itinerary.find(d => d.day === selectedDay);
  const color = getCityColor(day.city);
  const emoji = getCityEmoji(day.city);
  
  const content = document.getElementById('mainContent');
  content.innerHTML = `
    <div class="detail-card">
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
      
      <div class="navigation-buttons">
        <button class="btn" onclick="navigateDay(-1)" ${selectedDay === 1 ? 'disabled' : ''}>
          ← Previous Day
        </button>
        <button class="btn" onclick="navigateDay(1)" ${selectedDay === 17 ? 'disabled' : ''}>
          Next Day →
        </button>
      </div>
    </div>
  `;
}

// Render budget view
function renderBudgetView() {
  const content = document.getElementById('mainContent');
  
  const totalMin = 8000;
  const totalMax = 12080;
  const perPersonMin = 2000;
  const perPersonMax = 3020;
  
  content.innerHTML = `
    <div class="detail-card">
      <div class="detail-header">
        <h2>💰 Budget Breakdown</h2>
        <p style="color: var(--color-text-secondary);">Complete financial overview for 4 people</p>
      </div>
      
      <div class="budget-grid">
        <div class="budget-card">
          <h4>Total Budget</h4>
          <div class="amount">€${totalMin.toLocaleString()}-${totalMax.toLocaleString()}</div>
        </div>
        <div class="budget-card">
          <h4>Per Person</h4>
          <div class="amount">€${perPersonMin.toLocaleString()}-${perPersonMax.toLocaleString()}</div>
        </div>
        <div class="budget-card">
          <h4>Daily Average</h4>
          <div class="amount">€${Math.round(perPersonMin/17)}-${Math.round(perPersonMax/17)}</div>
        </div>
        <div class="budget-card">
          <h4>Trip Duration</h4>
          <div class="amount">17 Days</div>
        </div>
      </div>
      
      <div class="detail-section">
        <h3>📊 Cost Breakdown</h3>
        <table class="budget-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Per Person</th>
              <th>Total (4 people)</th>
            </tr>
          </thead>
          <tbody>
            ${Object.entries(tripData.budgetBreakdown).map(([category, range]) => {
              if (category.includes('Total')) return '';
              const [min, max] = range.replace('€', '').split('-');
              const totalMin = parseInt(min) * 4;
              const totalMax = parseInt(max) * 4;
              return `
                <tr>
                  <td>${category}</td>
                  <td>${range}</td>
                  <td>€${totalMin}-${totalMax}</td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
      
      <div class="detail-section">
        <h3>💡 Ways to Save Money</h3>
        <ul>
          <li>Book flights 2-4 weeks in advance for best prices</li>
          <li>Eat at street food stalls (€2-5) instead of restaurants (€10-20)</li>
          <li>Use public transport and Grab instead of taxis</li>
          <li>Book accommodation with free breakfast included</li>
          <li>Buy water and snacks from 7-Eleven instead of tourist shops</li>
          <li>Book activities directly instead of through hotel concierge</li>
          <li>Travel during shoulder season (February is perfect!)</li>
          <li>Share rooms and split costs as couples</li>
        </ul>
      </div>
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
          <li>Wear your hiking boots on the plane to save luggage space</li>
          <li>Bring a reusable water bottle to save money and reduce plastic</li>
          <li>Pack a separate bag for dirty/wet clothes</li>
          <li>Check airline baggage allowance before you fly</li>
        </ul>
      </div>
    </div>
  `;
}

// Render activities view
function renderActivitiesView() {
  const content = document.getElementById('mainContent');
  
  const citiesWithActivities = [
    {
      name: 'Bangkok',
      emoji: '🏛️',
      color: '#667eea',
      activities: [
        { name: 'Grand Palace', duration: '3-4 hours', budget: '€10-15', difficulty: 'Easy', description: 'Stunning royal palace complex with intricate Thai architecture. Dress code strictly enforced.' },
        { name: 'Wat Pho & Wat Arun', duration: '2-3 hours', budget: '€5-10', difficulty: 'Easy', description: 'Famous temples with the Reclining Buddha and Temple of Dawn across the river.' },
        { name: 'Floating Market', duration: '2-3 hours', budget: '€5-10', difficulty: 'Easy', description: 'Traditional market on boats. Visit early morning (7-10 AM) for best experience.' },
        { name: 'Night Markets', duration: '2-4 hours', budget: '€10-20', difficulty: 'Easy', description: 'Shopping, food, and entertainment. Chatuchak and Rot Fai are the best.' }
      ]
    },
    {
      name: 'Chiang Mai',
      emoji: '🌳',
      color: '#764ba2',
      activities: [
        { name: 'Doi Suthep Temple', duration: '3 hours', budget: '€5-10', difficulty: 'Medium', description: 'Mountain temple with 400 steps. Stunning city views from the top.' },
        { name: 'Elephant Sanctuary', duration: 'Full day', budget: '€40-50', difficulty: 'Easy', description: 'Ethical elephant experience - feeding, bathing, walking. NO RIDING!' },
        { name: 'Old City Temples', duration: '3-4 hours', budget: '€5-10', difficulty: 'Easy', description: 'Explore Wat Chedi Luang and Wat Phra Singh in the historic center.' },
        { name: 'Night Bazaar', duration: '2-3 hours', budget: '€10-20', difficulty: 'Easy', description: 'Shopping, handicrafts, and street food in the heart of the city.' }
      ]
    },
    {
      name: 'Chiang Rai',
      emoji: '⛰️',
      color: '#f093fb',
      activities: [
        { name: 'White Temple', duration: '2 hours', budget: '€2-5', difficulty: 'Easy', description: 'Stunning all-white contemporary temple with intricate mirror decorations.' },
        { name: 'Blue Temple', duration: '1 hour', budget: '€2-5', difficulty: 'Easy', description: 'Vibrant blue temple with golden decorations inside and out.' },
        { name: '10km Jungle Trek', duration: 'Full day', budget: '€50-60', difficulty: 'Hard', description: 'Challenging trek through bamboo forests, hill tribe villages, and waterfalls.' }
      ]
    },
    {
      name: 'Krabi',
      emoji: '🏖️',
      color: '#4facfe',
      activities: [
        { name: 'Railay Beach', duration: 'Full day', budget: '€20-30', difficulty: 'Easy', description: 'Stunning beach accessible only by boat. Perfect for kayaking and rock climbing.' },
        { name: 'Phra Nang Cave', duration: '1-2 hours', budget: 'Free', difficulty: 'Easy', description: 'Cave shrine with impressive stalactites on beautiful Phra Nang Beach.' },
        { name: 'Island Hopping', duration: 'Full day', budget: '€30-40', difficulty: 'Easy', description: 'Visit 4 Islands - Poda, Chicken Island, Tup Island, and Phra Nang Cave.' }
      ]
    },
    {
      name: 'Khao Sok',
      emoji: '🌴',
      color: '#00f2fe',
      activities: [
        { name: 'Treehouse Stay', duration: 'Overnight', budget: '€60-120', difficulty: 'Easy', description: 'Sleep in a treehouse in the jungle - unique and unforgettable experience!' },
        { name: 'Cheow Lan Lake', duration: 'Full day', budget: '€30-40', difficulty: 'Easy', description: 'Stunning emerald lake with limestone cliffs. Floating bungalows available.' },
        { name: 'Jungle Trekking', duration: '2-3 hours', budget: '€10-20', difficulty: 'Medium', description: 'Trek through ancient rainforest looking for wildlife and waterfalls.' }
      ]
    },
    {
      name: 'Phi Phi Islands',
      emoji: '🏝️',
      color: '#43e97b',
      activities: [
        { name: 'Maya Bay', duration: '2-3 hours', budget: '€20-30', difficulty: 'Easy', description: 'Famous beach from "The Beach" movie. Can be crowded but worth it.' },
        { name: 'Pileh Lagoon', duration: '1-2 hours', budget: '€15-20', difficulty: 'Easy', description: 'Stunning blue lagoon surrounded by cliffs. Perfect for swimming and photos.' },
        { name: 'Viking Cave', duration: '30 min', budget: '€10', difficulty: 'Easy', description: 'Cave with ancient paintings and bird nest harvesting.' },
        { name: 'Snorkeling', duration: '2-3 hours', budget: '€20-30', difficulty: 'Easy', description: 'Incredible marine life and coral reefs around the islands.' }
      ]
    },
    {
      name: 'Koh Samui',
      emoji: '🌊',
      color: '#fa709a',
      activities: [
        { name: 'Big Buddha', duration: '1-2 hours', budget: 'Free', difficulty: 'Easy', description: 'Massive 12-meter Buddha statue on a small island connected by causeway.' },
        { name: 'Chaweng Beach', duration: 'Half day', budget: '€10-20', difficulty: 'Easy', description: 'Most popular beach with restaurants, bars, and water sports.' },
        { name: 'Silver Beach', duration: 'Half day', budget: '€5-10', difficulty: 'Easy', description: 'Crystal Bay - most beautiful beach for sunset and swimming.' },
        { name: 'Thai Massage', duration: '1-2 hours', budget: '€10-15', difficulty: 'Easy', description: 'Traditional Thai massage - perfect way to relax after adventures.' }
      ]
    }
  ];
  
  content.innerHTML = `
    <div class="detail-card">
      <div class="detail-header">
        <h2>🎯 Activities by City</h2>
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
                  <span class="badge badge-success">💰 ${activity.budget}</span>
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
          <li>10km Jungle Trekking - meet hill tribes, see waterfalls</li>
          <li>Khao Sok Treehouse - sleep in the jungle!</li>
          <li>Cheow Lan Lake - floating bungalows on emerald water</li>
          <li>Maya Bay - 'The Beach' movie location</li>
          <li>Phi Phi snorkeling - tropical fish everywhere</li>
          <li>Railay Beach - accessible only by boat</li>
          <li>Big Buddha - Koh Samui's icon</li>
          <li>Elephant sanctuary - ethical wildlife experience</li>
          <li>Thai cuisine - some of world's best food</li>
        </ul>
      </div>
    </div>
  `;
}

// Helper functions
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function navigateDay(direction) {
  const newDay = selectedDay + direction;
  if (newDay >= 1 && newDay <= 17) {
    selectedDay = newDay;
    renderDayList();
    renderItineraryView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function togglePackingItem(itemId) {
  checkedItems[itemId] = !checkedItems[itemId];
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}