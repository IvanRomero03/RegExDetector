import { useState } from "react";
import ResultComp from "./ResultComp";
import type { Props as ResultProps } from "./ResultComp";

const Content = () => {
  const [binarioSelected, setBinarioSelected] = useState(true);
  const [comentariosSelected, setComentariosSelected] = useState(true);
  const [identificadoresSelected, setIdentificadoresSelected] = useState(true);

  const [extraSelected, setExtraSelected] = useState(false);
  const [extraRegex, setExtraRegex] = useState("");

  const [text, setText] = useState("");

  const [results, setResults] = useState<ResultProps[]>([]);

  const handleEvaluate = () => {
    const newRes = {
      text,
      binary: binarioSelected,
      comments: comentariosSelected,
      identifiers: identificadoresSelected,
    };
    setResults([newRes, ...results]);
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-4">
        Detector de Expresiones Regulares
      </h1>
      <h4 className="text-2xl font-bold text-center">
        Ivan Alberto Romero Wells <b>A00833623</b>
      </h4>
      <h3 className="text-2xl font-bold text-center mt-16">Modo de uso:</h3>
      <div className="flex max-w-4xl justify-center">
        <div className="text-justify">
          <p className="text-lg font-bold">
            1. Ingrese el texto{" "}
            <p className="text-sm text-gray-600">
              (El area de texto se puede expandir en la esquina inferior
              izquierda)
            </p>
          </p>
          <p className="text-lg font-bold">
            2. Seleccione o Agregue las expresiones regulares a evaluar
          </p>
          <p className="text-lg font-bold">3. Presione el botón "Evaluar"</p>
        </div>
      </div>

      <div className="flex justify-center">
        <textarea
          className="w-2/3 border-2 border-gray-300 p-4 rounded-lg mt-4 self-center"
          placeholder="Ingrese el texto a evaluar"
          id="text"
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <h3 className="text-2xl font-bold text-center mt-16">
        Expresiones Regulares:
      </h3>
      <div className="flex justify-center align-middle space-x-2">
        {/* Expresiones Binarias 
            Color Azul
            (1|0)*B
        */}
        <div
          className="flex mt-4 border-blue-700 border-2 rounded-lg bg-blue-500 hover:border-blue-400 hover:bg-blue-300"
          onClick={() => setBinarioSelected(!binarioSelected)}
        >
          <input
            type="checkbox"
            className="m-2"
            id="binarias"
            checked={binarioSelected}
          />
          <h3 className="text-2xl font-bold text-center">Binarias (1|0)*B</h3>
        </div>
        {/* Comentarios
            Color Verde
            \/\*.*\*\/
        */}
        <div
          className="flex mt-4 border-green-700 border-2 rounded-lg bg-green-500 hover:border-green-400 hover:bg-green-300"
          onClick={() => setComentariosSelected(!comentariosSelected)}
        >
          <input
            type="checkbox"
            className="m-2"
            id="comentarios"
            checked={comentariosSelected}
            onChange={() => setComentariosSelected(!comentariosSelected)}
          />
          <h3 className="text-2xl font-bold text-center">
            Comentarios /\*.*\*\/
          </h3>
        </div>
        {/* Identificadores abecedarios
            Color Violeta
            ((b|c)a(c|d)a)+ #
        */}
        <div
          className="flex mt-4 border-purple-700 border-2 rounded-lg bg-purple-500 hover:border-purple-400 hover:bg-purple-300"
          onClick={() => setIdentificadoresSelected(!identificadoresSelected)}
        >
          <input
            type="checkbox"
            className="m-2"
            id="identificadores"
            checked={identificadoresSelected}
          />
          <h3 className="text-2xl font-bold text-center">
            Identificadores abecedarios ((b|c)a(c|d)a)+ #
          </h3>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-2/3 mt-4" id="regexes"></div>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleEvaluate}
        >
          Evaluar
        </button>
      </div>
      <div className="flex justify-center">
        <div className="w-2/3 mt-4" id="results">
          {results.map((result, index) => (
            <ResultComp key={index} {...result} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Content;
