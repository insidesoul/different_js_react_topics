let riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это съедобное', 'это фрукт'],
    hintsAmount: 1,
    tries: 3,
    checkAnswer(answer) {
        if(!this.tries) return alert('Game over')
        if(answer === this.correctAnswer) alert('Yep, you so good!')
        else {
            if(this.hintsAmount > -1 && confirm('Maybe you are want a hint')) {
                alert(this.hints[this.hintsAmount])
                this.hintsAmount--
            }
            if(this.tries === 1) return alert('Game over')
            this.tries--;
            alert(`The answer is wrong\n${this.tries} tries left`);
        }
    },
}

window.onload = function() {
    document.getElementById('riddle').innerText = riddle.question;
}

function check() {
    let input = document.getElementsByTagName('input')[0];

    let guessedAnswer = input.value;

    if (guessedAnswer) {
        riddle.checkAnswer(guessedAnswer)
    }
}