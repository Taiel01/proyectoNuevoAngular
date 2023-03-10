import { profesor } from "./profesor";

export interface Curso{
    id: string;
    nombre: string;
    comision: string;
    profesor: profesor;
    inscripcionAbierta: boolean;
}