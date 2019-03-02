document.getElementById("default").click();

function openLink(evt, content) {
  var i, navcontent, navlinks;

  navcontent = document.getElementsByClassName("navcontent");
  for (i = 0; i < navcontent.length; i++) {
    navcontent[i].style.display = "none";
    if (navcontent[i] == content) {}
  }
  navlinks = document.getElementsByClassName("navlinks");
  for (i = 0; i < navlinks.length; i++) {
    navlinks[i].className = navlinks[i].className.replace(" active", "");
  }

  document.getElementById(content).style.display = "block";
  evt.currentTarget.className += " active";
}


function MerchItem(itemNumber, itemName, itemPrice, itemThumbnail) {
  this.number = itemNumber;
  this.name = itemName;
  this.price = itemPrice;
  this.thumb = itemThumbnail;
}
