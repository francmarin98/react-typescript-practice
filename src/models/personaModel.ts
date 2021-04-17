//Interfaces
export interface Persona {
    nombre: string;
    edad: number;
    direccion: Direccion;
}

export interface Direccion {
    pais: string;
    casaNo: number;
}