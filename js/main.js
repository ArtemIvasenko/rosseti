let  i = 0;
let arr = new Array();

$(".ied").draggable({ containment:".board", scroll:false, stack: ".draggable"});

function addIED(){

	let ied = {
		ip : "1",
		mask : "2",
		gcb : "3",
		mac : "4",
		appId : "5",
		vlanId : "6",
		minTime : 0,
		maxTime : 1
	}

	arr[i] = ied;

	let name = '<div class="name" style="margin: 20px 50px;">'+arr[i].name+'</div>';
	let divIP = '<div class="ip" style="margin: 5px 50px;">'+arr[i].ip+'</div>';
	let divMask = '<div class="mask" style="margin: 5px 50px;">'+arr[i].mask+'</div>';
	let divGcb = '<div class="gcb" style="margin: 5px 50px;">'+arr[i].gcb+'</div>';
	let divMac = '<div class="mak" style="margin: 5px 50px;">'+arr[i].mac+'</div>';
	let divAppId = '<div class="appId" style="margin: 5px 50px;">'+arr[i].appId+'</div>';
	let divVlanId = '<div class="vlanId" style="margin: 5px 50px;">'+arr[i].vlanId+'</div>';
	let divMinTime = '<div class="minTime" style="margin: 5px 50px;">'+arr[i].minTime+'</div>';
	let divMaxTime = '<div class="maxTime" style="margin: 5px 50px;">'+arr[i].maxTime+'</div>';
	let button = '<button class="button'+i+'" name="button" id="'+arr[i].id+'" onClick="show()" style="margin: 20px 50px;">Настройки</button>';

	$('.board').append('<div class="ied" style="margin: 50px 150px;"><p class="blocktitle" style="margin-left: 5px; color: white;">IED1</p><p class="tr" style="float: right; color: white;">IED1</p><p class="tl" style="margin-top: 80px;">ip:</p><p class="tl">маска:</p><button class="blockbutton">Настройки</button></div>');
	$(".ied").draggable({ containment:".board", scroll:false, stack: ".draggable"});


	i++;
}
