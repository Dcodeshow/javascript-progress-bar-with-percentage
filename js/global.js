setTimeout(() => {
  let progressBar = document.getElementById("myProgressBar");
  let barwidth = 10;

  let ab = setInterval(progressFunction, 40);

  function progressFunction() {
    if (barwidth >= 100) {
      clearInterval(ab);
      //step 3
      setTimeout(() => {
        progressBar.classList.add("height-0");
      }, 3000);
      //step 4
      setTimeout(() => {
        document.getElementById("loader").classList.add("hide-loader");
      }, 4000);
    } else {
      barwidth++;
      progressBar.style.width = barwidth + "%";
      //step 2
      document.getElementById("incrementpercentage").innerHTML = barwidth + "%";
    }
  }
}, 1000);

/* Prerequisite
1 setInterval
2 setTimeout
3 classlist method
4 Increment operator

*/
