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
	
	
		
	$("#all").click(function(){
		$("input[name='option']").prop("checked", this.checked);
		
		if($("input[name='option']").is(":checked")){
			$("input[name='option']").parent().addClass("red"); 
		}
		else{
			$("input[name='option']").parent().removeClass("red");  
		}
		
	});	
	
	$("input[name='option']").click(function(){
		if ($("input[name='option']").length == $("input[name='option']:checked").length) {
			$("#all").prop("checked", "checked");
			
		}
		else {
			$("#all").removeProp("checked");
		}
	});
	
	
	$("input[name='option']").click(function (){
		if($(this).is(":checked")){
			$(this).parent().addClass("red"); 
		}
		else{
			$(this).parent().removeClass("red");  
		}
	});	
	
			
			/* 	
	$("#mydiv").on("click", "input", function(){
		$(this).find('option').css('color', 'black');
    $(this).find('option:selected').css('color', 'red');
		
		}) */	

    
});
	
});
       
 
	   
	   
	
				
			