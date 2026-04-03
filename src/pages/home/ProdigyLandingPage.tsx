import React, { useState } from "react";
import { CheckCircle, Star, ArrowRight, Play, X } from "lucide-react";

const ProdigyLandingPage: React.FC = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ==================== NAVBAR ==================== */
        .navbar {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          padding: 16px 0;
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a1a;
        }

        .nav-links {
          display: flex;
          gap: 32px;
          align-items: center;
        }

        .nav-link {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.7);
          text-decoration: none;
          transition: color 0.3s;
        }

        .nav-link:hover {
          color: #06b6d4;
        }

        .btn-primary {
          background: linear-gradient(135deg, #06b6d4, #0891b2);
          color: white;
          border: none;
          padding: 10px 24px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(6, 182, 212, 0.3);
        }

        /* ==================== HERO ==================== */
        .hero {
          padding: 80px 0 120px;
          text-align: center;
        }

        .hero-badge {
          display: inline-block;
          padding: 8px 16px;
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(8, 145, 178, 0.1));
          border: 1px solid rgba(6, 182, 212, 0.3);
          border-radius: 20px;
          font-size: 13px;
          color: #0891b2;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .hero-title {
          font-size: clamp(42px, 6vw, 68px);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin-bottom: 20px;
          color: #1a1a1a;
        }

        .hero-title span {
          background: linear-gradient(135deg, #06b6d4, #0891b2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 18px;
          color: rgba(0, 0, 0, 0.6);
          max-width: 700px;
          margin: 0 auto 40px;
          line-height: 1.8;
        }

        .hero-cta {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 60px;
        }

        .btn-secondary {
          background: rgba(0, 0, 0, 0.05);
          color: #1a1a1a;
          border: 1px solid rgba(0, 0, 0, 0.15);
          padding: 12px 32px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btn-secondary:hover {
          background: rgba(0, 0, 0, 0.1);
          border-color: rgba(0, 0, 0, 0.3);
        }

        .hero-image {
          background: linear-gradient(135deg, #06b6d4, #0891b2);
          border-radius: 16px;
          padding: 2px;
          margin-bottom: 40px;
        }

        .hero-image-inner {
          background: white;
          border-radius: 14px;
          padding: 40px;
          text-align: center;
          color: rgba(0, 0, 0, 0.4);
        }

        /* ==================== SOCIAL PROOF ==================== */
        .social-proof {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
          padding: 40px 0;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          margin-bottom: 80px;
          flex-wrap: wrap;
        }

        .proof-item {
          text-align: center;
        }

        .proof-value {
          font-size: 28px;
          font-weight: 700;
          color: #06b6d4;
        }

        .proof-label {
          font-size: 13px;
          color: rgba(0, 0, 0, 0.6);
          margin-top: 4px;
        }

        /* ==================== FEATURES ==================== */
        .features {
          padding: 80px 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-title {
          font-size: 42px;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
          color: #1a1a1a;
        }

        .section-subtitle {
          font-size: 18px;
          color: rgba(0, 0, 0, 0.6);
          max-width: 600px;
          margin: 0 auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
        }

        .feature-card {
          padding: 32px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .feature-card:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.95);
          border-color: rgba(6, 182, 212, 0.3);
          box-shadow: 0 20px 40px rgba(6, 182, 212, 0.1);
        }

        .feature-icon {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(8, 145, 178, 0.1));
          display: flex;
          align-items: center;
          justify-content: center;
          color: #06b6d4;
          margin-bottom: 20px;
          font-size: 24px;
        }

        .feature-title {
          font-size: 18px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 12px;
        }

        .feature-desc {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.6);
          line-height: 1.7;
        }

        /* ==================== COURSES ==================== */
        .courses {
          padding: 80px 0;
          background: rgba(6, 182, 212, 0.02);
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
        }

        .course-card {
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          height: 100%;
        }

        .course-image {
          width: 100%;
          height: 160px;
          background: linear-gradient(135deg, #06b6d4, #0891b2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 20px;
        }

        .course-card:hover .course-image {
          transform: scale(1.05);
        }

        .course-info {
          padding: 20px;
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-top: none;
        }

        .course-name {
          font-size: 16px;
          font-weight: 700;
          color: #1a1a1a;
        }

        /* ==================== TESTIMONIALS ==================== */
        .testimonials {
          padding: 80px 0;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 28px;
        }

        .testimonial {
          padding: 32px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(0, 0, 0, 0.08);
        }

        .stars {
          display: flex;
          gap: 4px;
          margin-bottom: 16px;
          color: #06b6d4;
        }

        .testimonial-text {
          font-size: 15px;
          color: rgba(0, 0, 0, 0.7);
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .testimonial-author {
          font-weight: 600;
          color: #1a1a1a;
          font-size: 14px;
        }

        .testimonial-role {
          font-size: 13px;
          color: rgba(0, 0, 0, 0.5);
          margin-top: 2px;
        }

        /* ==================== PRICING ==================== */
        .pricing {
          padding: 80px 0;
          background: rgba(6, 182, 212, 0.02);
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .pricing-card {
          padding: 40px 32px;
          border-radius: 16px;
          background: white;
          border: 2px solid rgba(0, 0, 0, 0.08);
          position: relative;
          transition: all 0.3s ease;
        }

        .pricing-card.featured {
          border-color: #06b6d4;
          transform: scale(1.05);
          box-shadow: 0 20px 40px rgba(6, 182, 212, 0.15);
        }

        .pricing-badge {
          position: absolute;
          top: -12px;
          left: 24px;
          background: #06b6d4;
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .pricing-name {
          font-size: 20px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 12px;
        }

        .pricing-desc {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.6);
          margin-bottom: 24px;
        }

        .pricing-value {
          font-size: 36px;
          font-weight: 700;
          color: #06b6d4;
          margin-bottom: 8px;
        }

        .pricing-period {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.5);
          margin-bottom: 28px;
        }

        .pricing-features {
          list-style: none;
          margin-bottom: 32px;
        }

        .pricing-feature {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 0;
          font-size: 14px;
          color: rgba(0, 0, 0, 0.7);
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }

        .pricing-cta {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 15px;
        }

        .pricing-cta-primary {
          background: linear-gradient(135deg, #06b6d4, #0891b2);
          color: white;
        }

        .pricing-cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(6, 182, 212, 0.3);
        }

        .pricing-cta-secondary {
          background: rgba(0, 0, 0, 0.05);
          color: #1a1a1a;
          border: 1px solid rgba(0, 0, 0, 0.15);
        }

        .pricing-cta-secondary:hover {
          background: rgba(0, 0, 0, 0.1);
        }

        /* ==================== CTA ==================== */
        .final-cta {
          padding: 80px 0;
          text-align: center;
        }

        .cta-title {
          font-size: 48px;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
          color: #1a1a1a;
        }

        .cta-subtitle {
          font-size: 18px;
          color: rgba(0, 0, 0, 0.6);
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* ==================== FOOTER ==================== */
        .footer {
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          padding: 60px 0 40px;
          background: rgba(0, 0, 0, 0.02);
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-section h3 {
          font-size: 14px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .footer-link {
          display: block;
          font-size: 14px;
          color: rgba(0, 0, 0, 0.6);
          margin-bottom: 12px;
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-link:hover {
          color: #06b6d4;
        }

        .footer-bottom {
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          padding-top: 28px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
          font-size: 13px;
          color: rgba(0, 0, 0, 0.5);
        }

        /* ==================== MODAL ==================== */
        .modal {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal-content {
          background: white;
          border-radius: 16px;
          padding: 40px;
          max-width: 500px;
          width: 90%;
          position: relative;
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          cursor: pointer;
          color: rgba(0, 0, 0, 0.6);
        }

        /* ==================== RESPONSIVE ==================== */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .hero-title {
            font-size: 36px;
          }

          .section-title {
            font-size: 32px;
          }

          .pricing-card.featured {
            transform: scale(1);
          }

          .social-proof {
            gap: 20px;
          }
        }
      `}</style>

      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <div className="logo">Prodigy</div>
            <div className="nav-links">
              <a href="#features" className="nav-link">
                Features
              </a>
              <a href="#courses" className="nav-link">
                Courses
              </a>
              <a href="#pricing" className="nav-link">
                Pricing
              </a>
              <button className="btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            ✨ Master Your Exams with AI-Powered Practice
          </div>
          <h1 className="hero-title">
            Perfect Your <span>Test Scores</span> with Adaptive Learning
          </h1>
          <p className="hero-subtitle">
            Prodigy uses intelligent algorithms to create personalized practice
            tests that adapt to your learning pace. Master any subject with
            confidence.
          </p>
          <div className="hero-cta">
            <button className="btn-primary">Start Free Trial</button>
            <button
              className="btn-secondary"
              onClick={() => setVideoOpen(true)}
            >
              <Play size={16} /> Watch Demo
            </button>
          </div>
          <div className="hero-image">
            <div className="hero-image-inner">
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>📊</div>
              <p>Dashboard Preview</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container">
        <div className="social-proof">
          <div className="proof-item">
            <div className="proof-value">50K+</div>
            <div className="proof-label">Active Students</div>
          </div>
          <div className="proof-item">
            <div className="proof-value">95%</div>
            <div className="proof-label">Pass Rate</div>
          </div>
          <div className="proof-item">
            <div className="proof-value">4.9/5</div>
            <div className="proof-label">User Rating</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Students Choose Prodigy</h2>
            <p className="section-subtitle">
              Everything you need to excel in your exams
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3 className="feature-title">AI-Powered Adaptation</h3>
              <p className="feature-desc">
                Intelligent algorithms that learn your weak areas and focus
                practice where it matters most.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3 className="feature-title">Real-Time Progress</h3>
              <p className="feature-desc">
                Track your improvement with detailed analytics and personalized
                insights on every test.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">Exam-Ready Questions</h3>
              <p className="feature-desc">
                Practice with questions from past exams and real test formats to
                build confidence.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Instant Feedback</h3>
              <p className="feature-desc">
                Get detailed explanations for every question to understand
                concepts deeply.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3 className="feature-title">Multiple Subjects</h3>
              <p className="feature-desc">
                Master Math, Physics, General Knowledge, and more with our
                comprehensive library.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3 className="feature-title">Proven Results</h3>
              <p className="feature-desc">
                Join thousands of students who improved their scores by an
                average of 23%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="courses">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Available Subjects</h2>
            <p className="section-subtitle">
              Comprehensive practice tests across multiple disciplines
            </p>
          </div>
          <div className="courses-grid">
            {[
              { name: "MAT 101", emoji: "📐" },
              { name: "PHY 101", emoji: "⚛️" },
              { name: "GNS 101", emoji: "🌍" },
              { name: "ENG 101", emoji: "📖" },
              { name: "BIO 101", emoji: "🧬" },
              { name: "CHM 101", emoji: "⚗️" },
            ].map((course) => (
              <div key={course.name} className="course-card">
                <div className="course-image">{course.emoji}</div>
                <div className="course-info">
                  <div className="course-name">{course.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Loved by Students</h2>
            <p className="section-subtitle">See what our users have to say</p>
          </div>
          <div className="testimonials-grid">
            {[
              {
                stars: 5,
                text: "Prodigy completely transformed how I study. The adaptive questions pushed me to improve exactly where I needed it most. I went from 68% to 92% in 3 months!",
                author: "Chioma Okafor",
                role: "Medical Student",
              },
              {
                stars: 5,
                text: "The instant feedback and detailed explanations are game-changers. I finally understand WHY I get questions wrong, not just that I do.",
                author: "Tunde Adeyemi",
                role: "Engineering Student",
              },
              {
                stars: 5,
                text: "Best investment I've made in my education. The practice tests are exactly like the real exams, and the analytics help me focus my time efficiently.",
                author: "Zainab Hassan",
                role: "Law Student",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="testimonial">
                <div className="stars">
                  {Array(testimonial.stars)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">{testimonial.author}</div>
                <div className="testimonial-role">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Simple, Transparent Pricing</h2>
            <p className="section-subtitle">
              Choose the plan that works for you
            </p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-name">Free Trial</div>
              <p className="pricing-desc">Start learning for free</p>
              <div className="pricing-value">₦0</div>
              <p className="pricing-period">Forever free</p>
              <ul className="pricing-features">
                <li className="pricing-feature">
                  <CheckCircle size={18} /> 5 practice tests/month
                </li>
                <li className="pricing-feature">
                  <CheckCircle size={18} /> Basic progress tracking
                </li>
                <li className="pricing-feature">
                  <CheckCircle size={18} /> Access to 3 subjects
                </li>
              </ul>
              <button className="pricing-cta pricing-cta-secondary">
                Get Started
              </button>
            </div>

            <div className="pricing-card featured">
              <div className="pricing-badge">Most Popular</div>
              <div className="pricing-name">Pro</div>
              <p className="pricing-desc">For serious students</p>
              <div className="pricing-value">₦2,999</div>
              <p className="pricing-period">Per month</p>
              <ul className="pricing-features">
                <li className="pricing-feature">
                  <CheckCircle size={18} /> Unlimited practice tests
                </li>
                <li className="pricing-feature">
                  <CheckCircle size={18} /> Advanced analytics
                </li>
                <li className="pricing-feature">
                  <CheckCircle size={18} /> All subjects
                </li>
                <li className="pricing-feature">
                  <CheckCircle size={18} /> Priority support
                </li>
              </ul>
              <button className="pricing-cta pricing-cta-primary">
                Start Free Trial
              </button>
            </div>

            <div className="pricing-card">
              <div className="pricing-name">Enterprise</div>
              <p className="pricing-desc">For schools & institutions</p>
              <div className="pricing-value">Custom</div>
              <p className="pricing-period">Contact us</p>
              <ul className="pricing-features">
                <li className="pricing-feature">
                  <CheckCircle size={18} /> Bulk licenses
                </li>
                <li className="pricing-feature">
                  <CheckCircle size={18} /> Custom branding
                </li>
                <li className="pricing-feature">
                  <CheckCircle size={18} /> Dedicated support
                </li>
                <li className="pricing-feature">
                  <CheckCircle size={18} /> Admin dashboard
                </li>
              </ul>
              <button className="pricing-cta pricing-cta-secondary">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <h2 className="cta-title">Ready to Master Your Exams?</h2>
          <p className="cta-subtitle">
            Join 50,000+ students already using Prodigy to ace their tests.
            Start your free trial today.
          </p>
          <button
            className="btn-primary"
            style={{
              paddingLeft: "32px",
              paddingRight: "32px",
              height: "48px",
              fontSize: "16px",
            }}
          >
            Start Learning Now <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Product</h3>
              <a href="#" className="footer-link">
                Features
              </a>
              <a href="#" className="footer-link">
                Pricing
              </a>
              <a href="#" className="footer-link">
                Security
              </a>
            </div>
            <div className="footer-section">
              <h3>Company</h3>
              <a href="#" className="footer-link">
                About
              </a>
              <a href="#" className="footer-link">
                Blog
              </a>
              <a href="#" className="footer-link">
                Careers
              </a>
            </div>
            <div className="footer-section">
              <h3>Resources</h3>
              <a href="#" className="footer-link">
                Help Center
              </a>
              <a href="#" className="footer-link">
                Documentation
              </a>
              <a href="#" className="footer-link">
                API Docs
              </a>
            </div>
            <div className="footer-section">
              <h3>Legal</h3>
              <a href="#" className="footer-link">
                Privacy
              </a>
              <a href="#" className="footer-link">
                Terms
              </a>
              <a href="#" className="footer-link">
                Contact
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <div>© 2024 Prodigy. All rights reserved.</div>
            <div style={{ display: "flex", gap: "20px" }}>
              <a href="#" className="footer-link">
                Twitter
              </a>
              <a href="#" className="footer-link">
                LinkedIn
              </a>
              <a href="#" className="footer-link">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {videoOpen && (
        <div className="modal" onClick={() => setVideoOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setVideoOpen(false)}>
              <X size={24} />
            </button>
            <div
              style={{
                paddingTop: "56.25%",
                position: "relative",
                width: "100%",
              }}
            >
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "8px",
                }}
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProdigyLandingPage;
