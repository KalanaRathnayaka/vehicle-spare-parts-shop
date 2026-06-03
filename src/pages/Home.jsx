import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <span className="tagline">Trusted Auto Spare Parts Supplier</span>
          <h1>Premium Vehicle Spare Parts for Cars, Vans & Commercial Vehicles</h1>
          <p>
            We provide reliable, affordable and genuine spare parts with friendly
            customer support.
          </p>
          <a href="/contact" className="hero-btn">Contact Us</a>
        </div>
      </section>

      <section className="about-preview">
        <div className="about-content">
          <span className="section-label">About AutoParts Hub</span>
          <h2>Your Reliable Vehicle Spare Parts Partner</h2>
          <p>
            AutoParts Hub is a trusted spare parts supplier dedicated to
            providing quality automotive components for cars, vans and
            commercial vehicles. We focus on genuine products, fair pricing and
            helpful customer support.
          </p>
        </div>

        <div className="about-stats">
          <div>
            <h3>Quality</h3>
            <p>Carefully selected spare parts for reliable vehicle performance</p>
          </div>

          <div>
            <h3>Wide</h3>
            <p>Product range covering engine, brake, suspension and electrical parts</p>
          </div>

          <div>
            <h3>Fast</h3>
            <p>Quick inquiry support to help customers find the right part</p>
          </div>
        </div>
      </section>

      <section className="products">
        <h2>Our Product Categories</h2>
        <p className="section-text">
          Explore our most requested spare part categories.
        </p>

        <div className="product-grid">
          <div className="card">
            <img src="/images/engine.jpeg" alt="Engine Parts" />
            <div className="card-body">
              <h3>Engine Parts</h3>
              <p>Filters, belts, plugs and premium engine components.</p>
            </div>
          </div>

          <div className="card">
            <img src="/images/brakes.jpg" alt="Brake Systems" />
            <div className="card-body">
              <h3>Brake Systems</h3>
              <p>Brake pads, discs and reliable safety components.</p>
            </div>
          </div>

          <div className="card">
            <img src="/images/suspension.webp" alt="Suspension Parts" />
            <div className="card-body">
              <h3>Suspension Parts</h3>
              <p>Shock absorbers, arms and durable suspension systems.</p>
            </div>
          </div>

          <div className="card">
            <img src="/images/electrical.webp" alt="Electrical Parts" />
            <div className="card-body">
              <h3>Electrical Parts</h3>
              <p>Batteries, bulbs, sensors and electrical accessories.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-us">
        <h2>Why Choose AutoParts Hub?</h2>

        <div className="why-grid">
          <div className="why-card">
            <h3>Genuine Products</h3>
            <p>We supply trusted spare parts from reliable brands.</p>
          </div>

          <div className="why-card">
            <h3>Fast Delivery</h3>
            <p>Quick delivery support for customers across Sri Lanka.</p>
          </div>

          <div className="why-card">
            <h3>Affordable Prices</h3>
            <p>Competitive pricing without compromising product quality.</p>
          </div>

          <div className="why-card">
            <h3>Expert Support</h3>
            <p>Our team helps you select the correct part for your vehicle.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;