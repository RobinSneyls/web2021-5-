function proiz()
{
    var num1,num2,rezult;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1); 
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
  
    var r = /[A-Za-zА-Яа-яЁё]/g;
    
    if(r.test(num1)||r.test(num2) || num1<0||num2<0)
    {
        alert('Вводить можно только положительные числа числа!'); 
    }
    if(num1===0||num2===0)   
    {
        alert('Введите значения!');
    }
   

    rezult = num1*num2;

    if(rezult<=0)
    {
        alert('Ошибка! Результат не может иметь отрицательное значение или 0');
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