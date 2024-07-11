const noticias = [
    {
       "linkPaginaHtml": "noticias18.html",
       "fotoNoticia" :	"img/noticias/noticias18/fotos1.jpg",
       "tituloDaNoticia":	"10.07.2024 SINAEG e SPU-MGI Realizam Reunião",
       "corpoTituloDaNoticia" :"📢 Notícia | SINAEG e SPU-MGI Realizam Reunião para Fortalecer Parceria e Valorizar Servidores da ERCE"
    },
    {
        "linkPaginaHtml": "noticias17.html",
        "fotoNoticia" :	"img/noticias/fotos2/fotos17.jpg",
        "tituloDaNoticia":	"04.07.2024 - Novo Acordo com Governo",
        "corpoTituloDaNoticia" :" 📢 Notícia | SINAEG Assina Novo Acordo com Governo: Um Passo nas Negociações"
    },
    {
        "linkPaginaHtml": "noticias16.html",
        "fotoNoticia" : "img/noticias/fotos2/fotos16.jpg",
        "tituloDaNoticia" : "03.07.2024 - Reposição Salarial Assinada!",
        "corpoTituloDaNoticia" : "📢 Notícia | Vitória dos Servidores da ERCE: Reposição Salarial Assinada!⭐"
    },
    {
        "linkPaginaHtml": "noticias15.html",
        "fotoNoticia" : "img/noticias/fotos2/fotos15.jpg",
        "tituloDaNoticia" : "19.06.2024 - Avanços nas Negociações Salariais!",
        "corpoTituloDaNoticia" : "📢 *ATENÇÃO, Avanços nas Negociações Salariais: Atualização sobre a Reunião com o Governo*"
    },
    {
        "linkPaginaHtml": "noticias14.html",
        "fotoNoticia" : "img/noticias/fotos2/fotos13.jpg",
        "tituloDaNoticia" : "25.06.2024 - Reforma Tributária na Câmara dos Deputados",
        "corpoTituloDaNoticia" : "Direito dos Trabalhadores em Discussão sobre Reforma Tributária na Câmara dos Deputados"
    },
    {
        "linkPaginaHtml": "noticias13.html",
        "fotoNoticia" : "img/noticias/fotos2/fotos12.jpg",
        "tituloDaNoticia" : "21.06.2024 - 📢 *ATENÇÃO, SINAEG e CONDSEF",
        "corpoTituloDaNoticia" : "SINAEG e CONDSEF protocolam Complementação de Informações Técnicas na SRT/MGI"
    }
    ,
    {
        "linkPaginaHtml": "noticias12.html",
        "fotoNoticia" : "img/noticias/fotos2/fotos11.jpg",
        "tituloDaNoticia" : "19/06/2024 - Reunião com o Governo",
        "corpoTituloDaNoticia" : "📢 *ATENÇÃO, Avanços nas Negociações Salariais: Atualização sobre a Reunião com o Governo*"
    }
];




document.addEventListener('DOMContentLoaded', function() {
   
    carregarNoticiasIndex();
          
});

function carregarNoticiasIndex(){
    const divNoticiasIndex = document.getElementById('divNoticiasIndex');
  
    const seisPrimeirasNoticias = noticias.slice(0, 6);

           var result = "<div class='row'>";           
                result += "<div class='col-xl-8 p-xl-1'>";                  
                    result += "<div id='myslide' class='carousel slide' data-ride='carousel'>";                 
                        result += "<ol class='carousel-indicators'>";
                            result += "<li data-target='#myslide' data-slide-to='0' class=' active'></li>";
                            result += "<li data-target='#myslide' data-slide-to='1' class=''></li>";
                            result += "<li data-target='#myslide' data-slide-to='2' class=''></li>";
                        result += "</ol>";                       
                        result += "<div class='carousel-inner'>";                                              
                        seisPrimeirasNoticias.forEach((noticia,index) => {                            
                            if(index >= 0 && index <=2 ){
                                let linkPaginaHtml = `${noticia.linkPaginaHtml}`;
                                let fotoNoticia = `${noticia.fotoNoticia}`;
                                let tituloDaNoticia = `${noticia.tituloDaNoticia}`;
                                let corpoTituloDaNoticia = `${noticia.corpoTituloDaNoticia}`;
                                let active = index === 0 ? 'active' : '';
                                result += "<div class='carousel-item  "+active+"'>";					
                                    result += "<div id='idNoticiaPrimaria"+index+"'></div>";							                                   
                                    result +=  "<div class='carousel-caption d-md-block titulo-banner'>";
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
                                result += "</div>"; 
                            }
                        });
                        result += "</div>";
                    result += "</div>";
                result += "</div>";
                
              
                result += "<div class='col-xl-4 p-xl-1 notices'>";
                    seisPrimeirasNoticias.forEach((noticia,index) => {    
                        if(index > 2) {
                            let linkPaginaHtml = `${noticia.linkPaginaHtml}`;
                            let fotoNoticia = `${noticia.fotoNoticia}`;
                            let tituloDaNoticia = `${noticia.tituloDaNoticia}`;
                            let corpoTituloDaNoticia = `${noticia.corpoTituloDaNoticia}`;
                            let active = index === 0 ? 'active' : '';
                            
                            result += "<div id='idNoticiaSecundaria"+index+"'></div>";
                            	
                            

                            result += "<a class='nolink' target='_blank' href='"+linkPaginaHtml+"'>";
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

                            
                        }
                    });
                    result += "<a href='noticias.html' class='nolink text-right' target='_blank'>";
                        result += "<div class='custom-red-button banner-botton'>MAIS NOTÍCIAS</div>";
                    result += "</a>";
                result += "</div>";
                
            result += "</div>";
        
            divNoticiasIndex.innerHTML = result;
                
}

