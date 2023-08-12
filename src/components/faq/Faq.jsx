import '../faq/faqs.css'
import NavBar from '../nav_bar/Nav';

function Faq() {
    return(
        <>
            <NavBar/>
         <div class="Container-root">
        <h1 class="header-text">Frequenctly Asked <p class="colored-texts">Question</p></h1>
   
    <div class="faq_images_container">
        <img src="images/natural.jpeg" alt=""/>
    </div>
    <div class="faq_faq_container">
        <div class="mantine-grid">
            <div class="mantine-root">
                <div class="faq_faq_header">
                    <h1 class="colored-texts">FAQs</h1>
                    <img class="" src="images/arrow-down-right.svg" alt=""/>
                </div>
                <div>
                    <p class="faq_contact_text">Can't find the answer you're looking for?</p>
                    <a class="faq_faq_links" href="">Contact Our Team</a>
                </div>
            </div>
         <div class="mantine-root">
                <div class="mantine-1">
                    <div class="faq_accordio_item">
                        <div class="mantine-accordio">
                            <div>
                                <img src="" alt=""/>
                            </div>
                             <div class=" faq_Accordio_label ">
    
                                    <div class="faq_question"><a href="">Orders + Account</a></div>
                                    <div class="faq_answer"><div>
                                        <a href="">How can I track my order?</a>
                                    </div>
                                        <a href="">My plant or pot arrived damaged, what to do?</a></div>
                                <a href="">See all articles</a>
                        </div>
                        </div>
                        
        
                        <div class="mantine-accordio">

                            <div>
                                <img src="" alt=""/>
                            </div> 
                             <div class="mantine-pildck faq_Accordio_label ">
                                <div class="faq_question"><a href="">Delivey</a></div>
                                <div class="faq_answer"><div>
                                    <a href="">When will your package arived</a>
                                </div>
                                    <a href="">Express Shipping</a></div>
                            <a href="">See all articles</a>
                        </div>

                        </div>

                        <div class="mantine-accordio">

                            <div>
                                <img src="" alt=""/>
                            </div> 
                             <div class="mantine-pildck faq_Accordio_label ">
                            <a href="https://www.google.com">Payments</a>
                
                                <div>
                                    <a href="">When will I be charged for my Plant next order?</a>
                                </div>
                                <div>
                                    <a href="">Where do I enter my credit card?</a>
                                </div>
                                      
                                <a href="">See all articles</a>
                           
                        </div>

                        </div>
                        <div class="mantine-accordio">

                            <div>
                                <img src="" alt=""/>
                            </div> 
                             <div class="mantine-pildck faq_Accordio_label ">
                            <a href="#">How do I open my Stock FX Account</a>
                        </div>

                        </div>
                        <div class="mantine-accordio">

                            <div>
                                <img src="" alt=""/>
                            </div> 
                             <div class="mantine-pildck faq_Accordio_label ">
                            <a href="">How do I open my Stock FX Account</a>
                        </div>

                        </div>
                    </div>
                        </div>  
                    </div>
                </div>
            </div>
            </div>
       
 
        </>
    )

}

export default Faq;