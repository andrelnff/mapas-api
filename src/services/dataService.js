const { ref, child, get, set } = require("firebase/database");
const { db } = require('../../firebase');

exports.getData = async (dataset) => {
    console.log(`Fetching data for ${dataset}`);
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, dataset));
    if (snapshot.exists()) {
        console.log(`Data fetched successfully for ${dataset}`);
        return snapshot.val();
    } else {
        console.error(`No data available for ${dataset}`);
        return null;
    }
};

exports.setData = async (dataset, data) => {
    const dbRef = ref(db);
    await set(child(dbRef, dataset), data);
};
