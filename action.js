var radioValue = $("input[name='gender']:checked").val();
var fgender =$("input[value='l']").val();
 var height = $("#inputHeight").val();


$(document).ready(function(){
	
$("#fgender").click(function(){
		$("#perfectWeight").hover(function(){

		if($("#inputHeight").val()===''){
			alert("please enter your height && weight")
		}else{ 
		
		var heigh= $("#inputHeight").val()

         var perfectWeight =heigh -110 
		
		$("#perfectWeight").val( perfectWeight);



	
}
})
	})
})
//$(document).ready(function(){
	//debugger
	
$("#mgender").click(function(){
		$("#perfectWeight").hover(function(){

		if($("#inputHeight").val()===''){
			alert("please enter your height && weight")
		}else{ 
		
		var heigh= $("#inputHeight").val()

         var perfectWeight =heigh -100 
		
		$("#perfectWeight").val( perfectWeight);



	
}
})
	})

		//$("#current").hover(function calcBMI(){

		
		//	var weight = $("#current").val();
	    //var height = $("#inputHeight").val();
		//	var bmi =( weight / (height*height))*10000;
		//	var x = $("#yourBMI").val(bmi);
		

			

			
			
			
//})

$(document).ready(function(){
    $("BMI").click(function() {
       // var weight = $("weight").value;
       // var height = $("height").value;
       $("#current").hover(function calcBMI(){

		
			var weight = $("#current").val();
	    //var height = $("#inputHeight").val();
			var bmi =( weight / (height*height))*10000;
		//	var x = $("#yourBMI").val(bmi);
		
        if (weight > 0 && height > 0) {
            //var bmi = (weight / (height * height)) ;
            $("yourBMI") = bmi;
            if (calcBMI() < 18.5) {
                $("status").value = "You are underweight.";
            }
            if (calcBMI() > 18.5 && calcBMI() < 24.9) {
                $("status").value = "You are normal.";
            }
            if (calcBMI() > 24.9 && calcBMI() < 29.99) {
                $("status").value = "You are overweight.";
            }
        } else {
            $("status").value = "You are obese.";
            }   
    });
});
