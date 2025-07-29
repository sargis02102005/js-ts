const FizzBuzz = 1 + Math.round(Math.random() * 20)

if (FizzBuzz % 3 === 0){
    console.log('Fizz')
}else if (FizzBuzz % 5 === 0){
    console.log('Buzz')
}else if (FizzBuzz % 3 === 0 && FizzBuzz % 5 === 0) {
    console.log('FizzBuzz')
}



