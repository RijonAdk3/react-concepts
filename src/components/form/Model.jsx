import React from 'react'

const Model = () => {
  return (
    <div>
        // Trigger/Open The Modal
    <button id="myBtn">Open Modal</button>

        {/* The Modal */}
    <div id="myModal" className="modal">
        {/* Modal content */}
    <div className="modal-content">
        <span className="close">&times;</span>
        <p>Some text in the Modal..</p>
    </div>
    </div>

      
    </div>
  )
}

export default Model
