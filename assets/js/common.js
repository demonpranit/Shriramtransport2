document.addEventListener("DOMContentLoaded", function () {

    // Load Common Top Header
    // fetch("common-header.html")
    //     .then(response => response.text())
    //     .then(data => {
    //         document.getElementById("common-header").innerHTML = data;
    //     });

    // Load Common Menu Items
    fetch("common-footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("common-footer").innerHTML = data;

        });

});
