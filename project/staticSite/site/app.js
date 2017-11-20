/*const fs = require('fs');
const markdown = require( "markdown" ).markdown;

fs.readFile('./doc/note.md', (err, data) => {
  if (err) throw err;
  let markdownString = new String(data).toString();
  console.log(data);
  // console.log(markdown.toHTML( markdownString ));
});*/

//公共引用
var dealFile = require("../my_modules/tools/Qio").dealFile;
dealFile(__dirname,"note");