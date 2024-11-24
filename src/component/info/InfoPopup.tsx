import './css/InfoPopup.css';
import React, {useState} from "react";

interface InfoPopupProps {
    infoIcon: string;
    infoText: string
}

export const InfoPopup: React.FC<InfoPopupProps> = (InfoPopupProps) => {
    const [hover, setHover] = useState(false);

    return (
        <div className={'InfoPopup'} role={'tooltip'} onMouseEnter={() => setHover(true)}
             onMouseLeave={() => setHover(false)}> {InfoPopupProps.infoIcon}
            {hover && (<span className={'InfoText'} role={'contentinfo'}>{InfoPopupProps.infoText}</span>)}
        </div>
    );
}