let  i = 1; // Счетчик ied 
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
		maxTime : 1,
		idCommute : null,
		idCommutePort : null
	}

	arr[i] = ied;

	$('.board').append('<div class="ied drag" id="'+i+'" style="right: auto; bottom: auto; left: 607px; top: 444px;"><div class="link" onClick="selectLinkIED('+i+');"></div><p class="blocktitle" style="margin-left: 5px; color: white;">IED'+i+'</p> <div class="delete" onClick="deleteDevice('+i+');"></div> <p class="tr" style="float: right; color: white;">IED1</p><p class="tl" style="margin-top: 80px;">ip: 0.0.0.0</p><p class="tl">маска: 0.0.0.0</p><button class="blockbutton"  onClick="openSettingsDevice('+i+');">Настройки</button></div>');
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

	$('.board').append('<div class="commute drag" id='+e+'><p class="blocktitle" style="margin-left: 5px;margin-top: 1px; color: white;">Коммутатор</p><div class="delete" onClick="deleteComm('+e+');"></div><div class="links"><div class="link" data-number="1" onclick="selectLinkCommutePort('+e+',1)";></div><div class="link" data-number="2" onclick="selectLinkCommutePort('+e+',2)";></div><div class="link" data-number="3" onclick="selectLinkCommutePort('+e+',3)";></div><div class="link" data-number="4" onclick="selectLinkCommutePort('+e+',4)";></div><div class="link" data-number="5" onclick="selectLinkCommutePort('+e+',5)";></div></div> <p class="port">Вход 1</p> <p class="port">Вход 2</p> <p class="port">Вход 3</p> <p class="port">Вход 4</p> <p class="port">Вход 5</p> <button class="blockbutton bt" onClick="openSettingsCommute('+e+');">Сетевые настройки</button> </div>');
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
	var iedID = $('.line[data-commute='+id+']').attr('data-ied');

	$('.line[data-commute='+id+']').remove();
    $('.commute#'+id+'').remove();

    alert(iedID);
}

 // addLine();
