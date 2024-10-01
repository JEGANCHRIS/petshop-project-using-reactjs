import { useEffect, useState } from "react";
import Card from "./Card";
import { section } from "../db";

function Category(){
    let [category, setCategory] = useState([])

    useEffect(() => {
      setCategory(section)
      console.log("usestate",category)
    }, [])

    return<>
        <div className="background">
      <div className="blur"></div>
      <div className="container-fluid">
        <div className="text-uppercase fs-2">
          <h2><b> Category </b></h2>
        </div>
        <div id="sorting" className="border border-light border rounded p-1">
          <div className="row g-3">
            <Card/>
            {/* {category.map((c, k) => {
                <Card category={c} key={k}/>
            })} */}
            <div className="col md-6 col-lg-4 col-xl-3">
              <button className="btn btn-light" type="button">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="./dog.html"
                >
                  <img
                    src="https://www.demilked.com/magazine/wp-content/uploads/2014/03/dog-portrait-photography-elke-vogelsang-16.jpg"
                    alt="dog and its EGG"
                    className="card-box"
                  /><br />
                  <b> Naiii </b>
                </a>
              </button>
            </div>
            <div className="col md-6 col-lg-4 col-xl-3">
              <button className="btn btn-light" type="button">
                <img
                  src="https://i.pinimg.com/originals/66/d7/29/66d729c5a9d979b9c65e278373c564b2.jpg"
                  alt="cat"
                  className="card-box"
                /><br />
                <b> Poonaii </b>
              </button>
            </div>
            <div className="col md-6 col-lg-4 col-xl-3">
              <button className="btn btn-light" type="button">
                <img
                  src="https://wallpaperaccess.com/full/1333533.jpg"
                  alt="fish collections"
                  className="card-box"
                /><br />
                <b> Meen </b>
              </button>
            </div>
            <div className="col md-6 col-lg-4 col-xl-3">
              <button className="btn btn-light" type="button">
                <img
                  src="https://live.staticflickr.com/3693/18829847951_9886b4f4b6.jpg"
                  alt="Birds"
                  className="card-box"
                /><br />
                <b> paraivagal </b>
              </button>
            </div>
            <div className="col md-6 col-lg-4 col-xl-3">
              <button className="btn btn-light" type="button">
                <img
                  src="https://cdn.pixabay.com/photo/2021/11/07/17/55/hamster-6777533_960_720.jpg"
                  alt="hamster"
                  className="card-box"
                /><br />
                <b> Eli </b>
              </button>
            </div>
            <div className="col md-6 col-lg-4 col-xl-3">
              <button className="btn btn-light" type="button">
                <img
                  src="https://thumbs.dreamstime.com/b/arowana-fish-runs-village-ai-generated-photo-k-portrait-front-view-hd-image-background-322968052.jpg"
                  alt="Foriegn fishes"
                  className="card-box"
                /><br />
                <b> imported Meengal </b>
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container-fluid">
        <div className="text-uppercase fs-2">
          <h2><b> All-Pet-Accessories </b></h2>
        </div>
        <div id="sorting" className="border border-light border rounded p-1">
          <div className="row g-3">
            <div className="col md-6 col-lg-4 col-xl-3">
              <button className="btn btn-light" type="button">
                <img
                  src="https://static.tossdown.com/images/2cd67ad062ba9cf419dd2a02896d1426.jpeg"
                  alt="dog foods"
                  className="card-box"
                /><br />
                <b> Dog Foods </b>
              </button>
            </div>
            <div className="col md-6 col-lg-4 col-xl-3">
              <button className="btn btn-light" type="button">
                <img
                  src="https://cdn.shopify.com/s/files/1/1149/5008/products/NewProject_30391170-f0d0-4c8c-9773-76a609aca1fe_2400x2400.jpg?v=1594950408"
                  alt="cat foods"
                  className="card-box"
                /><br />
                <b> Cat Foods </b>
              </button>
            </div>
            <div className="col md-6 col-lg-4 col-xl-3">
              <button className="btn btn-light" type="button">
                <img
                  src="https://www.interestinganimals.net/wp-content/uploads/2024/02/grasping-cat-wheezing.jpg"
                  alt=" Medicines"
                  className="card-box"
                /><br />
                <b> Medicines </b>
              </button>
            </div>
            <div className="col md-6 col-lg-4 col-xl-3">
              <button className="btn btn-light" type="button">
                <img
                  src="https://i.etsystatic.com/24665828/r/il/30e57d/2935275893/il_1588xN.2935275893_du2i.jpg"
                  alt=" Medicines"
                  className="card-box"
                /><br />
                <b> Aquatic Live Plants </b>
              </button>
            </div>
            <div className="col md-6 col-lg-4 col-xl-3">
              <button className="btn btn-light" type="button">
                <img
                  src="https://m.media-amazon.com/images/I/81mmNSgwaCL.jpg"
                  alt=" Medicines"
                  className="card-box"
                /><br />
                <b> Aquarium Decors </b>
              </button>
            </div>
            <div className="col md-6 col-lg-4 col-xl-3">
              <button className="btn btn-light" type="button">
                <img
                  src="https://horizonein.com/wp-content/uploads/Royal-Oscar-Fish-Food.jpg"
                  alt=" Medicines"
                  className="card-box"
                /><br />
                <b> Aquarium Foods and Medicines </b>
              </button>
            </div>
            <div className="col md-6 col-lg-4 col-xl-3">
              <button className="btn btn-light" type="button">
                <img
                  src="https://th.bing.com/th/id/R.62dcb3b47b7be2cc13c71a9ecf5f3314?rik=0dJwHNf1Mk8shw&riu=http%3a%2f%2fwww.castledawnaquatics.com%2fcdn%2fshop%2fproducts%2fnano-aquarium-terrarium-5w-led-adjustable-light-castle-dawn-aquatics-213072_1200x1200.jpg%3fv%3d1686984531&ehk=MeNOPvwu%2fyiqe2rMyfLhHp%2bvMLnJJFobeo0s2uFJzZo%3d&risl=&pid=ImgRaw&r=0"
                  alt=" Medicines"
                  className="card-box"
                /><br />
                <b> Aquarium Gagets </b>
              </button>
            </div>
            <div className="col md-6 col-lg-4 col-xl-3">
              <button className="btn btn-light" type="button">
                <img
                  src="https://images.acenda-static.com/gobigpet1/product/retina/1500x1500/1/1a719dddbdcab7e91a913e10c2588652.jpg"
                  alt=" Medicines"
                  className="card-box"
                /><br />
                <b> Birds Foods and Medicines </b>
              </button>
            </div>
            <div className="col md-6 col-lg-4 col-xl-3">
              <button className="btn btn-light" type="button">
                <img
                  src="https://s7d2.scene7.com/is/image/PetSmart/5218781?$pdp-placeholder-desktop$"
                  alt=" Medicines"
                  className="card-box"
                /><br />
                <b>Hamster Foods and Medicines</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
}
export default Category;