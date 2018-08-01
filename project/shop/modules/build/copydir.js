let copySync = require('fs-extra').copySync
let path = require('path')

let from = path.join(__dirname, '../../dist/')
let to = path.join(__dirname, '../../../../../ShoneSingLone.github.io/shop')

// Sync:
try {
  if (process.env.NODE_ENV === 'production' || !process.env.NODE_ENV) {
    console.log('__dirname:', __dirname, '\nfrom:', from, '\nto:', to)
    copySync(from, to)
    console.log('copydir completed')
  }
  // development
} catch (err) {
  console.error(err)
}
