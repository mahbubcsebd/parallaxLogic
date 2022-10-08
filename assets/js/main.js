const searchFun = (event) => {
    event.preventDefault();
    let filter = document.getElementById('myInput').value.toLowerCase();
    let filterContent = document.getElementById('filter-content');
    let singleProfile = filterContent.getElementsByClassName('single-content');


    for (var i = 0; i < singleProfile.length; i++) {
        let profileName = singleProfile[i].getElementsByTagName('h2')[0];

        if (profileName) {
            let textValue = profileName.textContent || profileName.innerHTML;

            if (textValue.toLowerCase().indexOf(filter) > -1) {
                singleProfile[i].style.display = "";
            } else {
                singleProfile[i].style.display = "none";
            }
        }
    }
};

const form = document.getElementById('search-form');

form.addEventListener('submit', searchFun);


// if you want to search via keyup listeners please comment out line number 2 & 25 on main.js file, also add onkeyup="searchFun()" at input tag on index.html file