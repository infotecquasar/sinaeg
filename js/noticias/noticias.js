const noticias = [
    {
       "linkPaginaHtml": "noticias18.html",
       "fotoNoticia" :	"img/noticias/noticias18/fotos1.jpg",
       "tituloDaNoticia":	" - SINAEG e SPU-MGI Realizam Reunião",
       "corpoTituloDaNoticia" :"📢 Notícia | SINAEG e SPU-MGI Realizam Reunião para Fortalecer Parceria e Valorizar Servidores da ERCE",
       "dataNoticia": "10.07.2024"
    },
    {
        "linkPaginaHtml": "noticias17.html",
        "fotoNoticia" :	"img/noticias/fotos2/fotos17.jpg",
        "tituloDaNoticia":	" - Novo Acordo com Governo",
        "corpoTituloDaNoticia" :" 📢 Notícia | SINAEG Assina Novo Acordo com Governo: Um Passo nas Negociações",
        "dataNoticia": "04.07.2024"
    },
    {
        "linkPaginaHtml": "noticias16.html",
        "fotoNoticia" : "img/noticias/fotos2/fotos16.jpg",
        "tituloDaNoticia" : " - Reposição Salarial Assinada!",
        "corpoTituloDaNoticia" : "📢 Notícia | Vitória dos Servidores da ERCE: Reposição Salarial Assinada!⭐",
        "dataNoticia": "03.07.2024"
    },
    {
        "linkPaginaHtml": "noticias15.html",
        "fotoNoticia" : "img/noticias/fotos2/fotos15.jpg",
        "tituloDaNoticia" : " - Avanços nas Negociações Salariais!",
        "corpoTituloDaNoticia" : "📢 *ATENÇÃO, Avanços nas Negociações Salariais: Atualização sobre a Reunião com o Governo*",
        "dataNoticia": "19.06.2024"
    },
    {
        "linkPaginaHtml": "noticias14.html",
        "fotoNoticia" : "img/noticias/fotos2/fotos13.jpg",
        "tituloDaNoticia" : " - Reforma Tributária na Câmara",
        "corpoTituloDaNoticia" : "Direito dos Trabalhadores em Discussão sobre Reforma Tributária na Câmara dos Deputados",
        "dataNoticia": "25.06.2024"
    },
    {
        "linkPaginaHtml": "noticias13.html",
        "fotoNoticia" : "img/noticias/fotos2/fotos12.jpg",
        "tituloDaNoticia" : " - 📢 *ATENÇÃO, SINAEG e CONDSEF",
        "corpoTituloDaNoticia" : "SINAEG e CONDSEF protocolam Complementação de Informações Técnicas na SRT/MGI",
        "dataNoticia": "21.06.2024"
    },
    {
        "linkPaginaHtml": "noticias12.html",
        "fotoNoticia" : "img/noticias/fotos2/fotos11.jpg",
        "tituloDaNoticia" : " - Reunião com o Governo",
        "corpoTituloDaNoticia" : "📢 *ATENÇÃO, Avanços nas Negociações Salariais: Atualização sobre a Reunião com o Governo*",
        "dataNoticia":"19.06.2024"
    },
    {
        "linkPaginaHtml": "noticias11.html",
        "fotoNoticia" : "img/noticias/fotos2/fotos14.jpg",
        "tituloDaNoticia" : " - Assembleia Extraordinária do SINAEG",
        "corpoTituloDaNoticia" : "📢 *ATENÇÃO, SERVIDORES DO SINAEG!*,transferência da Assembleia Extraordinária do SINAEG para 19 de Junho*",
        "dataNoticia":"19.06.2024"
    },
    {
        "linkPaginaHtml": "noticias10.html",
        "fotoNoticia" : "img/noticias/noticias10/fotos1.jpg",
        "tituloDaNoticia" : " - Notícia de Última Hora!*",
        "corpoTituloDaNoticia" : "📢 *Notícia de Última Hora!*",
        "dataNoticia":"12.06.2024"
    },
    {
        "linkPaginaHtml": "noticias9.html",
        "fotoNoticia" : "img/noticias/noticias9/fotos1.jpg",
        "tituloDaNoticia" : " - APOIO DA ASSEMAE AO SINAEG",
        "corpoTituloDaNoticia" : "📢 *Proposta de Moção - APOIO DA ASSEMAE AO SINAEG*",
        "dataNoticia":"10.06.2024"
    },
    {
        "linkPaginaHtml": "noticias8.html",
        "fotoNoticia" : "img/noticias/noticias8/fotos1.jpg",
        "tituloDaNoticia" : " - SINAEG REPUDIA DESVALORIZAÇÃO",
        "corpoTituloDaNoticia" : "📢 *ATENÇÃO, SINAEG REPUDIA DESVALORIZAÇÃO DO GOVERNO E ENQUADRAMENTO INJUSTO A SUPORTE ADMINISTRATIVO",
        "dataNoticia":"10.05.2024"
    }
];




document.addEventListener('DOMContentLoaded', function() {
   
    carregarNoticiasIndex();
    carregarNoticias();      
});


function carregarNoticias() {

    const divNoticias = document.getElementById('divNoticias');

    if(divNoticias !== null){
        var result = "<div class='row extra'>";
        noticias.forEach((noticia,index) => { 
        
            result += "<div class='col-12 col-xl-6'>";   
            for(var i = 0 ; i <=1 ; i++){                  
                    if(i === 0 && index % 2 === 0) {
                        result += montarNoticias(noticia,index);
                    } else if(i === 1 && index % 2 !== 0) {
                        result += montarNoticias(noticia,index);
                    }                                                              
                }  
            result += "</div>";
        
        });
        result += "</div>";

        divNoticias.innerHTML = result;
    }

}

function montarNoticias(noticia,index) {
    
    let linkPaginaHtml = `${noticia.linkPaginaHtml}`;
    let fotoNoticia = `${noticia.fotoNoticia}`;
    let tituloDaNoticia = `${noticia.tituloDaNoticia}`;
    let corpoTituloDaNoticia = `${noticia.corpoTituloDaNoticia}`;
    let dataNoticia = `${noticia.dataNoticia}`;
    
    var result = "<div id='idNoticia"+index+"'></div>";                            
    result +=  "<div class='row element'>";						
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

    return result;
}

function carregarNoticiasIndex(){
    const divNoticiasIndex = document.getElementById('divNoticiasIndex');
  
    if(divNoticiasIndex !== null){
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
                                let dataNoticia = `${noticia.dataNoticia}`;
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
                                            result += "<div class='text-alerta'> "+dataNoticia+tituloDaNoticia+" </div>";
                                        result += "</div>";
                                        result += "<img class='d-block w-100 banner-img'";
                                            result += "src='"+fotoNoticia+"'";
                                            result += "alt='"+corpoTituloDaNoticia+"'";
                                            result += "title='"+corpoTituloDaNoticia+"'>";
                                    result += "</a>";
                                    result += "<div class='carousel-caption-2 d-md-block text-right'>Foto: "+dataNoticia+tituloDaNoticia+"</div>";
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
                            let dataNoticia = `${noticia.dataNoticia}`;
                            result += "<div id='idNoticiaSecundaria"+index+"'></div>";
                            	
                            

                            result += "<a class='nolink' target='_blank' href='"+linkPaginaHtml+"'>";
                                result += "<div class='notice-block' style='border: 1px solid #1A76D1;padding: 4px;'>";
                                    result +=  "<div class='notice-title'> "+dataNoticia+tituloDaNoticia+"</div>";
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
}

