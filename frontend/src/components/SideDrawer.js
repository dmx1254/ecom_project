import "./SideDrawer.css";

const SideDrawer = ({show, click}) => {
    const sideDrawerClass = ["sidedrawer"];

    if(show){
        sideDrawerClass.push("show")
    }
    return (
        <div className = {sideDrawerClass.join(" ")}>
            <ul className = "sidedrawer__links" onClick = {click}>
                <li>
                    <i className="fas fa-shopping-cart"></i>
                    <span>
                        Chariot <span className="sidedrawer__cartbadge">0</span>
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default SideDrawer;