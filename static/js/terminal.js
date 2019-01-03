function terminal_newline(e) {
    if (e.keyCode == 13) {
        event.preventDefault();
        var newl = document.getElementById("text_input").value;
        document.getElementById("text_input").value = "";

        var para = document.createElement("P");
        para.appendChild(document.createTextNode("$" + newl));
        document.getElementById("terminal_display").appendChild(para);

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var respPara = document.createElement("P");
                respPara.appendChild(document.createTextNode(this.responseText));
                document.getElementById("terminal_display").appendChild(respPara);
            }
        };

        xhttp.open("POST", "terminal_query", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("query=" + newl);
    }
}