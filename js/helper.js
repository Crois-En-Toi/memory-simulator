//free space in memory
var memory = [20, 100, 25, 50, 75, 60, 10, 15];
const initial_memory = [20, 100, 25, 50, 75, 60, 10, 15];
var counter = 0;

//process size
var process_size = [18, 17, 15, 22, 30];

var last = 0;

//first fit algo
function firstFit(proc) {
  for (var i = 0; i < memory.length; i++) {
    if (proc < memory[i]) {
      memory[i] = memory[i] - proc;
      last = i;
      break;
    }
  }


}

//next-fit
function nextFit(proc) {


  for (var i = last; i < memory.length; i++) {
    if (proc < memory[i]) {
      memory[i] = memory[i] - proc;
      last = i;
      break;
    }
  }



}

//best-fit
function bestFit(proc) {
  var index = 0;
  //something very large
  var diff = 999;

  for (var i = 0; i < memory.length; i++) {
    if (memory[i] > proc) {
      if (diff > memory[i] - proc) {
        diff = memory[i] - proc;
        index = i;

      }

    }

  }

  memory[index] = memory[index] - proc;


}

//best-fit
function worstFit(proc) {
  var index = 0;
  //something very small
  var diff = 0;

  for (var i = 0; i < memory.length; i++) {
    if (memory[i] > proc) {
      if (diff < memory[i] - proc) {
        diff = memory[i] - proc;
        index = i;

      }

    }

  }

  memory[index] = memory[index] - proc;


}



//html filling code
//filling up the memory cells
for (var i = 1; i < 9; ++i) {
  let p = document.createElement("p");
  var content = document.createTextNode(memory[i - 1]);
  p.appendChild(content);
  document.getElementById(i).append(p);
}


//filling up the filled cells space
var temp = 0;
var string = "%";
for (var i = 1; i < 9; ++i) {
  string = "%";
  temp = ((initial_memory[i - 1] - memory[i - 1]) / initial_memory[i - 1]) * 100;
  string = temp + string;
  document.getElementById(i).childNodes[1].style.width = string;
}

//adding functionality to button


$("#next").click(function() {

  if ($('#ffit').is(":checked")) {
    if (counter === 4) {
      counter = 0;
    }
    firstFit(process_size[counter]);
    for (var i = 1; i < 9; ++i) {
      string = "%";
      temp = ((initial_memory[i - 1] - memory[i - 1]) / initial_memory[i - 1]) * 100;
      string = temp + string;
      document.getElementById(i).childNodes[1].style.width = string;


    }
    $("#process_number").text(counter + 1 + " size:" + process_size[counter] +"kb");
    counter++;
  }
  if ($('#nfit').is(":checked")) {
    if (counter === 4) {
      counter = 0;
    }
    nextFit(process_size[counter]);
    for (var i = 1; i < 9; ++i) {
      string = "%";
      temp = ((initial_memory[i - 1] - memory[i - 1]) / initial_memory[i - 1]) * 100;
      string = temp + string;
      document.getElementById(i).childNodes[1].style.width = string;


    }
    $("#process_number").text(counter + 1 + " size:" + process_size[counter] +"kb");
    counter++;
  }
  if ($('#bfit').is(":checked")) {
    if (counter === 4) {
      counter = 0;
    }
    bestFit(process_size[counter]);
    for (var i = 1; i < 9; ++i) {
      string = "%";
      temp = ((initial_memory[i - 1] - memory[i - 1]) / initial_memory[i - 1]) * 100;
      string = temp + string;
      document.getElementById(i).childNodes[1].style.width = string;

    }
    $("#process_number").text(counter + 1 + " size:" + process_size[counter] +"kb");
    counter++;
  }
  if ($('#wfit').is(":checked")) {
    if (counter === 4) {
      counter = 0;
    }
    worstFit(process_size[counter]);
    for (var i = 1; i < 9; ++i) {
      string = "%";
      temp = ((initial_memory[i - 1] - memory[i - 1]) / initial_memory[i - 1]) * 100;
      string = temp + string;
      document.getElementById(i).childNodes[1].style.width = string;

    }
    $("#process_number").text(counter + 1 + " size:" + process_size[counter] +"kb");
    counter++;
  }

});
