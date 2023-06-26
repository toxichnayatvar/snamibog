function wtf() {
    let text = document.getElementById('text').value
    let res = ''
     for (let i = 0; i < text.length; i++) {
        console.log(text[i]);
         if (text[i] === 'f') {
              res += 'а'
        } else if (text[i] === ',') {
            res += 'б'
         } else if (text[i] === 'd') {
            res += 'в'
         } else if (text[i] === 'u') {
             res += 'г'
         } else if (text[i] === 'l') {
             res += 'д'
         } else if (text[i] === 't') {
             res += 'е'
         } else if (text[i] === '`') {
             res += 'ё'
         } else if (text[i] === ';') {
             res += 'ж'
         } else if (text[i] === 'p') {
             res += 'з'
        } else if (text[i] === 'b') {
            res += 'и'
         } else if (text[i] === 'q') {
             res += 'й'
         } else if (text[i] === 'r') {
             res += 'к'
         } else if (text[i] === 'k') {
             res += 'л'
         } else if (text[i] === 'v') {
            res += 'м'
        } else if (text[i] === 'y') {
            res += 'н'
        } else if (text[i] === 'j') {
             res += 'о'
        } else if (text[i] === 'g') {
            res += 'п'
        } else if (text[i] === 'h') {
            res += 'р'
        } else if (text[i] === 'c') {
            res += 'с'
        } else if (text[i] === 'n') {
            res += 'т'
        } else if (text[i] === 'e') {
            res += 'у'
        } else if (text[i] === 'a') {
            res += 'ф'
        } else if (text[i] === '[') {
           res += 'х'
        } else if (text[i] === 'w') {
            res += 'ц'
        } else if (text[i] === 'x') {
            res += 'ч'
        } else if (text[i] === 'i') {
            res += 'ш'
        } else if (text[i] === 'o') {
            res += 'щ'
        } else if (text[i] === 'm') {
            res += 'ь'
        } else if (text[i] === 's') {
            res += 'ы'
        } else if (text[i] === ']') {
            res += 'ъ'
        } else if (text[i] === "'") {
            res += 'э'
        } else if (text[i] === '.') {
            res += 'ю'
        } else if (text[i] === 'z') {
            res += 'я'
        } else if (text[i] === '&') {
            res += '?'
        } else if (text[i] === '?') {
            res += ','
        } else if (text[i] === 'ፍ') {
            res += 'а'
        } else if (text[i] === '፣') {
            res += 'б'
        } else if (text[i] === 'ድ') {
            res += 'в'
        } else if (text[i] === 'ኡ') {
             res += 'г'
        } else if (text[i] === 'ል') {
             res += 'д'
        } else if (text[i] === 'ት') {
             res += 'е'
        } else if (text[i] === '፤') {
             res += 'ж'
        } else if (text[i] === 'ፕ') {
             res += 'з'
        } else if (text[i] === 'ብ') {
            res += 'и'
        } else if (text[i] === 'ቅ') {
             res += 'й'
        } else if (text[i] === 'ር') {
             res += 'к'
        } else if (text[i] === 'ክ') {
             res += 'л'
        } else if (text[i] === 'ቭ') {
            res += 'м'
        } else if (text[i] === 'ይ') {
            res += 'н'
        } else if (text[i] === 'ጅ') {
             res += 'о'
        } else if (text[i] === 'ግ') {
            res += 'п'
        } else if (text[i] === 'ህ') {
            res += 'р'
        } else if (text[i] === 'ች') {
            res += 'с'
        } else if (text[i] === 'ን') {
            res += 'т'
        } else if (text[i] === 'እ') {
            res += 'у'
        } else if (text[i] === 'አ') {
            res += 'ф'
        } else if (text[i] === '[') {
           res += 'х'
        } else if (text[i] === 'ው') {
            res += 'ц'
        } else if (text[i] === 'ሽ') {
            res += 'ч'
        } else if (text[i] === 'ኢ') {
            res += 'ш'
        } else if (text[i] === 'ኦ') {
            res += 'щ'
        } else if (text[i] === 'ስ') {
            res += 'ы'
        } else if (text[i] === 'ም') {
            res += 'ъ'
        } else if (text[i] === '።') {
            res += 'ю'
        } else if (text[i] === 'ዝ') {
            res += 'я'
        } else {
            res += text[i];
        }
    }
    
    document.getElementById('output').innerText = res;
}
