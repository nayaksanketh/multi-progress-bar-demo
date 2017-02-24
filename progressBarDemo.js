
//data points
var dataPoint = {"buttons":[40,38,-21,-14],"bars":[23,52,77],"limit":160};
//global variables
var $percent = 0, $progressBarIndex="", limit = dataPoint.limit ;

//create buttons
for(var i=0;i<dataPoint.buttons.length;i++){
	createButtons(dataPoint.buttons[i]);
}
//set progress bar value
for(var i=0;i<dataPoint.bars.length;i++){
	$percent = 0;
	$progressBarIndex = "#"+i;
	changeProgress(dataPoint.bars[i]);
	$progressBarIndex = "";
}
//set menu value and get progress bar value
$(".dropdown-menu li a").click(function(){
	//set
	$(this).parents(".dropdown").find('#menu1').html($(this).text() + '<span class="caret"></span>');
	$progressBarIndex = "#" + $(this).parent().index();
	//get
	$percent = parseInt($($progressBarIndex).attr('aria-valuenow'));
});
//core function to set progress bar %
function changeProgress(value){
	if($progressBarIndex==""){alert("Please select progress Bar");return false}
	if(($percent + value)>0){$percent = $percent + value;}else{$percent=0;}
	//set value
	$($progressBarIndex).width($percent + '%');
	$($progressBarIndex).siblings(".progress-value").text($percent + '%');
	$($progressBarIndex).attr('aria-valuenow', $percent);
	if($percent>=limit){
		$($progressBarIndex).css({ 'background': 'Red' });
	}else{
		$($progressBarIndex).css({ 'background': '#337ab7' });
	}	
}
//function to create dynamic buttons
function createButtons(value){
	$("#btn-content").append('<button class="btn btn-success btn-lg " onclick="changeProgress('+value+');">'+value+'</button>');
}	
