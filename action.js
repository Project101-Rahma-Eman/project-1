//var height = Number(document.getElementById("inputHeight").value);
//var perWeight = Number(document.getElementById("perfectWeight").value);
// if female ==> inputheight-110 
//if male ==> inputheight -100 


 // $(document).ready(function(){
     //   $("input[type='radio']").click(function(){
           var radioValue = $("input[name='gender']:checked").val();
     //       if(radioValue === "female"){
         //   perfectWeight = high -110 ; 
//
     
      //      }else {
       //       perfectWeight = high -100 ;
       //     }

       // });
   // });
$(document).ready(function(){
 	 
 	$("input").click(function(){
 		if(radioValue === "female"){
           $("perfectWeight")  = $("inputHeight") -110 ; 
            $(this).show('perfectWeight')

     
            }else {
              $("perfectWeight") = $("inputHeight") -100 ;
              $(this).show('perfectWeight')
            }
        });

 	});