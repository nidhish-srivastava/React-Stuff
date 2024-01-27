import { ChangeEvent, useEffect, useState } from "react";

const Characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()";
function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(4);
  const [string, setString] = useState(Characters);
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [strengthStatus, setStrengthStatus] = useState("");
  const [show, setShow] = useState(false);

  const copyHandler = () => {
    navigator.clipboard.writeText(password);
    alert("Password Copied");
  };

  const generatePassword = () => {
    if (
      !includeLowerCase &&
      !includeSymbols &&
      !includeUpperCase &&
      !includeNumbers
    ) {
      alert("Atleast choose one");
      return; //* if we dont use return,the code below it will run
    }
    let pass = "";
    for (let i = 0; i < length; i++) {
      let indexRandom = Math.floor(Math.random() * string.length);
      pass += string[indexRandom];
    }
    setPassword(pass);
    setShow(true);
  };

  const applyFilters = (): string => {
    let chars = "";
    if (includeUpperCase) chars += Characters.replace(/[^A-Z]/g, ""); //* ^ means ki include it,otherwise it wud exclude it
    if (includeLowerCase) chars += Characters.replace(/[^a-z]/g, "");
    if (includeNumbers) chars += Characters.replace(/[^0-9]/g, "");
    if (includeSymbols) chars += Characters.match(/[!@#$%^&*()]/g)?.join("");
    console.log(chars);
    return chars;
  };

  const handleCheckBox = (e: ChangeEvent<HTMLInputElement>): void => {
    const { checked, name } = e.target;
    switch (name) {
      case "includeUpperCase":
        setIncludeUpperCase(checked);
        break;
      case "includeLowerCase":
        setIncludeLowerCase(checked);
        break;
      case "includeNumbers":
        setIncludeNumbers(checked);
        break;
      case "includeSymbols":
        setIncludeSymbols(checked);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    setString(applyFilters());
  }, [includeLowerCase, includeUpperCase, includeNumbers, includeSymbols]);

  // const getPasswordStrength = () =>{
  //   let strength = 0

  // if(password.length>6) setStrength(5)
  // if(password.length>8) setStrength(7)
  // if(password.length>10) setStrength(10)

  // // Check for uppercase letters
  // if (/[A-Z]/.test(password)) {
  //   strength += 1;
  // }

  // // Check for lowercase letters
  // if (/[a-z]/.test(password)) {
  //   strength += 1;
  // }

  // // Check for numbers
  // if (/[0-9]/.test(password)) {
  //   strength += 1;
  // }

  // // Check for symbols
  // if (/[!@#$%^&*()]/.test(password)) {
  //   strength += 1;
  // }
  //  setStrength(strength)
  // }

  // useEffect(()=>{
  //     getPasswordStrength()
  // },[password])

  useEffect(() => {
    password.length == 1 && setStrengthStatus("Very-Weak");
    password.length == 2 && setStrengthStatus("Weak");
    password.length == 5 && setStrengthStatus("Medium");
    password.length == 7 && setStrengthStatus("Good");
    password.length == 10 && setStrengthStatus("Strong");
  }, [password]);

  return (
    <div className="flex flex-col gap-4 w-2/5 p-8">
      <div>
        <label className="text-3xl font-bold mr-80">{password}</label>
        {show && (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-xl w-fit"
            onClick={copyHandler}
          >
            Copy
          </button>
        )}
      </div>
      <br />
      <h2>Character Length : {length}</h2>
      <input
        type="range"
        min="4"
        max="16"
        value={length}
        onChange={(e) => setLength(+e.target.value)}
      />
      <div className="grid grid-cols-2 gap-4">
        <label htmlFor="">Include UpperCase Letters</label>
        <input
          type="checkbox"
          className="h-4"
          name="includeUpperCase"
          onChange={handleCheckBox}
          checked={includeUpperCase}
        />
        <label htmlFor="">Include Numbers</label>
        <input
          type="checkbox"
          className="h-4"
          name="includeNumbers"
          checked={includeNumbers}
          onChange={handleCheckBox}
        />
        <label htmlFor="">Include Lowercase Letters</label>
        <input
          type="checkbox"
          className="h-4"
          name="includeLowerCase"
          onChange={handleCheckBox}
          checked={includeLowerCase}
        />
        <label htmlFor="">Include Symbols</label>
        <input
          type="checkbox"
          className="h-4"
          name="includeSymbols"
          onChange={handleCheckBox}
          checked={includeSymbols}
        />
      </div>
      <button
        className="rounded-full bg-lime-700 w-fit p-3 text-white m-auto mt-5"
        onClick={generatePassword}
      >
        Generate Password
      </button>
      <h2 className="">
        Strength : <label className="bg-lime-700 p-2 text-white rounded-md">{strengthStatus}</label>
      </h2>
    </div>
  );
}

export default App;
