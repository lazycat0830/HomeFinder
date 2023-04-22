
function getIdDelete(id) {
    
    console.log(id);

    axios({
        method: 'delete',
        url: `http://localhost:5190/api/Home/${id.replace('delete','')}`,
        headers:{
            "Content-Type": "multipart/form-data",
            "Accept": "application/json",
            "Authorization": `Bearer ${LoginData.token}`, 
        },
    })
    .then(function (response) {
        console.log(response);
        location.reload();
    })
    .catch(function (error) {
        console.log(error);
    });
}