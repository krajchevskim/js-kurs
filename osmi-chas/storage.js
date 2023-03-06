//localStorage //clear cache za da se izbrishe local storage

//sessionStorage // dodeka e postoecki tabot ili browserot stoi posle toa se brise memorijata tamu

localStorage.setItem('username', 'Mario')
localStorage.setItem('password', 'Mario123')

const username = localStorage.getItem('username')
localStorage.removeItem('password') // ova brise se sto e vo zagradite
localStorage.clear() // ova brise se sto ima vnatre
localStorage.length() // vrakja kolku properties ima vo storage-ot


sessionStorage.setItem() // istite pogore vazat i za sessionstorage tuka


// local and session storage save only strings

