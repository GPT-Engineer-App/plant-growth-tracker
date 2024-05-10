import React, { useEffect, useState } from 'react';
import { openDB, fetchRecords, addRecord } from '../utils/IndexedDBUtil';
import AddRecordForm from '../components/AddRecordForm';

const PlantGrowthRecords = () => {
  const [records, setRecords] = useState([]);
  const [db, setDb] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    openDB().then(db => {
      setDb(db);
      fetchRecords(db).then(data => {
        setRecords(data);
      });
    });
  }, []);
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-6">Plant Growth Records</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowForm(true)}>Add New Plant Record</button>
      {showForm && <AddRecordForm db={db} onClose={(refresh) => { setShowForm(false); if (refresh) fetchRecords(db).then(data => setRecords(data)); }} />}
      <table className="min-w-full leading-normal mt-6">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              ID
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Name
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Status
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Planted Date
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Species
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Image
            </th>
          </tr>
        </thead>
        <tbody>
          {records.length > 0 ? records.map(record => (
            <tr key={record.id} onClick={() => showDetailsModal(record)}>
              <td>{record.id}</td>
              <td>{record.name}</td>
              <td>{record.status}</td>
              <td>{record.plantedDate}</td>
              <td>{record.species}</td>
              <td><img src={record.image || 'path/to/default/image.png'} alt="Plant" /></td>
            </tr>
          )) : <tr><td colSpan="6" className="text-center">No record found</td></tr>}
        </tbody>
      </table>
    </div>
  );
};

export default PlantGrowthRecords;