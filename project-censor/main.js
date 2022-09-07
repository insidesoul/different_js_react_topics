function censor() {
    let arr = []

    function censorRun(str1, str2 = 0){
        if(str2 !== 0) arr.push(str1, str2)
        else {
            for(let i = 0; i < arr.length; i+=2){
                str1 =  str1.replace(arr[i], arr[i+1])
            }
            return str1
        }
    }
    return censorRun
}

const changeScene = censor();

changeScene('PHP', 'JS');

changeScene('backend', 'frontend');

console.log(changeScene('PHP is the most popular programming language for backend web-development'));