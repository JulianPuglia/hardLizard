const fs = require('fs');

let preguntasFrecuentes = {
db:'./data/faqs.json',
titulo: "Preguntas Frecuentes ",
leerJSON: function(){
    let faqsJson = fs.readFileSync(this.db,'utf-8');
    let faqs = JSON.parse(faqsJson);
    return faqs
},
cantidad: function() {
    return this.leerJSON().total_faqs
},
listarFaqs: function() {
    let preguntas = this.leerJSON();

    return preguntas.faqs
}
}


    module.exports = preguntasFrecuentes