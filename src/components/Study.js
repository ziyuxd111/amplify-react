import React, { useState } from 'react';
import myImage from '../Assets/progress.png'; // Correct the path as necessary
import image1 from '../Assets/2.gif'; // Correct the path as necessary
import image2 from '../Assets/4.gif'; // Correct the path as necessary
import image3 from '../Assets/1.gif'; // Correct the path as necessary
import image4 from '../Assets/4.png'; // Correct the path as necessary
import './Timeline.css';

const Content = () => {
  const [hoverSpot, setHoverSpot] = useState(null);

  return (
    <main className="Home-content">
      <section className="info-section" style={{ position: 'relative' }}>
        <img src={myImage} alt="Progress Timeline" className="progress-image" />

        {/* Spots for hover */}
        <div
          className="spot spot-1"
          onMouseEnter={() => setHoverSpot(1)}
          onMouseLeave={() => setHoverSpot(null)}
        ></div>
        <div
          className="spot spot-2"
          onMouseEnter={() => setHoverSpot(2)}
          onMouseLeave={() => setHoverSpot(null)}
        ></div>
        <div
          className="spot spot-3"
          onMouseEnter={() => setHoverSpot(3)}
          onMouseLeave={() => setHoverSpot(null)}
        ></div>
        <div
          className="spot spot-4"
          onMouseEnter={() => setHoverSpot(4)}
          onMouseLeave={() => setHoverSpot(null)}
        ></div>

        {/* Hover Images */}
        {hoverSpot === 1 && <img src={image1} alt="Detail 1" className="hover-image hover-image-1" />}
        {hoverSpot === 2 && <img src={image2} alt="Detail 2" className="hover-image hover-image-2" />}
        {hoverSpot === 3 && <img src={image3} alt="Detail 3" className="hover-image hover-image-3" />}
        {hoverSpot === 4 && <img src={image4} alt="Detail 4" className="hover-image hover-image-4" />}
      </section>
    </main>
  );
};

export default Content;