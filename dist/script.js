onload = () => {
  const c = setTimeout(() => {
    // document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

render = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    document.getElementById("text-simple").style.visibility="visible"
    document.getElementById("text-simple").style.opacity = "1"
    document.getElementById("button-show").style.display="none"
    clearTimeout(c);
  }, 1000);
};