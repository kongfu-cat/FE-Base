const reverseCase = str => {
    return str.split('').map(ch => {
        return ch === ch.toLowerCase() ? ch.toUpperCase() : ch.toLowerCase()
    }).join('')
}
console.log(reverseCase('AbCdefG?!'))