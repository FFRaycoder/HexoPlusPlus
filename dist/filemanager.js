function ajaxObject(){var e;try{e=new XMLHttpRequest}catch(t){try{e=new ActiveXObject("Msxml2.XMLHTTP")}catch(t){try{e=new ActiveXObject("Microsoft.XMLHTTP")}catch(e){return sweetAlert("糟糕","你的浏览器不能更改文件","error"),!1}}}return e}var ctJson="/hpp/admin/api/getlist";function del(e){swal({title:"确定！",text:`你将要删除${e}，真的这么做么？`,icon:"warning",buttons:!0,dangerMode:!0}).then((t=>{t?delfile(e):swal("好的，当前文件没有被删除",{icon:"success"})}))}function delfile(e){var t=ajaxObject();t.open("GET","/hpp/admin/api/deldoc/"+e,!0),t.setRequestHeader("Content-Type","text/plain"),t.onreadystatechange=function(){4==t.readyState&&(200==t.status?(sweetAlert("成功！","文件已删除","success"),window.location.reload()):swal({title:"失败！",text:"文件删除失败，请确定您是否有权限删除，或者该文件是否存在",icon:"warning"}))},t.send()}function info(e,t,n,s,i){sweetAlert("文件信息",`名字:${e}\n路径:${t}\n哈希值:${n}\n大小:${s}B\ngit路径:${i}`,"success")}$.getJSON(ctJson,(function(e){$.each(e,(function(e,t){$("#item-all").append(`\n\t\t\t\t  <div class="masonry__item">\n          <figure>\n            <figcaption class="content">\n              <h2 style="width:148px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${t.name}</h2>\n              <p class="date"><span>大小: </span>${t.size}B</p>\n              <ul class="tags">\n\t\t<li><a href="https://cdn.jsdelivr.net/gh/${hpp_githubdocusername}/${hpp_githubdocrepo}@${hpp_githubdocbranch}${hpp_githubdocpath}${t.name}">CDN加速地址</a></li>\n\t\t<li><a href="javascript:del('${t.name}');" style="color: red;">删除</a></li>\n                <li><a href="${t.download_url}">原始地址</a></li>                \n\t\t<li><a href="${t.html_url}">Github</a></li>\n                <li><a href="javascript:info('${t.name}','${t.path}','${t.sha}','${t.size}','${t.git_url}');">信息</a></li>\n                <li><a href="#!" class="more" data-click-state="1">+</a></li>\n              </ul>\n            </figcaption>\n          </figure>\n        </div>\n                `),console.log("加载列表")})),$.getScript("https://cdn.jsdelivr.net/npm/gsap@2.0.2/src/minified/TweenMax.min.js",(function(){console.log("加载TweenMax|1/6"),$.getScript("https://cdn.jsdelivr.net/npm/gsap@2.1.0/src/minified/plugins/ScrollToPlugin.min.js",(function(){console.log("加载ScrollToPlugin|2/6"),$.getScript("https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@787eece/dist/masonry.pkgd.js",(function(){console.log("加载masonry|3/6"),$.getScript("https://cdn.jsdelivr.net/npm/imagesloaded@4.1.4/imagesloaded.pkgd.min.js",(function(){console.log("加载imagesloaded|4/6"),$.getScript("https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@c081f40/dist/HexoPlusPlusFileManager.js",(function(){console.log("加载HexoPlusPlusFileManager文件|5/6"),$.getScript("https://cdn.jsdelivr.net/npm/sweetalert/dist/sweetalert.min.js",(function(){console.log("加载sweetalert，所有js加载完毕|6/6")}))}))}))}))}))}))}));