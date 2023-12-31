import React from 'react'

const Header = () => {
    return (
        <div>
            <div>
                <div className='bg-img min-vh-100 d-flex flex-column overflow'>
                    <div className='container pt-4'>
                        <div className='d-flex align-items-center justify-content-between'>
                            <h2 className='ff-poppins color-white fs-md fw-semibold cursor-pointer'>Logo</h2>
                            <label for="menubar" className="z-index">
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>
                            <input type="checkbox" id="menubar" hidden />
                            <ul className='pl-0 gap-80 d-flex align-items-center mobile-view'>
                                <li><a href="#" className='ff-poppins color-white fs-s fw-medium links pl-0'>Minting</a></li>
                                <li><a href="#" className='ff-poppins color-white fs-s fw-medium links pl-0'>Road Map</a></li>
                                <li><a href="#" className='ff-poppins color-white fs-s fw-medium links pl-0'>Faq</a></li>
                                <li><a href="#" className='ff-poppins color-white fs-s fw-medium links pl-0'>Team</a></li>
                                <li><a href="#" className='ff-poppins color-white fs-s fw-medium links pl-0'>Join Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='container flex-grow-1 d-flex justify-content-center flex-column'>
                        <h1 className='ff-poppins fs-xxl color-white fw-normal max-w-515'>Vitae nunc, <span className='fw-bold'>blandit a odio</span> </h1>
                        <p className='ff-poppins fs-sm color-white op-7 max-w-457 pt-3'>Semper in egestas risus id tempus. Pellentesque dolor eros sollicitudin feugiat ut odio semper. Mattis fermentum eget ut vestibulum dolor diam</p>
                        <button className='ff-poppins fs-lg fw-medium color-navyblue btn-1 mt-4'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

