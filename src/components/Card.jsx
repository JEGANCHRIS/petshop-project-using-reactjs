function Card(props){
  const {category}= props;
  console.log(category)
    return<>
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
                  /><br/>
                  <b>naai </b>
                </a>
              </button>
            </div>
    </>
}
export default Card;