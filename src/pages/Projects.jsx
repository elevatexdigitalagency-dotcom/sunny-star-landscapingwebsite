import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import { site } from '../data/content'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const projects = [
  ['Marina Diamond 1','Lawn & planter-bed transformation','/assets/portfolio-img-001.jpg'],
  ['DBC1','Planter-bed refresh & landscape detailing','/assets/portfolio-img-006.jpg'],
  ['Planter Bed Renovation','Planter-bed improvement','/assets/portfolio-img-008.jpg'],
  ['Tree Replacement','Replacing old trees with fresh planting','/assets/portfolio-img-013.jpg'],
  ['Villa Maintenance','Ongoing garden care & maintenance','/assets/portfolio-img-018.jpg'],
  ['Wood Mulch Design','Decorative mulch & planting beds','/assets/portfolio-img-021.jpg'],
  ['Indoor Planting','Interior greenery','/assets/portfolio-img-026.jpg'],
  ['Platinum Residences','Landscape maintenance & site improvements','/assets/portfolio-img-030.jpg'],
]
export default function Projects() {
  useDocumentTitle(`Landscaping Projects | ${site.name}`, 'Selected landscaping projects from Sunny Star Landscaping LLC.')
  return <main className="ss-site ss-inner-page">
    <PageHero title="Our Projects" subtitle="A closer look at the spaces we help refresh and maintain." image="/assets/area-villa.webp" />
    <section className="ss-projects ss-container ss-projects-page">
      <div className="ss-section-head"><div><span className="ss-kicker">SELECTED WORK</span><h2>Landscapes with<br/><em>care in every detail.</em></h2></div><p>Project names and descriptions are based on the Sunny Star Landscaping LLC company portfolio.</p></div>
      <div className="ss-project-grid">{projects.map(([title,type,image],i)=><article className={`ss-project-card ss-project-${i+1}`} key={title}><img src={image} alt={title} loading="lazy"/><div className="ss-project-overlay"><span>0{i+1} / PROJECT</span><h3>{title}</h3><p>{type}</p></div></article>)}</div>
      <p className="ss-disclaimer">Selected project photographs were supplied in the company portfolio. The imagery available in this website package may not include the original photograph for every named project.</p>
      <div className="ss-project-bottom"><h3>Have a garden in mind?</h3><Link className="ss-btn ss-btn-dark" to="/contact/">Talk to our team <ArrowUpRight size={18}/></Link></div>
    </section>
  </main>
}
