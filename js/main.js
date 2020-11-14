let  i = 0; // Счетчик ied 
let arr = new Array(); // массив ied

$(".ied").draggable({ containment:".board", scroll:false, stack: ".draggable"});


function addIED(){

	let ied = {
		ip : "1",
		mask : "2",
		gcb : "3",
		gooseId : "4",
		mac : "4",
		appId : "5",
		vlanId : "6",
		minTime : 0,
		maxTime : 1
	}

	arr[i] = ied;

	$('.board').append('<div class="ied" style="right: auto; bottom: auto; left: 607px; top: 444px;"><p class="blocktitle" style="margin-left: 5px; color: white;">IED'+i+'</p><p class="tr" style="float: right; color: white;">IED1</p><p class="tl" style="margin-top: 80px;">ip: 0.0.0.0</p><p class="tl">маска: 0.0.0.0</p><button class="blockbutton"  onClick="openSettingsDevice('+i+');">Настройки</button></div>');
	$(".ied").draggable({ containment:".board", scroll:false, stack: ".draggable"});

	i++;
}

function closeSettingsDevice () {
	$('.device-settings').removeClass('show');
	$('.device-settings').addClass('hide');
}

function openSettingsDevice (id){
	$('.device-settings').removeClass('hide');
	$('.device-settings').addClass('show');

	$('.device-form .form-group [name=id]').val(id);
	$('.device-form .form-group [name=nameGCB]').val(arr[id].gcb);
	$('.device-form .form-group [name=gooseId]').val(arr[id].gooseId);
	$('.device-form .form-group [name=mac]').val(arr[id].mac);
	$('.device-form .form-group [name=appId]').val(arr[id].appId);
	$('.device-form .form-group [name=vlanId]').val(arr[id].vlanId);
	$('.device-form .form-group [name=minTime]').val(arr[id].minTime);
	$('.device-form .form-group [name=maxTime]').val(arr[id].maxTime);

}

function saveSettingsDevice () {
	var id = $('.device-form .form-group [name=id]').val();

	arr[id].gcb = $('.device-form .form-group [name=nameGCB]').val();
	arr[id].gooseId = $('.device-form .form-group [name=gooseId]').val();
	arr[id].mac = $('.device-form .form-group [name=mac]').val();
	arr[id].appId = $('.device-form .form-group [name=appId]').val();
	arr[id].vlanId = $('.device-form .form-group [name=vlanId]').val();
	arr[id].minTime = $('.device-form .form-group [name=minTime]').val();
	arr[id].maxTime = $('.device-form .form-group [name=maxTime]').val();

	closeSettingsDevice();
}


// ********* Коммутоторы *********


let  e = 0; // Счетчик ied 
let arr_com = new Array(); // массив ied

$(".commute").draggable({ containment:".board", scroll:false, stack: ".draggable"});

function addCommute () {
	let com = {
		countPort : 5		
	}



	$('.board').append('<div class="commute"><p class="blocktitle" style="margin-left: 5px;margin-top: 1px; color: white;">Коммутатор</p> <p class="port">Вход 1</p> <p class="port">Вход 2</p> <p class="port">Вход 3</p> <p class="port">Вход 4</p> <p class="port">Вход 5</p> <button class="blockbutton bt" onClick="openSettingsCommute('+e+');">Сетевые настройки</button> </div>');
	$(".commute").draggable({ containment:".board", scroll:false, stack: ".draggable"});
}

function closeSettingsDevice () {
	$('.сommute-settings').removeClass('show');
	$('.сommute-settings').addClass('hide');
}


function openSettingsCommute (id){
	$('.сommute-settings').removeClass('hide');
	$('.сommute-settings').addClass('show');

	

}	