const csv = require('csv-parser');

const fs = require('fs');
const { stringify } = require('querystring');

const results = []

fs.createReadStream('car.csv')
.pipe(csv())
.on('data', (data) => results.push(data))
.on('end', () => {
    console.log(results);

    fs.writeFileSync('car_output.json', JSON.stringify(results), "utf-8", (err) => {
        if (err) console.log(err);
    })
})

const jsonexport = require('jsonexport');
// const fs = require('fs');

const reader = fs.createReadStream('iris.json');
const writer = fs.createWriteStream('iris_output.csv');

reader.pipe(jsonexport()).pipe(writer);

// const jsonexport = require('jsonexport');

// const reader = fs.createReadStream('iris.json');

// const writer = fs.createWriteStream('iris_output.csv');

// reader.pipe(jsonexport().pipe(writer));