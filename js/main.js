let  i = 1; // Счетчик ied 
let arr = new Array(); // массив ied

var errorSend = new Array();
var countErrorSend = 0;

$(".ied").draggable({ containment:".board", scroll:false, stack: ".draggable"});


function addIED(){

	let ied = {
		id : i,
		ip : "",
		name: 'IED'+i,
		mask : "",
		gcb : "",
		gooseId : "",
		mac : "",
		appId : "",
		vlanId : "",
		minTime : 0,
		maxTime : 0,
		idCommute : null,
		idCommutePort : null
	}

	arr[i] = ied;
	var cord = 170+(30*i);
	$('.board').append('<div class="ied drag" id="'+i+'" style="right: auto; bottom: auto; left: '+cord+'px; top: '+cord+'px;"><div class="link" onClick="selectLinkIED('+i+');"></div><p class="blocktitle" style="margin-left: 5px; color: white;">IED'+i+'</p> <div class="delete" onClick="deleteDevice('+i+');"></div> <p class="tr" style="float: right; color: white;">IED1</p><p class="tl" style="margin-top: 80px;">ip: <span class="ip"></span></p><p class="tl">маска: <span class="mac"></span></p><button class="blockbutton"  onClick="openSettingsDevice('+i+');">Настройки</button></div>');
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


let  e = 1; // Счетчик ied 
let arr_com = new Array(); // массив ied

$(".commute").draggable({ containment:".board", scroll:false, stack: ".draggable"});

function addCommute () {
	let com = {
		countPort : 5		
	}
	var cord = 570+(70*e);
	var cord2 = 170+(30*e);

	$('.board').append('<div class="commute drag" style="left: '+cord+'px; top: '+cord2+'px; bottom: auto; right: auto;" id='+e+'><p class="blocktitle" style="margin-left: 5px;margin-top: 1px; color: white;">Коммутатор</p><div class="delete" onClick="deleteComm('+e+');"></div><div class="links"><div class="link" data-number="1" onclick="selectLinkCommutePort('+e+',1)";></div><div class="link" data-number="2" onclick="selectLinkCommutePort('+e+',2)";></div><div class="link" data-number="3" onclick="selectLinkCommutePort('+e+',3)";></div><div class="link" data-number="4" onclick="selectLinkCommutePort('+e+',4)";></div><div class="link" data-number="5" onclick="selectLinkCommutePort('+e+',5)";></div></div> <p class="port">Вход 1</p> <p class="port">Вход 2</p> <p class="port">Вход 3</p> <p class="port">Вход 4</p> <p class="port">Вход 5</p> <button class="blockbutton bt" onClick="openSettingsCommute('+e+');">Сетевые настройки</button> </div>');
	$(".commute").draggable({ containment:".board", scroll:false, stack: ".draggable"});

	e++;
}

function closeSettingsCommute () {
	$('.сommute-settings').removeClass('show');
	$('.сommute-settings').addClass('hide');
}


function openSettingsCommute (id){
	$('.сommute-settings').removeClass('hide');
	$('.сommute-settings').addClass('show');

}	

var activeLinkIED = null;

function selectLinkIED(id){
	var idIED = id;
	if (activeLinkIED == null) {
		activeLinkIED = idIED;
		$('.ied#'+id+' .link').addClass('active'); 

	} else

	if (activeLinkIED == idIED) {
		activeLinkIED = null;
		$('.ied#'+id+' .link').removeClass('active'); 

	} 
	 
	if ((activeLinkIED != null) && (activeLinkIED != idIED)) {
		$('.ied#'+activeLinkIED+' .link').removeClass('active'); 
		activeLinkIED = idIED;
		$('.ied#'+idIED+' .link').addClass('active'); 
	}

	addConnect();

}

var activeLinkCommute = null;
var activeLinkCommutePort = null;

function selectLinkCommutePort(id, p){
	var idCommute = id;
	var port = p;

	if ((activeLinkCommute == null) && (activeLinkCommutePort == null)) {
		activeLinkCommute = idCommute;
		activeLinkCommutePort = port;

		$('.commute#'+id+' .links .link[data-number='+port+']').addClass('active'); 
	} else

	if ((activeLinkCommute == idCommute) && (activeLinkCommutePort == port)) {
		activeLinkCommute = null;
		activeLinkCommutePort = null;
		$('.commute#'+id+' .links .link[data-number='+port+']').removeClass('active'); 
	}

	if ((activeLinkCommutePort != null) && ((activeLinkCommutePort != port) || (activeLinkCommute != idCommute))) {
		
		$('.commute#'+activeLinkCommute+' .links .link[data-number='+activeLinkCommutePort+']').removeClass('active'); 
		activeLinkCommute = idCommute;
		activeLinkCommutePort = port;
		$('.commute#'+id+' .links .link[data-number='+port+']').addClass('active'); 

	}

	addConnect();
}

function addConnect() {
	if ((activeLinkCommutePort != null) && (activeLinkIED != null)) {
		arr[activeLinkIED].idCommute = activeLinkCommute;
		arr[activeLinkIED].idCommutePort = activeLinkCommutePort;
		// alert('Создана связь девайса '+activeLinkIED+' и коммунатора '+activeLinkCommute+' по порту '+activeLinkCommutePort);

		// Удаление подстветки порта
		$('.ied#'+activeLinkIED+' .link').removeClass('active'); 
		$('.commute#'+activeLinkCommute+' .links .link[data-number='+activeLinkCommutePort+']').removeClass('active'); 


		x1 = $('.ied#'+activeLinkIED+' .link').offset().left;
		y1 = $('.ied#'+activeLinkIED+' .link').offset().top;

		x2 = $('.commute#'+activeLinkCommute+' .links .link[data-number='+activeLinkCommutePort+']').offset().left;
		y2 = $('.commute#'+activeLinkCommute+' .links .link[data-number='+activeLinkCommutePort+']').offset().top;

		addLine(x1,y1,x2,y2,activeLinkIED,activeLinkCommute,activeLinkCommutePort);

		// Обнуление
		activeLinkCommute = null;
		activeLinkCommutePort = null;
		activeLinkIED = null;

	}
}

function addLine(x1,y1,x2,y2, idIED, idCommute, idCommutePort) {
	$('.board').append('<svg data-ied="'+idIED+'" data-commute="'+idCommute+'" data-port="'+idCommutePort+'" class="line" style="pointer-events: none; top= -45px; position: absolute;" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg%22%3E"> <path d="M'+x1+' '+y1+' '+x2+' '+y2+'" stroke="#0065b3" stroke-width="5px" fill="transparent"></svg>');
}


$(".ied").draggable({
   create: function(event, ui) { 
   		alert('Создана');
   }
});

function deleteDevice(id){
    $('.line[data-ied='+id+']').remove();
    $('.ied#'+id+'').remove();
   
    arr[id] = null;

}

function deleteComm(id){
	// var iedID = $('.line[data-commute='+id+']').attr('data-ied');

	// arr[iedID].idCommute = null;
	// arr[iedID].idCommutePort = null;

    $('.commute#'+id+'').remove();
	$('.line[data-commute='+id+']').remove();

}



function closeSettingsCommute () {
	$('.cs').removeClass('show');
	$('.cs').addClass('hide');
	$('.cs .back .device-form .row').html('');
}

function openSettingsCommute (id){
	$('.cs').removeClass('hide');
	$('.cs').addClass('show');

	var countConnect = $('.line[data-commute='+id+']').length;

	var arrIED = new Array ();

	var z = countConnect;
	while (z > 0) {
		arrIED[z] = $('.line[data-commute='+id+']').eq(z - 1).attr('data-ied');
		z--;
	}

	if(countConnect == 0) {
		$('.cs .back .device-form .form').append('<div class="col-md-12">Нет подключенных устройств</div>');
	}

	z = countConnect;
	while (z > 0) {
		$('.cs .back .device-form .form').append('<div class="col-md-12"> <div class="titleIED" style="float: left;"><h5>'+ arr[arrIED[z]].name +'</h5></div> </div> <div class="col-md-12"> <div class="row"> <div class="col-md-2"> <div class="ipTitle" id="1">IP Адрес</div> </div> <div class="col-md-8"> <input class="input1 mask" type="text" name="ip" id="'+ arrIED[z] +'" value="'+ arr[arrIED[z]].ip +'"> </div> </div> </div> <div class="col-md-12" style="margin-top: 10px; margin-bottom: 10px;"> <div class="row"> <div class="col-md-2"> <div class="ipTitle">Маска</div> </div> <div class="col-md-8"> <input class="input2 mask" type="text" name="mask" id="'+ arrIED[z] +'" value="'+ arr[arrIED[z]].mac +'"> </div> </div> </div>');
		z--;
	}

	$('.mask').ipmask();

}

function saveSettingsCommute () {
	var countConnect = $('.line[data-commute='+1+']').length;

	var arrIED = new Array ();

	var z = countConnect;
	while (z > 0) {
		arrIED[z] = $('.line[data-commute='+1+']').eq(z - 1).attr('data-ied');
		z--;
	}
	
	z = countConnect;
	while (z > 0) {
		arr[arrIED[z]].ip = $('.cs .back .device-form .form .input1[id='+arrIED[z]+']').val();
		arr[arrIED[z]].mac = $('.cs .back .device-form .form .input2[id='+arrIED[z]+']').val();
		$('.ied#'+arrIED[z]+' .ip').html(arr[arrIED[z]].ip);
		$('.ied#'+arrIED[z]+' .mac').html(arr[arrIED[z]].mac);
		z--;
	}
	closeSettingsCommute();
}

 // GOOSE

function closeSettingsGoose () {
	$('.gs').removeClass('show');
	$('.gs').addClass('hide');
}


function openSettingsGoose () {
	$('.gs').removeClass('hide');
	$('.gs').addClass('show');
}

function saveSettingsGoose () {
	closeSettingsGoose();
	showSend();
}


// SEND
function showSend() {
	$('.send-button').removeClass('hide');
	$('.send-button').addClass('show');
}

function sendMail() {
	var arrIED = null;
	var countConnect = $('.line[data-commute='+1+']').length;
	var arrIED = new Array ();
	
	var z = countConnect;
	while (z > 0) {
		arrIED[z] = $('.line[data-commute='+1+']').eq(z - 1).attr('data-ied');
		z--;
	}


		if (arr[arrIED[1]].ip == 0) {
			countErrorSend++;
			errorSend[countErrorSend] = "Нет IP адреса у IED";
		}

		//Проверка масовпадения IP
		if (arr[arrIED[1]].ip != arr[arrIED[2]].ip) {
			countErrorSend++;
			errorSend[countErrorSend] = "Не совпадают IP адреса на IED устройвах";
		}

		if (arr[arrIED[1]].mac != arr[arrIED[2]].mac) {
			countErrorSend++;
			errorSend[countErrorSend] = "Не совпадают маски IP адреса на IED устройвах";
		}

	if(countErrorSend > 0) {
		// alertErrorSend ();
		showError();
	} else {
		alertGoodSend ();
	}

}

function alertGoodSend () {
	$('.send-result.good').removeClass('hide');
	$('.send-result.good').addClass('show');	
}


function alertErrorSend () {
	$('.send-result.error').removeClass('hide');
	$('.send-result.error').addClass('show');	
}

function showError (){
	$('.erors_bord').removeClass('hide');
	$('.erors_bord').addClass('show');

	z = countErrorSend;
	while (z > 0) {
		$('.erors_bord ul').append('<li>'+errorSend[z]+'</li>');
		z--;
	}
}

function hideError (){
	$('.erors_bord').removeClass('show');
	$('.erors_bord').addClass('hide');
	countErrorSend = 0;
	var errorSend = new Array();
}
