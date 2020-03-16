function clickbut(){
	var but = document.getElementById("searchsymbol");
	var sch = document.getElementById("search");
	if(sch.style.display=='block'){
		but.src="./symbol.pic/closesymbol.png";
		sch.style.display="none";
	}
	else if(sch.style.display=='none'){
		but.src="./symbol.pic/searchsymbol.png";
		sch.style.display="block";
	}
}