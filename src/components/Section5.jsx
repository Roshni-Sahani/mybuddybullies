import React from 'react'
import cartoon1 from '../assets/images/cartoon1.png'
import cartoon2 from '../assets/images/cartoon2.png'
import cartoon3 from '../assets/images/cartoon3.png'
const Section5 = () => {
    return (
        <div>
            <section id="Team" className='bg-blue2'>
                <div className='my-container'>
                    <h2 className='ff-poppins fs-xl fw-semibold lh-136 text-white text-center pt-121 pb-26'>Our Team</h2>
                    <div className='row justify-content-center'>
                        <div className='col-lg-4 col-md-6 col-12 d-flex flex-column justify-content-center'>
                            <img className='w-10 0' src={cartoon1} alt="cartoon1" />
                            <p className='fs-2lg lh-136 ff-poppins fw-semibold text-white text-center pt-4'>Prime Bullister</p>
                            <p className='fs-s fw-normal ff-poppins lh-136 text-white text-center'>Pruduct Designer</p>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 d-flex flex-column justify-content-center'>
                            <img className='w-10 0' src={cartoon2} alt="cartoon2" />
                            <p className='fs-2lg lh-136 ff-poppins fw-semibold text-white text-center pt-4'>Solvador Bulli</p>
                            <p className='fs-s fw-normal ff-poppins lh-136 text-white text-center'>Artist</p>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 d-flex flex-column justify-content-center'>
                            <img className='w-10 0' src={cartoon3} alt="cartoon3" />
                            <p className='fs-2lg lh-136 ff-poppins fw-semibold text-white text-center pt-4'>Meta Bully</p>
                            <p className='fs-s fw-normal ff-poppins lh-136 text-white text-center'>Developer</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section5
