function carregarSliderPorDiv(idDiv,nomeFotoComCaminho,totalFotos) {
    var outputDiv = document.getElementById(idDiv);
    if(outputDiv){ 
        var result = "<section class='slider'>";
                result += "<div class='hero-slider' style='-webkit-box-shadow: 0px 10px 13px -7px #000000, 10px 17px 20px -9px rgba(59,83,255,1.0);box-shadow: 0px 10px 13px -7px #000000, 10px 17px 20px -9px rgba(59,83,255,1.0);border-radius: 9px;'>";
        
        // total de arquivos que existir
        for (var i = 1; i <= totalFotos; i++) {
            var nomeFoto = nomeFotoComCaminho + i + ".jpg";
            result += "<div class='single-slider' style='background-image:url("+nomeFoto+");'></div>";							
        }
                
            result += "</div>";
        result += "</section>";
        // Set the inner HTML of the output div to the result string
        outputDiv.innerHTML = result;
    }
}