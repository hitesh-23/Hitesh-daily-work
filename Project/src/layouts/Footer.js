

    import React from 'react';
    import styled from "styled-components";
    import '../App.css';
    
    const Footer = () => {
        return (
            <div className="footer">
                <FooterContainer className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <h4>Contact us</h4>
                            <ul className="list-unstyled">
                                <li>Call : 1800-607-917</li>
                                <li>Call : 1800-456-543</li>
                                <li>Email : info@cityride.com</li>
                                <li>Twitter : @cityride</li>
                            </ul>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem ipsum</h4>
                            <ul className="list-unstyled">
                                <li><a href="#">Lorem Ipsum</a></li>
                                <li><a href="#">Lorem Ipsum</a></li>
                                <li><a href="#">Lorem Ipsum</a></li>
                                <li><a href="#">Lorem Ipsum</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem ipsum</h4>
                            <ul className="list-unstyled">
                            <li><a href="#">Lorem Ipsum</a></li>
                                <li><a href="#">Lorem Ipsum</a></li>
                                <li><a href="#">Lorem Ipsum</a></li>
                                <li><a href="#">Lorem Ipsum</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem ipsum</h4>
                            <ul className="list-unstyled">
                            <li><a href="#">Lorem Ipsum</a></li>
                                <li><a href="#">Lorem Ipsum</a></li>
                                <li><a href="#">Lorem Ipsum</a></li>
                                <li><a href="#">Lorem Ipsum</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Footer bottom */}
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy; {
                                new Date(). getFullYear()
                            }City Guide App - All Rights Reserved
                        </p>
                    </div>
                </div>
            </FooterContainer>
            </div>
        )
    }
    
    export default Footer;

    const FooterContainer = styled.footer`
    .footer-middle {
        background-color : var(--mainDark);
        padding-top : 3rem;
        color : var(--mainWhite);
    }

    .footer-bottom {
        padding-top : 3rem;
        padding-bottom : 2rem;
    }
    
    
    ul li a{
            color : var(--mainGrey);
    }
    
    ul li a:hover{
        color : var(--mainLightGrey);
    }
    `;

