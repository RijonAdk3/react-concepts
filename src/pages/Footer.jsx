import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="flex flex-row">
            <div className="basis-1/4">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </div>
            <div className="basis-1/4">
                <p>Email: info@example.com</p>
                <p>Phone: +123 456 7890</p>
            </div>
            <div class="basis-1/4">
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
            </div>
  
        </div>

        <div className='grid gap-1 grid-cols-2'>
                <div>01</div>
                <div>02</div>
                <div>03</div>
                <div>04</div>


            </div>
    </footer>
  )
}

export default Footer
