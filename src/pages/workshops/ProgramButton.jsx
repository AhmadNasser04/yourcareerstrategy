import React from 'react'
import { Link } from 'react-router-dom'

function ProgramButton() {
  return (
    <div className='text-center'>
        <div class="row" >
            <div class="col-lg-6"  className="align-center"> 
                <Link className="programButton" id="one" to="/program-features" rel="noreferrer" target='_blank'>Learn About The Program Features and Curriculum</Link>
              </div>
        </div>

    </div>
  )
}

export default ProgramButton