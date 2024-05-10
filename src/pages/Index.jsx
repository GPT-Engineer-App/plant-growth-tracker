import React from 'react';
import { FaSeedling, FaRegCalendarAlt, FaThermometerHalf } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-6">Nursery Management Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="/plant-growth-records">
          <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
            <FaSeedling className="text-green-500 w-16 h-16 mx-auto"/>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">Plant Growth Records</h5>
            <p className="mb-3 font-normal text-gray-700">Track the growth and health of various plants in your nursery.</p>
          </div>
        </Link>
        <Link to="/seed-germination">
          <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
            <FaRegCalendarAlt className="text-blue-500 w-16 h-16 mx-auto"/>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">Seed Germination</h5>
            <p className="mb-3 font-normal text-gray-700">Manage the germination process and schedule for all your seeds.</p>
          </div>
        </Link>
        <Link to="/composting-soil-mix">
          <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
            <FaThermometerHalf className="text-red-500 w-16 h-16 mx-auto"/>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">Composting & Soil Mix</h5>
            <p className="mb-3 font-normal text-gray-700">Keep records of composting activities and soil mix ratios.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Index;