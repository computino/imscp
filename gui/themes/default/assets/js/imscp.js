// see imscp_full.js for full JS code & license
function sbmt(e,t){e.uaction.value=t;e.submit();return false}function sbmt_details(e,t){e.details.value=t;e.submit();return false}function MM_preloadImages(){var e=document;if(e.images){if(!e.MM_p){e.MM_p=[]}var t=e.MM_p.length,n=MM_preloadImages.arguments;for(var r=0;r<n.length;r++){if(n[r].indexOf("#")!==0){e.MM_p[t]=new Image;e.MM_p[t++].src=n[r]}}}}function MM_swapImgRestore(){var e,t=document.MM_sr;for(var n=0;t&&n<t.length&&(e=t[n])&&e.oSrc;n++){e.src=e.oSrc}}function MM_findObj(e,t){var n,r;if(!t){t=document}if((n=e.indexOf("?"))>0&&parent.frames.length){t=parent.frames[e.substring(n+1)].document;e=e.substring(0,n)}if(!(r=t[e])&&t.all){r=t.all[e]}for(var i=0;!r&&i<t.forms.length;i++){r=t.forms[i][e]}if(t.layers){for(i=0;!r&&i<t.layers.length;i++){r=MM_findObj(e,t.layers[i].document)}}if(!r&&t.getElementById){r=t.getElementById(e)}return r}function MM_swapImage(){var e=0,t,n=MM_swapImage.arguments;document.MM_sr=[];for(var r=0,i=n.length-2;r<i;r+=3){if((t=MM_findObj(n[r]))!==null){document.MM_sr[e++]=t;if(!t.oSrc){t.oSrc=t.src}t.src=n[r+2]}}}function sprintf(){if(!arguments||arguments.length<1||!RegExp){return}var e=arguments[0];var t=/([^%]*)%('.|0|\x20)?(-)?(\d+)?(\.\d+)?(%|b|c|d|u|f|o|s|x|X)(.*)/;var n=[],r=[],i=0,s=0;while(n=t.exec(e)){var o=n[1],u=n[2],a=n[3],f=n[4];var l=n[5],c=n[6],h=n[7];s++;var p;if(c=="%"){p="%"}else{i++;if(i>=arguments.length){alert("Error! Not enough function arguments ("+(arguments.length-1)+", excluding the string)\nfor the number of substitution parameters in string ("+i+" so far).")}var d=arguments[i];var v="";if(u&&u.substr(0,1)=="'"){v=o.substr(1,1)}else if(u){v=u}var m=true;if(a&&a==="-"){m=false}var g=-1;if(f){g=parseInt(f,10)}var y=-1;if(l&&c=="f"){y=parseInt(l.substring(1),10)}p=d;if(c=="b"){p=parseInt(d,10).toString(2)}else if(c=="c"){p=String.fromCharCode(parseInt(d,10))}else if(c=="d"){p=parseInt(d,10)?parseInt(d,10):0}else if(c=="u"){p=Math.abs(d)}else if(c=="f"){p=y>-1?Math.round(parseFloat(d)*Math.pow(10,y))/Math.pow(10,y):parseFloat(d)}else if(c=="o"){p=parseInt(d).toString(8)}else if(c=="s"){p=d}else if(c=="x"){p=(""+parseInt(d).toString(16)).toLowerCase()}else if(c=="X"){p=(""+parseInt(d).toString(16)).toUpperCase()}}e=o+p+h}return e}function showTip(e,t){var n,r,i=document.getElementById(e);if(window.event){n=window.event.x+document.body.scrollLeft;r=window.event.y+document.body.scrollTop}else{n=t.pageX;r=t.pageY}i.style.left=n+10+"px";i.style.top=r+10+"px";i.style.display="block"}function hideTip(e){document.getElementById(e).style.display="none"}function showHideBlocks(e){if(document.getElementById(e).style.display=="none"){document.getElementById(e).style.display="block"}else{document.getElementById(e).style.display="none"}}function chooseFtpDir(){var e=$('<div id="dial_ftp_dir"/>').append($("<iframe scrolling='auto' />").attr("src","ftp_choose_dir.php")).dialog({hide:"blind",show:"slide",focus:false,width:900,height:520,autoOpen:false,modal:true,close:function(e,t){$(this).remove()}});e.dialog("open");return false}function iMSCPajxError(e,t,n){switch(e.status){case 403:window.location="/index.php";break;default:alert("HTTP ERROR: An Unexpected HTTP Error occurred during the request")}}
