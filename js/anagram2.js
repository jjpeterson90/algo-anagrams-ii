exports.anagramsFor = function(word, listOfWords) {
    let anagramsFound = [];
    word = word.split('');
    listOfWords.forEach(thisWord => {
        if (thisWord.length == word.length) {
            var testThisWord = thisWord.split('');
            for (let i = 0; i < thisWord.split('').length; i++) {
                letter = thisWord[i];
                //console.log(letter)
                if (word.includes(letter)) {
                    testThisWord.splice(testThisWord.indexOf(letter), 1);
                }
            }
            if (testThisWord.length == 0) anagramsFound.push(thisWord);
        }
    })
    return anagramsFound
};