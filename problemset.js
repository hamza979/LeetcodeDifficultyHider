var observe = function(){
    var observer = new MutationObserver(function(mutations, observer) {
        observer.disconnect();
        var t = document.querySelector(".reactable-data");
		var trs = t.getElementsByTagName("tr");
		var tds = null;

		for (var i=0; i<trs.length; i++)
		{
			tds = trs[i].getElementsByTagName("td");
			tds[4].style.visibility="hidden";
			tds[5].style.visibility="hidden";
		}
         observe();
    });
    observer.observe(document.querySelector(".content-wrapper"), {characterData: true,childList: true,attributes: true,subtree:true});
}
function checkIfDisplayed(checkFrequencyInMs, timeoutInMs) {
  var startTimeInMs = Date.now();
  (function loopSearch() {
    if (document.querySelector(".reactable-data") != null) {
		var t = document.querySelector(".reactable-data");
		var trs = t.getElementsByTagName("tr");
		var tds = null;

		for (var i=0; i<trs.length; i++)
		{
			tds = trs[i].getElementsByTagName("td");
			tds[4].style.visibility="hidden";
			tds[5].style.visibility="hidden";
		}
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