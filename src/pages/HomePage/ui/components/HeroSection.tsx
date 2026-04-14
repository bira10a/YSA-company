import videoBackground from "../img/videoBackground.webm";

const HeroSection = () => {
    return (
        <section className="HeroSection section">
            <div className="HeroSection__background">
                <video autoPlay muted playsInline loop src={videoBackground} />
            </div>
            
            <div className="HeroSection__container">
                <h2 className='HeroSection__title title'>
                    <div>ООО «Югспецавтоматика»</div>
                    Строительство, техперевооружение, реконструкция, пусконаладка на объектах энергетического и нефтегазового комплекса
                </h2>
            </div>
        </section>
    ) 
} 
export {HeroSection};