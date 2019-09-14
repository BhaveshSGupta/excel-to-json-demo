var parser = require('simple-excel-to-json')
var doc = parser.parseXls2Json('sample.xlsx', { isNested: true }); 
const fs = require('fs');
fs.writeFileSync("sample.json",JSON.stringify(doc[0], null, 2), function(err) {
    if(err) {
        console.log("There was an error!");
        return console.log(err);
    }
});

