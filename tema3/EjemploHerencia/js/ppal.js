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

    // GETTERS
    get nombre() {
        return this.#nombre;
    }
    get apellido1() {
        return this.#apellido1;
    }
    get apellido2() {
        return this.#apellido2;
    }
    get edad() {
        return this.#edad;
    }
    get nif() {
        return this.#nif;
    }

    // SETTERS
    set nombre(nombre) {
        this.#nombre = nombre;
    }
    set apellido1(apellido1) {
        this.#apellido1 = apellido1;
    }
    set apellido2(apellido2) {
        this.#apellido2 = apellido2;
    }
    set edad(edad) {
        this.#edad = edad;
    }
    set nif(nif) {
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

    // GETTERS
    get numAfilSS() {
        return this.#numAfilSS;
    }
    get sueldoBruto() {
        return this.#sueldoBruto;
    }
    get turno() {
        return this.#turno;
    }
    get centroEducativo() {
        return this.#centroEducativo;
    }
    get fechaInicio() {
        return this.#fechaInicio;
    }

    // SETTERS
    set numAfilSS(numAfilSS) {
        this.#numAfilSS = numAfilSS;
    }
    set sueldoBruto(sueldoBruto) {
        this.#sueldoBruto = sueldoBruto;
    }
    set turno(turno) {
        this.#turno = turno;
    }
    set centroEducativo(centroEducativo) {
        this.#centroEducativo = centroEducativo;
    }
    set fechaInicio(fechaInicio) {
        if(new Date(fechaInicio)) {
            this.#fechaInicio = fechaInicio;
        } else {
            console.log('ERROR: La fecha no cumple el formato.');
        }
    }
    
    calculaSueldoNeto() {
        let irpf = 0;
        if(this.#sueldoBruto <= 12450) {
            irpf = 19;
        } else if(this.#sueldoBruto > 12450 && this.sueldoBruto <= 20200) {
            irpf = 24;
        } else if(this.#sueldoBruto > 20200 && this.sueldoBruto <= 35200) {
            irpf = 30;
        } else if(this.#sueldoBruto > 35200 && this.sueldoBruto <= 60000) {
            irpf = 37;
        } else if(this.#sueldoBruto > 60000 && this.sueldoBruto <= 300000) {
            irpf = 45;
        } else {
            irpf = 47;
        }

        return this.#sueldoBruto * (100-irpf) / 100;
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
    #enumDepartamento = [
        'Informática',
        'Matemáticas',
        'Historia',
        'Lengua',
        'Inglés'
    ];
    #enumCategoria = ['PES', 'PTFP'];
    #enumPuesto = [
        'func_carrera',
        'func_interino',
        'func_practicas'
    ];

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

    // GETTERS    
    get departamento() {
        return this.#departamento;
    }
    get categoria() {
        return this.#categoria;
    }
    get puesto() {
        return this.#puesto;
    }

    // SETTERS
    set departamento(departamento) {
        if(this.#enumDepartamento.includes(departamento)) {
            this.#departamento = departamento;
        } else {
            console.log('ERROR: El departamento no existe.');
        }
    }
    set categoria(categoria) {
        if(this.#enumCategoria.includes(categoria)) {
            this.#categoria = categoria;
        } else {
            console.log('ERROR: La categoría no existe.');
        }
    }
    set puesto(puesto) {
        if(this.#enumPuesto.includes(puesto)) {
            this.#puesto = puesto;
        } else {
            console.log('ERROR: El puesto no existe.');
        }
    }
        
    getTiempoServicio() {
        const ini = new Date(super.fechaInicio).getTime();
        const fin = new Date().getTime();

        const diff = fin - ini;

        const daysTot = diff / 1000 / 3600 / 24;
        const years = Math.floor(daysTot / 30 / 12);
        const months = Math.floor(daysTot / 30) - (years * 12);
        const days = Math.floor(daysTot) - (years * 12 * 30) - (months * 30);

        return `${years} años, ${months} meses y ${days} días.`;
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

    // GETTERS
    get dependencia() {
        return this.#dependencia;
    }
    get tipoContrato() {
        return this.#tipoContrato;
    }
    get puesto() {
        return this.#puesto;
    }

    // SETTERS
    set dependencia(dependencia) {
        this.#dependencia = dependencia;
    }
    set tipoContrato(tipoContrato) {
        this.#tipoContrato = tipoContrato;
    }
    set puesto(puesto) {
        this.#puesto = puesto;
    }

    imprimeHojaTrabajo() {
        // TODO
    }

    imprimeDatos() {
        return `${super.imprimeDatos()}` +
        `\n\tDependencia: ${this.#dependencia}` +
        `\n\tTipo de contrato: ${this.#tipoContrato}` +
        `\n\tPuesto: ${this-this.#puesto}`;
    }
}