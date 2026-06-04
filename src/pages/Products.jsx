import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const products = [
  {
    id: 1,
    name: "Brake Pads",
    category: "Brakes",
    image: "/images/brakes.jpg",
    compatibility: "Cars & Vans",
    availability: "In Stock",
  },
  {
    id: 2,
    name: "Engine Components",
    category: "Engine",
    image: "/images/engine.jpeg",
    compatibility: "Cars, Vans & Commercial Vehicles",
    availability: "Available on Request",
  },
  {
    id: 3,
    name: "Suspension Kit",
    category: "Suspension",
    image: "/images/suspension.webp",
    compatibility: "Cars & SUVs",
    availability: "In Stock",
  },
  {
    id: 4,
    name: "Electrical Parts",
    category: "Electrical",
    image: "/images/electrical.webp",
    compatibility: "All Vehicle Types",
    availability: "In Stock",
  },
];

function Products() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <section className="products-page">
        <div className="products-header">
          <span className="section-label">Our Products</span>
          <h1>Vehicle Spare Parts</h1>
          <p>
            Browse reliable spare parts for cars, vans and commercial vehicles.
          </p>

          <input
            type="text"
            placeholder="Search spare parts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-box"
          />
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />

              <div className="product-content">
                <span className="product-category">{product.category}</span>
                <h3>{product.name}</h3>

                <div className="product-meta">
                  <p>
                    <strong>Compatible:</strong> {product.compatibility}
                  </p>
                  <p>
                    <strong>Status:</strong> {product.availability}
                  </p>
                  <p>
                    <strong>Price:</strong> Contact for pricing
                  </p>
                </div>

                <div className="product-actions">
                  <button>View Details</button>
                  <button className="outline-btn">Send Inquiry</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="why-products">
          <h2>Why Choose AutoParts Hub?</h2>

          <div className="why-products-grid">
            <div className="why-card">
              <h3>✅ Genuine Parts</h3>
              <p>
                High-quality and reliable spare parts for long-lasting vehicle
                performance.
              </p>
            </div>

            <div className="why-card">
              <h3>⚡ Fast Support</h3>
              <p>
                Our team helps customers quickly find the correct spare part.
              </p>
            </div>

            <div className="why-card">
              <h3>💰 Competitive Pricing</h3>
              <p>
                Affordable prices without compromising product quality.
              </p>
            </div>

            <div className="why-card">
              <h3>🚚 Wide Availability</h3>
              <p>
                Large inventory covering cars, vans and commercial vehicles.
              </p>
            </div>
          </div>
        </section>

        <section className="products-cta">
          <h2>Need Help Finding the Right Part?</h2>

          <p>
            Our experienced team is ready to help you identify the correct spare
            parts for your vehicle.
          </p>

          <a href="/contact" className="cta-btn">
            Contact Our Team
          </a>
        </section>
      </section>

      <Footer />
    </>
  );
}

export default Products;