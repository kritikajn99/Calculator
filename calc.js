

        function backspace(calc) {                                              
        size = calc.display.value.length; 
        calc.display.value = calc.display.value.substring(0, size-1); 
    } 

    function square(form) {
                form.display.value = eval(form.display.value) * eval(form.display.value)
                }
    function cos(form) {
                form.display.value = Math.cos(form.display.value);
                }
            function sin(form) {
                form.display.value = Math.sin(form.display.value);
                }
    
   function calculate(calc) { 
        if(calc.display.value.includes("!")) 
        {
            size = calc.display.value.length; 
            n = Number(calc.display.value.substring(0, size-1));
            f = 1;         
                  for(i = 2; i <= n; i++) 
                      f = f*i;

                  calc.display.value = f; 
              }   
            else   
            calc.display.value = eval(calc.display.value); 
          } 
