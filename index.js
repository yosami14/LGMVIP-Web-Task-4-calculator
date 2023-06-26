let result = document.querySelector('#inputext');

let calculate =  (number) =>{
  result.value +=  number; 
}

let Result = ()=>{
  try{
    result.value = eval(result.value)
  }
  catch(err){
    result.value = 'Error'
  }
}

function clr(){
  result.value = " "
}
function del(){
  result.value = result.value.slice(0,-1);
}