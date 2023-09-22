import LogoSlider from "@/component/LogoSlider";
import Image from "next/image";
import Link from "next/link";


import Accordion from 'react-bootstrap/Accordion';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faQuestionCircle, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

const Faq = () => {
	const [tab,setTab]=useState(1)
	return (
		<div>
			<section id="ori-breadcrumbs" className="ori-breadcrumbs-section position-relative" data-background="/img/bg/bread-bg.png">
				<div className="container">
					<div className="ori-breadcrumb-content text-center ul-li">
						<h1>Faq</h1>
						<ul>
							<li><Link href="index.html">orixy</Link></li>
							<li>Faq</li>
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
			
			<section id="ori-faq" className="ori-faq-section position-relative">
				<div className="container">
					<div className="ori-faq-content">
						<div className="row">
							<div className="col-lg-5">
								<div className="ori-faq-tab-btn">
									<ul className="nav nav-tabs" id="myTab" role="tablist">
										<li className="nav-item" role="presentation">
											<button className={`nav-link ${tab==1&&'active'}`} id="home-tab" onClick={()=>setTab(1)}>About Services</button>
										</li>
										<li className="nav-item" role="presentation">
											<button onClick={()=>setTab(2)} className={`nav-link ${tab==2&&'active'}`} id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Subscription & Billing</button>
										</li>
										<li className="nav-item" role="presentation">
											<button onClick={()=>setTab(3)} className={`nav-link ${tab==3&&'active'}`} id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Refund Policy</button>
										</li>
										<li onClick={()=>setTab(4)} className="nav-item" role="presentation">
											<button className={`nav-link ${tab==4&&'active'}`} id="support-tab" data-bs-toggle="tab" data-bs-target="#support" type="button" role="tab" aria-controls="support" aria-selected="false">Support</button>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-7">
								<div className="ori-faq-text-wrapper-content">
									<div className="ori-inner-section-title">
										<span className="sub-title text-uppercase">Good to Know</span>
										<h2>Frequently Asked Questions</h2>
									</div>
									<div className="ori-faq-accordion-area">
										<div className="tab-content" id="myTabContent">
											{
												tab == 1&&
												<div className="tab-pane animated fadeInUp show active" id="home" role="tabpanel" aria-labelledby="home-tab">
													<div className="ori-faq-accordion-item-area">
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
														</Accordion>
														{/* <div className="accordion" id="accordionExample_2">
															<div className="accordion-item">
																<h2 className="accordion-header" id="headingOne">
																	<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
																		Why Orixy is so popular than others
																	</button>
																</h2>
																<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample_2">
																	<div className="accordion-body">
																		A Orixy has its own IP address, which is made public instead. While a rather seemingly insignificant change, the Orixy IP address can be used for a number of vital business functions related to everything from security to customer experience.
																	</div>
																</div>
															</div>
															<div className="accordion-item">
																<h2 className="accordion-header" id="headingTwo">
																	<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
																		How can we get the best from Orixy template?
																	</button>
																</h2>
																<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample_2">
																	<div className="accordion-body">
																		A Orixy has its own IP address, which is made public instead. While a rather seemingly insignificant change, the Orixy IP address can be used for a number of vital business functions related to everything from security to customer experience.
																	</div>
																</div>
															</div>
															<div className="accordion-item">
																<h2 className="accordion-header" id="headingThree">
																	<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
																		What payment methods are available?
																	</button>
																</h2>
																<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample_2">
																	<div className="accordion-body">
																		A Orixy has its own IP address, which is made public instead. While a rather seemingly insignificant change, the Orixy IP address can be used for a number of vital business functions related to everything from security to customer experience.
																	</div>
																</div>
															</div>
															<div className="accordion-item">
																<h2 className="accordion-header" id="headingFour">
																	<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
																		What makes Orixy best creative template?
																	</button>
																</h2>
																<div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample_2">
																	<div className="accordion-body">
																		A Orixy has its own IP address, which is made public instead. While a rather seemingly insignificant change, the Orixy IP address can be used for a number of vital business functions related to everything from security to customer experience.
																	</div>
																</div>
															</div>
														</div> */}
													</div>
												</div>
											}
											{
												tab == 2&&
												<div className="tab-pane animated fadeInUp show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
													<div className="ori-faq-accordion-item-area">
														<div className="accordion" id="accordionExample_3">
															<div className="accordion-item">
																<h2 className="accordion-header" id="heading5">
																	<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="true" aria-controls="collapse5">
																		Why Orixy is so popular than others
																	</button>
																</h2>
																<div id="collapse5" className="accordion-collapse collapse show" aria-labelledby="heading5" data-bs-parent="#accordionExample_3">
																	<div className="accordion-body">
																		A Orixy has its own IP address, which is made public instead. While a rather seemingly insignificant change, the Orixy IP address can be used for a number of vital business functions related to everything from security to customer experience.
																	</div>
																</div>
															</div>
															<div className="accordion-item">
																<h2 className="accordion-header" id="heading6">
																	<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
																		How can we get the best from Orixy template?
																	</button>
																</h2>
																<div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionExample_3">
																	<div className="accordion-body">
																		A Orixy has its own IP address, which is made public instead. While a rather seemingly insignificant change, the Orixy IP address can be used for a number of vital business functions related to everything from security to customer experience.
																	</div>
																</div>
															</div>
															<div className="accordion-item">
																<h2 className="accordion-header" id="heading7">
																	<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
																		What payment methods are available?
																	</button>
																</h2>
																<div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample_3">
																	<div className="accordion-body">
																		A Orixy has its own IP address, which is made public instead. While a rather seemingly insignificant change, the Orixy IP address can be used for a number of vital business functions related to everything from security to customer experience.
																	</div>
																</div>
															</div>
															<div className="accordion-item">
																<h2 className="accordion-header" id="heading8">
																	<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
																		What makes Orixy best creative template?
																	</button>
																</h2>
																<div id="collapse8" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample_3">
																	<div className="accordion-body">
																		A Orixy has its own IP address, which is made public instead. While a rather seemingly insignificant change, the Orixy IP address can be used for a number of vital business functions related to everything from security to customer experience.
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											}
											{
												tab == 3&&
												<div className="tab-pane animated fadeInUp show active" id="contact" role="tabpanel" aria-labelledby="contact-tab">
													<div className="ori-faq-accordion-item-area">
														<div className="accordion" id="accordionExample_31">
															<div className="accordion-item">
																<h2 className="accordion-header" id="heading10">
																	<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="true" aria-controls="collapse10">
																		Why Orixy is so popular than others
																	</button>
																</h2>
																<div id="collapse10" className="accordion-collapse collapse show" aria-labelledby="heading10" data-bs-parent="#accordionExample_31">
																	<div className="accordion-body">
																		A Orixy has its own IP address, which is made public instead. While a rather seemingly insignificant change, the Orixy IP address can be used for a number of vital business functions related to everything from security to customer experience.
																	</div>
																</div>
															</div>
															<div className="accordion-item">
																<h2 className="accordion-header" id="heading12">
																	<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
																		How can we get the best from Orixy template?
																	</button>
																</h2>
																<div id="collapse12" className="accordion-collapse collapse" aria-labelledby="heading12" data-bs-parent="#accordionExample_31">
																	<div className="accordion-body">
																		A Orixy has its own IP address, which is made public instead. While a rather seemingly insignificant change, the Orixy IP address can be used for a number of vital business functions related to everything from security to customer experience.
																	</div>
																</div>
															</div>
															<div className="accordion-item">
																<h2 className="accordion-header" id="heading13">
																	<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
																		What payment methods are available?
																	</button>
																</h2>
																<div id="collapse13" className="accordion-collapse collapse" aria-labelledby="heading13" data-bs-parent="#accordionExample_31">
																	<div className="accordion-body">
																		A Orixy has its own IP address, which is made public instead. While a rather seemingly insignificant change, the Orixy IP address can be used for a number of vital business functions related to everything from security to customer experience.
																	</div>
																</div>
															</div>
															<div className="accordion-item">
																<h2 className="accordion-header" id="heading15">
																	<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
																		What makes Orixy best creative template?
																	</button>
																</h2>
																<div id="collapse15" className="accordion-collapse collapse" aria-labelledby="heading15" data-bs-parent="#accordionExample_31">
																	<div className="accordion-body">
																		A Orixy has its own IP address, which is made public instead. While a rather seemingly insignificant change, the Orixy IP address can be used for a number of vital business functions related to everything from security to customer experience.
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											}
											{
												tab == 4&&
												<div className="tab-pane animated fadeInUp show active" id="support" role="tabpanel" aria-labelledby="support-tab">
													<div className="ori-faq-accordion-item-area">
														<div className="accordion" id="accordionExample_4">
															<div className="accordion-item">
																<h2 className="accordion-header" id="heading17">
																	<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse17" aria-expanded="true" aria-controls="collapse17">
																		Why Orixy is so popular than others
																	</button>
																</h2>
																<div id="collapse17" className="accordion-collapse collapse show" aria-labelledby="heading17" data-bs-parent="#accordionExample_4">
																	<div className="accordion-body">
																		A Orixy has its own IP address, which is made public instead. While a rather seemingly insignificant change, the Orixy IP address can be used for a number of vital business functions related to everything from security to customer experience.
																	</div>
																</div>
															</div>
															<div className="accordion-item">
																<h2 className="accordion-header" id="heading18">
																	<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse18" aria-expanded="false" aria-controls="collapse18">
																		How can we get the best from Orixy template?
																	</button>
																</h2>
																<div id="collapse18" className="accordion-collapse collapse" aria-labelledby="heading18" data-bs-parent="#accordionExample_4">
																	<div className="accordion-body">
																		A Orixy has its own IP address, which is made public instead. While a rather seemingly insignificant change, the Orixy IP address can be used for a number of vital business functions related to everything from security to customer experience.
																	</div>
																</div>
															</div>
															<div className="accordion-item">
																<h2 className="accordion-header" id="heading19">
																	<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse19" aria-expanded="false" aria-controls="collapse19">
																		What payment methods are available?
																	</button>
																</h2>
																<div id="collapse19" className="accordion-collapse collapse" aria-labelledby="heading19" data-bs-parent="#accordionExample_4">
																	<div className="accordion-body">
																		A Orixy has its own IP address, which is made public instead. While a rather seemingly insignificant change, the Orixy IP address can be used for a number of vital business functions related to everything from security to customer experience.
																	</div>
																</div>
															</div>
															<div className="accordion-item">
																<h2 className="accordion-header" id="heading20">
																	<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse20" aria-expanded="false" aria-controls="collapse20">
																		What makes Orixy best creative template?
																	</button>
																</h2>
																<div id="collapse20" className="accordion-collapse collapse" aria-labelledby="heading20" data-bs-parent="#accordionExample_4">
																	<div className="accordion-body">
																		A Orixy has its own IP address, which is made public instead. While a rather seemingly insignificant change, the Orixy IP address can be used for a number of vital business functions related to everything from security to customer experience.
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											}
										</div>
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
			<section id="ori-faq-price" className="ori-faq-price-section position-relative">
				<div className="container">
					<div className="ori-inner-section-title">
						<span className="sub-title text-uppercase">PRICING PLANS</span>
						<h2>Our Affordable Pricing Plans</h2>
					</div>
					<div className="ori-faq-price-content">
						<div className="row justify-content-center">
							<div className="col-lg-4 col-md-6">
								<div className="ori-faq-price-inner-item">
									<div className="ori-faq-price-title">
										<span className="price-plan text-uppercase">STANDARD</span>
										<h3>$160.00 <span>Per month</span></h3>
									</div>
									<div className="ori-faq-price-slug">
										Perfect for Professional
									</div>
									<div className="ori-faq-price-list ul-li-block">
										<ul>
											<li><FontAwesomeIcon icon={faAngleRight} />Up to 100 keyphrases otimized</li>
											<li><FontAwesomeIcon icon={faAngleRight} />Custom dashboards: 4</li>
											<li><FontAwesomeIcon icon={faAngleRight} />Digital marketing expert</li>
											<li><FontAwesomeIcon icon={faAngleRight} />Content, and link monitoring</li>
											<li><FontAwesomeIcon icon={faAngleRight} />Content marketing assets: 4</li>
											<li><FontAwesomeIcon icon={faAngleRight} />Upload your document</li>
											<li><FontAwesomeIcon icon={faAngleRight} />Export PDF</li>
										</ul>
									</div>
									<div className="ori-faq-price-btn text-center text-uppercase">
										<Link href="#">purchase now</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="ori-faq-price-inner-item">
									<div className="ori-faq-price-title">
										<span className="price-plan text-uppercase">ultra</span>
										<h3>$180.00 <span>Per month</span></h3>
									</div>
									<div className="ori-faq-price-slug">
										Perfect for Professional
									</div>
									<div className="ori-faq-price-list ul-li-block">
										<ul>
											<li><FontAwesomeIcon icon={faAngleRight} />Up to 100 keyphrases otimized</li>
											<li><FontAwesomeIcon icon={faAngleRight} />Custom dashboards: 4</li>
											<li><FontAwesomeIcon icon={faAngleRight} />Digital marketing expert</li>
											<li><FontAwesomeIcon icon={faAngleRight} />Content, and link monitoring</li>
											<li><FontAwesomeIcon icon={faAngleRight} />Content marketing assets: 4</li>
											<li><FontAwesomeIcon icon={faAngleRight} />Upload your document</li>
											<li><FontAwesomeIcon icon={faAngleRight} />Export PDF</li>
										</ul>
									</div>
									<div className="ori-faq-price-btn text-center text-uppercase">
										<Link href="#">purchase now</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="ori-faq-price-inner-item">
									<div className="ori-faq-price-title">
										<span className="price-plan text-uppercase">premium</span>
										<h3>$210.00 <span>Per month</span></h3>
									</div>
									<div className="ori-faq-price-slug">
										Perfect for Professional
									</div>
									<div className="ori-faq-price-list ul-li-block">
										<ul>
											<li><FontAwesomeIcon icon={faAngleRight} />Up to 100 keyphrases otimized</li>
											<li><FontAwesomeIcon icon={faAngleRight} />Custom dashboards: 4</li>
											<li><FontAwesomeIcon icon={faAngleRight} />Digital marketing expert</li>
											<li><FontAwesomeIcon icon={faAngleRight} />Content, and link monitoring</li>
											<li><FontAwesomeIcon icon={faAngleRight} />Content marketing assets: 4</li>
											<li><FontAwesomeIcon icon={faAngleRight} />Upload your document</li>
											<li><FontAwesomeIcon icon={faAngleRight} />Export PDF</li>
										</ul>
									</div>
									<div className="ori-faq-price-btn text-center text-uppercase">
										<Link href="#">purchase now</Link>
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
			<section id="ori-sponsor-1" className="ori-sponsor-section-1 inner-sponsor position-relative">
				<div className="container">
					<div className="ori-sponsor-title text-uppercase text-center">
						<h3><i></i> <span>Trusted by</span><i></i></h3>
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
		</div>
	);
};
export default Faq;
