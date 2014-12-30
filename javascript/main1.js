function changePic(){
	var box=document.getElementById("focus-pic-box"), 
	    pictures=box.getElementsByTagName("ul")[0].getElementsByTagName("li"),
        navs=box.getElementsByTagName("ul")[1].getElementsByTagName("li"),
        left=box.getElementsByTagName("div")[0],
        right=box.getElementsByTagName("div")[1];
    var index=0;
    var len=pictures.length;
    
    function show(){
            for(var p=0;p<len;p++)
             {
                pictures[p].style.display="none";
                navs[p].className="";
             }
            left.style.display="none";
            right.style.display="none";
            pictures[index].style.display="";
            navs[index].className="current";
            if(index==len-1)  index=0;
            else index=index+1;
            }
    show();
    var auto=setInterval(show,2000);
    

    for(var i=0;i<navs.length;i++){

    	var navs_item=navs[i];
        navs_item.onmouseover=function(){
             for(var m=0;m<navs.length;m++)
             {
             	if(this.innerText==navs[m].innerText) 
             		{
                        index=m;
                        break;
                    }
             }
             for(var j=0;j<pictures.length;j++)
             {
             	pictures[j].style.display="none";
                navs[j].className="";
          
             }
             pictures[index].style.display="";
             navs[index].className="current";
        }
    }
    
    function getCurIndex(){
        for(var h=0;h<navs.length;h++)
            if(navs[h].className=="current")
                return h;

    }                 
    var move=function(flag){
        index=getCurIndex();
        if(!flag) {
            index++;
            if(index>(len-1)) index=0;
        }
        else{
            index--;
            if(index<0) {index=len-1};
        }
     
        for(var g=0;g<pictures.length;g++)
             {
                pictures[g].style.display="none";
                navs[g].className="";
             }
         pictures[index].style.display="";
         navs[index].className="current";
    }

   
    box.onmouseover=function(){
        clearInterval(auto);
        left.style.display="";
        right.style.display="";
    } 
    box.onmouseout=function(){
        auto=setInterval(show,2000);
        left.style.display="none";
        right.style.display="none";
    }
    left.onclick=function(){move(true);}
    right.onclick=function(){move(false);}

}
