const submit = document.getElementById("submit");
const form = document.querySelector("form");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  formData.append('newMember.authcode','');
  // formData.append('newMember.identity','1');
  formData.append('newMember.score','0');
  formData.append('newMember.img','');

  axios({
    method: "post",
    url: "http://localhost:5190/api/Auth/register",
    headers: {
      "Content-Type": "multipart/form-data",
      'Accept': "application/json",
      // Authorization: `Bearer ${token}`,
    },
    data: formData,
  })
    .then((response) => {
      console.log(response.data);
      let validatatext_signup=document.getElementById('validatatext_signup');
      validatatext_signup.innerHTML=response.data.message;
    })
    .catch((error) => {
      console.error(error);
    });
});

