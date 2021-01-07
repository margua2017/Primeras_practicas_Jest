function isAnagram(str1,str2){
    return funcionComparativa(str1) === funcionComparativa(str2);
}

function funcionComparativa(str) {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');     
}


module.exports = isAnagram;