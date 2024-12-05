import Carousel from "react-bootstrap/Carousel";
import CharlotteHale from "../images/testimpic1.jpg";
import AdamCuppy from "../images/testimpic2.jpg";
import imageOne from "../images/testim1.jpg";
import ImageTwo from "../images/testim2.jpg";

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div className="row d-flex ">
          <div className="col-md-7">
            <h1>Testimonials</h1>
            <p className="h5 text-black-50">
              Here are what some of our amazing customers are saying about our
              hotels & tours. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
            <p className="h5 text-black-50 my-5">
              Here are what some of our amazing customers are saying about our
              hotels & tours. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
            <div className="d-flex gap-2">
              <img src={CharlotteHale} className="rounded-pill" alt="#" />
              <div>
                <h3>Charlotte Hale</h3>
                <span>CEO, Delos inc</span>
              </div>
            </div>{" "}
          </div>
          <div className="col-md-5">
            <img src={imageOne} className="w-100 rounded" alt="Testimonials" />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="row d-flex">
          <div className="col-md-7">
            <h1>Testimonials</h1>
            <p className="h5 text-black-50">
              Here are what some of our amazing customers are saying about our
              hotels & tours. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
            <p className="h5 text-black-50 my-5">
              Here are what some of our amazing customers are saying about our
              hotels & tours. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
            <div className="d-flex gap-2">
              <img src={AdamCuppy} className="rounded-pill" alt="#" />
              <div>
                <h3>Adams Chuppy</h3>
                <span>Founder EventsNYC</span>
              </div>
            </div>
          </div>{" "}
          <div className="col-md-5">
            <img src={ImageTwo} className="w-100 rounded" alt="Testimonials" />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
