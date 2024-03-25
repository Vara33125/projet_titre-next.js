import React from "react";
import Image from "next/image";

export default function index() {
  return (
    <>
      <div>
        <h2 className="d-flex justify-content-center mt-md-4">
          Retrouvez nos magasins
        </h2>
      </div>
      <section className="container-fluid d-flex justify-content-center">
        <div id="stores" className="p-5 ">
          <div id="store1" className="d-flex">
            <div className="col-md-7 order-md-1">
              <Image
                src="/img/magasin1.jpg"
                width={700}
                height={400}
                alt="store1"
                className="w-100"
              />
            </div>
            <div className="col-md-5 order-md-2 border border-black border-opacity-25 m-4">
              API
            </div>
          </div>
          <div id="store2" className="d-flex my-5">
            <div className="col-md-7 order-md-2 ms-3 overflow-hidden ">
              <Image
                src="/img/magasin2.jpg"
                width={700}
                height={400}
                alt="store2"
                // className="w-100"
              />
            </div>
            <div className="col-md-5 order-md-1 border border-black border-opacity-25 m-4 ">
              API
            </div>
          </div>
          <div id="store3" className="d-flex">
            <div className="col-md-7 order-md-1">
              <Image
                src="/img/magasin3.jpg"
                width={700}
                height={400}
                alt="store3"
                className="w-100"
              />
            </div>
            <div className="col-md-5 order-md-2 border border-black border-opacity-25 m-4">
              API
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
