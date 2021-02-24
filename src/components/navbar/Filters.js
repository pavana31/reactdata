import React, {useState} from 'react'


import './Donut.css'


export default function Filters() {
    const [checkedOne, setCheckedOne] = useState(true);
  const updateOne = () => setCheckedOne(checkedOne);
const [checked, setChecked] = useState(false);
  const update = () => setChecked(checked);

    return (
        <div>
            <div className="card" style={{marginTop:"-3rem", width: '20rem', justifyItems :"center" }}>
                
                    <form  style={{ marginLeft:"8%" , border:"1px solid",padding:"1rem", borderColor:"gray"}}>
     
      <label>
        <input
          
          name="a"
       
        checked={checkedOne}
        onChange={updateOne}
          value={true}
          type="checkbox"
        />
          All CQA Results

      </label>

       <label>
           <br />
        <input
          onClick={() => setChecked(!checked)}
          name="a"
        label="All CQA Results" 
        checked={checked}
        onChange={update}
          value={true}
          type="checkbox"
          unchecked 
        />

      
        CQA's with closed loop
      </label>
    
    </form>

            </div>
        </div>
    )
}
