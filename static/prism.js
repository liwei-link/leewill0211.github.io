(function(){
    var dynamicLoading = {
      css: function(path){
     if(!path || path.length === 0){
      throw new Error('argument "path" is required !');
     }
     var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.href = path;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        head.appendChild(link);
      },
      js: function(path){
     if(!path || path.length === 0){
      throw new Error('argument "path" is required !');
     }
     var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.src = path;
        script.type = 'text/javascript';
        head.appendChild(script);
      }
    }
    
	var list = document.getElementsByTagName("pre")
    for(var i = 0; i < list.length; i++){
    	list[i].classList.add("line-numbers")
    }
    dynamicLoading.css("/static/libs/prism/prism.css")
    dynamicLoading.js("/static/libs/prism/prism.js")
})()
