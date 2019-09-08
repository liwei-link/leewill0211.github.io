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

dynamicLoading.css("/static/popup.css")

// 创建弹窗
var modal = document.createElement("div")
modal.classList.add("modal")

var close  = document.createElement("span");
close.classList.add("close")
close.innerHTML = "&times;"
close.onclick = closePic
modal.appendChild(close)

var img = document.createElement("img")
img.classList.add("modal-content")
img.classList.add("img-pop-up-img")
modal.appendChild(img)

var caption = document.createElement("div")
caption.id = "caption"
modal.appendChild(caption)

document.body.appendChild(modal)

 // 获取图片插入到弹窗 - 使用 "alt" 属性作为文本部分的内容
document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelectorAll('.post-content img').forEach(function(image) {
        image.style.cursor = "zoom-in";
        if (!image.title) {
            image.title += "放大"
        }
        image.onclick = function(event) {
		    img.src = this.src;
		    modal.style.display = "block";
		    modal.style.paddingTop = (modal.scrollHeight - img.scrollHeight- caption.scrollHeight) / 2 + 'px';
			document.addEventListener("keyup", escPress)
			if(this.parentElement.children[1]){
			    caption.innerHTML = this.parentElement.children[1].innerText;
			}else{
				caption.innerHTML = ''
			}
        };
    });
});
 
function closePic(){
	modal.style.display='none'	
	//delete img.src 
	//delete caption.innerHTML
	document.removeEventListener("keyup", escPress)
}

function escPress(event){
	if(event.keyCode == 27){
	    closePic()
    }	
}
})()
