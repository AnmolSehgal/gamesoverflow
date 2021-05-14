import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>Resourses</Footer.Title>
                    <Footer.Link href="#">Support-A-Creator</Footer.Link>
                    <Footer.Link href="#">Publish on Gamesoverflow</Footer.Link>
                    <Footer.Link href="#">Careers</Footer.Link>
                    <Footer.Link href="#">Company</Footer.Link>

                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Made By Us</Footer.Title>
                    <Footer.Link href="#">BattleBreakers</Footer.Link>
                    <Footer.Link href="#">Shadow Complex</Footer.Link>
                    <Footer.Link href="#">Fortnite</Footer.Link>
                    <Footer.Link href="#">Robo Recall</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">United States</Footer.Link>
                    <Footer.Link href="#">United Kingdom</Footer.Link>
                    <Footer.Link href="#">Australia</Footer.Link>
                    <Footer.Link href="#">Support</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Twitter</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Github</Footer.Link>
        
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
            <hr/>
            <div style = {{width : '600px'}}>
            <p style={{ color : '#a9a9a9', fontSize : "13px"}}>
            © 2021, Gamesoverflow, Inc. All rights reserved, Gamesoverflow, the Gamesoverflow logo, Fortnite, the Fortnite
             logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are 
             trademarks or registered trademarks of Gamesoverflow, Inc. in the India and elsewhere. Other brands or
              product names are the trademarks of their respective owners.If this Policy is translated into any other language,
               and there is any inconsistency or conflict between the English and translated versions of this Policy, the English version shall prevail.  
            <br/>
            <br/>
            <br/>
            <br/>
            </p>
            </div>
           
            <a style={{color:"#cccccc", textDecoration:"none"}} href="#">Terms of service</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a style={{color:"#cccccc", textDecoration:"none"}} href="#">Privacy Policy</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a style={{color:"#cccccc", textDecoration:"none"}} href="#">Store Refund policy</a><img style={{float:"right"}} src="#" alt="Logo"/>

        </Footer>
    )
}