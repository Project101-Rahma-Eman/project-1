var radioValue = $("input[name='gender']:checked").val();
var fgender =$("input[value='l']").val();
$(document).ready(function(){
	
$("#fgender").click(function(){
		$("#perfectWeight").hover(function(){
		if($("#inputHeight").val()===''){
			alert("please enter your height && weight")
		}else{
		
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
		$("#yourBMI").hover(function(){
		
			var weight = $("#current").val();
	    var height = $("#inputHeight").val();
			var bmi =( weight / (height*height))*10000;
			$("#yourBMI").val(bmi.toFixed(0));
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