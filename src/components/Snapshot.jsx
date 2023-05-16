import React, {useState} from 'react'
import axios from 'axios'
import './calc.css'


function Snapshot() {
    const [photo, setphoto]=useState("")
    const [result, setResult]=useState([])
    const changePhoto = () =>{
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=_jSk_eQheFyXx2eLgscI_37r51a2H8qAE4tasX_Z3qs`)
        .then((response)=>{
            setResult(response.data.results)
        })
    }
  return (
    <>
    <div className='cento'>
        <h1>SnapShot</h1>
      <input className='snpshht' type="text" value={photo} onChange={(e)=>{setphoto(e.target.value)}} />
      <button className='searxchh' type="submit" onClick={changePhoto}>Search...</button>
    </div>
    <div className='grid'>
        {result.map((value)=>{
            return(
                <div className='grid-item' key={value.id}>
                    <a href="#">
                        <img className='auto' src={value.urls.small} />
                    </a>
                </div>
            )
        })}
    </div>
    </>
  )
}
export default Snapshot