function clickbutton(){
	var form=document.getElementById("searchform");
	var button=document.getElementById("searchsymbol");
	if(form.style.display=="none"){
		button.src="./symbol.pic/closesymbol.png";
		button.title="Đóng"
		form.style.display="block";
	}
	else if(form.style.display=="block"){
		button.src="./symbol.pic/searchsymbol.png";
		button.title="Tìm kiếm"
		form.style.display="none";
	}
}
function menuclick(){	
var x=document.getElementById("hormenu");

 if(x.style.display=="none")
x.style.display="inline";

else if(x.style.display=="inline") 
x.style.display="none";
}
