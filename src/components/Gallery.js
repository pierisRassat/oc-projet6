import { Link } from 'react-router-dom';
import { useLogementsData } from './fetchData.js'
import '../assets/css/Gallery.css';

export const Gallery = () => {
  const logements = useLogementsData()

  return (
  <div className="home-gallery-wrapper">
    {logements.map((logement, index) => (
      <Link to={`/rental/${logement.id}`} key={logement.id}>
        <div className="home-gallery-card" key={logement.id}>
          <img src={logement.cover} alt={logement.title} width="340" height="340" loading="lazy" />
          <div className="home-gallery-card-overlay"></div>
          <div className="home-gallery-card-title">{logement.title}</div>
        </div>
      </Link>
    ))}
  </div>
  )
}

