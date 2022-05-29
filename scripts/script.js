/**
 * Temperature calculator 
 * @author Zuzana, Alexandra, Alanis
 * @version 1.0.0 May 2022
 */

/**
 * 
 * LOGIN & SIGNUP
 */
function openTab(evt, action) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(action).style.display = "block";
    evt.currentTarget.className += " active";

  }

function openModal () {
  document.querySelector(".modal").classList.add("show");
}

function closeModal () {
  document.querySelector(".modal").classList.remove("show");
}

function openFilters() {
  var  button = document.querySelector(".show-filters");
  if (button.style.display === "block") {
    button.style.display = "none";
  } else {
    button.style.display = "block";
  }
}
