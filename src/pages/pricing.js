import LogoSlider from "@/component/LogoSlider";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
const Pricing = () => {
	const [domLoaded, setDomLoaded] = useState(false);
	useEffect(() => {
		setDomLoaded(true)
	}, [])
	return domLoaded &&<div>
		<section id="ori-breadcrumbs" class="ori-breadcrumbs-section position-relative" data-background="/img/bg/bread-bg.png">
			<div class="container">
				<div class="ori-breadcrumb-content text-center ul-li">
					<h1>Pricing Plans </h1>
					<ul>
						<li><Link href="index.html">orixy</Link></li>
						<li>Pricing Plans </li>
					</ul>
				</div>
			</div>
			<div class="line_animation">
				<div class="line_area"></div>
				<div class="line_area"></div>
				<div class="line_area"></div>
				<div class="line_area"></div>
				<div class="line_area"></div>
				<div class="line_area"></div>
				<div class="line_area"></div>
				<div class="line_area"></div>
			</div>
		</section>

		<section id="ori-price-plan" class="ori-price-plan-section position-relative">
			<div class="container">
				<div class="ori-inner-section-title text-center">
					<span class="sub-title text-uppercase">PRICING PLANS</span>
					<h2>Our Affordable Pricing Plans</h2>
				</div>
				<div class="ori-faq-price-content">
					<div class="row">
						<div class="col-lg-4 col-md-6">
							<div class="ori-faq-price-inner-item">
								<div class="ori-faq-price-title">
									<span class="price-plan text-uppercase">STANDARD</span>
									<h3>$160.00 <span>Per month</span></h3>
								</div>
								<div class="ori-faq-price-slug">
									Perfect for Professional
								</div>
								<div class="ori-faq-price-list ul-li-block">
									<ul>
										<li>Up to 100 keyphrases otimized</li>
										<li>Custom dashboards: 4</li>
										<li>Digital marketing expert</li>
										<li>Content, and link monitoring</li>
										<li>Content marketing assets: 4</li>
										<li>Upload your document</li>
										<li>Export PDF</li>
									</ul>
								</div>
								<div class="ori-faq-price-btn text-center text-uppercase">
									<Link href="#">purchase now</Link>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="ori-faq-price-inner-item">
								<div class="ori-faq-price-title">
									<span class="price-plan text-uppercase">ultra</span>
									<h3>$180.00 <span>Per month</span></h3>
								</div>
								<div class="ori-faq-price-slug">
									Perfect for Professional
								</div>
								<div class="ori-faq-price-list ul-li-block">
									<ul>
										<li>Up to 100 keyphrases otimized</li>
										<li>Custom dashboards: 4</li>
										<li>Digital marketing expert</li>
										<li>Content, and link monitoring</li>
										<li>Content marketing assets: 4</li>
										<li>Upload your document</li>
										<li>Export PDF</li>
									</ul>
								</div>
								<div class="ori-faq-price-btn text-center text-uppercase">
									<Link href="#">purchase now</Link>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="ori-faq-price-inner-item">
								<div class="ori-faq-price-title">
									<span class="price-plan text-uppercase">premium</span>
									<h3>$210.00 <span>Per month</span></h3>
								</div>
								<div class="ori-faq-price-slug">
									Perfect for Professional
								</div>
								<div class="ori-faq-price-list ul-li-block">
									<ul>
										<li>Up to 100 keyphrases otimized</li>
										<li>Custom dashboards: 4</li>
										<li>Digital marketing expert</li>
										<li>Content, and link monitoring</li>
										<li>Content marketing assets: 4</li>
										<li>Upload your document</li>
										<li>Export PDF</li>
									</ul>
								</div>
								<div class="ori-faq-price-btn text-center text-uppercase">
									<Link href="#">purchase now</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="line_animation">
				<div class="line_area"></div>
				<div class="line_area"></div>
				<div class="line_area"></div>
				<div class="line_area"></div>
				<div class="line_area"></div>
				<div class="line_area"></div>
				<div class="line_area"></div>
				<div class="line_area"></div>
			</div>
		</section>

		<section id="ori-sponsor-1" class="ori-sponsor-section-1 inner-sponsor position-relative">
			<div class="container">
				<div class="ori-sponsor-title text-uppercase text-center">
					<h3><i></i><span>Trusted by</span><i></i></h3>
				</div>
				<div class="ori-sponsor-content">
					<LogoSlider />
				</div>
			</div>
			<div class="line_animation">
				<div class="line_area"></div>
				<div class="line_area"></div>
				<div class="line_area"></div>
				<div class="line_area"></div>
				<div class="line_area"></div>
				<div class="line_area"></div>
				<div class="line_area"></div>
				<div class="line_area"></div>
			</div>
		</section>
	</div>;
};
export default Pricing;
