import Carousel from 'react-bootstrap/Carousel';
import data from "../data"

const InfoBlock = ({title, text, imgOne, imgTwo, imgThree})=>{

    return(
        <div className="blockInfo">
            <div className="imgCont">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={imgOne}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={imgTwo}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={imgThree}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='infoBlock'>
                <h2 className="infoTitle">{title}</h2>
                <p className="infoPara">{text}</p>
            </div>
        </div>
    )
}

export default InfoBlock;