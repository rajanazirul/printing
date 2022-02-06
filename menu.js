function MM_swapImgRestore() { //v3.0
    var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
  }
  function MM_preloadImages() { //v3.0
    var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
      var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
      if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
  }
  
  function MM_findObj(n, d) { //v4.01
    var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
      d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
    if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
    for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
    if(!x && d.getElementById) x=d.getElementById(n); return x;
  }
  
  function MM_swapImage() { //v3.0
    var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
     if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
  }
  
  function onmouses(obj,imgurl){
      obj.src = imgurl;
  }
  
  /* 去自助平台订购或报价咨询 */
  function speakFor(menuid, linkid) {
      $.ajax({
          type : "POST",
          url : "comitfastlink.action?menuid="+menuid+"&linkid="+linkid,
          success : function(data) {
              if (data!= null) {
                  window.location.href = data;
              }
          }
      });
  }
  
  /* 去自助平台订购或报价咨询 */
  function customer() {
      $.ajax({
          type : "POST",
          url : "customer.action",
          success : function(data) {
              if (data!= null) {
                  window.location.href = data;
              }
          }
      });
  }
  
  function setTab(m,n){
   var tli=document.getElementById("menu"+m).getElementsByTagName("li");
   var mli=document.getElementById("main"+m).getElementsByTagName("ul");
   for(i=0;i<tli.length;i++){
    tli[i].className=i==n?"hover":"";
    mli[i].style.display=i==n?"block":"none";
   }
  }
  
  //資源顯示與隱藏
  function showOrHidden(id,src1,src2){
      if($("#equipmentImg"+id+"left").is(":hidden")){
          $("#showOrHidden"+id+"left").attr("src",src2);
          $("#showOrHidden"+id+"right").attr("src",src2);
          $("#equipmentImg"+id+"left").fadeIn("200");
          $("#equipmentImg"+id+"right").fadeIn("200");
      }else{
          $("#showOrHidden"+id+"left").attr("src",src1);
          $("#showOrHidden"+id+"right").attr("src",src1);
          $("#equipmentImg"+id+"left").hide();
          $("#equipmentImg"+id+"right").hide();
      }
  }
  function showOrHidden2(id,src1,src2){
      if($("#download2Img"+id+"left").is(":hidden")){
          $("#show2OrHidden"+id+"left").attr("src",src2);
          $("#show2OrHidden"+id+"right").attr("src",src2);
          $("#download2Img"+id+"left").fadeIn("200");
          $("#download2Img"+id+"right").fadeIn("200");
      }else{
          $("#show2OrHidden"+id+"left").attr("src",src1);
          $("#show2OrHidden"+id+"right").attr("src",src1);
          $("#download2Img"+id+"left").hide();
          $("#download2Img"+id+"right").hide();
      }
  }
  
  /*八折優惠div居中*/
  function divCenter(id1,id2){
      $("#"+id2).show();
      var	top=$("#"+id1).offset().top+($("#"+id1).height()-$("#"+id2).height())/2;
      var	left=$("#"+id1).offset().left+($("#"+id1).width()-$("#"+id2).width())/2;
      $("#"+id2).css("left",left);
      $("#"+id2).css("top",top);
  }
  /*打稿收費表lightbox*/
  function showDagao(id,fastid) {
      $.ajax( {
          type : "POST",// 提交类型
              url : "dagao.action?fastid="+fastid,// 链接
              success : function(date) {// 回调函数
                  $("#"+id).html(date);
              }
          });
      $("#"+id).show("200");
      showShade();
      var top=(document.documentElement.clientHeight-document.getElementById(id).scrollHeight)/2+document.documentElement.scrollTop;
      var	left=(document.documentElement.clientWidth-document.getElementById(id).scrollWidth)/2+document.documentElement.scrollLeft;
      $("#"+id).css("left",left);
      $("#"+id).css("top",top);
  }
  
  /*顯示分店信息*/
  function showStoremap(id,fastid) {
      $.ajax( {
          type : "POST",// 提交类型
              url : "storemap.action?id="+fastid,// 链接
              success : function(date) {// 回调函数
                  $("#"+id).html(date);
              }
          });
      $("#"+id).show("200");
      showShade();
      var top=(document.documentElement.clientHeight-document.getElementById(id).scrollHeight)/2+document.documentElement.scrollTop;
      var	left=(document.documentElement.clientWidth-document.getElementById(id).scrollWidth)/2+document.documentElement.scrollLeft;
      $("#"+id).css("left",left);
      $("#"+id).css("top",top);
  }
  
  
  //关闭相关信息层
  function closedShowDagao(id) {
      document.getElementById(id).style.display="none";
      closedShade();
  }
  //开启遮罩
  function showShade() {
      var obj = document.getElementById("shadeDiv");
      obj.style.width = Math.max(document.documentElement.scrollWidth, document.documentElement.clientWidth) + "px";
      obj.style.height = Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight) + "px";
      obj.style.top="0px";
      obj.style.left="0px";
      obj.style.display = "block";
  }
  //关闭遮罩
  function closedShade() {
      var obj = document.getElementById("shadeDiv");
      obj.style.display = "none";
  }
  