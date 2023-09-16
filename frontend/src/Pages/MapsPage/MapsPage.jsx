import MapsNavBar from "./MapsNavBar";
import {MainHall, WorkShopRooms, Sponsors, FoodAreas, Restrooms} from "./MapsContent.jsx"

const MapsPage = () => {
    return ( 
        <div>
            <MapsNavBar/>
            <MainHall/>
            <WorkShopRooms/>
            <Sponsors/>
            <FoodAreas/>
            <Restrooms/>
        </div>
    );
}

export default MapsPage;