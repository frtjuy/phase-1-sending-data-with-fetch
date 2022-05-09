const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
    };
  
const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(formData),
};
  
fetch("http://localhost:3000/dogs", configurationObject)
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        console.log(object);
});
function submitData (theName, theEmail) {
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: `${theName}`,
            email: `${theEmail}`
        })
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        return renderData(object)
    })
    .catch(function (error) {
        const theError = error.message
        renderError(theError)
    })
}
function renderData(datas) {
    // const body = document.querySelector('body');
    const bodys = document.querySelector('body')
    bodys.innerHTML = datas.id;
    
}
function renderError(error) {
    // const body = document.querySelector('body');
    
    const bodys = document.querySelector('body')
    bodys.innerHTML = error;
    
}
document.addEventListener('DOMContentLoaded', function () {
    submitData()
})