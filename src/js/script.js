window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var header = document.getElementById("header");
    if (
        document.body.scrollTop >
            document.documentElement.clientHeight * 0.5 ||
        document.documentElement.scrollTop >
            document.documentElement.clientHeight * 0.5
    ) {
        header.classList.add("fixed");
        header.classList.add("ease-in-out");
        header.classList.add("transition-all");
        header.classList.add("duration-700");
        header.classList.add("z-50");
        header.classList.add("shadow-xl");
        header.classList.add("shadow-gray-100");
    } else {
        header.classList.remove("fixed");
        header.classList.remove("ease-in-out");
        header.classList.remove("transition-all");
        header.classList.remove("z-50");
        header.classList.remove("duration-700");
        header.classList.remove("shadow-xl");
        header.classList.remove("shadow-gray-100");
    }
}

document.getElementById('explore-site').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.getElementById('cometome').scrollIntoView({ behavior: 'smooth', duration: '500' });
});

document.getElementById('favname').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.getElementById('clearmsg').addEventListener('click', function() {
    document.getElementById('messagebox').value = "";
})