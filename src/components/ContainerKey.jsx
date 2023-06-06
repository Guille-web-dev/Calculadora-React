import useCalculator from "../../hooks/useCalculator";

function ContainerKey() {
  const {
    handleClick,
    handleClear,
    buttonC,
    result,
    calculateResult,
    handleChange,
    handleOnKeyDown,
  } = useCalculator();

  return (
    <>
      <div className="containerInput-result">
        <input
          className="input-result"
          type="text"
          value={result}
          onChange={handleChange}
          onKeyDown={handleOnKeyDown}
        />
      </div>
      <div className="key-containerKey">
        <button className="key button-clear" onClick={handleClear}>
          Clear
        </button>
        <button className="key highLight" onClick={buttonC}>
          C
        </button>
        <button className="key highLight" onClick={handleClick}>
          /
        </button>
        <button className="key" onClick={handleClick}>
          1
        </button>
        <button className="key" onClick={handleClick}>
          2
        </button>
        <button className="key" onClick={handleClick}>
          3
        </button>
        <button className="key highLight" onClick={handleClick}>
          *
        </button>
        <button className="key" onClick={handleClick}>
          4
        </button>
        <button className="key" onClick={handleClick}>
          5
        </button>
        <button className="key" onClick={handleClick}>
          6
        </button>
        <button className="key highLight" onClick={handleClick}>
          -
        </button>
        <button className="key" onClick={handleClick}>
          7
        </button>
        <button className="key" onClick={handleClick}>
          8
        </button>
        <button className="key" onClick={handleClick}>
          9
        </button>
        <button className="key highLight" onClick={handleClick}>
          +
        </button>
        <button className="key" onClick={handleClick}>
          0
        </button>
        <button className="key highLight" onClick={handleClick}>
          .
        </button>
        <button className="key buttonResult" onClick={calculateResult}>
          =
        </button>
      </div>
    </>
  );
}

export default ContainerKey;
