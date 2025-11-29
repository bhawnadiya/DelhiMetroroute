import React, { useEffect, useState } from 'react'
import Lines from "../data/abc.json"

const Carrd = ({card,currL,setcurrL}) => {
    const [LineD, setLineD] = useState({"s":"Black Line","e":"Black Line"})
    const [Start, setStart] = useState("Black Line");
    useEffect(()=>{
        for(let i of Lines){
          if(i.hasOwnProperty(card.Start)){
              if(currL===undefined){
                  setcurrL(i[card.Start])
            }
            if(i[card.Start]===currL){
                setStart(currL)
                break
              }else{
                setStart(i[card.Start])
            }
        }
      }
        for(let i of Lines){
          if(i.hasOwnProperty(card.End)){
            if(i[card.End]===currL){
                setLineD({"s":Start,"e":currL})
                setcurrL(i[card.End])
                break
            }else{
                setLineD({"s":Start,"e":i[card.End]})
                setcurrL(i[card.End])
            }
        }
    }
  })
  return (
    <>
        <div>
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
  <div className="flex gap-5">
    {(LineD!==undefined) && (LineD.s!==undefined)?
    <div className="mb-2 text-xl font-bold tracking-tight text-gray-900 " style={{"color":LineD.s.split(" ")[0]}}>
    {card.Start}
    </div>:
    <div className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
        {card.Start}
    </div>
    }
    <img src="./right-arrow.svg" width={30} className='mb-2' alt="" />
    {LineD!==undefined && (LineD.e!==undefined)?
    <div className="mb-2 text-xl font-bold tracking-tight text-gray-900 " style={{"color":LineD.e.split(" ")[0]}}>
    {card.End}
    </div>:
    <div className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
        {card.End}
    </div>
    }
  </div>
  <p className="mb-3 font-normal text-lg  text-gray-700" >
    <div className='flex justify-evenly'>
    <div><b>Distance:</b>   {card.Dist.toFixed(2)} </div>
    <div><b> Time:</b> {(card.Dist.toFixed(2)*0.75 + 1).toFixed(2) } mins </div>
    </div>
    <div className='flex justify-evenly'>
    <div>    <b> Line:</b> {LineD.e} </div>
    <div>   <b> Switch: </b> {
      (LineD.e==LineD.s)?<>No</>:<>Yes</>
    } </div>
    </div>

  </p>
</div>
    </div>
    </>
  )
}

export default Carrd