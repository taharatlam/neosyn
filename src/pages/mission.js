import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoSlider from "@/component/LogoSlider";

import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Mission = () => {
	const [reloadKey, setReloadKey] = useState(Math.random())
	useEffect(() => {
		setReloadKey(Math.random())
	}, [])
	return <div>
		<section id="ori-breadcrumbs" className="ori-breadcrumbs-section position-relative" data-background="/img/bg/bread-bg.png">
			<div className="container">
				<div className="ori-breadcrumb-content text-center ul-li">
					<h1>Our Mission</h1>
					<ul>
						<li><Link href="index.html">orixy</Link></li>
						<li>Our Mission</li>
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

		<section id="ori-mission" className="ori-mission-section position-relative">
			<div className="container">
				<div className="ori-mission-content">
					<div className="row">
						<div className="col-lg-6">
							<div className="ori-mission-title-text">
								<div className="ori-inner-section-title">
									<span className="sub-title text-uppercase">OUR PHILOSOPHY</span>
									<h2>Create Brand Identities & Digital Experiences</h2>
									<p>Rorem ipsum dolor sit ametconsectetur adipiscing elit,tempor Rorem ipsum dolor sit ametconsectetur adipiscing elit, sed do eiusmod temporRorem ipsum dolor</p>
								</div>
								<div className="ori-btn-1 text-uppercase">
									<Link href="contact.html">GET IN TOUCH</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="ori-mission-accordion position-relative">
								<Accordion defaultActiveKey="0">
									<Accordion.Item eventKey="0">
										<Accordion.Header>Accordion Item #1
											<div className="drop">
												<FontAwesomeIcon icon={faPlus} />
											</div>
										</Accordion.Header>
										<Accordion.Body>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
											eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
											minim veniam, quis nostrud exercitation ullamco laboris nisi ut
											aliquip ex ea commodo consequat. Duis aute irure dolor in
											reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
											pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
											culpa qui officia deserunt mollit anim id est laborum.
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="1">
										<Accordion.Header>Accordion Item #2
											<div className="drop">
												<FontAwesomeIcon icon={faPlus} />
											</div>
										</Accordion.Header>
										<Accordion.Body>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
											eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
											minim veniam, quis nostrud exercitation ullamco laboris nisi ut
											aliquip ex ea commodo consequat. Duis aute irure dolor in
											reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
											pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
											culpa qui officia deserunt mollit anim id est laborum.
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="2">
										<Accordion.Header>Accordion Item #3
											<div className="drop">
												<FontAwesomeIcon icon={faPlus} />
											</div>
										</Accordion.Header>
										<Accordion.Body>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
											eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
											minim veniam, quis nostrud exercitation ullamco laboris nisi ut
											aliquip ex ea commodo consequat. Duis aute irure dolor in
											reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
											pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
											culpa qui officia deserunt mollit anim id est laborum.
										</Accordion.Body>
									</Accordion.Item>
								</Accordion>
								{/* <div className="accordion" id="accordionExample">
									<div className="accordion-item">
										<h2 className="accordion-header" id="headingOne">
											<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
												Technology
											</button>
										</h2>
										<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
											<div className="accordion-body">
												Technology is the result of accumulated knowledge and application of skills, methods,
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" id="headingTwo">
											<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
												Innovation
											</button>
										</h2>
										<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
											<div className="accordion-body">
												Technology is the result of accumulated knowledge and application of skills, methods,
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" id="headingThree">
											<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
												Analytics
											</button>
										</h2>
										<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
											<div className="accordion-body">
												Technology is the result of accumulated knowledge and application of skills, methods,
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" id="headingFour">
											<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
												Services
											</button>
										</h2>
										<div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
											<div className="accordion-body">
												Technology is the result of accumulated knowledge and application of skills, methods,
											</div>
										</div>
									</div>
								</div> */}
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

		<section id="ori-vission" className="ori-vission-section position-relative">
			<div className="container">
				<div className="ori-vission-content">
					<div className="row">
						<div className="col-lg-6">
							<div className="ori-vission-text-area">
								<div className="ori-service-why-choose-text">
									<div className="ori-inner-section-title">
										<span className="sub-title text-uppercase">Why choose us</span>
										<h2>Unlock Revenue Growth for Your Business
										</h2>
									</div>
									<div className="ori-service-why-choose-list-item ul-li-block">
										<ul>
											<li>High Standards</li>
											<li>Focus on People</li>
										</ul>
									</div>
									<div className="ori-vission-more-btn text-uppercase">
										<Link href="about.html">Read More <i className="fal fa-arrow-right"></i></Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="ori-about-play-area position-relative">
								<div className="ori-about-play-img">
									<Image width={100000} height={10000} className="w-full h-auto" src="/img/about/v-play.png" alt="" />
								</div>
								<div className="about-play-btn position-absolute">
									<Link className="text-uppercase video_box d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=bIoPkZRVll">Play</Link>
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

		<section id="ori-sponsor-1" className="ori-sponsor-section-1 inner-sponsor position-relative" key={reloadKey}>
			<div className="container">
				<div className="ori-sponsor-title text-uppercase text-center">
					<h3><i></i><span>Trusted by</span><i></i></h3>
				</div>
				<div className="ori-sponsor-content">
					<LogoSlider />
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
export default Mission;
