"use client";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="foot-news">
        <div className="container news-grid">
          <div className="news-left">
            <h3 className="news-title">BE THE FIRST TO KNOW</h3>
            <p className="news-sub">
              Sign up for updates from <strong>ShopEasy</strong>.
            </p>
            <form className="news-form">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className="news-input"
              />
              <button type="submit" className="news-btn">
                SUBSCRIBE
              </button>
            </form>
          </div>

          <div className="news-right">
            <p className="contact-line">CONTACT US</p>
            <p className="contact-line">+1 221 533 5386</p>
            <p className="contact-line">support@shopeasy.com</p>
            <p className="currency">CURRENCY — USD $</p>
            <p className="note">
              Transactions are completed in USD and may be subject to conversion
              rates depending on your bank.
            </p>
          </div>
        </div>
      </div>

      <div className="foot-links">
        <div className="container links-grid">
          <div className="link-col">
            <h4 className="col-title">SHOP EASY</h4>
            <ul className="col-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Stories</a></li>
              <li><a href="#">Artisans</a></li>
              <li><a href="#">Boutiques</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">EU Compliance Docs</a></li>
            </ul>
          </div>

          <div className="link-col">
            <h4 className="col-title">QUICK LINKS</h4>
            <ul className="col-links">
              <li><a href="#">Orders & Shipping</a></li>
              <li><a href="#">Join / Login as Seller</a></li>
              <li><a href="#">Payment & Pricing</a></li>
              <li><a href="#">Returns & Refunds</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="link-col">
            <h4 className="col-title">FOLLOW US</h4>
            <div className="socials">
              <a href="#" className="social">🌐</a>
              <a href="#" className="social">📸</a>
              <a href="#" className="social">🐦</a>
            </div>
            <div className="payments">
              <span className="pay">Visa</span>
              <span className="pay">Mastercard</span>
              <span className="pay">Amex</span>
              <span className="pay">Apple Pay</span>
            </div>
          </div>
        </div>
      </div>

      <div className="foot-copy">
        <div className="container copy-inner">
          © 2025 ShopEasy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
