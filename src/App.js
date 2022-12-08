import { useState } from "react";

function App() {

  //question 1 done generating error on output()
  //modified and rectified the error, output 12
  // var obj = {
  //   x: 12,

  //   getX: function () {
  //      return (this.x);
  //   },
  // };
  // const output = obj.getX();
  // console.log(output)
  // return(
  //   <>
  //     <h1>question 1</h1>
  //   </>
  // );

  // const output = obj.getX;
  // return(
  //   <><h1>question 1</h1>
  //     {
  //       console.log(output())
  //     }
  //   </>
  // )

  //question 2 working and complete
  // let a = "7" + 3 + 2;
  // let b = 7 + 3 + "2";
  // return(
  //   <><h1>question 2/h1>
  //     {
  //       console.log(a,b)
  //     }
  //   </>
  // )


  //question 3 working and complete
  // let a = [1, 2, 3, 4];
  // let b = a;
  // let c = [...a];

  // b.splice(3, 1);

  // return (
  //   <div className="App">
  //      <h1>question 3</h1> 
  //       {console.log(a,b,c)}
  //   </div>
  // );

  //question 4 working and complete
  // const arr = [10, 20, 30];
  // arr.push(40);
  // console.log(arr)

  // var arr1 = [10,20,30];
  // arr1 = [];
  // console.log("arr1",arr1)

  // const arr2 = [10,20,30];
  // arr2[2]=50;
  // console.log("arr2",arr2)

  // return (
  //   <>
  //     <h1>question 4</h1>
  //   </>
  // );


  //question 5 working and complete
  // var obj = { name: "neha", getName: function () { console.log(this.name); } }
  // var getName = obj.getName;
  // var obj2 = { name: "naina", getName };
  // obj.getName();
  // obj2.getName();
  // return(
  //   <>
  //     <h1>question 5</h1>
  //   </>
  // )


  //question 6 working and complete
  // const [text, setText] = useState("");
  // const [flag, setFlag] = useState(false)
  // const [revStr, setRevStr] = useState("")
  // const handleReverse = () => {
  //   let revString = "";
  //   for (let i = text.length - 1; i >= 0; i--) {
  //     revString += text[i];
  //   }
  //   setRevStr(revString);
  //   setFlag(true)
  // }
  // return (
  //   <> <h1>question 6</h1>
  //     <input type="text" onChange={(e)=>setText(e.target.value)} placeholder="enter a string" />
  //     <button onClick={handleReverse}>Reverse string</button>
  //     <h2>
  //       original string: {text}
  //     </h2>
  //     <h2>
  //       {
  //         flag && <p>Reversed string:  {revStr} </p>
  //       }
  //     </h2>
  //   </>
  // )

  //question 7 string version
  // const arr = ["abc","abx","skf","qddf","mkns"];
  // return(
  //   <>
  //     <h1>question 7</h1>
  //     <p>original array  = {arr.map((l)=>(
  //       <span>
  //         {l}&nbsp;
  //       </span>
  //     ))} </p>
  //     <p>sorted array = {arr.sort().map((l)=>(
  //       <span> {l} &nbsp; </span>
  //     ))} </p>
  //   </>
  // )

  //question 7 number version
  // const [arrnum, setArr] = useState([10, 22, 4, 5, 7, 17, 55, 20, 28]);
  // const [sortedarr, setSortedarr] = useState(arrnum)
  // return (
  //   <>
  //     <h1>question 7</h1>
  //     <p>original unsorted array  = {arrnum.map((l) => (
  //       <span>{l} &nbsp;</span>
  //     ))} </p>
  //     <p> descending sorted array  = {sortedarr.sort(function (a, b) { return b - a }).map((l) => (
  //       <span>{l} &nbsp;</span>
  //     ))} </p>
  //     <p> ascending sorted array  = {sortedarr.sort(function (a, b) { return a - b }).map((l) => (
  //       <span>{l} &nbsp;</span>
  //     ))} </p>
  //   </>
  // )

  //question 8 - working and complete
  // const obj = [
  //   {'firstName':'xyz' },
  //   {'lastName':'abc' },
  //   {'mobile':' 98945677888' },
  //   {'age':'20' }]

  //   return(
  //     <>
  //     <h1>Question 8</h1>
  //       {
  //         obj.map((l)=>( 
  //           <p>
  //             <span>{l.firstName}</span>
  //             <span>{l.lastName}</span>
  //             <span>{l.mobile}</span>
  //             <span>{l.age}</span>
  //           </p>
  //          ))
  //       }
  //     </>
  //   );

}

export default App;
