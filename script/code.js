function calculatebmi() {
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value

    let bmi= (weight /(height* height) * 703)
    document.getElementById('heading').innerHTML= 'Your bmi is: '
     document.getElementById('bmi-output').innerHTML=bmi.toFixed(12)
const btn = documentElementById('calculate')
}
btn.addEventListener('click',function() {
        let height = document.querySelector('#height').value;
        let weight = document.querySelector('#weight').value;

        if (height == ''|| weight == ''){
            alert('please fill out the input fields')
            return;
        }

        
});
if (bmi <= 18.5) {
    document.getElementById('message').innerHTML= 'you are underweight'
} else if (bmi <= 25   && bmi <=59) {
    document.getElementById('message').innerHTML='you are a healthy weight'
} else if (bmi >= 50 && bmi <=100 ) {
    document.getElementById('message').innerHTML='you are overweight'
}