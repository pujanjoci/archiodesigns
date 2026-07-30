import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'architecture',
    title: 'Architecture',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&q=75&auto=format',
    description: 'We design timeless spatial structures that balance function, form, and site context. From feasibility studies to complex structural plans, we create environments that reflect cultural heritage while offering contemporary utility.',
    details: [
      'Site analysis, zoning reviews, and feasibility studies.',
      'Conceptual massing, solar path studies, and architectural planning.',
      'Creation of comprehensive structural and working construction drawings.',
      'Assistance with regulatory building permit clearances and local compliance.',
      'On-site construction supervision and quality audits.'
    ],
    workflow: [
      { step: '01', title: 'Conceptualization', description: 'Understanding site constraints, client aspirations, and climatic conditions to form the initial spatial vision.' },
      { step: '02', title: 'Design Development', description: 'Refining schematic layouts, volumes, and facades while generating structural drafts.' },
      { step: '03', title: 'Permits & Details', description: 'Drafting execution details, municipal drawings, and organizing engineer approvals.' },
      { step: '04', title: 'Construction Administration', description: 'Periodic site visits to align construction details with the architectural drawings.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=700&q=75&auto=format',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=700&q=75&auto=format'
    ]
  },
  {
    id: 'interior-design',
    title: 'Interior Design',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&q=75&auto=format',
    description: 'We orchestrate inside volumes with attention to tactile materials, custom millwork, ergonomics, and lighting fixtures. We specialize in hospitality, retail showroom layouts, corporate offices, and luxury apartments.',
    details: [
      'Spatial planning, mood board curation, and theme coordination.',
      'Custom furniture, cabinetry, and partition screens detailing.',
      'Lighting design schemes, electrical layouts, and color selection.',
      'Sourcing premium materials, stone tiles, and hardware fittings.',
      'Acoustic consultations for bar spaces and boardrooms.'
    ],
    workflow: [
      { step: '01', title: 'Spatial Zoning', description: 'Dividing public, private, and service zones to optimize circulation and seating layouts.' },
      { step: '02', title: 'Material Palette', description: 'Curating fabric finishes, wood panels, stone textures, and matching metallic trims.' },
      { step: '03', title: 'FF&E Detailing', description: 'Drafting custom furniture drawings and compiling fixtures, furniture, and equipment specs.' },
      { step: '04', title: 'Fit-out Styling', description: 'Overseeing carpentry assembly, color application, and placement of custom decor elements.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=700&q=75&auto=format',
      'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=700&q=75&auto=format'
    ]
  },
  {
    id: 'construction',
    title: 'Construction Management',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&q=75&auto=format',
    description: 'We execute designs with strict precision, structural safety, and high-quality materials. We ensure construction is completed on schedule and matches the designer’s specifications.',
    details: [
      'Comprehensive project planning and scheduling (Gantt charts).',
      'Concrete structural framing and foundations execution.',
      'Procurement of raw materials and coordination with local trade sub-contractors.',
      'Safety inspections, structural testing, and site supervisor control.',
      'Quality validation for concrete castings and structural brick alignments.'
    ],
    workflow: [
      { step: '01', title: 'Project Estimations', description: 'Detailing bills of quantities (BOQ) and planning raw material purchase schedules.' },
      { step: '02', title: 'Substructure & Frame', description: 'Excavation, foundation pouring, column casting, and concrete slab framing.' },
      { step: '03', title: 'Finishes & Enclosure', description: 'Brick laying, external plastering, wall coatings, and window frame installations.' },
      { step: '04', title: 'Handover & Audit', description: 'Completing plumbing, HVAC, and wiring tests before client walkthroughs.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=700&q=75&auto=format',
      'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=700&q=75&auto=format'
    ]
  },
  {
    id: 'renovation',
    title: 'Renovation & Adaptive Reuse',
    heroImage: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1000&q=75&auto=format',
    description: 'We breathe new life into existing spaces. We specialize in retrofitting old structures, updating building facades, and remodeling outdated apartments and offices for modern use.',
    details: [
      'Structural safety assessments of aged foundations and beams.',
      'Dampness mitigation, crack injection, and wall reinforcement.',
      'Modernizing HVAC ducts, plumbing pipes, and electrical panels.',
      'Facade updates using terracotta tiles or steel glass structures.',
      'Interior redesign of apartments and corporate office spaces.'
    ],
    workflow: [
      { step: '01', title: 'Structural Assessment', description: 'Scanning wall thickness, identifying damp corridors, and analyzing load-bearing grids.' },
      { step: '02', title: 'Selective Demolition', description: 'Removing outdated drywall, old plumbing, and non-load-bearing partitions.' },
      { step: '03', title: 'Retrofitting & Services', description: 'Installing safety structural steel beams and laying down new MEP utility lines.' },
      { step: '04', title: 'Modernizing Finishes', description: 'Completing premium plastering, wood layouts, and smart lighting systems.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=700&q=75&auto=format',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=700&q=75&auto=format'
    ]
  },
  {
    id: 'consultancy',
    title: 'Design Strategy & Consultancy',
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&q=75&auto=format',
    description: 'We offer specialized insights on project cost management, design optimization, and traffic circulation. We advise real estate developers and corporations on space optimization strategies.',
    details: [
      'Detailed bills of quantities (BOQ) preparation and budget modeling.',
      'Value engineering to optimize material costs without reducing design quality.',
      'Traffic circulation studies for commercial retail buildings.',
      'Advice on energy-efficient building strategies and sustainability certifications.',
      'Tendering coordination and builder review assistance.'
    ],
    workflow: [
      { step: '01', title: 'Brief Definition', description: 'Outlining client financial thresholds, design expectations, and milestones.' },
      { step: '02', title: 'Value Engineering', description: 'Identifying alternative materials and spatial layouts that reduce costs while maintaining quality.' },
      { step: '03', title: 'Bid Management', description: 'Compiling tender packages and evaluating contractor bids for cost accuracy.' },
      { step: '04', title: 'Project Control', description: 'Monitoring cost variance and reviewing project changes during execution.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=700&q=75&auto=format',
      'https://images.unsplash.com/photo-1531535934027-687f9679850c?q=80&w=700&q=75&auto=format'
    ]
  },
  {
    id: 'visualization',
    title: 'Graphical Visualization',
    heroImage: 'https://images.unsplash.com/photo-1501183007986-d0d080b147f9?q=80&w=1000&q=75&auto=format',
    description: 'We build immersive visual representations of architectural concepts. Utilizing path-traced rendering systems, we create 3D flythrough animations, exterior walk-rounds, and materials tests.',
    details: [
      'High-fidelity 3D modeling of complex geometry and landscape topography.',
      'Physically-based rendering (PBR) materials mapping for wood, concrete, and stone.',
      'Interior light ray-tracing studies and dusk light atmosphere studies.',
      'Cinematic architectural flythrough video production.',
      'Immersive virtual reality walk-rounds setup.'
    ],
    workflow: [
      { step: '01', title: 'Geometric Modeling', description: 'Converting 2D CAD layouts into precise 3D poly surfaces, walls, and landscape models.' },
      { step: '02', title: 'Texturing & PBR', description: 'Mapping photo-scanned material textures to achieve realistic wood grain, concrete pores, and metallic reflections.' },
      { step: '03', title: 'Lighting & Rays', description: 'Setting up precise daylight coordinates, window refractions, and artificial warm lamps.' },
      { step: '04', title: 'Path-Traced Rendering', description: 'Processing high-resolution 3D renders and assembling video frames for post-production editing.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=700&q=75&auto=format',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=700&q=75&auto=format'
    ]
  }
];
