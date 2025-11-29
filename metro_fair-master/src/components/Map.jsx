// import React,{useState,useEffect} from 'react'
// import { MapContainer, TileLayer, Marker,Popup, Polyline, useMapEvents,useMap} from 'react-leaflet'
// import markerIconPng from "leaflet/dist/images/marker-icon.png"
// import {Icon} from "leaflet"
// import MapMaker from '../data/index'
// const Map = (props) => {
//     function getLonLatArr(arr){
//         let res = []
//         arr.map((e)=>{
//             res.push([e.Latitude,e.Longitude])
//         })
//         return res;
//     }
//     const [zoom, setZoom] = useState(10);
//     const map_maker = new MapMaker();
//     let results = map_maker.getResult()
//     let [data1,setData1] = useState({"data":[],"line":""})
//     let [lines,setLines] = useState({ "Red line":{ "data":results.filter((e)=>e["Metro Line"]==="Red line"), "color":"red" }, "Yellow line":{ "data":results.filter((e)=>e["Metro Line"]==="Yellow line"), "color":"yellow" }, "Blue line":{ "data":results.filter((e)=>e["Metro Line"]==="Blue line"), "color":"blue" }, "Blue line branch":{ "data":results.filter((e)=>e["Metro Line"]==="Blue line branch"), "color":"blue" }, "Green line branch":{ "data":results.filter((e)=>e["Metro Line"]==="Green line branch"), "color":"green" }, "Green line":{ "data":results.filter((e)=>e["Metro Line"]==="Green line"), "color":"green" }, "Voilet line":{ "data":results.filter((e)=>e["Metro Line"]==="Voilet line"), "color":"#8F00FF" }, "Magenta line":{ "data":results.filter((e)=>e["Metro Line"]==="Magenta line"), "color":"magenta" }, "Pink line":{ "data":results.filter((e)=>e["Metro Line"]==="Pink line"), "color":"pink" }, "Aqua line":{ "data":results.filter((e)=>e["Metro Line"]==="Aqua line"), "color":"aqua" }, "Gray line":{ "data":results.filter((e)=>e["Metro Line"]==="Gray line"), "color":"gray" }, "Orange line":{ "data":results.filter((e)=>e["Metro Line"]==="Orange line"), "color":"orange" } })
//     useEffect(() => {
//         const setMap = async () => {
//             if (props.mapstate !== undefined) {
//                 const updatedLines = {};
//                 for (const lineKey of Object.keys(lines)) {
//                     const lineData = lines[lineKey].data.filter(e => props.mapstate.includes(e["Station Names"]));
//                     updatedLines[lineKey] = { ...lines[lineKey], data: lineData };
//                 }
//                 setLines(updatedLines);
//             }
//         };
//         setMap();
//     }, [props.mapstate, lines]);
//     return (
//         <div className=''>            
//         <MapContainer center={[28.7041,77.1025]} zoom={11}  scrollWheelZoom={false} id='map'
//         >
//         <TileLayer
//         attribution='&copy; <a href="https://www.stadiamaps.com/">OpenStreetMap</a> contributors'
//         url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
//         />
//         {Object.keys(lines).map((l)=>{
//             return(<>
//                 {lines[l].data.map((e)=>
//                 <Marker position={[e.Latitude,e.Longitude]}
//                 icon={new Icon({iconUrl: "./circle.png", iconSize: [8, 8]})}
//                 >
//                 <Popup>
//                     {e["Station Names"]}
//                 </Popup>
//                 </Marker>
//                 )
//                 }
//                 <Polyline positions={getLonLatArr(lines[l].data)} color={lines[l].color}/>
//                 </>
//             )
//         })}
//     </MapContainer>
//         </div>
//   )
// }

// export default Map
import React,{useState,useEffect} from 'react'
import { MapContainer, TileLayer, Marker,Popup, Polyline} from 'react-leaflet'
import {Icon} from "leaflet"
import MapMaker from '../data/index'
const Map = (props) => {
    function getLonLatArr(arr){
        let res = []
       arr.forEach((e) => {
    res.push([e.Latitude, e.Longitude]);
});
return res;

    }
   
    const map_maker = new MapMaker();
    let results = map_maker.getResult()
 
    let [lines,setLines] = useState({ "Red line":{ "data":results.filter((e)=>e["Metro Line"]==="Red line"), "color":"red" }, "Yellow line":{ "data":results.filter((e)=>e["Metro Line"]==="Yellow line"), "color":"yellow" }, "Blue line":{ "data":results.filter((e)=>e["Metro Line"]==="Blue line"), "color":"blue" }, "Blue line branch":{ "data":results.filter((e)=>e["Metro Line"]==="Blue line branch"), "color":"blue" }, "Green line branch":{ "data":results.filter((e)=>e["Metro Line"]==="Green line branch"), "color":"green" }, "Green line":{ "data":results.filter((e)=>e["Metro Line"]==="Green line"), "color":"green" }, "Voilet line":{ "data":results.filter((e)=>e["Metro Line"]==="Voilet line"), "color":"#8F00FF" }, "Magenta line":{ "data":results.filter((e)=>e["Metro Line"]==="Magenta line"), "color":"magenta" }, "Pink line":{ "data":results.filter((e)=>e["Metro Line"]==="Pink line"), "color":"pink" }, "Aqua line":{ "data":results.filter((e)=>e["Metro Line"]==="Aqua line"), "color":"aqua" }, "Gray line":{ "data":results.filter((e)=>e["Metro Line"]==="Gray line"), "color":"gray" }, "Orange line":{ "data":results.filter((e)=>e["Metro Line"]==="Orange line"), "color":"orange" } })
    useEffect(() => {
        const setMap = async () => {
            if (props.mapstate !== undefined) {
                const updatedLines = {};
                for (const lineKey of Object.keys(lines)) {
                    const lineData = lines[lineKey].data.filter(e => props.mapstate.includes(e["Station Names"]));
                    updatedLines[lineKey] = { ...lines[lineKey], data: lineData };
                }
                setLines(updatedLines);
            }
        };
        setMap();
    }, [props.mapstate, lines]);
    return (
        <div className=''>            
        <MapContainer center={[28.7041,77.1025]} zoom={11}  scrollWheelZoom={false} id='map'
        >
        <TileLayer
        attribution='&copy; <a href="https://www.stadiamaps.com/">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        />
        {Object.keys(lines).map((l)=>{
            return(<>
                {lines[l].data.map((e)=>
                <Marker position={[e.Latitude,e.Longitude]}
                icon={new Icon({iconUrl: "./circle.png", iconSize: [8, 8]})}
                >
                <Popup>
                    {e["Station Names"]}
                </Popup>
                </Marker>
                )
                }
                <Polyline positions={getLonLatArr(lines[l].data)} color={lines[l].color}/>
                </>
            )
        })}
    </MapContainer>
        </div>
  )
}

export default Map