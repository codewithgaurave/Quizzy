import "./Teamdetails.css";

export default function Teamdetails() {
    const error = '{Error}'
    return (
        <div className="teamdetails-container">
        <div className="teamdetails-section">
            <div className="teamdetails-upper">
                <p className="heading">More Details About Managing Team of #Team{error}</p>
                <p>
                Managing Team #Team{error} refers to the process of leading a group 
                focused on problem-solving and innovation within a collaborative framework.
                 This involves establishing clear goals, fostering open communication,
                 promoting a positive team culture,
                 and implementing agile practices to enhance productivity. 
                Effective management also includes leveraging team members' diverse strengths,
                 facilitating conflict resolution, 
                encouraging professional development, 
                and adapting to changing circumstances to achieve collective objectives.
                </p>
            </div>
            <div className="teamdetails-lower">
                <div className="teamdetails-card">
                    <div className="teamdetails">
                        <div className="bg-color"></div>
                        <img src="https://rainbowit.net/html/trydo/assets/images/team/team-11.jpg" alt="" />
                        <div className="teamdetails-inner">
                            <div className="member-name">Er. Gaurav Gupta</div>
                            <div className="member-title">Developer and Management</div>
                            <div className="member-text">Getting touch with us</div>
                            <div className="social-handle-wrapper">
                                <div><i class="ri-facebook-line"></i></div>
                                <div><i class="ri-instagram-line"></i></div>
                                <div><i class="ri-twitter-line"></i></div>
                                <div><i class="ri-linkedin-line"></i></div>
                                <div><i class="ri-whatsapp-line"></i></div>
                                <div><i class="ri-mail-add-line"></i></div>
                                <div><i class="ri-phone-line"></i></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="teamdetails-card">
                    <div className="teamdetails">
                        <div className="bg-color"></div>
                        <img src="https://rainbowit.net/html/trydo/assets/images/team/team-12.jpg" alt="" />
                        <div className="teamdetails-inner">
                            <div className="member-name">Er. Krishna Kumar</div>
                            <div className="member-title">CEO and Management</div>
                            <div className="member-text">Getting touch with us</div>
                            <div className="social-handle-wrapper">
                                <div><i class="ri-facebook-line"></i></div>
                                <div><i class="ri-instagram-line"></i></div>
                                <div><i class="ri-twitter-line"></i></div>
                                <div><i class="ri-linkedin-line"></i></div>
                                <div><i class="ri-whatsapp-line"></i></div>
                                <div><i class="ri-mail-add-line"></i></div>
                                <div><i class="ri-phone-line"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="teamdetails-card">
                    <div className="teamdetails">
                        <div className="bg-color"></div>
                        <img src="https://rainbowit.net/html/trydo/assets/images/team/team-01.jpg" alt="" />
                        <div className="teamdetails-inner">
                            <div className="member-name">Er. Prabhakar Rajput</div>
                            <div className="member-title">Logic Developer and Director</div>
                            <div className="member-text">Getting touch with us</div>
                            <div className="social-handle-wrapper">
                                <div><i class="ri-facebook-line"></i></div>
                                <div><i class="ri-instagram-line"></i></div>
                                <div><i class="ri-twitter-line"></i></div>
                                <div><i class="ri-linkedin-line"></i></div>
                                <div><i class="ri-whatsapp-line"></i></div>
                                <div><i class="ri-mail-add-line"></i></div>
                                <div><i class="ri-phone-line"></i></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </div>
    )
}