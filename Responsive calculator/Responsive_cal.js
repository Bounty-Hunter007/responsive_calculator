//Calculator Function

function number_function(a) 
{
    document.getElementById('display').value +=a
    
}

function calculate_operator()
{
    var a = document.getElementById('display')  
    a.value =eval(a.value);
}

function clear_Display()
{
    document.getElementById("display").value="";   //clear the display box when clicked on it   
}

function clearLastDigit()
{
    var a =document.getElementById("display") //clear the last digit , the display box when clicked on it   
    a.value = a.value.slice(0,-1)
   
}

