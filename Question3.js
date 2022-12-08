
function App() {
  let a = [1, 2, 3, 4];
  let b = a;
  let c = [...a];

  b.splice(3, 1);

  

  return (
    <div className="App">
        {console.log("a = "+a)}
        {console.log("b = "+b)}
        {console.log("c = "+c)}
    </div>
  );
}

export default App;
