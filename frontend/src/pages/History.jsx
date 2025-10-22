import React, {useEffect, useState} from "react";
import axios from "../api/axios";

export default function History(){
  const [hist, setHist] = useState([]);
  useEffect(()=>{
    const f = async ()=>{
      try{
        const res = await axios.get("/predict/history");
        setHist(res.data.history || []);
      }catch(e){
        console.log(e);
      }
    }
    f();
  },[]);
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Prediction History</h2>
      <div className="space-y-3">
        {hist.map(h=>(
          <div key={h._id} className="border p-3 rounded">
            <div>Score: {(h.score*100).toFixed(1)}%</div>
            <div>Input: {JSON.stringify(h.input)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
