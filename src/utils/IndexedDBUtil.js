export const openDB = async () => {
  if (!('indexedDB' in window)) {
    throw new Error('This browser doesn\'t support IndexedDB');
  }
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open("NurseryDB", 1);
    request.onerror = (event) => {
      reject('Database error: ' + event.target.errorCode);
    };
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      const objectStore = db.createObjectStore("plant_records", { keyPath: "id" });
      objectStore.createIndex("name", "name", { unique: false });
      objectStore.createIndex("status", "status", { unique: false });
      objectStore.createIndex("plantedDate", "plantedDate", { unique: false });
      objectStore.createIndex("time", "time", { unique: false });
      objectStore.createIndex("species", "species", { unique: false });
      objectStore.createIndex("family", "family", { unique: false });
      objectStore.createIndex("image", "image", { unique: false });
    };
    request.onsuccess = (event) => {
      resolve(event.target.result);
    };
  });
};

export const addRecord = async (db, record) => {
  const transaction = db.transaction(["plant_records"], "readwrite");
  transaction.oncomplete = (event) => {
    console.log("Transaction completed.");
  };
  transaction.onerror = (event) => {
    console.error("Transaction error: " + event.target.errorCode);
  };
  const objectStore = transaction.objectStore("plant_records");
  const request = objectStore.add(record);
  return new Promise((resolve, reject) => {
    request.onsuccess = () => {
      resolve(request.result);
    };
    request.onerror = () => {
      reject(request.error);
    };
  });
};

export const fetchRecords = async (db) => {
  const transaction = db.transaction(["plant_records"], "readonly");
  const objectStore = transaction.objectStore("plant_records");
  const request = objectStore.getAll();
  return new Promise((resolve, reject) => {
    request.onsuccess = () => {
      resolve(request.result);
    };
    request.onerror = () => {
      reject(request.error);
    };
  });
};