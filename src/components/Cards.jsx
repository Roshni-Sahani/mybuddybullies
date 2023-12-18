import React from 'react'
import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'
import img4 from '../assets/images/img4.png'
import img5 from '../assets/images/img5.png'
import img6 from '../assets/images/img6.png'

import { Card, Col, Row } from 'react-bootstrap'
const Buddycard = [
    {
        image: img1,
        heading: 'ART COLLECTION',
        para: 'Complete the art collection in full with +70 unique traits, and publish our rarity chart on our webpage.'
    },
    {
        image: img2,
        heading: 'SPECIAL BULLIES',
        para:`<span class="fw-medium"> 20 Buddybullies </span> { out of 10k } will have a very <span class= "fw-medium"> special and ersonalized </span> resembling of <span class= "fw-medium"> famous people </span> who are into <span class= "fw-medium"> NFTs </span> { those will be available after the minting }.`
    },
    {
        image: img3,
        heading: 'BREEDING',
        para: `Our <span class="fw-medium"> BuddyBullies <span/> will not come alone, as we will announce the <span class="fw-medium"> breeding function </span> after the minting and you will be able to get a <span class="fw-medium"> PuppyBully </span> { for free }.`
    },
    {
        image: img4,
        heading: 'DIGITALMARKETS',
        para: `<span class="fw-medium">Communicate with all the digital markets </span> available in the<span class= "fw-medium"> Solana NFT </span> world  for getting our collection <span class="fw-medium"> successfully listed </span>.`
    },
    {
        image: img5,
        heading: 'MERCH',
        para: `The team is <span class="fw-medium"> working on the future merch </span> thet will be available for the community members directly on our webpage.`
    },
    {
        image: img6,
        heading: 'CHARITY',
        para: ` We will be giving <span class="fw-medium"> 30 % of the royalties to charity</span> permanently and we will keep spending on marketing, promotions and partnership.<span class="fw-medium"> 50 % of the riyalties </span> will go back to the community as rewards.`
    }

]
const Cards = () => {
    const list = Buddycard.map((Buddycard) => (
        <Col lg={4} md={6} className='mb-4 mt-4'>

            <div className='buddy-card'>
                <img className='pb-5' src={Buddycard.image} alt="img-1" />
                <p className="text-white fw-semibold fs-2lg ff-poppins">{Buddycard.heading}</p>
                <p dangerouslySetInnerHTML={{ __html: Buddycard.para }} className="text-white fw-normal lh-150 op-7 fs-xs ff-poppins"></p>
            </div>
        </Col>
    ))
    return (
        <div>
            <Row className="pt-5">
                {list}
            </Row>
        </div>
    )
}

export default Cards
