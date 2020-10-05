var radioValue = $("input[name='gender']:checked").val();
var fgender =$("input[value='l']").val();
$(document).ready(function(){
	//this function to calculate the perfect weight 
$("#fgender").click(function(){
	//calculate the perfect weight after gender selection female  
		$("#perfectWeight").hover(function(){
			//alert user to input the hight 
		if($("#inputHeight").val()===''){
			alert("please enter your height && weight")
		}else{
		//calculate the perfect weight 
		var heigh= $("#inputHeight").val()
		 $("inputHeight").click(function() {
                alert($.isNumeric(heigh ));
            });
         var perfectWeight =heigh -110
		
		$("#perfectWeight").val( perfectWeight);
	}
	
})
})
	})
​
	//calculate the perfect weight after gender selection male
$("#mgender").click(function(){
		$("#perfectWeight").hover(function(){
			//alert user to input the hight 
		if($("#inputHeight").val()===''){
			alert("please enter your height && weight")
		}else{
		//calculate the perfect weight 
		var heigh= $("#inputHeight").val()
         var perfectWeight =heigh -100
		
		$("#perfectWeight").val( perfectWeight);
	
}
})
	})
        // calulate the BMI 
		$("#yourBMI").hover(function(){
		
			var weight = $("#current").val();
	    var height = $("#inputHeight").val();
			var bmi =( weight / (height*height))*10000;
			$("#yourBMI").val(bmi.toFixed(0));
			//check the BMI Status 
​
			if($("#yourBMI").val()< 16){
				$("#status").val(" severely under wieght");
				
			}else if($("#yourBMI").val()< 18){
				$("#status").val("  under wieght");
				
			}else if($("#yourBMI").val()< 24.9){
				$("#status").val(" normal");
				
			}else if($("#yourBMI").val()< 29.9){
				$("#status").val("over wight");
				
			}else if($("#yourBMI").val()< 34.9){
				$("#status").val("obese");
				
			}else if($("#yourBMI").val()> 35){
			$("#status").val("severely obese");}
					
			
})
		//input only numbers in text box
  $("#container").keypress(function(e) {
      var arr = [];
      var kk = e.which;
      for (i = 48; i < 58; i++)
          arr.push(i);
      if (!(arr.indexOf(kk)>=0))
          e.preventDefault();
  });
