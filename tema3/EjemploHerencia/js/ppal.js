class Persona
{
    #nombre;
    #apellido1;
    #apellido2;
    #edad;
    #nif;

    constructor(nombre, apellido1, apellido2, edad, nif) {
        this.#nombre = nombre;
        this.#apellido1 = apellido1;
        this.#apellido2 = apellido2;
        this.#edad = edad;
        this.#nif = nif;
    }

    cumpleAnios() {
        this.#edad++;
    }

    imprimeDatos() {
        return `${this.#nombre} ${this.#apellido1} ${this.#apellido2} ` +
        `de NIF: ${this.#nif} tiene ${this.#edad} años.`;
    }
}

class Empleado extends Persona
{
    #numAfilSS;
    #sueldoBruto;
    #turno;
    #centroEducativo;
    #fechaInicio;

    constructor(nombre, apellido1, apellido2, edad, nif, numAfilSS, sueldoBruto,
        turno, centroEducativo, fechaInicio) {
            super(nombre, apellido1, apellido2, edad, nif);
            this.#numAfilSS = numAfilSS;
            this.#sueldoBruto = sueldoBruto;
            this.#turno = turno;
            this.#centroEducativo = centroEducativo;
            this.#fechaInicio = fechaInicio;
        }
    
    calculaSueldoNeto() {

    }

    imprimeDatos() {
        return `${super.imprimeDatos()}\n\tNum. afiliado: ${this.#numAfilSS}` +
        `\n\tSueldo bruto: ${this.#sueldoBruto}\n\tTurno: ${this.#turno}` +
        `\n\tCentro educativo: ${this.#centroEducativo}` +
        `\n\tFecha inicio: ${this.#fechaInicio}`;
    }
}

class Docente extends Empleado
{
    enumDepartamento = {
        Informatica: 'Informática',
        Matemáticas: 'Matemáticas',
        Historia: 'Historia',
        Lengua: 'Lengua',
        Ingles: 'Inglés'
    };
    enumCategoría = {
        PES: 'PES',
        PTFP: 'PTFP'
    };
    enumPuesto = {
        func_carrera: 'func_carrera',
        func_interino: 'func_interino',
        func_practicas: 'func_practicas'
    };

    #departamento;
    #categoria;
    #puesto;

    constructor(nombre, apellido1, apellido2, edad, nif, numAfilSS, sueldoBruto,
        turno, centroEducativo, fechaInicio, departamento, categoria, puesto) {
            super(nombre, apellido1, apellido2, edad, nif, numAfilSS,
                sueldoBruto, turno, centroEducativo, fechaInicio);
            this.#departamento = departamento;
            this.#categoria = categoria;
            this.#puesto = puesto;
        }
    
    get departamento() {
        return this.#departamento;
    }
    get categoria() {
        return this.#categoria;
    }
    get puesto() {
        return this.#puesto;
    }
    set departamento(departamento) {
        this.#departamento = departamento;
    }
    set categoria(categoria) {
        this.#categoria = categoria;
    }
    set puesto(puesto) {
        this.#puesto = puesto;
    }
        
    getTiempoServicio() {

    }

    imprimeDatos() {
        return `${super.imprimeDatos()}` +
        `\n\tDepartamento: ${this.#departamento}` +
        `\n\tCategoría: ${this.#categoria}\n\tPuesto: ${this-this.#puesto}`;
    }
}

class Administrativo extends Empleado
{
    #dependencia;
    #tipoContrato;
    #puesto;

    imprimeHojaTrabajo() {

    }

    imprimeDatos() {
        return `${super.imprimeDatos()}` +
        `\n\tDependencia: ${this.#dependencia}` +
        `\n\tTipo de contrato: ${this.#tipoContrato}` +
        `\n\tPuesto: ${this-this.#puesto}`;
    }
}