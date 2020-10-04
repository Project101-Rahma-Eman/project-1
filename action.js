var radioValue = $("input[name='gender']:checked").val();
var fgender =$("input[value='l']").val();



$(document).ready(function(){
	
$("#fgender").click(function(){
		$("#perfectWeight").hover(function(){

		if($("#inputHeight").val()===''){
			alert("please enter your height")
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
			alert("please enter your height")
		}else{ 
		
		var heigh= $("#inputHeight").val()

         var perfectWeight =heigh -100 
		
		$("#perfectWeight").val( perfectWeight);



	
}
})
	})

		$("#current").hover(function(){

		
			var weight = $("#current").val();
	    var height = $("#inputHeight").val();
			var bmi =( weight / (height*height))*10000;
			$("#yourBMI").val(bmi);
			
			
})




