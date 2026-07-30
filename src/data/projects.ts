import { Project } from '../types';

export const projects: Project[] = [
  {
    slug: 'lubhu-residence',
    title: 'Lubhu Residence',
    category: 'Residential',
    location: 'Lubhu, Lalitpur, Nepal',
    year: '2021',
    client: 'Shrestha Family',
    services: ['Architecture Design', 'Interior Design', 'Landscape Design', 'Construction Supervision'],
    description: 'A two-and-a-half-storey residential building designed in a "Minimalistic Modern Style." The building’s design responds to the local climate and surrounding landscape, combining traditional Nepali brick elements with clean, white plastered forms to construct a dialogue between history and modernity.',
    concept: 'The primary concept focuses on spatial transparency and volumetric layering. By utilizing an open central courtyard and a series of floating steel staircases, the layout maximizes passive solar heating, natural ventilation, and visual connections across different floors. The design avoids unnecessary partition walls to let daylight flow deep into the core living spaces.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&q=75&auto=format',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=700&q=75&auto=format',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=700&q=75&auto=format',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=700&q=75&auto=format',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=700&q=75&auto=format'
    ],
    plans: [
      {
        title: 'Ground Floor Layout Plan',
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=700&q=75&auto=format',
        description: 'Features a double-height living lounge, an open-concept kitchen and dining area, a study room, and a seamless sliding glass transition to the rear garden and reflection pool.'
      },
      {
        title: 'First Floor & Terrace Plan',
        image: 'https://images.unsplash.com/photo-1545464693-f1798a3733d3?q=80&w=700&q=75&auto=format',
        description: 'Houses the master bedroom suite with a private balcony, two guest bedrooms, and a central bridge overlooking the double-height living room.'
      }
    ],
    diagrams: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=700&q=75&auto=format' // Visualizing environmental solar study
    ],
    materials: [
      {
        name: 'Local Terracotta Brick',
        color: '#A0522D',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=350&q=75&auto=format'
      },
      {
        name: 'Exposed Board-Formed Concrete',
        color: '#A9A9A9',
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=350&q=75&auto=format'
      },
      {
        name: 'Teak Wood Screens',
        color: '#8B4513',
        image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=350&q=75&auto=format'
      }
    ],
    credits: [
      { role: 'Lead Architect', name: 'Ar. Pujan Shrestha' },
      { role: 'Structural Engineer', name: 'Er. Rajesh Kumar' },
      { role: 'Interior Designer', name: 'Sajina Amatya' },
      { role: 'Main Contractor', name: 'Archio Builders Ltd.' }
    ],
    stats: [
      { label: 'Site Area', value: '4,200 sq. ft.' },
      { label: 'Built-up Area', value: '3,100 sq. ft.' },
      { label: 'Floors', value: '2.5 Storey' },
      { label: 'Completion Year', value: '2021' }
    ]
  },
  {
    slug: 'basecamp-bar-hotel-himalaya',
    title: 'Base Camp Bar, Hotel Himalaya',
    category: 'Hospitality',
    location: 'Kupondole, Lalitpur, Nepal',
    year: '2023',
    client: 'Hotel Himalaya Group',
    services: ['Interior Design', 'Furniture Design', 'Acoustic Engineering', 'Lighting Design'],
    description: 'An opulent, exclusive lounge and bar experience designed inside the iconic Hotel Himalaya. The design recreates the atmospheric journey of mountain expeditions through raw textures, basalt-tinted finishes, custom brass light fixtures, and plush leather banquette seating.',
    concept: 'The design concept centers on "Luxurious Shelter." High-quality brushed materials, moody backlighting, and dark, volcanic stone textures are offset by shimmering gold accents. This dialogue mimics the sharp contrast between the harsh Himalayan peaks and the cozy comfort of mountain basecamps.',
    heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&q=75&auto=format',
    gallery: [
      'https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?q=80&w=700&q=75&auto=format',
      'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=700&q=75&auto=format',
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=700&q=75&auto=format'
    ],
    materials: [
      { name: 'Brushed Brass Detailing', color: '#B68D40' },
      { name: 'Basalt Slate Floor', color: '#1C1C1C' },
      { name: 'Deep Ochre Leather', color: '#8B4F30' }
    ],
    credits: [
      { role: 'Lead Interior Designer', name: 'Ar. Sajina Amatya' },
      { role: 'Lighting Consultant', name: 'Lumina Design Labs' },
      { role: 'Acoustic Specialist', name: 'Er. Anil Dev' }
    ],
    stats: [
      { label: 'Area', value: '2,800 sq. ft.' },
      { label: 'Capacity', value: '120 Seats' },
      { label: 'Completed', value: 'November 2023' }
    ]
  },
  {
    slug: 'square-hotel',
    title: 'Square Hotel Interiors',
    category: 'Hospitality',
    location: 'Pulchowk, Lalitpur, Nepal',
    year: '2022',
    client: 'Square Hotel Pvt. Ltd.',
    services: ['Interior Design', 'FF&E Selection', 'Visual Identity Integration'],
    description: 'A comprehensive interior overhaul for a premium boutique hotel in the heart of Lalitpur. Every public space—from the lobby lounge to the dining halls and executive suites—expresses a clean, modern aesthetic utilizing a neutral visual canvas and locally sourced timber fittings.',
    concept: 'Urban oasis meets craft culture. The hotel’s interiors present large glazed partitions, suspended green planters, and white ash paneling. This environment filters out the bustling noise of the city, establishing a calm, daylight-filled sanctuary.',
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&q=75&auto=format',
    gallery: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=700&q=75&auto=format',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=700&q=75&auto=format',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=700&q=75&auto=format'
    ],
    materials: [
      { name: 'White Ash Timber', color: '#D2B48C' },
      { name: 'Terrazzo Tiles', color: '#E0DCD3' },
      { name: 'Linen Wallcoverings', color: '#F5F5DC' }
    ],
    credits: [
      { role: 'Project Architect', name: 'Ar. Deepesh Rana' },
      { role: 'Interior Designer', name: 'Sajina Amatya' },
      { role: 'HVAC Engineer', name: 'Er. N. B. Shrestha' }
    ],
    stats: [
      { label: 'Total Suites', value: '45 Keys' },
      { label: 'Lobby Area', value: '3,500 sq. ft.' },
      { label: 'Completion', value: 'April 2022' }
    ]
  },
  {
    slug: 'sony-center-labim-mall',
    title: 'Sony Center flagship',
    category: 'Commercial',
    location: 'Labim Mall, Lalitpur, Nepal',
    year: '2016',
    client: 'Nepa Hima Trade Link',
    services: ['Retail Interior Design', 'Lighting Design', 'Brand Architecture Execution'],
    description: 'A sleek, premium retail showroom designed for Sony Electronics in one of Nepal’s premier shopping malls. The space is detailed to enhance product interaction, using dynamic display walls, floating glass podiums, and a highly synchronized LED light system.',
    concept: 'Immersive technology experience. By structuring the space around floating linear zones and utilizing back-lit acrylic panels, visitors are guided through an interactive showcase of audio, visual, and camera hardware.',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&q=75&auto=format',
    gallery: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=700&q=75&auto=format',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=700&q=75&auto=format'
    ],
    materials: [
      { name: 'Matte Black Aluminum Panels', color: '#2B2B2B' },
      { name: 'Translucent Acrylic', color: '#FFFFFF' },
      { name: 'Polished Self-Leveling Epoxy', color: '#D3D3D3' }
    ],
    credits: [
      { role: 'Lead Architect', name: 'Ar. Pujan Shrestha' },
      { role: 'Fit-out Supervisor', name: 'Er. S. Tamang' }
    ],
    stats: [
      { label: 'Showroom Area', value: '1,300 sq. ft.' },
      { label: 'Lighting Load', value: '4.2 kW' },
      { label: 'Timeline', value: '6 Weeks' }
    ]
  },
  {
    slug: 'hattiban-cityscape-apartment',
    title: 'Hattiban Cityscape Apartment',
    category: 'Interior',
    location: 'Hattiban, Lalitpur, Nepal',
    year: '2020',
    client: 'Private Owner',
    services: ['Interior Architecture', 'Custom Furniture Design', 'Material Selection'],
    description: 'An elegant apartment interior design project at Cityscape Condominiums. The design maximizes limited apartment footprint by creating multifunctional spaces, concealed storage columns, and using a light color palette that reflects the morning Kathmandu valley sun.',
    concept: 'Compact Fluidity. The dining table integrates with the kitchen island, and custom partition sliding screens allow the guest bedroom to merge into the living room as a playroom when needed.',
    heroImage: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1000&q=75&auto=format',
    gallery: [
      'https://images.unsplash.com/photo-1618219942942-df9107f9c26b?q=80&w=700&q=75&auto=format',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=700&q=75&auto=format'
    ],
    materials: [
      { name: 'European White Oak', color: '#E3D7C5' },
      { name: 'Calacatta Quartz Countertops', color: '#F0F0F0' },
      { name: 'Sage Velvet Fabrics', color: '#6E8B3D' }
    ],
    credits: [
      { role: 'Interior Architect', name: 'Ar. Sajina Amatya' },
      { role: 'Stylist', name: 'Manish Shakya' }
    ],
    stats: [
      { label: 'Floor Level', value: '8th Floor' },
      { label: 'Apartment Area', value: '1,650 sq. ft.' },
      { label: 'Completed', value: 'October 2020' }
    ]
  },
  {
    slug: 'nepal-lab-house',
    title: 'Nepal Lab House',
    category: 'Commercial',
    location: 'Chakupat, Lalitpur, Nepal',
    year: '2022',
    client: 'Nepal Lab Diagnostics Ltd.',
    services: ['Architectural Layout', 'Medical Grade Interior Design', 'HVAC Coordination'],
    description: 'A state-of-the-art medical testing facility and office space. The architecture maintains strict clinical zoning, positive-negative air pressure rooms, and sterile surfaces while utilizing a calming, wood-accented customer lobby that reduces patient anxiety.',
    concept: 'Clinical Comfort. By placing clinical labs behind clean glass partitions and structuring a modular layout, we achieve workflow efficiency while ensuring that patients feel welcomed in a warm, light-filled lounge.',
    heroImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1000&q=75&auto=format',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=700&q=75&auto=format',
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=700&q=75&auto=format'
    ],
    materials: [
      { name: 'Antibacterial Solid Surface', color: '#FFFFFF' },
      { name: 'Seamless Vinyl Floor', color: '#DCDCDC' },
      { name: 'Maple Veneer Paneling', color: '#DEB887' }
    ],
    credits: [
      { role: 'Lead Architect', name: 'Ar. Pujan Shrestha' },
      { role: 'Medical Lab Consultant', name: 'Dr. Hari B. Pradhan' },
      { role: 'Mechanical Engineer', name: 'Er. S. K. Mahato' }
    ],
    stats: [
      { label: 'Facility Area', value: '4,800 sq. ft.' },
      { label: 'Lab ISO Rating', value: 'Class 7' },
      { label: 'Completion', value: 'July 2022' }
    ]
  },
  {
    slug: 'apex-gym-hall',
    title: 'Apex Wellness & Gym Hall',
    category: 'Commercial',
    location: 'Jhamsikhel, Lalitpur, Nepal',
    year: '2023',
    client: 'Apex Fitness Group',
    services: ['Interior Architecture', 'Acoustic Buffering', 'Lighting Systems Design'],
    description: 'A modern, high-energy fitness lounge and gym hall. Features open-web steel roof structure, raw concrete walls, custom black steel frames, and linear lighting tracks that accentuate movement and body alignment.',
    concept: 'Kinetic Structure. Using linear floor markers and overhead industrial light grids, the layout channels visual energy, guiding users through strength, cardio, and recovery zones.',
    heroImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&q=75&auto=format',
    gallery: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=700&q=75&auto=format',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=700&q=75&auto=format'
    ],
    materials: [
      { name: 'High-Impact Recycled Rubber', color: '#111111' },
      { name: 'Exposed Steel Beams', color: '#3A3A3A' },
      { name: 'Linear Neon LED Tracks', color: '#FFD700' }
    ],
    credits: [
      { role: 'Lead Designer', name: 'Ar. Deepesh Rana' },
      { role: 'Structural Analyst', name: 'Er. P. Pokharel' }
    ],
    stats: [
      { label: 'Gym Area', value: '6,200 sq. ft.' },
      { label: 'Ceiling Height', value: '18 ft.' },
      { label: 'Completed', value: 'February 2023' }
    ]
  },
  {
    slug: 'imperial-banquet-hall',
    title: 'The Imperial Banquet Hall',
    category: 'Master Planning',
    location: 'Bakhundole, Lalitpur, Nepal',
    year: '2020',
    client: 'Imperial Events Pvt. Ltd.',
    services: ['Architecture', 'Lobby Interior Design', 'Landscape Architecture', 'Traffic Masterplanning'],
    description: 'A luxurious commercial banquet hall and event facility. The design coordinates high-volume guest circulation, premium gold-panel detailing, acoustic ceiling installations, and beautiful landscape gardens with stepping fountains.',
    concept: 'Celebratory Grandeur. Spatially arranged around a monumental double-curved stone staircase and grand central corridor, the design shapes a cinematic entry sequence for guests.',
    heroImage: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1000&q=75&auto=format',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=700&q=75&auto=format',
      'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=700&q=75&auto=format'
    ],
    materials: [
      { name: 'Gold-Anodized Aluminum Shingles', color: '#DAA520' },
      { name: 'Greek White Marble', color: '#FAFAFA' },
      { name: 'Velvet Acoustical Baffles', color: '#4A154B' }
    ],
    credits: [
      { role: 'Lead Architect', name: 'Ar. Pujan Shrestha' },
      { role: 'Structural Engineer', name: 'Er. Rajesh Kumar' },
      { role: 'Landscape Designer', name: 'Sajina Amatya' }
    ],
    stats: [
      { label: 'Total Capacity', value: '800 Guests' },
      { label: 'Lawn Area', value: '12,500 sq. ft.' },
      { label: 'Parking Slots', value: '150 Cars' }
    ]
  }
];
