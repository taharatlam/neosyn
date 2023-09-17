import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const TeamCard = () => {
  return (
    <div className="ori-team-inner-item position-relative">
                  <div className="ori-team-img">
                    <Image width={100000} height={10000} className="w-full h-auto" src="/img/team/tm1.png" alt="" />
                  </div>
                  <div className="ori-team-text text-center position-absolute">
                    <h3>
                      <Link href="team-single.html">Alextina Ditarson</Link>
                    </h3>
                    <span>GRAPHIC DESIGNER</span>
                  </div>
                  <div className="ori-team-social text-center position-absolute">
                    <Link href="#">
                      {/* <i className="fab fa-facebook-f"></i> */}
                      <FontAwesomeIcon icon={faFacebook} />
                    </Link>
                    <Link href="#">
                      {/* <i className="fab fa-twitter"></i> */}
                      <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                    <Link href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                    <Link href="#">
                    <FontAwesomeIcon icon={faYoutube} />
                    </Link>
                  </div>
                </div>
  )
}

export default TeamCard