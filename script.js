var pages = [];


function savePage() {

    var title = document.getElementById("title").value;
    var entry = document.getElementById("entry").value;

    if (entry == "") {

        alert("Write something first!");

        return;
    }

    pages.push({
        title: title,
        entry: entry
    });

    showPages();

    document.getElementById("title").value = "";
    document.getElementById("entry").value = "";

}


function showPages() {

    var text = "";

    for (var i = 0; i < pages.length; i++) {

        text +=
            "<div class='page'>" +
            "<h3>" + pages[i].title + "</h3>" +
            "<p>" + pages[i].entry + "</p>" +
            "</div>";

    }

    document.getElementById("pages").innerHTML = text;
}