import Image from 'next/image';
import Reveal, { StaggerContainer, StaggerItem } from '../../components/animations/Reveal';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const team: TeamMember[] = [
  {
    name: 'Ar. Pujan Shrestha',
    role: 'Founder & Lead Architect',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600',
  },
  {
    name: 'Ar. Sajina Amatya',
    role: 'Lead Interior Designer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600',
  },
  {
    name: 'Ar. Deepesh Rana',
    role: 'Project Architect',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600',
  },
];

const timeline = [
  { year: '2016', title: 'Firm Founding', desc: 'Archio Designs established in Lalitpur, Nepal, with a focus on bespoke residential concepts.' },
  { year: '2018', title: 'Commercial Expansion', desc: 'First major retail interior showroom completed for Sony Electronics at Labim Mall.' },
  { year: '2020', title: 'Turnkey Integration', desc: 'Partnered with local contractors to provide seamless construction and design development.' },
  { year: '2022', title: 'Boutique Hospitality Focus', desc: 'Completed Square Hotel interiors, marking a move into boutique hotel designs.' },
  { year: '2023', title: 'Himalayan Basecamp Launch', desc: 'Completed the luxurious Base Camp Bar lounge at Hotel Himalaya.' },
];

const awards = [
  { year: '2023', title: 'Luxury Commercial Lounge Winner', org: 'Nepal Architecture Forum' },
  { year: '2021', title: 'Residential Excellence Award', org: 'Lalitpur Heritage Council' },
  { year: '2019', title: 'Outstanding Retail Concept', org: 'National Retailers Guild' },
];

export default function Studio() {
  return (
    <div className="bg-white min-h-screen pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* 1. Page Header & Studio Intro */}
        <div className="max-w-3xl space-y-6 mb-24 md:mb-32">
          <span className="font-heading text-xs uppercase tracking-[0.3em] text-accent font-semibold block">
            About the Studio
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary-text leading-tight uppercase">
            Architectural Excellence & Cultural Value
          </h1>
          <p className="text-lg md:text-xl text-secondary-text leading-relaxed font-light">
            Founded in 2016 in Lalitpur, Nepal, Archio Designs is a multidisciplinary architecture and interior design firm dedicated to creating individual, aesthetically stunning solutions.
          </p>
        </div>

        {/* 2. Studio Philosophy / Mission & Vision */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-24 border-b border-border-custom">
          <div className="lg:col-span-4">
            <span className="font-heading text-xs uppercase tracking-[0.25em] text-secondary-text block mb-4">
              01 / Core Values
            </span>
            <h2 className="font-heading text-2xl uppercase tracking-wider font-bold">
              Our Vision & Mission
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-8 text-sm text-secondary-text leading-relaxed font-light">
            <blockquote className="font-heading text-2xl sm:text-3xl text-primary-text leading-snug font-light italic mb-8 border-l-2 border-accent pl-6">
              "We believe that a space must connect its inhabitants with its culture, place, and underlying structural values."
            </blockquote>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <p>
                Our vision is to build sustainable, culture-responsive architectural frameworks that withstand time. We study native bricks, wood panels, slate tiles, and craftsmanship, integrating them with modern concrete structures.
              </p>
              <p>
                By maintaining a highly collaborative workflow between architects, contractors, and clients, we avoid execution errors. Every square foot is detailed, budgeted, and optimized before we break ground.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Team Portrait Grid */}
        <section className="py-24 border-b border-border-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
            <div className="lg:col-span-4">
              <span className="font-heading text-xs uppercase tracking-[0.25em] text-secondary-text block mb-4">
                02 / Collective
              </span>
              <h2 className="font-heading text-2xl uppercase tracking-wider font-bold">
                The Design Team
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-sm text-secondary-text leading-relaxed font-light max-w-lg">
                Archio Designs is led by a collaborative team of architects, engineers, and art enthusiasts working in Lalitpur.
              </p>
            </div>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <StaggerItem key={idx} className="space-y-4 group">
                <div className="relative aspect-[3/4] w-full bg-neutral-100 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-w-768px) 100vw, 350px"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading text-lg font-bold tracking-tight text-primary-text">
                    {member.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-accent font-semibold">
                    {member.role}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* 4. Milestones Timeline & Awards */}
        <section className="py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Timeline Column */}
            <div className="lg:col-span-7 space-y-12">
              <div>
                <span className="font-heading text-xs uppercase tracking-[0.25em] text-secondary-text block mb-4">
                  03 / History
                </span>
                <h2 className="font-heading text-2xl uppercase tracking-wider font-bold">
                  Studio Timeline
                </h2>
              </div>
              <div className="relative border-l border-border-custom pl-8 space-y-12">
                {timeline.map((item, idx) => (
                  <div key={idx} className="relative space-y-2">
                    <span className="absolute -left-[37px] top-0.5 w-4.5 h-4.5 bg-white border-2 border-accent rounded-full flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    </span>
                    <span className="font-heading text-sm font-bold text-accent block">
                      {item.year}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-primary-text">
                      {item.title}
                    </h3>
                    <p className="text-xs text-secondary-text leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards Column */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <span className="font-heading text-xs uppercase tracking-[0.25em] text-secondary-text block mb-4">
                  04 / Recognitions
                </span>
                <h2 className="font-heading text-2xl uppercase tracking-wider font-bold">
                  Awards & Laurels
                </h2>
              </div>
              <div className="divide-y divide-border-custom border-t border-b border-border-custom">
                {awards.map((award, idx) => (
                  <div key={idx} className="py-6 flex justify-between items-start gap-4">
                    <div className="space-y-1">
                      <h4 className="font-heading text-sm font-bold text-primary-text">
                        {award.title}
                      </h4>
                      <p className="text-[10px] uppercase tracking-wider text-secondary-text">
                        {award.org}
                      </p>
                    </div>
                    <span className="font-heading text-xs text-accent font-semibold">
                      {award.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
