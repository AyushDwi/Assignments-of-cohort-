function isAnagram(str1, str2) {
    
    str1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
    str2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase();

    
    if (str1.length !== str2.length) {
        return false;
    }

    
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}
