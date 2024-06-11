function carregarSliderPorDiv(idDivImagens,nomeFotoComCaminho,totalFotos) {
    var outputDivImagens = document.getElementById(idDivImagens);
    if(outputDivImagens){ 
        var result = "<section class='slider' ;>";
                result += "<div class='hero-slider' style='-webkit-box-shadow: 0px 10px 13px -7px #000000, 10px 17px 20px -9px rgba(59,83,255,1.0);box-shadow: 0px 10px 13px -7px #000000, 10px 17px 20px -9px rgba(59,83,255,1.0);border-radius: 9px;'>";
        
        // total de arquivos que existir
        for (var i = 1; i <= totalFotos; i++) {
            var nomeFoto = nomeFotoComCaminho + i + ".jpg";
            result += "<div class='single-slider'>"; 
            result += "<img src='"+nomeFoto+"' style='height: 900px !important;width: 95% !important' alt='Image 2'></img> ";          						
            
            if(i !== 1){
                result += "<div class='caption'>SINAEG representando os servidores do ERCE no ano de 2014 com o então Secretário de Relações Institucionais da Presidência da República, o Senhor Ricardo Berzoini.</div>";

            }
            
            result += "</div>";
        }
                
            result += "</div>";
        result += "</section>";

        // Set the inner HTML of the output div to the result string
        outputDivImagens.innerHTML = result;

    }
}
