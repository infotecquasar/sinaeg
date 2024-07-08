function carregarFooter(){

    var outputFooter = document.getElementById('idFooter');

    var result = "<footer id='footer' tabindex='5' class='footer '>";
            result += "<div class='footer-top'>";
                result += "<div class='container'>";
                  result +=  "<div class='row'>";				
                        result +=  "<div class='col-lg-6 col-md-12 col-12'>";
                              result += "<div class='single-footer'>";
                                result +=  "<h2>CSPB/SINAEG <br />";
                                       result +=  " SCS, Quadra 01, Bloco K, Ed. Denasa <br />";
                                       result +=  "1 andar, DF, 70398-900</h2>";
                                       result +=  "<div id='map' style='height: 400px;'></div>";
                            result +=  "</div>";
                         result +=  "</div>";					
                        result +=  "</div>";
                    result +=  "</div>";
                  result += "</div>";		
                  result += "<div class='copyright'>";
                    result += "<div class='container'>";
                      result += "<div class='row'>";
                           result += "<div class='col-lg-12 col-md-12 col-12'>";
                                result += "<div class='copyright-content'>";
                                    result += "<p>© Copyright 2024 | All Rights Reserved by <a href='http://sinaeg.org.br'";
                                           result += "target='_blank'>sinaeg</a> </p>";
                                result += "</div>";
                           result += "</div>";
                       result += "</div>";
                    result += "</div>";
            result += "</div>";
        result += "</footer>";

    outputFooter.innerHTML = result;
}