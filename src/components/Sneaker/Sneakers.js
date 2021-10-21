import React, {Fragment} from "react";
import AvailableSneaker from "./AvailableSneaker";
import SneakerSummary from "./SneakerSummary";

const Sneakers = () => {
    return (
        <Fragment>
            <SneakerSummary />
            <AvailableSneaker />
        </Fragment>
    )
}

export default Sneakers;