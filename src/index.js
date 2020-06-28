const homePage = require ('./homePage')
const contacto = require ('./contacto')
const enCartelera = require ('./enCartelera')
const masVotadas = require ('./masVotadas')
const preguntasFrecuentes = require ('./preguntasFrecuentes')
const sucursales = require ('./sucursales')

let index = {
    homePage:function(res){
        res.write(homePage.titulo)
        res.write('\n\n')
        res.write('------------------------------------------------------')
        res.write('\n')
        res.write('Total de peliculas disponibles: ' + homePage.cantidad())
        res.write('\n')
        res.write('------------------------------------------------------')
        res.write('\n')
        let pelis = homePage.listarPelis();
        for(peli of pelis){
        res.write(peli)
        res.write('\n')
        }
        res.write('\n')
        res.write('Recorda que podes visitar las siguientes secciones: ')
        res.write('\n') 
        res.end(homePage.seccionesDH.join("\n"))    
    }, 
    enCartelera:function(res){
        res.write('---')
        res.write(enCartelera.titulo)
        res.write('---')
        res.write('\n\n')
        res.write(`Total de Peliculas en Cartelera: ${enCartelera.cantidad()}`)
        res.write('\n\n')
        res.write('Estas son las peliculas que tenemos para vos: ')
        res.write('\n\n')
        let peliculas = enCartelera.listarPelis();
        for(pelicula of peliculas){
            res.write('Titulo: ' + pelicula.title)
            res.write('\n')
            res.write('Reseña: ' + pelicula.overview)
            res.write('\n\n')
            }       
        res.end()
    },
    masVotadas:function(res){
        res.end()
    },
    sucursales:function(res){
        res.write('--------------'+'\n')
        res.write(sucursales.titulo)
        res.write('\n'+'--------------')
        res.write('\n\n')
        res.write('Total de salas disponibles: ' + sucursales.cantidad())
        res.write('\n\n')
        let cines = sucursales.listadoSucursales()
        for(cine of cines){
            res.write('--------------'+'\n'+'Sala: '+ cine.name+'\n'+'--------------')
            res.write('\n')
            res.write('Donde nos encontramos: '+cine.address+'\n')
            res.write('\n')
            res.write('Acerca de: '+cine.description +'\n')
            res.write('\n')
        }
        res.end()    
    },
    contacto:function(res){
        res.write(contacto.titulo)
        res.write('\n\n')
        res.write(contacto.Contenido)
        res.end()
    },
    preguntasFrecuentes:function(res){
        res.write('---')
        res.write(preguntasFrecuentes.titulo)
        res.write('---')
        res.write('\n\n')
        res.write(`Total de Preguntas: ${preguntasFrecuentes.cantidad()}`)
        res.write('\n\n')
        res.write('Listado de preguntas disponibles:')
        res.write('\n\n')
        let preguntas =preguntasFrecuentes.listarFaqs()
        for(pregunta of preguntas){
            res.write('Pregunta: ' + pregunta.faq_title)
            res.write('\n\n')
            res.write('Respuesta: ' + pregunta.faq_answer)
            res.write('\n\n')
        }
        res.end()
    }
}

module.exports = index