function check() {
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var q6=document.quiz.question6.value;
    var result=document.getElementById('result')
    var quiz=document.getElementById("quiz")
    if (q1=="javascript") {c++}
    if (q2=="Russia") {c++}
    if (q3=="Nairobi") {c++}
    if (q4=="William Ruto") {c++}
    if (q5=="L. Victoria") {c++}
    if (q6=="British") {c++}
    quiz.style.display= "none";

    if (c<=4) {
        result.textContent='you have entered less answers. It is not so good please work on yourself.'
    } else {
        result.textContent='your submission is successful. It is awesome. Keep it up!'

    }
}