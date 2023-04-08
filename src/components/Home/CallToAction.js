import { useNavigate } from 'react-router-dom';
import CtaImg from '../../assets/small/restauranfood.jpg';

function CallToAction() {
  const navigate = useNavigate();

  const handleReserveTable = () => {
    navigate('/booking');
  };

  return (
    <section className="cta">
      <div className="cta-container">
        <div className="cta-description">
          <div className="cta-title">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
          </div>
          <h3>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </h3>
          <button className="btn btn--secondary" onClick={handleReserveTable}>
            Reserve a Table
          </button>
        </div>
        <div className="img-container">
          <img src={CtaImg} className="img" loading="lazy" alt="Waiter holding a plate of four bruschetas." />
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
