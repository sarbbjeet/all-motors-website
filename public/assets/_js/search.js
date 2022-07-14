window.addEventListener("resize", function (e) {
  let width = window.innerWidth;
  const searchForm = document.querySelector("#d-search");
  console.log(searchForm);
  if (width < 768) return searchForm.classList.add("d-none");
  searchForm.classList.remove("d-none");
});
