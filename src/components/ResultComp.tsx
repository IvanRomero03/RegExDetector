export interface Props {
  text: string;
  binary: boolean;
  comments: boolean;
  identifiers: boolean;
}

const ResultComp: React.FC<Props> = ({
  text,
  binary,
  comments,
  identifiers,
}) => {
  // parse the text to highlight the regex words
  // create a <p> comp for the text and the <p class="bg-{color}-200 border-{color}-400"> for the regex words
  // return the <p> comp
  const parseText = (text: string) => {
    let newText = text;
    if (binary) {
      newText = newText.replace(
        /([01])+B/g,
        (match) => `<p class="bg-blue-200 border-blue-400">${match}</p>`
      );
    }
    if (comments) {
      newText = newText.replace(
        /\/\*.*\*\//g,
        (match) => `<p class="bg-green-200 border-green-400">${match}</p>`
      );
    }
    if (identifiers) {
      newText = newText.replace(
        /((b|c)a(c|d)a)+#/g,
        (match) => `<p class="bg-purple-200 border-purple-400">${match}</p>`
      );
    }
    return newText;
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center align-middle space-y-2">
        <h3 className="text-2xl font-bold text-center mt-16">Resultado:</h3>
        <div className="flex justify-center space-x-2">
          <h3 className="flex flex-wrap text-2xl font-bold text-center">
            <p>
              <div dangerouslySetInnerHTML={{ __html: parseText(text) }}></div>
            </p>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ResultComp;
