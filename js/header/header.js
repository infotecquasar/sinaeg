function carregarHeaderNovo(caminho){
    var outputHeader = document.getElementById('idHeader');

    var result = "<header class='header'>";
         result += "<div style='-webkit-box-shadow: 0px 10px 13px -7px #000000, 10px 17px 20px -9px rgba(59,83,255,0.77); ";
            result += "box-shadow: 0px 10px 13px -7px #000000, 10px 17px 20px -9px rgba(59,83,255,0.77);border-radius: 9px; background-color: #EDF2FF; '>";
            result += "<div class='container-fluid'>";
               result += "<div class='inner'>";
                  result += "<div class='row'>";
                     result += "<div class='col-lg-2 col-md-3 col-12'>";
                         result += "<div class='logo'>";
                            result += " <a href='"+caminho+"index.htm'>";
                               result += " <img src='"+caminho+"img/logo-sinaeg.png' style='width: 100px; height: 80px;' alt='#'>";
                            result += "</a>";
                            result += " &nbsp;&nbsp;&nbsp;";
                              result += "<span style='font-size: 18px; font-weight: bold;'>";
                                    result += "<a href='"+caminho+"index.htm' style='font-weight: bold;'>SINAEG</a>";
                              result += "</span>";
                         result += "</div>";
                                    
                         result += "<div class='mobile-nav'></div>";
                    result += "</div>";

                     result += "<div class='col-lg-10 col-md-9 col-12'>";
                         result += "<div class='main-menu'>";
                             result += "<nav class='navigation'>";
                                 result += "<ul class='nav menu'>";										
                                     result += "<li><a style='cursor: pointer;' href='"+caminho+"index.htm'>Início</a></li>";
                                     result += "<li><a style='cursor: pointer;' href='"+caminho+"institucional.html'>Institucional</a></li>";
                                     result += "<li><a style='cursor: pointer;' href='"+caminho+"noticias.html'>Notícias</a></li>";
                                     result += "<li><a style='cursor: pointer;' href='"+caminho+"legislacao.html'>Legislação</a></li>";
                                     result += "<li><a style='cursor: pointer;' href='"+caminho+"maisInformacoes.html'>Mais Informações</a></li>";                           
                                     result += "<li><a style='cursor: pointer;' href='"+caminho+"publicacoes.html'>Publicações</a></li>";                                    
                                     result += "<li><a href='https://www.facebook.com/sinaegnacional/' title='Página no Facebook' alt='Página no Facebook' target='_blank'><i class='icofont-facebook' style='font-size: 24px;'></i></a></li>";
                                     result += "<li><a href='https://www.instagram.com/sinaeg.sindical/' title='Página no Instagram' alt='Página no Instagram' target='_blank'><i class='icofont-instagram' style='font-size: 24px;'></i></a></li>";
                                     result += "<li><a href='https://www.youtube.com/channel/UCmuFSF4f4tIhCyhUELOwm3g' title='Canal no Youtube' alt='Canal no Youtube' target='_blank'><i class='icofont-youtube' style='font-size: 24px;'></i></a></li>";
                                 result += "</ul>";                                           
                             result += "</nav>";
                          result += "</div>";
                      result += "</div>";
                      result += "<div class='col-lg-12 col-12' style='margin-top: -10px !important; display: flex; justify-content: center; align-items: center'>";
                           result += "<div class='get-quote'>";
                                   result += "<span style='color: black; font-weight: bold;'>Sindicato Nacional dos Arquitetos,";
                                         result += " Economistas, Engenheiros, Estatísticos e Geólogos do Poder Executivo Federal</span>";
                           result += "</div>";
                      result += "</div>";
                  result += "</div>";
                result += "</div>";
            result += "</div>";
        result +="</div>";
    result += "</header>";

    outputHeader.innerHTML = result;
}