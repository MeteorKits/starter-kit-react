import React from 'react'

const Typography = (props) => {
  return (
    <div>
      <h1>Typography</h1>
      <h2>Read with pleasure</h2>

      <div className="wrapper left white">
        <div className="typography">
          <p>All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are available. <code>.h1</code> through <code>.h6</code> classes are also available, for when you want to match the font styling of a heading but still want your text to be displayed inline.</p>
          <h1>h1. Bootstrap heading</h1>
          <h2>h2. Bootstrap heading</h2>
          <h3>h3. Bootstrap heading</h3>
          <h4>h4. Bootstrap heading</h4>
          <h5>h5. Bootstrap heading</h5>
          <h6>h6. Bootstrap heading</h6>
          <div className="text">
            Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.

            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.
          </div>
          <table className="table table-bordered">
            <thead>
            <tr>
              <th>#</th>
              <th>Text Type</th>
              <th>Example</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                <h5>MARKED TEXT</h5>
                <p>Use the <code>&lt;mark&gt;</code> tag.</p>
              </td>
              <td>
                <p>You can use the mark tag to
                  <mark>highlight</mark>
                  text.
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>
                <h5>DELETED TEXT</h5>
                <p>Use the <code>&lt;del&gt;</code> tag.</p>
              </td>
              <td>
                <p>
                  <del>This line of text is meant to be treated as deleted text.</del>
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>
                <h5>STRIKETHROUGH TEXT</h5>
                <p>Use the <code>&lt;s&gt;</code> tag.</p>
              </td>
              <td>
                <p>
                  <s>This line of text is meant to be treated as no longer accurate.</s>
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>
                <h5>INSERTED TEXT</h5>
                <p>Use the <code>&lt;ins&gt;</code> tag.</p>
              </td>
              <td>
                <p>
                  <ins>This line of text is meant to be treated as an addition to the document.</ins>
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>
                <h5>UNDERLINED TEXT</h5>
                <p>Use the <code>&lt;u&gt;</code> tag.</p>
              </td>
              <td>
                <p>
                  <u>This line of text will render as underlined</u>
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>
                <h5>SMALL TEXT</h5>
                <p>Use the <code>&lt;small&gt;</code> tag.</p>
              </td>
              <td>
                <p>
                  <small>This line of text is meant to be treated as fine print.</small>
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>
                <h5>BOLD</h5>
                <p>Use the <code>&lt;strong&gt;</code> tag.</p>
              </td>
              <td>
                <p>The following snippet of text is <strong>rendered as bold text</strong>.</p>
              </td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>
                <h5>ITALICS</h5>
                <p>Use the <code>&lt;em&gt;</code> tag.</p>
              </td>
              <td>
                <p>The following snippet of text is <em>rendered as italicized text</em>.</p>
              </td>
            </tr>
            </tbody>
          </table>
          <div className="row">
            <div className="col-md-4">
              <div className="widget">
                <div className="widget-heading">
                  <h3 className="widget-title">Alignment Classes</h3>
                </div>
                <div className="widget-body">
                  <p>Add class <code>.text-left</code>, <code>.text-center</code>, <code>.text-right</code>, <code>.text-justify</code>, <code>.text-nowrap</code> to make it.</p>
                  <p className="text-left">Left aligned text.</p>
                  <p className="text-center">Center aligned text.</p>
                  <p className="text-right">Right aligned text.</p>
                  <p className="text-justify">Justified text.</p>
                  <p className="text-nowrap">No wrap text.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="widget">
                <div className="widget-heading">
                  <h3 className="widget-title">Transformation Classes</h3>
                </div>
                <div className="widget-body">
                  <p>Add class <code>.text-lowercase</code>, <code>.text-uppercase</code>, <code>.text-capitalize</code> to make it.</p>
                  <p className="text-lowercase">Lowercased text.</p>
                  <p className="text-uppercase">Uppercased text.</p>
                  <p className="text-capitalize">Capitalized text.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="widget">
                <div className="widget-heading">
                  <h3 className="widget-title">ABBREVIATIONS</h3>
                </div>
                <div className="widget-body">
                  <p>Use the <code>&lt;abbr&gt;</code> tag.</p>
                  <h5>BASIC ABBREVIATION</h5>
                  <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>
                  <h5>INITIALISM</h5>
                  <p>Add <code>.initialism</code> to an abbreviation for a slightly smaller font-size.</p>
                  <p><abbr title="HyperText Markup Language" className="initialism">HTML</abbr> is the best thing since sliced bread.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Typography