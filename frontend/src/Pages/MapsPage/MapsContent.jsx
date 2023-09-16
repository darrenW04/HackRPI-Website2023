import mainhall from "./maps_img/mainhall.png";
import sponsorsImg from "./maps_img/sponsors.png";
import restroomsImg from "./maps_img/restrooms.png";
import workshoproomsImg from "./maps_img/workshoprooms.png";
import foodareaImg from "./maps_img/foodarea.png";

const imageStyle = {
    width: "500px", // Adjust the width as needed
    height: "450px", // Adjust the height as needed
    margin: "20px 10px ", // Add margin before and after each image
    border: "1px solid #ccc", // Add any other styling properties you want
};

const MainHall = () => {
    return ( 
        <div id="mainhall">
            <h1>Main Hall Map</h1>
            {/* Apply the inline CSS */}
            <img src={mainhall} alt="Main Hall Map" style={imageStyle} />
        </div>
     );
}

const WorkShopRooms = () => {
    return ( 
        <div id="workshoprooms">
            <h1>Workshop Room Map</h1>
            {/* Apply the inline CSS */}
            <img src={workshoproomsImg} alt="Main Hall Map" style={imageStyle} />
        </div>
     );
}

const Sponsors = () => {
    return ( 
        <div id="sponsors">
            <h1>Sponsors Map</h1>
            {/* Apply the inline CSS */}
            <img src={sponsorsImg} alt="Sponsors Map" style={imageStyle} />
        </div>
     );
}

const FoodAreas = () => {
    return ( 
        <div id="foodarea">
            <h1>Food Map</h1>
            {/* Apply the inline CSS */}
            <img src={foodareaImg} alt="Food Map" style={imageStyle} />
        </div>
     );
}

const Restrooms = () => {
    return ( 
        <div id="restrooms">
            <h1>Restrooms Map</h1>
            {/* Apply the inline CSS */}
            <img src={restroomsImg} alt="Restrooms Map" style={imageStyle} />
        </div>
     );
}

export { MainHall, WorkShopRooms, Sponsors, FoodAreas, Restrooms };
