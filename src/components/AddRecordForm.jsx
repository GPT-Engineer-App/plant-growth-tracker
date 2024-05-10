import React, { useState } from 'react';
import { addRecord } from '../utils/IndexedDBUtil';

const AddRecordForm = ({ db, onClose }) => {
  const [formData, setFormData] = useState({
    id: '', name: '', status: '', plantedDate: '', time: '', species: '', family: '', image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    await addRecord(db, formData);
    onClose(true); // Refresh records on close
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Add New Plant Record</h3>
        <input type="text" name="id" placeholder="Unique ID" onChange={handleChange} value={formData.id} />
        <input type="text" name="name" placeholder="Name" onChange={handleChange} value={formData.name} />
        <select name="status" onChange={handleChange} value={formData.status}>
          <option value="">Select Status</option>
          <option value="Germinated">Germinated</option>
          <option value="Two Leaf Stage">Two Leaf Stage</option>
          <option value="4 Inch Stage">4 Inch Stage</option>
          <option value="2 Feet Stage">2 Feet Stage</option>
          <option value="Dead">Dead</option>
          <option value="Transplanted">Transplanted</option>
        </select>
        <input type="date" name="plantedDate" onChange={handleChange} value={formData.plantedDate} />
        <input type="time" name="time" onChange={handleChange} value={formData.time} />
        <input type="text" name="species" placeholder="Species" onChange={handleChange} value={formData.species} />
        <input type="text" name="family" placeholder="Family" onChange={handleChange} value={formData.family} />
        <input type="file" name="image" onChange={handleChange} />
        <div className="mt-4">
          <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
          <button onClick={() => setFormData({})} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2">Reset</button>
          <button onClick={() => onClose(false)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">Close</button>
        </div>
      </div>
    </div>
  );
};

export default AddRecordForm;