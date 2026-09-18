import type { Attraction, TransitHub } from '../types';

export const ATTRACTIONS: Attraction[] = [
  {
    id: 'guruvayur-sri-krishna-temple',
    name: 'Guruvayur Sri Krishna Temple',
    subtitle: 'Bhuloka Vaikuntha — The Sacred Abode',
    category: 'temple',
    image: '/images/attractions/guruvayur-temple.jpg',
    shortDescription:
      'One of India’s most revered pilgrimage destinations, dedicated to Lord Guruvayurappan (Lord Krishna in his childhood Chaturbhuja form).',
    fullDescription:
      'Famed as Bhuloka Vaikuntha (Holy Abode of Lord Vishnu on Earth), Guruvayur Temple has been drawing millions of devotees for centuries. Devotees participate in early morning Nirmalya Darshanam, witness the golden flagstaff (Dwajasthambham), traditional deepasthambham oil lamps, and divine temple rituals performed with Vedic devotion.',
    distanceNotice: 'Distance to be confirmed',
    approxDriveTime: 'Distance to be confirmed',
    googleMapsUrl: 'https://maps.google.com/?q=Guruvayur+Temple+Kerala',
    keyFeatures: [
      'Nirmalya Darshanam & Deeparadhana rituals',
      'Strict traditional Kerala temple dress code',
      'Holy Temple Tank (Rudratheertham)',
      'Spiritual heart of Guruvayur town',
    ],
  },
  {
    id: 'punnathur-kotta',
    name: 'Punnathur Kotta (Anakotta)',
    subtitle: 'Historic Heritage Palace & Elephant Sanctuary',
    category: 'culture',
    image: '/images/attractions/punnathur-kotta.jpg',
    shortDescription:
      'A 10-acre heritage palace compound and sanctuary housing the revered temple elephants of Guruvayur Devaswom.',
    fullDescription:
      'Originally a royal palace belonging to the Punnathur Rajas, this expansive shaded grove now cares for the elephants offered by devotees to Lord Guruvayurappan. Visitors can walk through lush pathways observing these majestic gentle giants, their feeding routines, and traditional bath rituals overseen by dedicated mahouts.',
    distanceNotice: 'Distance to be confirmed',
    approxDriveTime: 'Distance to be confirmed',
    googleMapsUrl: 'https://maps.google.com/?q=Punnathur+Kotta+Anakotta+Guruvayur',
    keyFeatures: [
      'Over 40 temple elephants in historic 10-acre palace grove',
      'Traditional Kerala Nalukettu palace structure',
      'Popular educational & family attraction',
    ],
  },
  {
    id: 'parthasarathy-temple',
    name: 'Parthasarathy Temple',
    subtitle: 'Lord Krishna as Arjuna’s Divine Charioteer',
    category: 'temple',
    image: '/images/attractions/parthasarathy-temple.jpg',
    shortDescription:
      'Famous for its chariot-shaped sanctum sanctorum depicting Lord Krishna guiding the warrior Arjuna through the Kurukshetra discourse.',
    fullDescription:
      'Situated within Guruvayur, this distinctive temple features a shrine sculpted intricately in the likeness of a magnificent royal chariot with majestic horses and chariot wheels, representing the Gita Upadesha. The peaceful ambiance offers devotees quiet contemplation away from the heaviest temple queues.',
    distanceNotice: 'Distance to be confirmed',
    approxDriveTime: 'Distance to be confirmed',
    googleMapsUrl: 'https://maps.google.com/?q=Parthasarathy+Temple+Guruvayur',
    keyFeatures: [
      'Unique chariot-styled architecture',
      'Srimad Bhagavad Gita murals and motifs',
      'Tranquil and meditative environment',
    ],
  },
  {
    id: 'mammiyoor-mahadeva-temple',
    name: 'Mammiyoor Sri Mahadeva Temple',
    subtitle: 'Revered Shiva Temple of Antiquity',
    category: 'temple',
    image: '/images/attractions/mammiyoor-temple.jpg',
    shortDescription:
      'Legend states that every pilgrimage to Guruvayur is incomplete without seeking the blessings of Lord Shiva at Mammiyoor.',
    fullDescription:
      'Mammiyoor Mahadeva Temple is located just north of the Guruvayur shrine. Legend holds that Lord Shiva gracefully relocated here to provide the sacred sanctum for Lord Krishna’s idol when Guru and Vayu consecrated it. The temple boasts peaceful traditional precincts with shrines dedicated to Lord Shiva, Goddess Parvati, Lord Ganesha, and Lord Murugan.',
    distanceNotice: 'Distance to be confirmed',
    approxDriveTime: 'Distance to be confirmed',
    googleMapsUrl: 'https://maps.google.com/?q=Mammiyoor+Temple+Guruvayur',
    keyFeatures: [
      'Essential ritual completion of Guruvayur pilgrimage',
      'Historic Kerala temple architecture & serene courtyard',
      'Special pradosham & somavara poojas',
    ],
  },
  {
    id: 'chavakkad-beach',
    name: 'Chavakkad Beach & Azhimukham',
    subtitle: 'Golden Sands & River-Sea Estuary',
    category: 'beach',
    image: '/images/attractions/chavakkad-beach.jpg',
    shortDescription:
      'A pristine Arabian Sea shoreline where river waters meet the ocean, offering tranquil sunset vistas and coastal breezes.',
    fullDescription:
      'Located just a short drive west from Guruvayur, Chavakkad Beach is renowned for the scenic estuary (Azhimukham) where river backwaters gracefully merge with the Arabian Sea. Fringed by swaying coconut palms and fishermen boats, it is the ideal peaceful retreat for an evening family stroll after temple visits.',
    distanceNotice: 'Distance to be confirmed',
    approxDriveTime: 'Distance to be confirmed',
    googleMapsUrl: 'https://maps.google.com/?q=Chavakkad+Beach+Kerala',
    keyFeatures: [
      'Stunning Arabian Sea sunset viewing',
      'Confluence of river and sea (Azhimukham)',
      'Children’s park and seaside promenade',
    ],
  },
  {
    id: 'chamundeshwari-temple',
    name: 'Chamundeshwari Temple',
    subtitle: 'Ancient Goddess Shrine in Guruvayur',
    category: 'temple',
    image: '/images/attractions/chamundeshwari-temple.jpg',
    shortDescription:
      'A peaceful Shakti sanctuary dedicated to Goddess Chamundi, revered for its ancient spiritual heritage.',
    fullDescription:
      'Nestled quietly near Guruvayur town, this sacred Devi temple invites pilgrims seeking maternal blessings and solace. Known for traditional lamps and serene temple surroundings, it is an essential sacred stop for extended spiritual journeys.',
    distanceNotice: 'Distance to be confirmed',
    approxDriveTime: 'Distance to be confirmed',
    googleMapsUrl: 'https://maps.google.com/?q=Chamundeshwari+Temple+Guruvayur',
    keyFeatures: [
      'Deep-rooted Devi worship traditions',
      'Peaceful sanctum away from traffic',
    ],
  },
];

export const TRANSIT_HUBS: TransitHub[] = [
  {
    id: 'railway',
    name: 'Guruvayur Railway Station (GUV)',
    type: 'railway',
    image: '/images/attractions/transit-railway.jpg',
    distanceNotice: 'Distance to be confirmed',
    approxTravelTime: 'Approx. 5–10 min drive',
    directionsUrl: 'https://maps.google.com/?q=Guruvayur+Railway+Station',
    tips: 'Direct passenger and express train connections to Thrissur, Ernakulam, Trivandrum, Chennai, and Bangalore. Pre-paid autos and taxis are available outside the station.',
  },
  {
    id: 'ksrtc',
    name: 'Guruvayur KSRTC Bus Stand',
    type: 'bus',
    image: '/images/hero-about.png',
    distanceNotice: 'Distance to be confirmed',
    approxTravelTime: 'Approx. 4–8 min drive',
    directionsUrl: 'https://maps.google.com/?q=KSRTC+Bus+Station+Guruvayur',
    tips: 'Regular Kerala State RTC Superfast and Fast Passenger services connect conveniently to Thrissur, Ernakulam, Kozhikode, and major districts.',
  },
  {
    id: 'private-bus',
    name: 'Guruvayur Private Bus Stand',
    type: 'bus',
    image: '/images/hero-guruvayur.png',
    distanceNotice: 'Distance to be confirmed',
    approxTravelTime: 'Approx. 5–8 min drive',
    directionsUrl: 'https://maps.google.com/?q=Private+Bus+Stand+Guruvayur',
    tips: 'Frequent local private buses operate every few minutes to Chavakkad, Kunnamkulam, Thrissur town, and coastal routes.',
  },
];
