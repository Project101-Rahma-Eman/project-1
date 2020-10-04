var radioValue = $("input[name='gender']:checked").val();
var fgender =$("input[value='l']").val();



$(document).ready(function(){
	
$("#fgender").click(function(){
		$("#perfectWeight").hover(function(){

		if($("#inputHeight").val()===''){

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

		}else{ 
		
		var heigh= $("#inputHeight").val()

         var perfectWeight =heigh -100 
		
		$("#perfectWeight").val( perfectWeight);



	
}
})
	})

