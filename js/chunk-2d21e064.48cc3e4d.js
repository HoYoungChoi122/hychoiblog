(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e064"],{d497:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("video",{attrs:{id:"video",width:"320",height:"240",autoplay:""}}),n("canvas",{attrs:{id:"canvas",width:"960",height:"720"}}),n("button",{attrs:{type:"button",id:"webcamBtn"}},[e._v("캡쳐하기")])])}],d={name:"menuFrame",mounted:function(){navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({video:!0}).then((function(e){var t=document.getElementById("video");t.srcObject=e,t.play()}));var e=document.getElementById("canvas"),t=e.getContext("2d"),n=document.getElementById("video");document.getElementById("webcamBtn").addEventListener("click",(function(){t.drawImage(n,0,0,960,720)}))}},c=d,o=n("2877"),r=Object(o["a"])(c,a,i,!1,null,"064e2774",null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d21e064.48cc3e4d.js.map