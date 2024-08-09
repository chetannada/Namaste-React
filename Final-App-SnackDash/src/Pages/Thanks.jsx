import React from 'react';

const ThankYou = () => {
  return (
    <div className="flex justify-center bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-md text-center">
        <img src="https://images.unsplash.com/photo-1499744937866-d7e566a20a61?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
             alt="Thank You" className="mx-auto w-2/3 mb-6 rounded-md" />
        <h1 className="text-4xl font-bold text-green-600 mb-6">Your order has been placed successfully!</h1>
        <p className="text-lg text-gray-700 mb-2">
           We appreciate your purchase and hope you enjoy your meal!
        </p>
        <p className="text-lg text-gray-700">
          If you have any questions or need further assistance, please feel free to contact our customer support.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;