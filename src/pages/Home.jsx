import PageEnhancements from '../components/PageEnhancements'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Check, Droplets, Flower2, Leaf, Scissors, Sprout, Trees, House, PanelsTopLeft } from 'lucide-react'
import { site } from '../data/content'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const services = [
  { icon: Sprout, title: 'Landscape Design & Installation', text: 'Garden layouts, planting and thoughtful landscape improvements.', image: '/assets/portfolio-img-001.jpg' },
  { icon: House, title: 'Garden & Villa Maintenance', text: 'Routine care to keep outdoor spaces tidy, healthy and welcoming.', image: '/assets/portfolio-img-010.jpg' },
  { icon: Scissors, title: 'Lawn Care & Grass Cutting', text: 'Regular lawn upkeep and grass-area refreshes for a neat finish.', image: '/assets/portfolio-img-017.jpg' },
  { icon: Droplets, title: 'Irrigation Systems', text: 'Irrigation installation and practical support for your landscape.', image: '/assets/portfolio-img-022.jpg' },
  { icon: PanelsTopLeft, title: 'Planter Beds & Decorative Finishes', text: 'Planter-bed renovation, stone detailing and decorative wood mulch.', image: '/assets/portfolio-img-021.jpg' },
  { icon: Trees, title: 'Tree & Planting Services', text: 'Tree replacement and new planting to refresh your garden.', image: '/assets/portfolio-img-013.jpg' },
  { icon: Leaf, title: 'Renovation & Makeover', text: 'Give existing garden areas a fresh, considered look.', image: '/assets/portfolio-img-020.jpg' },
  { icon: Flower2, title: 'Indoor Planting', text: 'Bring natural greenery into interior spaces.', image: '/assets/portfolio-img-010.jpg' },
]
const projects = [
  { title: 'Marina Diamond 1', type: 'Lawn & planter-bed transformation', image: '/assets/portfolio-img-001.jpg' },
  { title: 'DBC1', type: 'Planter-bed refresh & landscape detailing', image: '/assets/portfolio-img-006.jpg' },
  { title: 'Planter Bed Renovation', type: 'Planter-bed improvement', image: '/assets/portfolio-img-008.jpg' },
  { title: 'Tree Replacement', type: 'Replacing old trees with fresh planting', image: '/assets/portfolio-img-013.jpg' },
  { title: 'Villa Maintenance', type: 'Ongoing garden care & maintenance', image: '/assets/portfolio-img-018.jpg' },
  { title: 'Wood Mulch Design', type: 'Decorative mulch & planting beds', image: '/assets/portfolio-img-021.jpg' },
  { title: 'Indoor Planting', type: 'Interior greenery', image: '/assets/portfolio-img-026.jpg' },
  { title: 'Platinum Residences', type: 'Landscape maintenance & site improvements', image: '/assets/portfolio-img-030.jpg' },
]
export default function Home() {
  useDocumentTitle(`${site.name} | Landscaping, Maintenance & Irrigation`, 'Landscape maintenance, renovation, planting and irrigation services by Sunny Star Landscaping LLC.')
  return <main className="ss-site">
    <section className="ss-hero">
      <div className="ss-hero-shade" />
      <div className="ss-hero-content">
        <span className="ss-eyebrow"><span /> LANDSCAPE MAINTENANCE · RENOVATION · IRRIGATION</span>
        <h1>Your vision.<br/><em>Our landscaping.</em></h1>
        <p>Thoughtful garden care and landscape improvements that make outdoor spaces feel fresh, green and welcoming.</p>
        <div className="ss-actions">
          <Link className="ss-btn ss-btn-light" to="/contact/">Discuss your garden <ArrowUpRight size={18}/></Link>
          <Link className="ss-btn ss-btn-ghost" to="/projects/">Explore our work</Link>
        </div>
        <div className="ss-hero-note"><span className="ss-note-mark"><Leaf size={18}/></span><span><strong>Sunny Star Landscaping LLC</strong><small>Practical care for greener spaces</small></span></div>
      </div>
      <div className="ss-hero-caption">GARDENS MADE TO BE ENJOYED</div>
    </section>
    <section className="ss-intro ss-container">
      <div><span className="ss-kicker">A PRACTICAL PARTNER FOR GREENER SPACES</span><h2>Make more of<br/><em>your outdoor space.</em></h2></div>
      <div className="ss-intro-copy"><p>We help clients care for outdoor spaces, refresh existing garden areas and maintain a neat, welcoming finish. From regular maintenance to targeted improvements, we focus on clear communication, careful preparation and practical solutions suited to each space.</p><Link className="ss-text-link" to="/about/">Get to know us <ArrowUpRight size={17}/></Link></div>
    </section>
    <section className="ss-services">
      <div className="ss-container">
        <div className="ss-section-head"><div><span className="ss-kicker">WHAT WE DO</span><h2>Care for every<br/><em>corner of green.</em></h2></div><p>From planting and lawn care to irrigation and garden makeovers, our services help keep your landscape looking its best.</p></div>
        <div className="ss-service-grid">{services.map(({icon: Icon, title, text, image}, i) => <article className="ss-service-card" key={title}><div className="ss-service-image"><img src={image} alt={title} loading="lazy"/><span className="ss-service-number">0{i+1}</span></div><div className="ss-service-body"><span className="ss-service-icon"><Icon size={21}/></span><h3>{title}</h3><p>{text}</p><Link to="/services/" aria-label={`Learn about ${title}`} className="ss-round-link"><ArrowUpRight size={18}/></Link></div></article>)}</div>
        <div className="ss-center"><Link className="ss-btn ss-btn-dark" to="/services/">View all services <ArrowUpRight size={18}/></Link></div>
      </div>
    </section>
    <section className="ss-approach">
      <div className="ss-approach-photo"><img src="/assets/hero.png" alt="Green landscaped garden" loading="lazy"/></div>
      <div className="ss-approach-content"><span className="ss-kicker">OUR APPROACH</span><h2>Good work is in<br/><em>the details.</em></h2><p>We believe a well-kept landscape starts with listening, preparing carefully and respecting the space. We aim to leave each work area clean, organised and ready to enjoy.</p><ul>{['Clear communication from the start','Careful preparation and considered work','Clean, organised finishing'].map(x=><li key={x}><Check size={17}/>{x}</li>)}</ul><Link className="ss-text-link" to="/contact/">Let’s talk about your space <ArrowUpRight size={17}/></Link></div>
    </section>
    <section className="ss-projects ss-container">
      <div className="ss-section-head"><div><span className="ss-kicker">SELECTED WORK</span><h2>Real spaces.<br/><em>Fresh perspective.</em></h2></div><p>A selection of projects featured in the Sunny Star Landscaping LLC company portfolio.</p></div>
      <div className="ss-project-grid">{projects.map((p,i)=><article className={`ss-project-card ss-project-${i+1}`} key={p.title}><img src={p.image} alt={p.title} loading="lazy"/><div className="ss-project-overlay"><span>0{i+1} / PROJECT</span><h3>{p.title}</h3><p>{p.type}</p></div></article>)}</div>
      <p className="ss-disclaimer">Images on this website illustrate landscaping work and services. Project scope and site conditions vary.</p>
    </section>
    <section className="ss-cta"><div className="ss-cta-leaf"><Sprout size={46}/></div><div><span className="ss-kicker">LET’S GROW SOMETHING GREAT</span><h2>Ready to refresh<br/><em>your landscape?</em></h2><p>Tell us about your garden and the care or improvements you have in mind.</p></div><div className="ss-cta-actions"><Link className="ss-btn ss-btn-light" to="/contact/">Contact our team <ArrowUpRight size={18}/></Link><a href={site.whatsapp} target="_blank" rel="noreferrer" className="ss-cta-phone">WhatsApp us</a></div></section>
  <PageEnhancements count={5} />
    </main>
}
