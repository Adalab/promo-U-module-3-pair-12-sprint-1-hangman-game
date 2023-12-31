import '../styles/App.scss';

import { useState } from 'react';

function App() {
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('flowerpower');
  const [userLetters, setUserLetters] = useState([]);

  const handleButton = (ev) => {
    ev.preventDefault();
    setNumberOfErrors(numberOfErrors + 1);
  };

  const handleInput = (event) => {
    const value = event.target.value;
    const letters = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
    if (value === '' || letters.test(value)) {
      setLastLetter(value);
      setUserLetters([...userLetters, lastLetter]);
      console.log(userLetters);
    } 
  };

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    console.log(wordLetters);
    return wordLetters
    .filter((letter) => userLetters.includes(letter))
    .map((letter, index) => {
      return (<li key={index} className="letter">{letter}</li>);
    });


 // solucion que hemos propuesto para que se nos muestren todos los li (vacios y llenos)
    // const renderSolutionLetters = () => {
    // const wordLetters = word.split('');
    // console.log(wordLetters);
    // if (wordLetters.filter((letter) => userLetters.includes(letter)))
    // {wordLetters.map((letter, index) => {
    //   return (<li key={index} className="letter">{letter}</li>);
    // });} else {wordLetters.map((letter, index) => {
    //   return (<li key={index} className="letter"></li>);
    // });
    // return wordLetters;
    // }

    // return wordLetters.map((eachLetter, index) => {
    // if (wordLetters.includes(lastLetter)){
    //    return <li key={index} className="letter">{eachLetter}</li>
    //   } else {
    //    return <li key={index} className="letter"></li>
    //   }
    // }); 
  };
// Nos quedamos en que hay que introducir la informacion que necesitamos en el array corespondiente. Nos hemos planteado crear diferentes arrays para la diferente informacion que tengamos que printar en pantalla en cada momento. 

  return (
    <div className='page'>
      <header>
        <h1 className='header__title'>Juego del ahorcado</h1>
      </header>
      <main className='main'>
        <section>
          <div className='solution'>
            <h2 className='title'>Solución:</h2>
            <ul className='letters'>
              {renderSolutionLetters()}
            </ul>
          </div>
          <div className='error'>
            <h2 className='title'>Letras falladas:</h2>
            <ul className='letters'>
              <li className='letter'>f</li>
              <li className='letter'>q</li>
              <li className='letter'>h</li>
              <li className='letter'>p</li>
              <li className='letter'>x</li>
            </ul>
          </div>
          <form className='form'>
            <label className='title' htmlFor='last-letter'>
              Escribe una letra:
            </label>
            <input
              autoComplete='off'
              className='form__input'
              maxLength='1'
              type='text'
              name='last-letter'
              id='last-letter'
              value={lastLetter}
              onChange={handleInput}
            />
            <button onClick={handleButton}>Incrementar</button>
          </form>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className='error-13 eye'></span>
          <span className='error-12 eye'></span>
          <span className='error-11 line'></span>
          <span className='error-10 line'></span>
          <span className='error-9 line'></span>
          <span className='error-8 line'></span>
          <span className='error-7 line'></span>
          <span className='error-6 head'></span>
          <span className='error-5 line'></span>
          <span className='error-4 line'></span>
          <span className='error-3 line'></span>
          <span className='error-2 line'></span>
          <span className='error-1 line'></span>
        </section>
      </main>
    </div>
  );
}

export default App;
