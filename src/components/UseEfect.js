import React, { useState } from "react";
// import "./App.css";
import axios from "axios";
function UseEfect() {
  const [quotes, setQuotes] = useState({});
  // const [id, setId] = useState();

  // useEffect(() => {
  //   axios
  //     .get(`https://dummyjson.com/quotes/${id}`)
  //     .then((res) => {
  //       console.log(res.data);
  //       setQuotes(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [id]);

  // const getQuote = () => {
  //   setId(Math.floor(Math.random() * 10 + 1));
  // };


  // const p1 = new Promise( (resolve,reject) => {
  //   setTimeout(() => {
  //     reject('fail')
  //   }, 1000)
  // })

  // p1.then(console.log).catch(console.log)


  const getRandomQuote = async() => {
    const randomId = Math.floor(Math.random() * 10 + 1)



    try{
      const res = await axios.get(`https://dummyjson.com/quotes/${randomId}`)
      console.log(res.data)
      setQuotes(res.data)
    } catch(err){
      console.log(err);
    }
  }

  return (
    <div className="bg-gray-200 flex justify-center flex-col items-center h-screen ">
      <div className="shadow-lg shadow-blue-500/80 bgc px-6 py-10 w-[390px] h-[290px] rounded-[40px]">
        <button
          className="bg-transparent shadow-lg shadow-blue-500/50 hover:bg-blue-500 text-white font-semibold mb-8 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={getRandomQuote}
        >
          Get Your Quote Of the Day Here
        </button>

        <ul>
          
          <li className="text-white pt-5 " > {quotes.quote}</li>
        </ul>
      </div>
    </div>
  );
}

export default UseEfect;
