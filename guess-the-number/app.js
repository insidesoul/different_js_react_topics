let num = Math.floor(Math.random() * 10);
let tries = 2;

function guessNum (n) {
    if(n === num && tries) {
        tries = 1
        num = Math.floor(Math.random() * 10)
        return alert("WOW! Congratulations!")
    }
    else {
        if(!tries) alert("Too bad, you lost.\nRefresh the page and try again")
        else {
            tries -= 1
            alert("And you said you knew everything :D")
        }
    }
}