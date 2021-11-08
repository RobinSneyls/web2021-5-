function proiz()
{
    var num1,num2,rezult;
    num1 = document.getElementById('n1').value;
    num2 = document.getElementById('n2').value;

    //is NaN
    if(isNaN(num1.value)==false|| isNaN(num2.value)==false)
    { 
    num1 = parseInt(num1); 
    num2 = parseInt(num2);
    } 

    var r = /[A-Za-zА-Яа-яЁё]/g;
    var p = /^-+\d+$|\d+$/;
      

    rezult = num1*num2;

    if(r.test(num1).value==false||r.test(num2).value==false||p.test(num1)==false||p.test(num2)==false ||rezult<=0 || num1<=0 ||num2<=0)
    {
        alert('Ошибка! Вы вводите отрицательное значение или запрещенные символы!');
        let str = "Ошибка!";
        document.getElementById('out').innerHTML = str;
    }
    else
    {
    document.getElementById('out').innerHTML = rezult;
    }
}
 window.addEventListener('DOMContentLoaded', function (proiz) {
     console.log("DOM fully loaded and parsed");
     let b = document.getElementById("result-btn");
     b.addEventListener("click", proiz);
  });