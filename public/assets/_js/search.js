window.onload = (event) => {
  window.addEventListener("resize", (e) => {
    return styleQuery(window.innerWidth);
  });
  styleQuery(window.innerWidth);
};

const styleQuery = (width) => {
  const slider1 = document.querySelector("#slider1");
  // if (width > 768) {
  //   slider1.className = "";
  //   slider1.className =
  //     "d-flex justify-content-center align-items-center slide_four slide_max arrow_inner";
  // } else {
  //   slider1.className = "";
  //   slider1.className = "d-flex flex-column";
  // }
  console.log(width);
};
