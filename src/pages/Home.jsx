import "../stylesheets/Home.scss";

import mainPhoto from "../img/p/main_desc.svg";
import mainPhotoTablet from "../img/p/main_tabl.png";
import mainPhotoTablet2x from "../img/p/main_tabl@2x.png";
function Home() {
    return (
        <div className="home">
            <picture>
                <source
                    srcSet={`${mainPhotoTablet}1x, ${mainPhotoTablet2x} 2x`}
                    media="(max-width: 1023px)"
                />
                <img src={mainPhoto} alt="main_image" />
            </picture>
        </div>
    );
}

export default Home;
