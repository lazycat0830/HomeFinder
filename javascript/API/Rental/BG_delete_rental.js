
function getIdDelete(event) {
    var element = event.target;
    var id = element.getAttribute("id");
    console.log(id);

    axios.delete(`http://localhost:5190/api/Home/${id.replace('delete','')}`)
    .then(function (response) {
        console.log(response);
        location.reload();
    })
    .catch(function (error) {
        console.log(error);
    });
}