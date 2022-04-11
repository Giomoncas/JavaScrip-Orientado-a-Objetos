//Creamos nuestro primer objeto literal

const natalia = 
{
    //Atributos o propiedades
    name : "Natalia",
    age : "24",
    cursosAprobados : [
        "Curso Definitivo de CSS y HTML", 
        "Curso Practico de CSS y HTML"
    ],

    //Métodos o funciones
    aprobarCurso: function()  //Forma de crear metodos por medio de una funcion
    {

    },

    aprobarCurso2(nuevoCurso)
    {
        this.cursosAprobados.push(nuevoCurso);  //La palabra reservada This hace referencia al objeto natalia y agrega un nuevo curso a la lista de cursos aprobados
    }
};

//Hacer que natalia apruebe otro curso

natalia.cursosAprobados.push("Curso Practico de JavaScript");  //Asignar un nuevo curso al arreglo de cursos de Natalia
natalia.name = "Natalia Ramirez"; //Cambiar el nombre de Natalia
natalia.age = 25; //Cambiar la edad de Natalia

//Invocar al metodo del objeto Natalia
natalia.aprobarCurso2("Curso Asincronismo con JavaScript");

//Creamos nuestro primer prototiipo

function Student(name, age, cursosAprobados)
{
    //Atributos o propiedades
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;      
}
//Métodos o funciones   
//Acceder a los metodos del prototipo

Student.prototype.aprobarCurso = function(nuevoCurso)  //Herramienta prototype nos permite acceder al metodo del prototipo desde afuera 
{
    this.cursosAprobados.push(nuevoCurso);  //La palabra reservada This hace referencia al objeto natalia y agrega un nuevo curso a la lista de cursos aprobados
}

//Creamos una instancia del prototipo

const juanita = new Student("Juanita", 30, ["Curso Definitivo de CSS y HTML", "Curso Practico de CSS y HTML"]);  //Creamos una instancia del prototipo con la herramienta New

//Utilizar los metodos del prototipo

juanita.aprobarCurso("Curso Asincronismo con JavaScript"); //Inserta el nuevo curso al final del arreglo de cursos aprobados

// Prototipos comn la sintaxis de Clases
class Student2
{
    constructor(name, age, cursosAprobados) //Metodo constructor, se ejecuta cuando llamemos a los parentesis al crear la instancia de clase
    {
        //Atributos o propiedades de la clase
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    //Métodos o funciones de la clase
    aprobarCurso(nuevoCurso)
    {
        this.cursosAprobados.push(nuevoCurso);
    }
}

const miguel = new Student2("Miguel", 28, ["Ciencia de Datos", "Visualizacion de datos"]);  //Crea un nuevo objeto instancia de la clase
miguel.aprobarCurso("Curso Asincronismo con JavaScript");  //Utiliza el metodo de la clase Student2 para isertar un nuefvo curso en el array de cursos aprobados

// Prototipos con la sintaxis de clases y patron ROR (Recibe objeto y retorna objeto)
class Student3 {

    constructor({  //metodo constructor que recibe como argumentos un objeto
      name,
      cursosAprobados = [],
      age,
      email,
    }) {  //Atributos o propiedades de la clase recibidas de un objeto
      this.name = name;
      this.email = email;
      this.age = age;
      this.cursosAprobados = cursosAprobados;
    }
    
    //Métodos o funciones de la clase
    aprobarCurso(nuevoCursito) {
      this.cursosAprobados.push(nuevoCursito);
    }
  }
  
  const raul = new Student3({  //Crea un nuevo objeto instancia de la clase por medio de otro objeto que ingresa
    name: "Raul",
    age: 45,
    email: "raulito@platzi.com",
  });

