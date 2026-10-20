import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <p className="about-us-description">About Paradise Nursery</p>
      <p className="about-us-content">
        Paradise Nursery sells houseplants grown in our own greenhouse. We stock plants that clean
        indoor air, plants with a strong scent, plants that keep insects away and plants that
        survive with little care.
      </p>
      <p className="about-us-content">
        We check every plant for pests and root health before we pack it. Each order comes with a
        care card that tells you how much light and water the plant needs.
      </p>
      <p className="about-us-content">
        Have a question about a plant? Ask us before you buy and we will help you pick one that
        fits your room.
      </p>
    </div>
  );
}

export default AboutUs;
