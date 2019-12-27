<!--

var NoChars     = 0 ; 
var CharsSoFar  = 0 ; // Length of progress bar should be CharsSoFar/NoChars of its full width.
var myVar ; // for the timer.

function myTimer() // Updates width of Progress bar.
{	var Width = "50%" ;	
	if (0<CharsSoFar && CharsSoFar<=NoChars) Width = (100*CharsSoFar/NoChars).toString()+"%" ;
	$("#TimeBar").css("width",Width); 
} // myTimer
	
function ShowTimeBar() // Starts the timer.
{	setTimeout(function()
	{	$("#TimeBar").css("width","0%"); 
	 	$("#ProgressBar").show();
		myVar = setInterval(myTimer, 200); 					 
	}, 10);
} // ShowTimeBar

function HideTimeBar() // Stops everything. 
{ 	clearTimeout(myVar);  
	$("#ProgressBar").hide(); 
	$("#TimeBar").css("width","100%"); 
} // HideTimeBar


$('document').ready(function(){
	$("#StartLoad") .click(function(){LoadFile(); $("#StopTimer" ).focus();});
	$("#StopTimer" ).click(function(){HideTimeBar(); $("#StartLoad").focus();});
	$("#ChInput").attr("value","") ;
}); // ready

var SomeText = "Long bit of text: ChI = (ChI+I)%551 ; ChI = ChI%100; Ch = ChI.toString()X" ;

function LoadFile() // A function during which to observe the progress bar.
{	NoChars    = SomeText.length ;
	CharsSoFar = 0 ; 
	var Ch1 = 'A' ;
	var Ch2 = 'A' ;
	var ChI = 'A' ;
	ShowTimeBar() ;
	// A time-wasting loop traversing the chars of SomeText and doing a useless calculation
	// during which the progress bar should get longer:
	while (CharsSoFar>=0 && CharsSoFar<NoChars) 
	{	Ch2 = Ch1 ;
		Ch1 = SomeText.charAt(CharsSoFar) ; 
		CharsSoFar++ ;
		for (var I=0;I<2000;I++) 
		for (var J=0;J<1000;J++)
		{ 	ChI = ChI.charCodeAt(0)+Ch1.charCodeAt(0)+Ch2.charCodeAt(0) ;
			ChI = (ChI+I)%551 ; 
			ChI = ChI%100; 
			ChI = ChI.toString(); 
		}
		$("#ChInput").attr("value","Ch "+CharsSoFar+": "+Ch1+","+ChI) ;
	}
	// HideTimeBar() ;
	return true ;
} // ParseGPXobj

//--> 