var observe = function(){
    var observer = new MutationObserver(function(mutations, observer) {
         observer.disconnect();
		 if(document.querySelector(".css-10o4wqw")!=null){
		 document.querySelector(".css-10o4wqw").style.visibility="hidden";
		 document.querySelector(".css-q9155n").style.visibility="hidden";
		 }
		 
         observe();
    });
    observer.observe(document.querySelector(".main__2_tD"), {characterData: false,childList: true,attributes: false,subtree:false});
}
function checkIfDisplayed(checkFrequencyInMs, timeoutInMs) {
  var startTimeInMs = Date.now();
  (function loopSearch() {
    if (document.querySelector(".css-10o4wqw") != null) {
      document.querySelector(".css-10o4wqw").style.visibility="hidden";
	  document.querySelector(".css-q9155n").style.visibility="hidden";
	  observe();
      return;
    }
    else {
      setTimeout(function () {
        if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
          return;
        loopSearch();
      }, checkFrequencyInMs);
    }
  })();
}
checkIfDisplayed(100,15000);
