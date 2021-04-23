$(function(){
    $("input").eq(0).on("click",function(){
        //alert("Hi");
        var numberOfListItem = $("li").length;
		
		var c=0;
		
		for(var i=0;i<numberOfListItem;i++){
			if(document.getElementsByName("Product")[i].checked){
				c=1;
				break;
			}
		
		}
		if (c==0){
			alert("你沒勾啊");
		}
		
		var init=0;
		if (c==1){
			for(var i=0;i<500;i++){
			var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
			
	
			
			$("h1").text($("li").eq(randomChildNumber).text());
			$('img').attr("src",(randomChildNumber+1)+'.jpg');
			
			if(document.getElementsByName("Product")[randomChildNumber].checked){
				init=1;
				break;
	
			}
		
			}
		}
		
		if(init==0){
			alert("你不要吃好了");
		}
		
    });
});