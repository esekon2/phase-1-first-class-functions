//take a callback function as an argument

//call the callback function
function myDay(){
  return 0;
}

function receivesAFunction(today = myDay){
  today()
}

function returnsANamedFunction(){
  return receivesAFunction;      //return a named function
}


function returnsAnAnonymousFunction(){
  return ()=>{
                                //return an anonymous function
  };
}