window.scroll(function () {
  document
    .getElementsByClassName("bg-light")
    .toggleClass("scrolled", this.scrollTop() > 100);
});
