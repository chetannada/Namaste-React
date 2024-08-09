import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen w-full flex justify-center">
      <div className="max-w-5xl mx-auto px-4">

      <div className="bg-white p-6 mt-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-red-800 md:text-4xl">About SnackDash</h2>
        <p className="text-lg text-gray-700 md:text-xl">
            SnackDash was founded in 2020 with a mission to make delicious and fresh food accessible to everyone.
            What started as a small local food delivery service has quickly grown into a beloved platform known for 
            its reliability and wide selection of cuisines. Over the years, we have partnered with numerous top-rated 
            restaurants to bring you the best dining experience right to your doorstep.
        </p>
      </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-red-800 md:text-4xl">Our Services</h2>
          <p className="text-lg text-gray-700 mb-6 md:text-xl">
            At SnackDash, we are dedicated to providing the best food delivery service with a wide range of options to 
            satisfy your cravings. Our mission is to bring delicious and fresh meals right to your doorstep.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 md:text-lg">
            <li>Fast and reliable food delivery</li>
            <li>Wide variety of cuisines to choose from</li>
            <li>Easy-to-use app and website for hassle-free ordering</li>
            <li>Exclusive deals and discounts for loyal customers</li>
            <li>24/7 customer support to assist you with any queries</li>
          </ul>
        </div>

        <div className="bg-white p-6 mt-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-red-800 md:text-4xl">Why Choose Us ?</h2>
          <p className="text-lg text-gray-700 mb-6 md:text-xl">
            SnackDash stands out in the food delivery market because we prioritize customer satisfaction and quality above all else. Here’s why you should choose us:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 md:text-lg">
            <li>Curated selection of top-rated restaurants</li>
            <li>Real-time order tracking and updates</li>
            <li>Secure payment options</li>
            <li>Environmentally friendly packaging</li>
            <li>Frequent promotions and seasonal offers</li>
          </ul>
        </div>

        <div className="bg-white p-6 mt-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-red-800 md:text-4xl">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6 md:text-xl">
            Our mission is to revolutionize the way you experience food delivery. We believe that everyone deserves access to tasty, fresh, and healthy meals, no matter where they are. We are committed to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 md:text-lg">
            <li>Providing a seamless and enjoyable food ordering experience</li>
            <li>Supporting local restaurants and communities</li>
            <li>Promoting sustainable and eco-friendly practices</li>
            <li>Ensuring customer satisfaction with every order</li>
            <li>Innovating continuously to meet your evolving needs</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default About;
