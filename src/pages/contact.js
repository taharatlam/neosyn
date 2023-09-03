const Blog = () => {
    return <div>
<section id="ori-breadcrumbs" className="ori-breadcrumbs-section position-relative" data-background="/img/bg/bread-bg.png">
		<div className="container">
			<div className="ori-breadcrumb-content text-center ul-li">
				<h1>Contact Us </h1>
				<ul>
					<li><Link href="index.html">neosyn infotech</Link></li>
					<li>Contact Us </li>
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

	<div className="ori-google-map">
		<iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.905752870592!2d75.8462917!3d22.657302299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fc7943ccee35%3A0xd8f7a0438ed7585d!2sMasakin-e-saifiyah%2C%20289-290%2C%20Indore%20Treasure%20Town%2C%20Indore%2C%20Madhya%20Pradesh%20452012!5e0!3m2!1sen!2sin!4v1686481902923!5m2!1sen!2sin"  height="865"></iframe>
	</div>

	<section id="ori-contact-form" className="ori-contact-form-section position-relative">
		<div className="container">
			<div className="ori-contact-form-content">
				<div className="row">
					<div className="col-lg-6">
						<div className="ori-contact-form-text-info pera-content">
							<h3>Get a free quote now</h3>
							<p>Curabitur vitae nunc sed velit dignissim sodales. Urna neque viverra justo nec. In cursus massa tincidunt ut ornare the butter leo integer.</p>
							<div className="ori-contact-form-item-info">
								<div className="ori-contact-info d-flex align-items-center">
									<div className="info-icon d-flex align-items-center justify-content-center">
										<i className="fas fa-phone-alt"></i>
									</div>
									<div className="info-text pera-content">
										<h4>Phone</h4>
										<Link href="tel:+919826044668">+91 9826044668</Link>
									</div>
								</div>
								<div className="ori-contact-info d-flex align-items-center">
									<div className="info-icon d-flex align-items-center justify-content-center">
										<i className="fas fa-envelope"></i>
									</div>
									<div className="info-text pera-content">
										<h4>Email</h4>
										<Link href="mailto:neosyninfotech@gamil.com">neosyninfotech@gmail.com</Link>
									</div>
								</div>
								<div className="ori-contact-info d-flex align-items-center">
									<div className="info-icon d-flex align-items-center justify-content-center">
										<i className="fas fa-map-marker-alt"></i>
									</div>
									<div className="info-text pera-content">
										<h4>Location</h4>
										<p>F614, Rajendra Nagar, Indore, India</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="ori-contact-form-wrap">
							 <div>
							 	<label>Name *</label>
							 	<input type="text" name="name"/>
							 	<label>Email *</label>
							 	<input type="text" name="email" placeholder="neosyn@example.com"/>
							 	<label>Phone Number *</label>
							 	<input type="number" name="text" placeholder="+91-9826044668"/>
							 	<label>Subject *</label>
							 	<input type="text" name="text" placeholder="web.."/>
							 	<label>Message *</label>
							 	<textarea name="message" placeholder="Hey lets connect and build something great..."></textarea>
							 	<button type="submit">submit now</button>
							 </div>
						</div>
					</div>
				</div>
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

	</div>;
  };
  export default Blog;