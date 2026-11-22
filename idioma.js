
// ==========================================
// DICCIONARIO DE TRADUCCIONES
// ==========================================

const traducciones = {

    // ======================================
    // ESPAÑOL
    // ======================================

    es: {

        // Navegación
        navInicio: "Inicio",
        navSobreMi: "Sobre mí",
        navProyectos: "Proyectos",
        navHabilidades: "Habilidades",
        navContacto: "Contacto",
        btnHablemos: "Hablemos",

        // Inicio
        hola: "HOLA, SOY",
        rolEstudiante: "ESTUDIANTE",
        rolInteres: "Interesado en la Programación",

        descripcion: "Soy una persona interesada en la tecnología, la programación y la innovación. Me gusta aprender cosas nuevas, desarrollar nuevas ideas y enfrentar desafíos que contribuyan a mi crecimiento personal y profesional.",

        btnExplorar: "Explorar proyectos",
        btnConoceme: "Conóceme más",

        // Sobre mí
        tituloSobreMi: "SOBRE MÍ",

        sobreTituloNormal: "Un poco sobre",
        sobreTituloAzul: "mí.",

        descripcionSobreMi: "Actualmente estoy explorando el mundo de la informática y la programación. Me interesa aprender nuevas tecnologías, desarrollar proyectos y descubrir nuevas oportunidades para mi futuro profesional.",

        btnConocer: "Conocer más",

        // Tarjetas
        tarjetaProgramacion: "Programación",
        descProgramacion: "Desarrollando ideas mediante código.",

        tarjetaAutomoviles: "Automóviles",
        descAutomoviles: "Interés por la tecnología automotriz.",

        tarjetaEducacion: "Educación",
        descEducacion: "Aprendiendo y mejorando constantemente.",

        tarjetaCiberseguridad: "Ciberseguridad",
        descCiberseguridad: "Explorando el mundo de la seguridad digital.",

        // Proyectos
        tituloTrabajo: "MI TRABAJO",

        proyectosTituloNormal: "Mis",
        proyectosTituloAzul: "proyectos.",

        descripcionProyectos: "Algunos de los proyectos y trabajos que representan mi aprendizaje y creatividad.",

        descripcionSmartDriver: "Plataforma digital enfocada en el mundo automotriz, que integra recursos y herramientas para los conductores.",

        // Contacto
        tituloContacto: "CONTACTO",

        contactoTituloNormal: "Construyamos algo",
        contactoTituloAzul: "increíble.",

        descripcionContacto: "Siempre estoy abierto a aprender, compartir ideas y conocer nuevas oportunidades.",

        btnContactame: "Contáctame",

        // Footer
        footerTexto: "© 2026 Lucas Lucia. Todos los derechos reservados."
    },


    // ======================================
    // INGLÉS
    // ======================================

    en: {

        // Navigation
        navInicio: "Home",
        navSobreMi: "About Me",
        navProyectos: "Projects",
        navHabilidades: "Skills",
        navContacto: "Contact",
        btnHablemos: "Let's Talk",

        // Home
        hola: "HI, I'M",
        rolEstudiante: "STUDENT",
        rolInteres: "Interested in Programming",

        descripcion: "I am interested in technology, programming and innovation. I enjoy learning new things, developing new ideas and facing challenges that contribute to my personal and professional growth.",

        btnExplorar: "Explore Projects",
        btnConoceme: "Get to Know Me",

        // About Me
        tituloSobreMi: "ABOUT ME",

        sobreTituloNormal: "A little bit about",
        sobreTituloAzul: "me.",

        descripcionSobreMi: "I am currently exploring the world of computer science and programming. I am interested in learning new technologies, developing projects and discovering new opportunities for my professional future.",

        btnConocer: "Learn More",

        // Cards
        tarjetaProgramacion: "Programming",
        descProgramacion: "Developing ideas through code.",

        tarjetaAutomoviles: "Automobiles",
        descAutomoviles: "Interested in automotive technology.",

        tarjetaEducacion: "Education",
        descEducacion: "Always learning and improving.",

        tarjetaCiberseguridad: "Cybersecurity",
        descCiberseguridad: "Exploring the world of digital security.",

        // Projects
        tituloTrabajo: "MY WORK",

        proyectosTituloNormal: "My",
        proyectosTituloAzul: "projects.",

        descripcionProyectos: "Some of the projects and work that represent my learning and creativity.",

        descripcionSmartDriver: "A digital platform focused on the automotive world, integrating resources and tools for drivers.",

        // Contact
        tituloContacto: "CONTACT",

        contactoTituloNormal: "Let's build something",
        contactoTituloAzul: "amazing.",

        descripcionContacto: "I am always open to learning, sharing ideas and discovering new opportunities.",

        btnContactame: "Contact Me",

        // Footer
        footerTexto: "© 2026 Lucas Lucia. All rights reserved."
    }

};


// ==========================================
// FUNCIÓN PARA CAMBIAR EL IDIOMA
// ==========================================

function cambiarIdioma(idioma) {

    const textos = traducciones[idioma];

    if (!textos) {
        console.error("Idioma no disponible:", idioma);
        return;
    }

    // Traducir todos los elementos
    Object.keys(textos).forEach(id => {

        const elemento = document.getElementById(id);

        if (elemento) {
            elemento.textContent = textos[id];
        } else {
            console.warn("No se encontró el elemento:", id);
        }

    });

    // Actualizar idioma del documento
    document.documentElement.lang = idioma;

    // Guardar idioma seleccionado
    localStorage.setItem("idiomaPortafolio", idioma);

}


// ==========================================
// EVENTOS DE LOS BOTONES
// ==========================================

document.getElementById("idiomaBtnEs").addEventListener("click", () => {
    cambiarIdioma("es");
});

document.getElementById("idiomaBtnEN").addEventListener("click", () => {
    cambiarIdioma("en");
});


// ==========================================
// CARGAR IDIOMA GUARDADO
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const idiomaGuardado = localStorage.getItem("idiomaPortafolio") || "es";

    cambiarIdioma(idiomaGuardado);

});
