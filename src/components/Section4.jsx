import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Section4 = () => {
    return (
        <div className='bg-blue2 text-center'>
            <div className='container_1'>
                <p className='text-white ff-poppins lh-136 pt-58 pb-27 text-white py-5 fw-semibold fs-xl'>FAQs</p>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='color-white ff-montserrat fw-medium fs-sm'>What’s the blockchain the buddybullies call home ?</Accordion.Header>
                        <Accordion.Body className='fs-xs ff-montserrat o p-7 fw-medium text-white mw-800 text-start op-7'>
                            Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus vitae non, integer. Non.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header className='text-white ff-montserrat fw-medium fs-sm'>What’s the blockchain the buddybullies call home ?</Accordion.Header>
                        <Accordion.Body className='fs-xs ff-montserrat o p-7 fw-medium text-white mw-800 text-start op-7'>
                            Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus vitae non, integer. Non.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header className='text-white ff-montserrat fw-medium fs-sm'>What’s the blockchain the buddybullies call home ?</Accordion.Header>
                        <Accordion.Body className='fs-xs ff-montserrat o p-7 fw-medium text-white mw-800 text-start op-7'>
                            Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus vitae non, integer. Non.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header className='text-white ff-montserrat fw-medium fs-sm'>What’s the blockchain the buddybullies call home ?</Accordion.Header>
                        <Accordion.Body className='fs-xs ff-montserrat o p-7 fw-medium text-white mw-800 text-start op-7'>
                            Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus vitae non, integer. Non.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}

export default Section4
