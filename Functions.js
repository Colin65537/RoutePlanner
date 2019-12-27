<!--


var myVar ;
function myTimer() 
{	var Width = "50%" ;	
	$("#TimeBar").css("width",Width); 
} // myTimer
	
function ShowTimeBar()
{	setTimeout(function()
	{ 	$("#ProgressBar").show();
		$("#TimeBar").css("width","0%"); 
		myVar = setInterval(myTimer, 200); 					 
	}, 1500);
} // ShowTimeBar

function HideTimeBar() 
{ 	clearTimeout(myVar);  
	$("#TimeBar").css("width","100%"); 
	// $("#ProgressBar").hide(); 
} // HideTimeBar



$('document').ready(function(){
	$("#StartTimer").click(function(){ShowTimeBar(); $("#StopTimer" ).focus();});
	$("#StopTimer" ).click(function(){HideTimeBar(); $("#StartTimer").focus();});
}); // ready


//--> 