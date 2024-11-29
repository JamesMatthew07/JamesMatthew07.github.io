import "bootstrap/dist/css/bootstrap.min.css";
import MyForm from "./MyForm";

const MapEmbed = () => {
  return (
    <>
      <div className="container-fluid mt-40">
        <div className="row">
          <div className="col-12">
            <div className="text-4xl text-white text-center font-bold">
              <div className="mb-20">
              Want to Collaborate?
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="flex justify-center items-center mb-4">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?q=Sampaloc+Talisay+Batangas&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              width="600"
              height="560"
              style={{ border: 0,
                borderRadius:"10px"
               }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
            </div>
          </div>
          <div className="col-md-6 col-12">
               <MyForm></MyForm>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapEmbed;
