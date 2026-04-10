import './_HomePage.scss';

import videoBackground from "./img/videoBackground.webm";

const HomePage = () => {
     return (
         <section className="HomePage">
                <div className="HomePage__background">
                    <video autoPlay muted playsInline loop src={videoBackground} />
                </div>
            <div className="HomePage__container">

                <h2 className='HomePage__title title'>
                    <div>ООО «Югспецавтоматика»</div>
                     Строительство, техперевооружение, реконструкция, пусконаладка на объектах энергетического и нефтегазового комплекса
                </h2>
            </div>
         </section>
     )
}
export default HomePage;