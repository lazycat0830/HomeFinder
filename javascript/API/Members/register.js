const submit = document.getElementById("submit");
const form = document.querySelector("form");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  axios({
    method: "post",
    url: "http://localhost:5190/api/Home/InsertRental",
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
      // Authorization: `Bearer ${token}`,
    },
    data: formData,
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});