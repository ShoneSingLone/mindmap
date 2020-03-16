function replace(source) {
    // replace
    // @require '../style/index.css'
    // to
    // require('../style/index.css');
    console.log(source);
    // return source.replace(/(\/\/ *@require) +(('|").+('|")).*/, 'require($2);');
    return "";
}

module.exports = replace;