var pdf = document.createElement("div");
pdf.innerHTML = '<embed src="http://www.seas.upenn.edu/~cis121/14fa/hws/hw1/hw1.pdf" style="position:fixed; top:0; right:0" width="50%" height="100%">';
var latex = document.getElementsByTagName('pre')[0];
latex.style.width = "50%";
latex.style.float = "left";
document.body.appendChild(pdf);
