!function(e){function t(t){for(var o,s,i=t[0],a=t[1],c=t[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);for(u&&u(t);f.length;)f.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],o=!0,i=1;i<n.length;i++){var a=n[i];0!==r[a]&&(o=!1)}o&&(l.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={0:0},l=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=a;l.push([0,1]),n()}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0});const r=n(2);n(3),n(4);const l=r.__importDefault(n(5));let s=document.getElementById("search-form");function i(){return r.__awaiter(this,void 0,void 0,(function*(){let e={};new FormData(s).forEach((t,n)=>{e[n]=t});try{const t="https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=relevance&answers=1&filter=withbody&site=stackoverflow&key=Nq4apLl7jpfWZJUxaHLCnw%28%28&q=";let n=yield fetch(t+encodeURIComponent(e.text.split(/\W/).join(" OR "))),o=(yield n.json()).items;o=o.map(e=>({title:e.title,link:e.link,id:e.question_id,body:e.body,owner:e.owner})),function(e,t){const n=document.getElementById("templates"),o=n.getElementsByClassName("stackex-question")[0];let r=document.getElementById("stackex-questions");for(;r.hasChildNodes();)r.removeChild(r.lastChild);t||0!==e.length||r.appendChild(n.getElementsByClassName("no-results")[0].cloneNode(!0));console.log(e),e.map(e=>{const t=o.cloneNode(!0);var n;t.getElementsByClassName("stackex-question-title")[0].textContent=e.title,t.getElementsByClassName("query-headline")[0].innerHTML=e.body.substr(0,400),t.getElementsByClassName("stackex-question-title")[0].setAttribute("href",e.link),r.appendChild(t),n=t,Array.from(n.getElementsByTagName("pre")).forEach(e=>{l.default.highlightBlock(e)})})}(o)}catch(e){console.log(e);const t=document.getElementById("templates");let n=document.getElementById("stackex-questions"),o=t.getElementsByClassName("error")[0].cloneNode(!0);for(o.textContent=e.message;n.hasChildNodes();)n.removeChild(n.lastChild);n.appendChild(o)}}))}s.onsubmit=function(e){return r.__awaiter(this,void 0,void 0,(function*(){e.preventDefault(),i()}))},null===(o=document.getElementById("ec-query"))||void 0===o||o.addEventListener("paste",e=>i()),document.getElementById("muse-query").focus()},,function(e,t,n){},function(e,t,n){}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9hcHAudHMiXSwibmFtZXMiOlsid2VicGFja0pzb25wQ2FsbGJhY2siLCJkYXRhIiwibW9kdWxlSWQiLCJjaHVua0lkIiwiY2h1bmtJZHMiLCJtb3JlTW9kdWxlcyIsImV4ZWN1dGVNb2R1bGVzIiwiaSIsInJlc29sdmVzIiwibGVuZ3RoIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaW5zdGFsbGVkQ2h1bmtzIiwicHVzaCIsIm1vZHVsZXMiLCJwYXJlbnRKc29ucEZ1bmN0aW9uIiwic2hpZnQiLCJkZWZlcnJlZE1vZHVsZXMiLCJhcHBseSIsImNoZWNrRGVmZXJyZWRNb2R1bGVzIiwicmVzdWx0IiwiZGVmZXJyZWRNb2R1bGUiLCJmdWxmaWxsZWQiLCJqIiwiZGVwSWQiLCJzcGxpY2UiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwicyIsImluc3RhbGxlZE1vZHVsZXMiLCIwIiwiZXhwb3J0cyIsIm1vZHVsZSIsImwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicCIsImpzb25wQXJyYXkiLCJ3aW5kb3ciLCJvbGRKc29ucEZ1bmN0aW9uIiwic2xpY2UiLCJzZWFyY2hGb3JtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJ1blNlYXJjaCIsImZkIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwiU09RdWVyeVRlbXBsYXRlIiwiZmV0Y2giLCJlbmNvZGVVUklDb21wb25lbnQiLCJ0ZXh0Iiwic3BsaXQiLCJqb2luIiwicXVlc3Rpb25zIiwianNvbiIsIml0ZW1zIiwibWFwIiwicXVlc3Rpb24iLCJ0aXRsZSIsImxpbmsiLCJpZCIsInF1ZXN0aW9uX2lkIiwiYm9keSIsIm93bmVyIiwiaW5pdGlhbCIsInRlbXBsYXRlRGl2IiwicXVlc3Rpb25MaW5rVGVtcGxhdGUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicXVlc3Rpb25zRGl2IiwiaGFzQ2hpbGROb2RlcyIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwiYXBwZW5kQ2hpbGQiLCJjbG9uZU5vZGUiLCJjb25zb2xlIiwibG9nIiwicXVlc3Rpb25EZXRhaWxzIiwibm9kZSIsInRleHRDb250ZW50IiwiaW5uZXJIVE1MIiwic3Vic3RyIiwic2V0QXR0cmlidXRlIiwiQXJyYXkiLCJmcm9tIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJibG9jayIsImhpZ2hsaWdodEJsb2NrIiwic2hvd1F1ZXN0aW9ucyIsImUiLCJlcnJvckRpdiIsIm1lc3NhZ2UiLCJvbnN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvY3VzIl0sIm1hcHBpbmdzIjoiYUFDRSxTQUFTQSxFQUFxQkMsR0FRN0IsSUFQQSxJQU1JQyxFQUFVQyxFQU5WQyxFQUFXSCxFQUFLLEdBQ2hCSSxFQUFjSixFQUFLLEdBQ25CSyxFQUFpQkwsRUFBSyxHQUlITSxFQUFJLEVBQUdDLEVBQVcsR0FDcENELEVBQUlILEVBQVNLLE9BQVFGLElBQ3pCSixFQUFVQyxFQUFTRyxHQUNoQkcsT0FBT0MsVUFBVUMsZUFBZUMsS0FBS0MsRUFBaUJYLElBQVlXLEVBQWdCWCxJQUNwRkssRUFBU08sS0FBS0QsRUFBZ0JYLEdBQVMsSUFFeENXLEVBQWdCWCxHQUFXLEVBRTVCLElBQUlELEtBQVlHLEVBQ1pLLE9BQU9DLFVBQVVDLGVBQWVDLEtBQUtSLEVBQWFILEtBQ3BEYyxFQUFRZCxHQUFZRyxFQUFZSCxJQUtsQyxJQUZHZSxHQUFxQkEsRUFBb0JoQixHQUV0Q08sRUFBU0MsUUFDZEQsRUFBU1UsT0FBVFYsR0FPRCxPQUhB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TUFBTUMsS0FBS04sRUFBS08scUJBQXFCLFFBQVF0QyxRQUFRdUMsSUFDbkQsVUFBS0MsZUFBZUQsT0F2RHBCRSxDQUFjbEMsR0FDZCxNQUFPbUMsR0FDUGQsUUFBUUMsSUFBSWEsR0FDWixNQUFNdkIsRUFBY3hCLFNBQVNDLGVBQWUsYUFDNUMsSUFBSTBCLEVBQWUzQixTQUFTQyxlQUFlLHFCQUN2QytDLEVBQVd4QixFQUFZRSx1QkFBdUIsU0FBUyxHQUFHTSxXQUFVLEdBRXhFLElBREFnQixFQUFTWCxZQUFjVSxFQUFFRSxRQUNsQnRCLEVBQWFDLGlCQUNsQkQsRUFBYUUsWUFBWUYsRUFBYUcsV0FFeENILEVBQWFJLFlBQVlpQixPQXRDN0JqRCxFQUFXbUQsU0FBVyxTQUFlSCxHLG1EQUVuQ0EsRUFBRUksaUJBQ0ZqRCxRQUdpQyxRQUFuQyxFQUFBRixTQUFTQyxlQUFlLG1CQUFXLFNBQUVtRCxpQkFBaUIsUUFBVUwsR0FBYTdDLEtBcUM3RUYsU0FBU0MsZUFBZSxjQUFlb0QsUyIsImZpbGUiOiJzY3JpcHRzL2VjLXN0YW5kYWxvbmUuMGIwZjM5MmQxMDRkZWZhODM1MDUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDA6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLDFdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0ICcuLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9oaWdobGlnaHQuY3NzJztcclxuaW1wb3J0IGhsanMgZnJvbSAnaGlnaGxpZ2h0LmpzJztcclxuXHJcbmxldCBzZWFyY2hGb3JtOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWZvcm0nKTtcclxuXHJcbnNlYXJjaEZvcm0ub25zdWJtaXQgPSBhc3luYyBmdW5jdGlvbihlOiBFdmVudCkge1xyXG4gIC8vIHN0b3AgdGhlIHJlZ3VsYXIgZm9ybSBzdWJtaXNzaW9uXHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHJ1blNlYXJjaCgpO1xyXG59O1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VjLXF1ZXJ5Jyk/LmFkZEV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgKGU6IEV2ZW50KSA9PiBydW5TZWFyY2goKSk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBydW5TZWFyY2goKSB7XHJcbiAgbGV0IGZkOiBhbnkgPSB7fTtcclxuICBuZXcgRm9ybURhdGEoc2VhcmNoRm9ybSkuZm9yRWFjaCgodmFsdWUsIGtleTogYW55KSA9PiB7XHJcbiAgICBmZFtrZXldID0gdmFsdWU7XHJcbiAgfSk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBTT1F1ZXJ5VGVtcGxhdGUgPSBgaHR0cHM6Ly9hcGkuc3RhY2tleGNoYW5nZS5jb20vMi4yL3NlYXJjaC9hZHZhbmNlZD9vcmRlcj1kZXNjJnNvcnQ9cmVsZXZhbmNlJmFuc3dlcnM9MSZmaWx0ZXI9d2l0aGJvZHkmc2l0ZT1zdGFja292ZXJmbG93JmtleT1OcTRhcExsN2pwZldaSlV4YUhMQ253JTI4JTI4JnE9YDtcclxuXHJcbiAgICBsZXQgZGF0YSA9IGF3YWl0IGZldGNoKFNPUXVlcnlUZW1wbGF0ZSArIGVuY29kZVVSSUNvbXBvbmVudChmZC50ZXh0LnNwbGl0KC9cXFcvKS5qb2luKCcgT1IgJykpKTtcclxuICAgIGxldCBxdWVzdGlvbnMgPSAoYXdhaXQgZGF0YS5qc29uKCkpLml0ZW1zO1xyXG5cclxuICAgIHF1ZXN0aW9ucyA9IHF1ZXN0aW9ucy5tYXAoKHF1ZXN0aW9uOiBhbnkpID0+ICh7XHJcbiAgICAgIHRpdGxlOiBxdWVzdGlvbi50aXRsZSxcclxuICAgICAgbGluazogcXVlc3Rpb24ubGluayxcclxuICAgICAgaWQ6IHF1ZXN0aW9uLnF1ZXN0aW9uX2lkLFxyXG4gICAgICBib2R5OiBxdWVzdGlvbi5ib2R5LFxyXG4gICAgICBvd25lcjogcXVlc3Rpb24ub3duZXIsXHJcbiAgICB9KSk7XHJcblxyXG4gICAgc2hvd1F1ZXN0aW9ucyhxdWVzdGlvbnMpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgY29uc3QgdGVtcGxhdGVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcGxhdGVzJykhO1xyXG4gICAgbGV0IHF1ZXN0aW9uc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFja2V4LXF1ZXN0aW9ucycpITtcclxuICAgIGxldCBlcnJvckRpdiA9IHRlbXBsYXRlRGl2LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Vycm9yJylbMF0uY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgZXJyb3JEaXYudGV4dENvbnRlbnQgPSBlLm1lc3NhZ2U7XHJcbiAgICB3aGlsZSAocXVlc3Rpb25zRGl2Lmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICBxdWVzdGlvbnNEaXYucmVtb3ZlQ2hpbGQocXVlc3Rpb25zRGl2Lmxhc3RDaGlsZCEpO1xyXG4gICAgfVxyXG4gICAgcXVlc3Rpb25zRGl2LmFwcGVuZENoaWxkKGVycm9yRGl2KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIGZvY3VzIHRoZSBzZWFyY2ggYmFyXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtdXNlLXF1ZXJ5JykhLmZvY3VzKCk7XHJcblxyXG5mdW5jdGlvbiBzaG93UXVlc3Rpb25zKHF1ZXN0aW9uczogQXJyYXk8YW55PiwgaW5pdGlhbD86IGJvb2xlYW4pIHtcclxuICBjb25zdCB0ZW1wbGF0ZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wbGF0ZXMnKSE7XHJcbiAgY29uc3QgcXVlc3Rpb25MaW5rVGVtcGxhdGUgPSB0ZW1wbGF0ZURpdi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdGFja2V4LXF1ZXN0aW9uJylbMF07XHJcblxyXG4gIGxldCBxdWVzdGlvbnNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhY2tleC1xdWVzdGlvbnMnKSE7XHJcbiAgLy8gcmVtb3ZlIGFsbCBleGlzdGluZyBxdWVzdGlvbnMsIHdlIGdvdCBhIG5ldyBxdWVyeVxyXG4gIHdoaWxlIChxdWVzdGlvbnNEaXYuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICBxdWVzdGlvbnNEaXYucmVtb3ZlQ2hpbGQocXVlc3Rpb25zRGl2Lmxhc3RDaGlsZCEpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFpbml0aWFsICYmIHF1ZXN0aW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgIHF1ZXN0aW9uc0Rpdi5hcHBlbmRDaGlsZCh0ZW1wbGF0ZURpdi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduby1yZXN1bHRzJylbMF0uY2xvbmVOb2RlKHRydWUpKTtcclxuICB9XHJcblxyXG4gIC8vIGl0ZXJhdGUgb3ZlciBxdWVzdGlvbnMgYW5kIHJlbmRlciB0aGVtXHJcbiAgY29uc29sZS5sb2cocXVlc3Rpb25zKTtcclxuICBxdWVzdGlvbnMubWFwKHF1ZXN0aW9uID0+IHtcclxuICAgIGNvbnN0IHF1ZXN0aW9uRGV0YWlsczogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+cXVlc3Rpb25MaW5rVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgLy9xdWVzdGlvbkRldGFpbHMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RhY2tleC1wb3N0LWJvZHknKVswXS5pbm5lckhUTUwgPSBxdWVzdGlvblsnYm9keSddO1xyXG4gICAgcXVlc3Rpb25EZXRhaWxzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0YWNrZXgtcXVlc3Rpb24tdGl0bGUnKVswXS50ZXh0Q29udGVudCA9XHJcbiAgICAgIHF1ZXN0aW9uWyd0aXRsZSddO1xyXG4gICAgcXVlc3Rpb25EZXRhaWxzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3F1ZXJ5LWhlYWRsaW5lJylbMF0uaW5uZXJIVE1MID0gcXVlc3Rpb25bJ2JvZHknXS5zdWJzdHIoXHJcbiAgICAgIDAsXHJcbiAgICAgIDQwMFxyXG4gICAgKTtcclxuXHJcbiAgICBxdWVzdGlvbkRldGFpbHNcclxuICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0YWNrZXgtcXVlc3Rpb24tdGl0bGUnKVswXVxyXG4gICAgICAuc2V0QXR0cmlidXRlKCdocmVmJywgcXVlc3Rpb25bJ2xpbmsnXSk7XHJcblxyXG4gICAgcXVlc3Rpb25zRGl2LmFwcGVuZENoaWxkKHF1ZXN0aW9uRGV0YWlscyk7XHJcbiAgICBoYW5kbGVTbmlwcGV0cyhxdWVzdGlvbkRldGFpbHMpO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBFYXN5IGNvcHkgLyBwYXN0ZSBvbiBwcmUgZWxlbWVudHNcclxuZnVuY3Rpb24gaGFuZGxlU25pcHBldHMobm9kZTogSFRNTEVsZW1lbnQpIHtcclxuICBBcnJheS5mcm9tKG5vZGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3ByZScpKS5mb3JFYWNoKGJsb2NrID0+IHtcclxuICAgIGhsanMuaGlnaGxpZ2h0QmxvY2soYmxvY2spO1xyXG4gIH0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=