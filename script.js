const convert = (n) => {
    const romNum = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        CX: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    }
    const romKeys = Object.keys(romNum).sort((a, b) => romNum[b] - romNum[a])
    const romValues = Object.values(romNum).sort((a, b) => b - a)

    let result = ''
    for (let i = 0; i < romKeys.length; i++) {
        if (n === 0) break;
        while (n >= romValues[i]) {
            result += romKeys[i]
            n -= romValues[i]
        }
    }
    return (result)

}


const showResult = (message) => {
    document.getElementById('output').innerHTML = message
}

const start = () => {
    let btn = document.getElementById('convert-btn')
    let number = document.getElementById('number')

    btn.addEventListener('click', () => {
        let n = parseInt(number.value)
        if (n < 1) {
            showResult("Please enter a number greater than or equal to 1")
        }
        else if (n > 3999) {
            showResult("Please enter a number less than or equal to 3999")
        }
        else {
            let result = convert(n)
            showResult(`${result}`)
        }
    })
}

start()