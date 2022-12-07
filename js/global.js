setTimeout(() => {
  let progressBar = document.getElementById("myProgressBar");

  let barwidth = 10;

  let ab = setInterval(progressFunction, 40);

  function progressFunction() {
    if (barwidth >= 100) {
      clearInterval(ab);
      setTimeout(() => {
        progressBar.classList.add("height-0");
      }, 3000);
      setTimeout(() => {
        document.getElementById("loader").classList.add("hide-loader");
      }, 4000);
    } else {
      barwidth++;
      progressBar.style.width = barwidth + "%";
      document.getElementById("incrementpercentage").innerHTML = barwidth + "%";
    }
  }
}, 1000);

/*
Prerequisite
1 setinterval
2 settimeout
3 classlist add method
4 increment operator
5 if else condition

*/
