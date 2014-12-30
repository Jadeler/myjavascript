function asideChange(){
	var service=document.getElementById("service");
	var list=service.getElementsByTagName("ul");
	var head=service.getElementsByTagName("h3");
	var spanList=service.getElementsByTagName("h3")[0].getElementsByTagName("span");
    var index=0;
    function show(n){
        for(var i=0,len=list.length;i<len;i++){
        	list[i].style.display="none";
        	spanList[i].className="";
        }
        if(n==undefined){
        	if(index==len-1) var next=0;
        	else var next=index+1;
        }else var next=n;

        list[next].style.display="";
        spanList[next].className="currentspan";
        index=next;

    }

    show(index);
    var auto=setInterval(show,3000);
    service.onmouseover=function(){
        clearInterval(auto);
    }
    service.onmouseout=function(){
        auto=setInterval(show,3000);
    }
    for(var i=0,len=spanList.length;i<len;i++){
    	spanList[i].n=i;
    	spanList[i].onmouseover=function(){
    		show(this.n);
    	}
    }
}
