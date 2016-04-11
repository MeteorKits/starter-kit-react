import React from 'react'

const Buttons = (props) => {
  return (
    <div>
      <h1>Buttons</h1>
      <h2>Awesome buttons from <a href="http://unicorn-ui.com/buttons/">http://unicorn-ui.com/buttons/</a></h2>

      <div className="wrapper white">

        <div className="buttons">
          <h1>Flat Buttons</h1>
          <h2>All shapes & sizes</h2>
          <div>

            <a href="#" className="button button-tiny">Go</a>
            <a href="#" className="button button-rounded button-tiny">Go</a>
            <a href="#" className="button button-pill button-tiny">Go</a>
            <button className="button button-square button-tiny"><i className="fa fa-plus"></i></button>
            <button className="button button-box button-tiny"><i className="fa fa-plus"></i></button>
            <button className="button button-circle button-tiny"><i className="fa fa-plus"></i></button>
            <br />
            <a href="#" className="button button-primary button-small">Go</a>
            <a href="#" className="button button-primary button-rounded button-small">Go</a>
            <a href="#" className="button button-primary button-pill button-small">Go</a>
            <button className="button button-primary button-square button-small"><i className="fa fa-plus"></i></button>
            <button className="button button-primary button-box button-small"><i className="fa fa-plus"></i></button>
            <button className="button button-primary button-circle button-small"><i className="fa fa-plus"></i></button>
            <br />
            <a href="#" className="button button-action">Go</a>
            <a href="#" className="button button-action button-rounded">Go</a>
            <a href="#" className="button button-action button-pill">Go</a>
            <button className="button button-action button-square"><i className="fa fa-plus"></i></button>
            <button className="button button-action button-box"><i className="fa fa-plus"></i></button>
            <button className="button button-action button-circle"><i className="fa fa-plus"></i></button>
            <br />
            <a href="#" className="button button-highlight button-large">Go</a>
            <a href="#" className="button button-highlight button-rounded button-large">Go</a>
            <a href="#" className="button button-highlight button-pill button-large">Go</a>
            <button className="button button-highlight button-square button-large"><i className="fa fa-plus"></i></button>
            <button className="button button-highlight button-box button-large"><i className="fa fa-plus"></i></button>
            <button className="button button-highlight button-circle button-large"><i className="fa fa-plus"></i></button>
            <br />
            <a href="#" className="button button-caution button-jumbo">Go</a>
            <a href="#" className="button button-caution button-rounded button-jumbo">Go</a>
            <a href="#" className="button button-caution button-pill button-jumbo">Go</a>
            <button className="button button-caution button-square button-jumbo"><i className="fa fa-plus"></i></button>
            <button className="button button-caution button-box button-jumbo"><i className="fa fa-plus"></i></button>
            <button className="button button-caution button-circle button-jumbo"><i className="fa fa-plus"></i></button>
            <br />
            <a href="#" className="button button-royal button-giant">Go</a>
            <a href="#" className="button button-royal button-rounded button-giant">Go</a>
            <a href="#" className="button button-royal button-pill button-giant">Go</a>
            <button className="button button-royal button-square button-giant"><i className="fa fa-plus"></i></button>
            <button className="button button-royal button-box button-giant"><i className="fa fa-plus"></i></button>
            <button className="button button-royal button-circle button-giant"><i className="fa fa-plus"></i></button>

          </div>
          <h1>3D Buttons</h1>
          <h2>Realistic!</h2>
          <div>

            <button className="button button-3d button-box button-jumbo"><i className="fa fa-thumbs-up"></i></button>
            <a href="#" className="button button-3d button-primary button-rounded">Check out the new site!</a>
            <a href="#" className="button button-3d button-action button-pill">Visit Us!</a>
            <button className="button button-3d button-action button-circle button-jumbo"><i className="fa fa-thumbs-up"></i></button>
            <a href="#" className="button button-3d button-caution"><i className="fa fa-camera"></i> Go</a>
            <a href="#" className="button button-3d button-royal">Say Hi!</a>
          </div>

          <h1>Wrapped Buttons</h1>
          <h2>Fancy!</h2>
          <div>
            
            <span className="button-wrap">
              <button className="button button-circle">
                <i className="fa fa-cloud"></i>
              </button>
            </span>

            <span className="button-wrap">
              <button className="button button-circle button-raised button-primary">
                <i className="fa fa-cloud"></i>
              </button>
            </span>

            <span className="button-wrap">
              <a href="#" className="button button-pill ">Go</a>
            </span>
            <span className="button-wrap">
              <a href="#" className="button button-pill button-raised button-primary">Go</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Buttons