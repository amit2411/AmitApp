$(document).ready(function(){				

    $('#todo').keypress(function(e) {
		code = e.keyCode ? e.keyCode : e.which;
        if(code.toString() == 13) {
			if($("#todo").val() !== ""){
				var val =  $('#todo').val();
				$(this).val("");
				$("#mydiv").append("<div> <input type='checkbox' name='option'> "+val+" </div>" +"<hr style='height:1px; color:#333; background-color:#333;' />")
			}
			else {
				alert("You must enter something to add");
			}
		};	
	});
});	


$(document).ready(function(){	
	var a = "input[name='option']";
			
	$("#all").on("click", function(){
		$(a).prop("checked", this.checked);
	
		if($(a).is(":checked")){
			$(a).parent().addClass("red"); 
		}
		else{
			$(a).parent().removeClass("red");  
		}
			
	});	
		
	$("#mydiv").on("click", a, function(){
		if ($(a).length == $("input[name='option']:checked").length) {
			$("#all").prop("checked", "checked");
		}
		else {
			$("#all").removeProp("checked");
		}
	});
		
		
	$("#mydiv").on("click", a, function (){
	console.log("jjjjjjj");
		if($(this).is(":checked")){
			$(this).parent().addClass("red"); 
		}
		else{
			$(this).parent().removeClass("red");  
		}
	});	  
});
	

       
 
	   
	   
	
				
			