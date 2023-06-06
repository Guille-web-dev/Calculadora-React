import { useState } from "react";
function useCalculator() {
  //ESTADO DONDE SE GUARDA EL RESULTADO DE LAS OPERACIONES
  const [result, setResult] = useState("");

  //FUNCION HANDLE CLICK PARA LOS BOTONES
  const handleClick = (e) => {
    setResult(result.concat(e.target.innerText));
  };

  //FUNCION HANDLE CLEAR PARA LIMPIAR EL INPUT 1 A 1
  const handleClear = () => {
    setResult("");
  };

  //FUNCION PARA BOTON C
  const buttonC = () => {
    setResult((result) => result.slice(0, result.length - 1));
  };

  //FUNCION PARA CALCULAR EL RESULTADO DE UNA OPERACION
  const calculateResult = () => {
    try {
      setResult((eval(result).toString()));
    } catch {
      (error) => console.log(error);
    }
  };

  // FUNCION PARA INGRESAR VALORES A TRAVEZ DEL INPUT DESDE TECLADO
  const handleChange = (e) => {
    setResult(e.target.value);
  };

  // FUNCION PARA VALIDAR LOS DATOS DE ENTRADA EN EL INPUT 
  const handleOnKeyDown = (e) => {
    const key = e.keyCode || e.which 
    if ((key >= 65 && key <= 90) || (key >= 112 && key <= 122)) {
      e.preventDefault();
    }
  };
  return {
    result,
    handleClick,
    handleClear,
    buttonC,
    calculateResult,
    handleChange,
    handleOnKeyDown
  };
}
export default useCalculator;
