//Forma numero 1 de exportar usando export en cada funcion

// export const sum = (v1,v2)=> v1+v2;

// export const res = (v1,v2)=> v1-v2;

// export const mult = (v1,v2)=> v1*v2;

// export const div = (v1,v2)=>{
//     if(v2 == 0)
//         return "Operacion no valida";
//     else
//     return v1/v2;
// }


//Forma numero 2 de exportar usando export al final con el nombre de las funciones
// const sum = (v1,v2)=> v1+v2;

// const res = (v1,v2)=> v1-v2;

// const mult = (v1,v2)=> v1*v2;

// const div = (v1,v2)=>{
//     if(v2 == 0)
//         return "Operacion no valida";
//     else
//     return v1/v2;
// }

// const valida = ()=>"Validacion"

// export {sum, res, mult, div}


//Forma numero 3 de exportar usando export al final con el nombre de las funciones con alias

const sum = (v1,v2)=> v1+v2;

const res = (v1,v2)=> v1-v2;

const mult = (v1,v2)=> v1*v2;

const div = (v1,v2)=>{
    if(v2 == 0)
        return "Operacion no valida";
    else
    return v1/v2;
}

const valida = ()=>"Validacion"

export {sum as suma, res as resta, mult as multiplicacion, div as division}