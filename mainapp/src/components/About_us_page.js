import React from 'react';
import Slider from 'react-slick';
import '../styles/AboutUs.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="about-us">
      <h2>About Us</h2>
      <Slider {...settings}>
        <div className="slide">
          <h3>Welcome to Ranmi_App Delivery Service!</h3>
          <p>Fast. Reliable. Convenient.

            Ranmi_App is your go-to solution for quick and dependable delivery services. 
            Whether you need to send a document, a gift, or any package across town, 
            we've got you covered. Our dedicated riders are just a few taps away,
            ready to pick up your package and deliver it safely to its destination.</p>
        </div>
        <div className="slide">
          <h3>Our Mission</h3>
          <p>To revolutionize the delivery industry with cutting-edge technology and exceptional customer service.</p>
        </div>
        <div className="slide">
          <h3>Our Vision</h3>
          <p>To be the most trusted and innovative delivery service, connecting people and businesses worldwide.</p>
        </div>
        <div className="slide">
          <h3>Our Values</h3>
          <p>We value integrity, commitment, and excellence in all our operations and interactions with customers.</p>
        </div>
        <div className="slide">
            <h3>Why choose Ranmi_App?</h3>
            <p>Speedy Service: Our riders are always on the move, ensuring your package gets picked up and delivered in the shortest time possible.
                Real-Time Tracking: Know exactly where your package is at all times with our real-time tracking feature.
                Secure Deliveries: We prioritize the safety of your packages with secure handling and delivery protocols.
                User-Friendly App: Easily place an order, track your package, and manage your deliveries all within our intuitive app.
                Affordable Rates: Enjoy competitive pricing with no hidden fees.</p>
        </div>
        <div className="slide">
            <h3>How it works:</h3>
            <p>Place an Order: Open the Ranmi_App, enter your pickup and delivery details, and choose a convenient pickup time.
                Rider Assignment: A nearby rider will be assigned to pick up your package promptly.
                Track Your Package: Use the app to track your package in real-time from pickup to delivery.
                Get Notified: Receive notifications at each stage of the delivery process, so you’re always in the loop.
                Rate Your Experience: After delivery, rate your rider and provide feedback to help us improve our service.</p>    
                </div>
         <div className="slide">
            <h3>Our commitment to you:</h3>
            <p>At Ranmi_App, we are committed to providing the highest level of service.
             Your satisfaction is our priority,
              and we strive to make every delivery experience seamless and stress-free.</p>
              </div>
              <div className="slide">
                <h3>Download Ranmi_App Today and Experience the Future of Delivery!</h3>
                </div>       
      </Slider>
    </div>
  );
};

export default AboutUs;
