import React from 'react'
import Image from 'next/image'

const PortfolioSingle = () => {
    return (
        <div>
            <section id="ori-breadcrumbs" class="ori-breadcrumbs-section position-relative" data-background="/assets/img/bg/bread-bg.png">
                <div class="container">
                    <div class="ori-breadcrumb-content text-center ul-li">
                        <h1>Portfolio Details</h1>
                        <ul>
                            <li><a href="index.html">orixy</a></li>
                            <li>Portfolio Details</li>
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
            <section id="ori-portfolio-details" class="ori-portfolio-details-section position-relative">
                <div class="container">
                    <div class="ori-portfolio-details-content">
                        <div class="ori-portfolio-details-video-play">
                            <div class="ori-about-play-area position-relative">
                                <div class="ori-about-play-img">
                                    <Image width={1920} height={756} src="/assets/img/project/prd.png" alt="" />
                                </div>
                                <div class="about-play-btn position-absolute">
                                    <a class="text-uppercase video_box d-flex align-items-center justify-content-center" href="https://www.youtube.com/watch?v=bIoPkZRVll">Play</a>
                                </div>
                            </div>
                        </div>
                        <div class="ori-portfolio-details-text-info-wrapper">
                            <div class="row">
                                <div class="col-lg-8">
                                    <div class="ori-portfolio-details-text-wrap pera-content">
                                        <div class="ori-portfolio-details-text">
                                            <h3>Project Description</h3>
                                            <p>UX design refers to the term “user experience design”, while UI stands for “user interface design”. Both elements are crucial to a product and work closely together. But despite their professional relationship, the roles themselves are quite different, referring to very different aspects of the product development process and the design discipline.</p>
                                            <p>In relation to websites and apps, UI design considers the look, feel, and interactivity of the product. It’s all about making sure that the user interface of a product is as intuitive as possible, and that means carefully considering each and every visual,</p>
                                        </div>
                                        <div class="ori-portfolio-details-text">
                                            <h3>Problems</h3>
                                            <p>The challenges run from mundane to weird, and old-fashioned to futuristic, but most are kept as open as possible. It’s a good idea to limit yourself by imposing some assumptions, constraints, and a platform (mobile / desktop / tablet etc). If working in pairs, one person could pick a problem, and the partner could refine it. So choose one of the following, decide on a mobile or desktop solution, and then keep asking questions.</p>
                                        </div>
                                        <div class="ori-portfolio-details-text clearfix ul-li-block">
                                            <h3>Solutions</h3>
                                            <ul>
                                                <li>Full business control </li>
                                                <li>Regular update monitoring </li>
                                                <li>User dashboard & analytics  </li>
                                                <li>User dashboard & analytics </li>
                                                <li> Custom reporting </li>
                                                <li>Regular update monitoring </li>
                                                <li> 24/7 priority support </li>
                                                <li>Full business control </li>
                                                <li>User dashboard & analytics </li>
                                                <li> Custom reporting </li>
                                            </ul>
                                        </div>
                                        <div class="ori-portfolio-details-text">
                                            <h3>Results</h3>
                                            <p>Many UX designers, developers, and entrepreneurs take pride in how hard it was to solve hard challenges. I don’t. I hope to convince you not to either.  I’m known for enjoying the process of solving impossible problems, but the way I do it is not obvious.  I didn’t invent this method. I learned it first-hand from a master.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="ori-portfolio-details-info ul-li-block">
                                        <h3>Information</h3>
                                        <ul>
                                            <li>client : <span>Orixy Theme</span></li>
                                            <li>category : <span>UI/UX Design</span></li>
                                            <li>duration : <span>3 Months</span></li>
                                            <li>Website : <span>Orixy@mail.com</span></li>
                                            <li>Tags : <span>Branding, profolio</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ori-portfolio-details-tag-share d-flex justify-content-between align-items-center">
                            <div class="ori-portfolio-details-tag">
                                <a href="portfolio.html">design</a>
                                <a href="portfolio.html">technology</a>
                                <a href="portfolio.html">wordpress</a>
                            </div>
                            <div class="ori-portfolio-details-share">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-youtube"></i></a>
                            </div>
                        </div>
                        {/* <div class="ori-single-details-prev-next-btn  d-flex align-items-center justify-content-between">
                            <div class="ori-single-prev-btn text-uppercase">
                                <a href="portfolio.html"><Image width={100000} height={100000} src="/assets/img/vector/prev.png" alt="" /> previous</a>
                            </div>
                            <div class="ori-single-next-btn text-uppercase">
                                <a href="portfolio.html">next <Image width={100000} height={100000} src="/assets/img/vector/next.png" alt="" /></a>
                            </div>
                        </div> */}
                        <div class="ori-recent-portfolio-area">
                            <h3>Related Projects</h3>
                            <div class="ori-recent-portfolio-item-area">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="ori-portfolio-item position-relative">
                                            <div class="portfolio-img">
                                                <Image width={100000} height={100000} src="/assets/img/service/ser1.png" alt="" />
                                            </div>
                                            <div class="portfolio-text">
                                                <span class="port-category text-uppercase"><a href="portfolio.html">Web design</a></span>
                                                <h3><a href="portfolio-single.html">Effective solution For Your Business</a></h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="ori-portfolio-item position-relative">
                                            <div class="portfolio-img">
                                                <Image width={100000} height={100000} src="/assets/img/service/ser2.png" alt="" />
                                            </div>
                                            <div class="portfolio-text">
                                                <span class="port-category text-uppercase"><a href="portfolio.html">Web design</a></span>
                                                <h3><a href="portfolio-single.html">Effective solution For Your Business</a></h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="ori-portfolio-item position-relative">
                                            <div class="portfolio-img">
                                                <Image width={100000} height={100000} src="/assets/img/service/ser3.png" alt="" />
                                            </div>
                                            <div class="portfolio-text">
                                                <span class="port-category text-uppercase"><a href="portfolio.html">Web design</a></span>
                                                <h3><a href="portfolio-single.html">Effective solution For Your Business</a></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div class="ori-comment-list-wrap ul-li-block">
                            <h3>Comments <span>(02)</span></h3>
                            <ul>
                                <li>
                                    <div class="ori-comment-item d-flex pera-content">
                                        <div class="ori-comment-img">
                                            <Image width={100000} height={100000} src="/assets/img/blog/bca1.png" alt="" />
                                        </div>
                                        <div class="ori-comment-text">
                                            <div class="author-name-date">
                                                by Benjamin / <span>July 28, 2022</span>
                                            </div>
                                            <p>Many UX designers, developers, and entrepreneurs take pride in how hard it was to solve hard challenges. I don’t. I hope to convince you not to either.  I’m known for enjoying the process of solving impossible problems, I learned it first-hand from a master. </p>
                                            <div class="ori-like-reply text-uppercase">
                                                <a href="#">Like</a>
                                                <a href="#">reply</a>
                                            </div>
                                        </div>
                                    </div>
                                    <ul class="children-comment">
                                        <li>
                                            <div class="ori-comment-item d-flex pera-content">
                                                <div class="ori-comment-img">
                                                    <Image width={100000} height={100000} src="/assets/img/blog/bca1.png" alt="" />
                                                </div>
                                                <div class="ori-comment-text">
                                                    <div class="author-name-date">
                                                        by Benjamin / <span>July 28, 2022</span>
                                                    </div>
                                                    <p>Many UX designers, developers, and entrepreneurs take pride in how hard it was to solve hard challenges. I don’t. I hope to convince you not to either.  I’m known for enjoying the process of solving impossible problems, I learned it first-hand from a master. </p>
                                                    <div class="ori-like-reply text-uppercase">
                                                        <a href="#">Like</a>
                                                        <a href="#">reply</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div> */}
                        <div class="ori-single-comment-form pera-content">
                            <h3>Leave a Reply</h3>
                            <p>Your email address will not be published. Required fields are marked * </p>
                            <form action="#" method="get">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <label>Name</label>
                                        <input type="text" name="name" placeholder="John Barham" />
                                    </div>
                                    <div class="col-lg-6">
                                        <label>Email</label>
                                        <input type="text" name="email" placeholder="alma.lawson@example.com" />
                                    </div>
                                    <div class="col-lg-12">
                                        <label>Website</label>
                                        <input type="text" name="name" placeholder="google.fr" />
                                    </div>
                                    <div class="col-lg-12">
                                        <label>Message</label>
                                        <textarea name="massege" placeholder="Simultaneously we had a problem"></textarea>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="ori-submit-btn text-center">
                                            <button type="submit">Submit Now</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
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
        </div>
    )
}

export default PortfolioSingle