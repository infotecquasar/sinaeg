function adicionarNoticiasDestaqueSecundarias(idDivNoticia,linkPaginaHtml,fotoNoticia,tituloDaNoticia,corpoTituloDaNoticia){

    var outputNoticia = document.getElementById(idDivNoticia);

    var result = "<a class='nolink' target='_blank' href='"+linkPaginaHtml+"'>";
          result += "<div class='notice-block' style='border: 1px solid #1A76D1;padding: 4px;'>";
             result +=  "<div class='notice-title'> "+tituloDaNoticia+"</div>";
             result +=   "<div class='col-12'>";
                result +=   "<div class='row not-dest-condsef'>";
                   result +=   "<div class='col-5 notice-text'>";
                        result +=   " <img class='d-block w-100'";
                          result +=   " src='"+fotoNoticia+"'";
                          result +=    " alt='"+tituloDaNoticia+"'";
                          result +=    " title='"+tituloDaNoticia+"'>";
                    result +=   "</div>";
                       result +=   "<div class='col-7 notice-text' style='color: black;font-size: 13px !important;'>";
                        result +=   corpoTituloDaNoticia;
                       result +=   "</div>";
                result +=   "</div>";
            result +=   "</div>";
        result += "</div>";
    result += "</a>";

    outputNoticia.innerHTML = result;
    
}

function adicionarNoticiasDestaquePrimarias(idDivNoticia,linkPaginaHtml,fotoNoticia,tituloDaNoticia,corpoTituloDaNoticia,active){
    var outputNoticia = document.getElementById(idDivNoticia);

        var result =  "<div class='carousel-caption d-md-block titulo-banner'>";
                            result += "<div class='text' style='font-size: 16px !important'>";
                              result += corpoTituloDaNoticia; 
                            result += "</div>";
                        result += "</div>";
                        result += "<a href='"+linkPaginaHtml+"' target='_blank'>";
                             result += "<div class='carousel-caption carousel-caption-alerta d-md-block text-left'>";
                                 result += "<div class='text-alerta'> "+tituloDaNoticia+" </div>";
                             result += "</div>";
                               result += "<img class='d-block w-100 banner-img'";
                                  result += "src='"+fotoNoticia+"'";
                                  result += "alt='"+corpoTituloDaNoticia+"'";
                                  result += "title='"+corpoTituloDaNoticia+"'>";
                        result += "</a>";
            result += "<div class='carousel-caption-2 d-md-block text-right'>Foto: "+tituloDaNoticia+"</div>";
     
    outputNoticia.innerHTML = result;
}
