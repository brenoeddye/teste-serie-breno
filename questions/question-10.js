let anchors = document.getElementsByTagName("container");
for (let z = 0; z < anchors.length; z++) {
    let elem = anchors[z];
    elem.onclick = function () {
    alert("hello");
    let element = elem.getElementsByTagName("container__content");
    element.classList.add("active");
    return false;
  };
}