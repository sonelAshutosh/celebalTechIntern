// JS File Handling (JSON format)
const data = require('./sampleData')

console.log(data)

// Using the fs module
const fs = require('fs')
fs.readFile('sampleData.json', function (err, data) {
  if (err) throw err

  console.log(JSON.parse(data))
})
// ----------------------------------------------------------------
// Writing to a JSON file
// ----------------------------------------------------------------
let newData = {
  name: 'Example Name',
  age: 99,
}

data.push(newData)

fs.writeFile('sampleData.json', JSON.stringify(data), (err) => {
  if (err) throw err

  console.log('Dataa added successfully')
})
