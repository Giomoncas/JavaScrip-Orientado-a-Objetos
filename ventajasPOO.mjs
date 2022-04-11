//Forma de crear estudiantes con objetos literales demasiado largos

const juan1 = //Se crea un objeto literal 
{
    name: "Juan",
    username: "juanito",
    points : 100,
    socialMedia : //Los atributos del objeto tambien pueden tener objetos
    {
        twitter: "@juanito",
        instagram: "@juanito23",
        facebook: undefined
    },
    approvedCourses:  //Un atributo que contiene un array
    [
        "Curso Definitivo de CSS y HTML",
        "Curso Practico de CSS y HTML"
    ],
    learninPaths:  //Un array de Objetos
    [
        {
            name: "Escuela de Desarrollo Web",
            courses: 
            [
                "Curso Definitivo de CSS y HTML",
                "Curso Practico de CSS y HTML",
                "Curso de JavaScript"
            ]
        },

        {
            name: "Escuela de Videojuegos",
            courses: 
            [
                "Curso Introduccion a Videojuegos",
                "Curso de Unreal Engine",
                "Curso de Unity 3D"
            ],
        },
    ],
};

const miguel1 = //Se crea un objeto literal 
{
    name: "Miguel",
    username: "jmiguelito",
    points : 1000,
    socialMedia : //Los atributos del objeto tambien pueden tener objetos
    {
        twitter: "@miguelito123",
        instagram: "@micho",
        facebook: undefined
    },
    approvedCourses:  //Un atributo que contiene un array
    [
        "Curso Data Bussiness",
        "Curso Data Science"
    ],
    learninPaths:  //Un array de Objetos
    [
        {
            name: "Escuela de Desarrollo Web",
            courses: 
            [
                "Curso Definitivo de CSS y HTML",
                "Curso Practico de CSS y HTML",
                "Curso de JavaScript"
            ]
        },

        {
            name: "Escuela de Data Science",
            courses: 
            [
                "Curso Data Bussinness",
                "Curso Data Viz",
                "Curso de Tableau"
            ],
        },
    ],
};

//Vamos a transformar los objetos literales en objetos de clase

function videoPlay(id)
{
    const urlSecreta = "https://ultrasecreto.com/" + id;
    console.log("Se esta reproduciendo desde la URL" + urlSecreta);
}

function videoStop(id)
{
    const urlSecreta = "https://ultrasecreto.com/" + id;
    console.log("Pausamos la url " + urlSecreta);
}

export class PlatziClass
{
  constructor({
    name,
    videoID,  
    }) 
    {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir()
    {
       videoPlay(this.videoID);
    }

    pausar()
    {
      videoStop(this.videoID);
    }
}





class Course {  //Creamos la clase cursos
    constructor({
      name,
      classes = [],
    }) {
      this._name = name;  //Se crea un atributo privado
      this.classes = classes;
    }

    //Creamos nuestro primer getter
    get name() //Convertimos nuestro atributo en un metodo getter
    {
        return this._name;  //Retornamos el valor del atributo
    }

    //Creamos nuestro primer setter
    set name(nuevoNombre)
    {
        if(nuevoNombre === "Curso Malo de Programacion"){ //Condicional que valida la informacion antes de asignarla
            console.error("No se puede cambiar el nombre de este curso");
        }  
        else
        {
            this._name = nuevoNombre;  //Cambiamos el valor del atributo
        }        
    }
  }
  
  const cursoProgBasica = new Course({  //Acá creamos la instancia de la clase cursos
    name: "Curso Gratis de Programación Básica",
  });
  const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",  //Esto permite que el código solo se modifique aca y no en cada instancia de objeto
  });
  const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
  });

  const cursoDataBussinnes = new Course({
    name: "Curso Data Bussiness",
  });

  const cursoDataViz = new Course({
    name: "Curso Data Viz",
  });

  const cursoUnity3D = new Course({
    name: "Curso Unity 3D",
  });

  const cursoUnrealEngine = new Course({
    name: "Curso Unreal Engine",
  });
  
  
  class LearningPath {
    constructor({  //Se definen los atributos de esta clase
      name,
      courses = [],
    }) {
      this.name = name;
      this.courses = courses;
    }
  }
  
  const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
      cursoProgBasica,
      cursoDefinitivoHTML,
      cursoPracticoHTML,
    ],
  });
  
  const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
      cursoProgBasica,
      cursoDataBussinnes,
      cursoDataViz,
    ],
  });
  
  const escuelaVgs = new LearningPath({
    name: "Escuela de Videojuegos",
    courses: [
      cursoProgBasica,
      cursoUnity3D,
      cursoUnrealEngine,
    ],
  })
  
  class Student4 {
    constructor({
      name,
      email,
      username,
      twitter = undefined,
      instagram = undefined,
      facebook = undefined,
      approvedCourses = [],
      learningPaths = [],
    }) {
      this.name = name;
      this.email = email;
      this.username = username;
      this.socialMedia = {
        twitter,
        instagram,
        facebook,
      };
      this.approvedCourses = approvedCourses;
      this.learningPaths = learningPaths;
    }
  }
  
  const juan2 = new Student4({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
      escuelaWeb,
      escuelaVgs,
    ],
  });
  
  const miguelito2 = new Student4({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [
      escuelaWeb,
      escuelaData,
    ],
  });

