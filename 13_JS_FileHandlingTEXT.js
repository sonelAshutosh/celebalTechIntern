// JS File Handling (text format)
const fs = require('fs')

// Opening a file in Node.js
fs.open('file1.txt', 'w', (err, data) => {
  if (err) throw err
  console.log('File Created Successfully')
})

// Writing to a file in Node.js
fs.writeFile('file2.txt', 'Hello content!', function (err) {
  if (err) throw err
  console.log('Content added Successfully')
})

// Reading from a file in Node.js
fs.readFile('file2.txt', function (err, data) {
  if (err) throw err
  console.log('Data from file - ' + data)
})

// Appending to a file in Node.js
fs.appendFile('file2.txt', ' This is my text.', function (err) {
  if (err) throw err
  console.log('File Updated Successfully')
})

// Deleting a file from Node.js
fs.unlink('file1.txt', function (err) {
  if (err) throw err
  console.log('File Deleted Successfully')
})

// Renaming a file in Node.js
fs.rename('file2.txt', 'renamedFile2.txt', function (err) {
  if (err) throw err
  console.log('File Renamed Successfully')
})

// Synchronously Writing and Reading data to a file in Node.js

let data = 'This is a Sample data for a file in Node.js'

fs.writeFileSync('file3.txt', data)
console.log('File written successfully')
