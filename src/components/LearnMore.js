import React from 'react';
import { useInView } from 'react-intersection-observer';
import './LearnMore.css'; // Make sure your styles are correctly pointed
import myImage from '../Assets/robot.gif'; // Correct the path as necessary
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

const Header = () => (
  <header className="Home-header">
    <h1>Welcome to Our Information Page</h1>
  </header>
);

const Content = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="Home-content">
      <section className="info-section" style={{ position: 'relative' }}>
        <h2>The Services Dr.Oesto Provides Are As Follows</h2>
        <img
          ref={ref}
          src={myImage}
          alt="Descriptive text for the image"
          className={`image-animation ${inView ? 'start-animation' : ''}`}
        />
        {/* Links for the red spots */}
        <Link to="/page1" className="spot spot-8" aria-label="Navigate to page 1"></Link>
        <Link to="/page2" className="spot spot-6" aria-label="Navigate to page 2"></Link>
        <Link to="/page3" className="spot spot-5" aria-label="Navigate to page 3"></Link>
        <Link to="https://www.youtube.com/watch?app=desktop&v=Rl3OkKlftsI" className="spot spot-7" aria-label="Navigate to page 4"></Link>
      </section>
      {/* You can add more sections as needed */}
    </main>
  );
};

const Footer = () => (
  <footer className="Home-footer">
    <p>© 2024 OsteoOpti</p>
  </footer>
);

export default Home;
