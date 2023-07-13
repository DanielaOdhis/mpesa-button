import './App.css';
import wallDecor from './walldecor.jpg';

function App() {

const onSubmit = () => {
  // Send the M-Pesa payment.
};

  return (
    <div className="App">
      <h1>Wall Decor</h1>
      <img src={wallDecor} alt='Wall-Decor'/>
      <p>A great piece for your walls, finishing the look!</p>
      <p>Ksh. 8000</p>
      <button type='submit' onSubmit={onSubmit}>Buy Now</button>
    </div>
  );
}

export default App;
