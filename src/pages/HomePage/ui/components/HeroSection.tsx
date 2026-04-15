import videoBackground from "../img/videoBackground.webm";

const HeroSection = () => {
    return (
        <section className="HeroSection section">
            <div className="HeroSection__background">
                <video key={Date.now()} autoPlay muted playsInline loop >
                    <source src={videoBackground} type="video/webm" />
                    Ваш браузер не поддерживает встроенные видео
                </video>
            </div>
            
            <div className="HeroSection__container">
                <h2 className='HeroSection__title'>
                    <div>ООО «Югспецавтоматика»</div>
                    Строительство, техперевооружение, реконструкция, пусконаладка на объектах энергетического и нефтегазового комплекса
                </h2>
            </div>
        </section>
    ) 
} 

export {HeroSection};