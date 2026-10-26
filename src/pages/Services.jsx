import PageEnhancements from '../components/PageEnhancements'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import ProgressiveImage from '../components/ProgressiveImage'
import Reveal, { InViewGroup } from '../components/Reveal'
import { site } from '../data/content'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="10" height="10" aria-hidden="true">
    <path
      d="M8.5,20c-.398,0-.78-.158-1.061-.439L1.086,13.207c-.39-.391-.39-1.024,0-1.414l.707-.707c.391-.391,1.024-.391,1.414,0l5.293,5.293L20.793,4.086c.391-.391,1.024-.391,1.414,0l.707,.707c.391,.391,.391,1.024,0,1.414l-13.353,13.354c-.281,.281-.663.439-1.061.439Z"
      fill="currentColor"
    />
  </svg>
)

const services = [
  {
    title: 'Landscape Design & Installation',
    text: 'Garden layouts, planting and landscape improvements shaped around your outdoor space.',
    image: '/assets/portfolio-img-001.jpg',
    features: ['Garden layouts', 'Planting', 'Landscape improvements'],
  },
  {
    title: 'Garden & Villa Maintenance',
    text: 'Routine care to keep gardens tidy, healthy and welcoming.',
    image: '/assets/portfolio-img-018.jpg',
    features: ['Ongoing garden care', 'Neat finishes', 'Outdoor upkeep'],
  },
  {
    title: 'Lawn Care & Grass Cutting',
    text: 'Lawn upkeep and grass-area refreshes for a clean, cared-for appearance.',
    image: '/assets/portfolio-img-017.jpg',
    features: ['Grass cutting', 'Lawn upkeep', 'Grass-area refreshes'],
  },
  {
    title: 'Irrigation Systems',
    text: 'Irrigation installation and related support to help care for planted areas.',
    image: '/assets/portfolio-img-022.jpg',
    features: ['Irrigation installation', 'Landscape support', 'Garden watering'],
  },
  {
    title: 'Planter Beds & Decorative Finishes',
    text: 'Planter-bed renovation with stone detailing and decorative wood mulch.',
    image: '/assets/portfolio-img-021.jpg',
    features: ['Planter-bed refresh', 'Stone detailing', 'Wood mulch'],
  },
  {
    title: 'Tree & Planting Services',
    text: 'Tree replacement and new planting to refresh outdoor areas.',
    image: '/assets/portfolio-img-013.jpg',
    features: ['Tree replacement', 'New planting', 'Garden refresh'],
  },
  {
    title: 'Renovation & Makeover',
    text: 'Refresh existing landscape areas with practical improvements and finishing touches.',
    image: '/assets/portfolio-img-008.jpg',
    features: ['Landscape refresh', 'Targeted improvements', 'Decorative finishes'],
  },
  {
    title: 'Indoor Planting',
    text: 'Bring natural greenery into interior spaces with considered plant placement.',
    image: '/assets/portfolio-img-026.jpg',
    features: ['Interior greenery', 'Indoor plant placement', 'Green accents'],
  },
]

export default function Services() {
  useDocumentTitle(
    `Our Landscaping Services | ${site.name}`,
    `${site.tagline}. Landscape maintenance, renovation, irrigation, planting and garden care.`,
  )

  return (
    <main>
      <PageHero
        title="Our Landscaping Services"
        subtitle={site.commitment}
        image="/assets/portfolio-img-001.jpg"
      />

      <section className="aq-products" aria-label="Service list">
        <div className="aq-products-inner">
          <Reveal className="aq-products-head">
            <h2 className="aq-products-title">Landscaping Services</h2>
            <p className="aq-products-copy">
              {site.slogan}. Quality work, reliable service and customer satisfaction on every
              project.
            </p>
          </Reveal>

          <InViewGroup className="aq-products-grid" amount={0.1}>
            {services.map((item) => (
              <Link key={item.title} to="/contact/" className="aq-product-card">
                <div className="aq-product-media">
                  <ProgressiveImage src={item.image} alt="" loading="lazy" />
                </div>
                <div className="aq-product-body">
                  <h3 className="aq-product-name">{item.title}</h3>
                  <p className="aq-product-desc">{item.text}</p>
                  <ul className="aq-product-features">
                    {item.features.map((feature) => (
                      <li key={feature}>
                        <span className="aq-product-check">
                          <CheckIcon />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </InViewGroup>
        </div>
      </section>
    <PageEnhancements count={10} />
    </main>
  )
}
