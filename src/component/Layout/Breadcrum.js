function Breadcrumbs(props) {
    const {pageTitle, companyName} = props
  return (
    <section
      id="ori-breadcrumbs"
      className="ori-breadcrumbs-section position-relative"
      data-background="/img/bg/bread-bg.png"
    >
      <div className="container">
        <div className="ori-breadcrumb-content text-center ul-li">
          <h1>{pageTitle}</h1>
          <ul>
            <li>
              <a href="/">{companyName}</a>
            </li>
            <li>Services</li>
          </ul>
        </div>
      </div>
      <div className="line_animation">
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
        <div className="line_area"></div>
      </div>
    </section>
  );
}

export default Breadcrumbs;
