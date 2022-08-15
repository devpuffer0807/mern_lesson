import React from "react";

import loadingImg from "../../assets/images/loading.gif";

const Loading = () => {
    return (
        <img src={loadingImg} alt="loading" style={{width: 15, height: 15, marginRight: 20}} />
    )
}

export default Loading;