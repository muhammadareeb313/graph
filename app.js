var xValues = ["Total", "PN", "EN", "Others"];
var yValues = [200,40, 39, 0];
var barColors = ["red", "green","blue","orange"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
});


// aaaaaaaaaaaaaaaa
var sections = {
    'pizza': 'section2',
    'mex': 'section3',
    'thai': 'section4'
  };

  var selection = function(select) {

    for (i in sections)
      document.getElementById(sections[i]).style.display = "none";

    document.getElementById(sections[select.value]).style.display = "block";

  }


  function toggleLinks() {
    var box = document.getElementsByClassName("box"); 
    var x;
    for (x = 0; x < box.length; x++) {
      box[x].innerHTML = box[x].innerHTML.replace(/hre(f|n)/gi,
          g1 => {return (g1=="href") ? "hren" : "href"});  
    }
}