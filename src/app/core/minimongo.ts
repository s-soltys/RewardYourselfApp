const minimongo = require('minimongo');

const db = new minimongo.LocalStorageDb({namespace: 'mm'});

let collectionNames = ['tasks'];
collectionNames.forEach(name => {
    if (!db.collections[name]) {
        db.addCollection(name);
    }
});

export default db;