// Link header
fetch('/header.html')
.then(response => response.text())
.then(data => {
    document.getElementById('header').innerHTML = data;
});

//link footer
fetch('/footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer').innerHTML = data;
});

