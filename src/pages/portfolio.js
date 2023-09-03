import Image from "next/image";
import Link from "next/link";
const Portfolio = () => {
  return <div>
    	<section id="ori-breadcrumbs" className="ori-breadcrumbs-section position-relative" data-background="/img/bg/bread-bg.png">
		<div className="container">
			<div className="ori-breadcrumb-content text-center ul-li">
				<h1>Portfolio Grid</h1>
				<ul>
					<li><Link href="index.html">orixy</Link></li>
					<li>Portfolio Grid</li>
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
<section id="ori-portfolio-feed" className="ori-portfolio-feed-section position-relative">
		<div className="container">
			<div className="ori-portfolio-filter-btn ul-li text-center">
				<ul id="filters" className="nav-gallery">
					<li className="filtr-button filtr-active" data-filter="all">see all</li>
					<li className="filtr-button" data-filter="1">Business</li>
					<li className="filtr-button" data-filter="2">Development</li>
					<li className="filtr-button" data-filter="3">Web Design </li>
					<li className="filtr-button" data-filter="4">ui/ux </li>
					<li className="filtr-button" data-filter="5">TECHNOLOGY</li>
				</ul>
			</div>
			<div className="ori-portfolio-feed-item-wrapper filtr-container row">
				<div className="col-lg-4 col-sm-6 filtr-item" data-category="1, 3, 4" data-sort="Busy streets">
					<div className="ori-portfolio-item position-relative">
						<div className="portfolio-img">
							<Image width={100000} height={10000} className="w-full h-auto" src="/img/service/ser1.png" alt=""/>
						</div>
						<div className="portfolio-text">
							<span className="port-category text-uppercase"><Link href="portfolio.html">Web design</Link></span>
							<h3><Link href="portfolio-single.html">Effective solution For Your Business</Link></h3>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-sm-6 filtr-item" data-category="2, 5, 4" data-sort="Busy streets">
					<div className="ori-portfolio-item position-relative">
						<div className="portfolio-img">
							<Image width={100000} height={10000} className="w-full h-auto" src="/img/service/ser2.png" alt=""/>
						</div>
						<div className="portfolio-text">
							<span className="port-category text-uppercase"><Link href="portfolio.html">Web design</Link></span>
							<h3><Link href="portfolio-single.html">Effective solution For Your Business</Link></h3>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-sm-6 filtr-item" data-category="3, 4" data-sort="Busy streets">
					<div className="ori-portfolio-item position-relative">
						<div className="portfolio-img">
							<Image width={100000} height={10000} className="w-full h-auto" src="/img/service/ser3.png" alt=""/>
						</div>
						<div className="portfolio-text">
							<span className="port-category text-uppercase"><Link href="portfolio.html">Web design</Link></span>
							<h3><Link href="portfolio-single.html">Effective solution For Your Business</Link></h3>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-sm-6 filtr-item" data-category="2,  4" data-sort="Busy streets">
					<div className="ori-portfolio-item position-relative">
						<div className="portfolio-img">
							<Image width={100000} height={10000} className="w-full h-auto" src="/img/project/pro4.png" alt=""/>
						</div>
						<div className="portfolio-text">
							<span className="port-category text-uppercase"><Link href="portfolio.html">Web design</Link></span>
							<h3><Link href="portfolio-single.html">Effective solution For Your Business</Link></h3>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-sm-6 filtr-item" data-category="1, 3" data-sort="Busy streets">
					<div className="ori-portfolio-item position-relative">
						<div className="portfolio-img">
							<Image width={100000} height={10000} className="w-full h-auto" src="/img/project/pro5.png" alt=""/>
						</div>
						<div className="portfolio-text">
							<span className="port-category text-uppercase"><Link href="portfolio.html">Web design</Link></span>
							<h3><Link href="portfolio-single.html">Effective solution For Your Business</Link></h3>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-sm-6 filtr-item" data-category="1, 2" data-sort="Busy streets">
					<div className="ori-portfolio-item position-relative">
						<div className="portfolio-img">
							<Image width={100000} height={10000} className="w-full h-auto" src="/img/project/pro6.png" alt=""/>
						</div>
						<div className="portfolio-text">
							<span className="port-category text-uppercase"><Link href="portfolio.html">Web design</Link></span>
							<h3><Link href="portfolio-single.html">Effective solution For Your Business</Link></h3>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-sm-6 filtr-item" data-category="2, 3, 5" data-sort="Busy streets">
					<div className="ori-portfolio-item position-relative">
						<div className="portfolio-img">
							<Image width={100000} height={10000} className="w-full h-auto" src="/img/project/pro7.png" alt=""/>
						</div>
						<div className="portfolio-text">
							<span className="port-category text-uppercase"><Link href="portfolio.html">Web design</Link></span>
							<h3><Link href="portfolio-single.html">Effective solution For Your Business</Link></h3>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-sm-6 filtr-item" data-category="5, 3, 4" data-sort="Busy streets">
					<div className="ori-portfolio-item position-relative">
						<div className="portfolio-img">
							<Image width={100000} height={10000} className="w-full h-auto" src="/img/project/pro8.png" alt=""/>
						</div>
						<div className="portfolio-text">
							<span className="port-category text-uppercase"><Link href="portfolio.html">Web design</Link></span>
							<h3><Link href="portfolio-single.html">Effective solution For Your Business</Link></h3>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-sm-6 filtr-item" data-category="5, 2, 4" data-sort="Busy streets">
					<div className="ori-portfolio-item position-relative">
						<div className="portfolio-img">
							<Image width={100000} height={10000} className="w-full h-auto" src="/img/project/pro9.png" alt=""/>
						</div>
						<div className="portfolio-text">
							<span className="port-category text-uppercase"><Link href="portfolio.html">Web design</Link></span>
							<h3><Link href="portfolio-single.html">Effective solution For Your Business</Link></h3>
						</div>
					</div>
				</div>
			</div>
			<div  className="ori-portfolio-more-btn text-center">
				<div className="ori-btn-1 text-uppercase">
					<Link href="#">load more projects</Link>
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
export default Portfolio;
