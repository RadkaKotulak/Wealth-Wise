
// Initialize PouchDB
var db = new PouchDB('finance_tracker');

// Sync with remote database
var remoteDB = new PouchDB('https://your-remote-couchdb-url.com/finance_tracker');
db.sync(remoteDB, {
    live: true,
    retry: true
}).on('change', function (info) {
    console.log('Data synced:', info);
}).on('error', function (err) {
    console.error('Sync error:', err);
});