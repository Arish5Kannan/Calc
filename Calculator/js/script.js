var output = document.getElementById("text-box");

function display(num){
    output.value += num; 
}
function Clear()
{
    document.getElementById("text-box").value="";
}
function calculate()
{
    try{
        if(output.value === "")
        {
            alert('Pls, Enter Input');
        }
        else{
        output.value = eval(output.value);
        }
    }
    catch(err){
        alert('Invalid innput');
        document.getElementById('text-box').value= '';
    }

}
function Delete()
{
    output.value = output.value.slice(0,-1);
}

