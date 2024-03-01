function carregarSliderPorDiv(idDiv,nomeFotoComCaminho,totalFotos) {
    var outputDiv = document.getElementById(idDiv);
    if(outputDiv){ 
        var result = "<section class='slider'>";
                result += "<div class='hero-slider'>";
        
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