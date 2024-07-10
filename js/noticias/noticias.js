
function adicionarNoticias(idDivNoticia,linkPaginaHtml,fotoNoticia,tituloDaNoticia,corpoTituloDaNoticia,dataNoticia){
   
    var outputNoticia = document.getElementById(idDivNoticia);

    var result =  "<div class='row element'>";						
            result += "<div class='col-auto col-destaques-resp'>";
              result += "<a class='nolink' style='color:#1A76D1;' href='"+linkPaginaHtml+"'>";
                  result += "<img class='img-destaque'";
                     result += "src='"+fotoNoticia+"'";
                     result += "alt='"+corpoTituloDaNoticia+"'";
                     result += "title='"+corpoTituloDaNoticia+"'>";
                       result += "<div class='box-red notice-title  ajusteMobile' style='width: 100% !important;'>";
                       result += tituloDaNoticia
                        result += "</div>";
             result += "</a>";
            result += "</div>";
            result += "<div class='col box-index-noticia'>";
                result += "<a class='nolink' style='color:#1A76D1;' href='"+linkPaginaHtml+"'>";
                         result += "<div class='box-index-noticia-titulo'>";
                                result += corpoTituloDaNoticia;
                         result += "</div>";
                result += "</a>";
                       result += "<div class='element-date green-color'>";
                           result += "<span style='float: left;'>"+dataNoticia+"</span>";
                           result += "<a class='nolink red-color' href='noticias16.html'><span style='float: right;'>Leia mais</span></a>";
                       result += "</div>";
            result += "</div>";							
    result += "</div>";
    result += "<br/>";

    outputNoticia.innerHTML = result;

}