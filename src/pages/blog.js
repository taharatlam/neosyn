import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
const Blog = () => {
	const [domLoaded, setDomLoaded] = useState(false);
	useEffect(() => {
		setDomLoaded(true)
	}, [])
	return (
		domLoaded &&
		<div>
			<section id="ori-breadcrumbs" className="ori-breadcrumbs-section position-relative" data-background="assets/img/bg/bread-bg.png">
				<div className="container">
					<div className="ori-breadcrumb-content text-center ul-li">
						<h1>News & Blog</h1>
						<ul>
							<li><Link href="index.html">orixy</Link></li>
							<li>News & Blog</li>
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
			<section id="ori-blog-feed" className="ori-blog-feed-section position-relative">
				<div className="container">
					<div className="ori-blog-feed-content">
						<div className="row">
							<div className="col-lg-4">
								<div className="ori-blog-sidebar">
									<div className="ori-blog-widget">
										<div className="search-widget">
											<h3 className="widget-title">Search</h3>
											<form action="#">
												<input type="text" name="search" placeholder="Search your keyword" />
												<button><i className="fal fa-search"></i></button>
											</form>
										</div>
									</div>
									<div className="ori-blog-widget">
										<div className="recent-post-widget">
											<h3 className="widget-title">Related Posts</h3>
											<div className="ori-recent-post-item d-flex align-items-center">
												<div className="recent-blog-img">
													<Image width={100000} height={10000} className="w-full h-auto" src="/img/blog/rec1.png" alt="" />
												</div>
												<div className="recent-blog-text">
													<span className="date-meta text-uppercase">July 25,2022 </span>
													<h3><Link href="blog-single.html">We Advocate Swapping Screen Time </Link></h3>
												</div>
											</div>
											<div className="ori-recent-post-item d-flex align-items-center">
												<div className="recent-blog-img">
													<Image width={100000} height={10000} className="w-full h-auto" src="/img/blog/rec2.png" alt="" />
												</div>
												<div className="recent-blog-text">
													<span className="date-meta text-uppercase">July 28,2022 </span>
													<h3><Link href="blog-single.html">Zechsal Magnesium flakes especially</Link> </h3>
												</div>
											</div>
											<div className="ori-recent-post-item d-flex align-items-center">
												<div className="recent-blog-img">
													<Image width={100000} height={10000} className="w-full h-auto" src="/img/blog/rec3.png" alt="" />
												</div>
												<div className="recent-blog-text">
													<span className="date-meta text-uppercase">July 21,2022 </span>
													<h3><Link href="blog-single.html">A Simple Social Media Marketing Checklist</Link> </h3>
												</div>
											</div>
										</div>
									</div>
									<div className="ori-blog-widget">
										<div className="service-widget ul-li-block">
											<h3 className="widget-title">Services</h3>
											<ul>
												<li><Link href="blog.html">design<span>(3)</span></Link></li>
												<li><Link href="blog.html">Development<span>(7)</span> </Link></li>
												<li><Link href="blog.html">Digital Marketing<span>(5)</span></Link> </li>
												<li><Link href="blog.html">Software<span>(2)</span></Link></li>
												<li><Link href="blog.html">Business<span>(8)</span></Link></li>
												<li><Link href="blog.html">seo <span>(4)</span></Link></li>
											</ul>
										</div>
									</div>
									<div className="ori-blog-widget">
										<div className="tag-widget ul-li">
											<h3 className="widget-title">Tags</h3>
											<ul>
												<li><Link href="blog.html">design</Link></li>
												<li><Link href="blog.html">digital</Link></li>
												<li><Link href="blog.html">Content</Link></li>
												<li><Link href="blog.html">innovation</Link></li>
												<li><Link href="blog.html">marketing</Link></li>
												<li><Link href="blog.html">mobile</Link></li>
												<li><Link href="blog.html">tech</Link></li>
												<li><Link href="blog.html">technology</Link></li>
												<li><Link href="blog.html">web</Link></li>
												<li><Link href="blog.html">wordpress</Link></li>
											</ul>
										</div>
									</div>
									<div className="ori-blog-widget">
										<div className="gallery-widget ul-li">
											<h3 className="widget-title">Gallery</h3>
											<ul className="zoom-gallery">
												<li><Link href="assets/img/blog/blg-f5.png" data-source="assets/img/blog/blg-f5.png"><Image width={100000} height={10000} className="w-full h-auto" src="/img/gallery/gl1.png" alt="" /></Link></li>
												<li><Link href="assets/img/blog/blg-f5.png" data-source="assets/img/blog/blg-f5.png"><Image width={100000} height={10000} className="w-full h-auto" src="/img/gallery/gl2.png" alt="" /></Link></li>
												<li><Link href="assets/img/blog/blg-f5.png" data-source="assets/img/blog/blg-f5.png"><Image width={100000} height={10000} className="w-full h-auto" src="/img/gallery/gl3.png" alt="" /></Link></li>
												<li><Link href="assets/img/blog/blg-f5.png" data-source="assets/img/blog/blg-f5.png"><Image width={100000} height={10000} className="w-full h-auto" src="/img/gallery/gl4.png" alt="" /></Link></li>
												<li><Link href="assets/img/blog/blg-f5.png" data-source="assets/img/blog/blg-f5.png"><Image width={100000} height={10000} className="w-full h-auto" src="/img/gallery/gl5.png" alt="" /></Link></li>
												<li><Link href="assets/img/blog/blg-f5.png" data-source="assets/img/blog/blg-f5.png"><Image width={100000} height={10000} className="w-full h-auto" src="/img/gallery/gl6.png" alt="" /></Link></li>
											</ul>
										</div>
									</div>
									<div className="ori-blog-add-widget">
										<Link href="contact.html">
											<Image width={100000} height={10000} className="w-full h-auto" src="/img/blog/blg-add.png" alt="" />
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-8">
								<div className="ori-blog-feed-post-content">
									<div className="ori-blog-feed-post-item-wrap">
										<div className="ori-blog-feed-item">
											<div className="ori-blog-img">
												<Image width={100000} height={10000} className="w-full h-auto" src="/img/blog/blg-f1.png" alt="" />
											</div>
											<div className="ori-blog-text pera-content">
												<div className="blog-meta text-uppercase">
													<Link className="blog-cate" href="blog.html"><i className="fas fa-file"></i> business</Link>
													<Link className="blog-author" href="blog.html"><i className="fas fa-user"></i> orixy</Link>
													<Link className="blog-date" href="blog.html"><i className="fas fa-calendar-alt"></i> July 28,2022</Link>
													<Link className="blog-comment" href="#"><i className="fas fa-comment"></i> 05</Link>
												</div>
												<h3><Link href="blog-single.html">How to Optimise and Webinar to Earn Leads</Link></h3>
												<p>Research by American Marketing Association states that 60% of marketers include webinars in their marketing strategy. A survey by Curata also backs the importance of webinars where 79% of buyers are ready to share their contact details in exchange for webinar access.</p>
												<Link className="blog-more text-uppercase" href="blog-single.html">CONTINUE READING  <i className="fal fa-arrow-right"></i></Link>
											</div>
										</div>
										<div className="ori-blog-feed-item">
											<div className="ori-blog-img position-relative">
												<Image width={100000} height={10000} className="w-full h-auto" src="/img/blog/blg-f2.png" alt="" />
												<div className="about-play-btn position-absolute">
													<Link className="text-uppercase video_box d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=bIoPkZRVll"><i className="fas fa-play"></i></Link>
												</div>
											</div>
											<div className="ori-blog-text pera-content">
												<div className="blog-meta text-uppercase">
													<Link className="blog-cate" href="blog.html"><i className="fas fa-file"></i> business</Link>
													<Link className="blog-author" href="blog.html"><i className="fas fa-user"></i> orixy</Link>
													<Link className="blog-date" href="blog.html"><i className="fas fa-calendar-alt"></i> July 28,2022</Link>
													<Link className="blog-comment" href="#"><i className="fas fa-comment"></i> 05</Link>
												</div>
												<h3><Link href="blog-single.html">How to Optimise and Webinar to Earn Leads</Link></h3>
												<p>Research by American Marketing Association states that 60% of marketers include webinars in their marketing strategy. A survey by Curata also backs the importance of webinars where 79% of buyers are ready to share their contact details in exchange for webinar access.</p>
												<Link className="blog-more text-uppercase" href="blog-single.html">CONTINUE READING  <i className="fal fa-arrow-right"></i></Link>
											</div>
										</div>
										<div className="ori-blog-feed-item">
											<div className="ori-blog-img">
												<Image width={100000} height={10000} className="w-full h-auto" src="/img/blog/blg-f4.png" alt="" />
											</div>
											<div className="ori-blog-text pera-content">
												<div className="blog-meta text-uppercase">
													<Link className="blog-cate" href="blog.html"><i className="fas fa-file"></i> business</Link>
													<Link className="blog-author" href="blog.html"><i className="fas fa-user"></i> orixy</Link>
													<Link className="blog-date" href="blog.html"><i className="fas fa-calendar-alt"></i> July 28,2022</Link>
													<Link className="blog-comment" href="#"><i className="fas fa-comment"></i> 05</Link>
												</div>
												<h3><Link href="blog-single.html">How to Optimise and Webinar to Earn Leads</Link></h3>
												<p>Research by American Marketing Association states that 60% of marketers include webinars in their marketing strategy. A survey by Curata also backs the importance of webinars where 79% of buyers are ready to share their contact details in exchange for webinar access.</p>
												<Link className="blog-more text-uppercase" href="blog-single.html">CONTINUE READING  <i className="fal fa-arrow-right"></i></Link>
											</div>
										</div>
										{/* <div className="ori-blog-feed-item">
											<div className="ori-blog-img position-relative">
												<div className="ori-blog-img-slide">
													<div className="ori-slide-img">
														<Image width={100000} height={10000} className="w-full h-auto" src="/img/blog/blg-f1.png" alt="" />
													</div>
													<div className="ori-slide-img">
														<Image width={100000} height={10000} className="w-full h-auto" src="/img/blog/blg-f2.png" alt="" />
													</div>
													<div className="ori-slide-img">
														<Image width={100000} height={10000} className="w-full h-auto" src="/img/blog/blg-f3.png" alt="" />
													</div>
												</div>
												<div className="carousel_nav">
													<button type="button" className="blogFeed-left_arrow"><Image width={100000} height={10000} className="w-full h-auto" src="/img/vector/prev.png" alt="" /></button>
													<button type="button" className="blogFeed-right_arrow"><Image width={100000} height={10000} className="w-full h-auto" src="/img/vector/next.png" alt="" /></button>
												</div>
											</div>
											<div className="ori-blog-text pera-content">
												<div className="blog-meta text-uppercase">
													<Link className="blog-cate" href="blog.html"><i className="fas fa-file"></i> business</Link>
													<Link className="blog-author" href="blog.html"><i className="fas fa-user"></i> orixy</Link>
													<Link className="blog-date" href="blog.html"><i className="fas fa-calendar-alt"></i> July 28,2022</Link>
													<Link className="blog-comment" href="#"><i className="fas fa-comment"></i> 05</Link>
												</div>
												<h3><Link href="blog-single.html">How to Optimise and Webinar to Earn Leads</Link></h3>
												<p>Research by American Marketing Association states that 60% of marketers include webinars in their marketing strategy. A survey by Curata also backs the importance of webinars where 79% of buyers are ready to share their contact details in exchange for webinar access.</p>
												<Link className="blog-more text-uppercase" href="blog-single.html">CONTINUE READING  <i className="fal fa-arrow-right"></i></Link>
											</div>
										</div> */}
									</div>
									{/* <div className="ori-pagination-wrap ul-li">
										<ul>
											<li><Link href="#"><i className="fal fa-arrow-left"></i></Link></li>
											<li><Link href="#">1</Link></li>
											<li><Link href="#">2</Link></li>
											<li><Link href="#">3</Link></li>
											<li><Link href="#"><i className="fal fa-arrow-right"></i></Link></li>
										</ul>
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
		</div>
	);
};
export default Blog;