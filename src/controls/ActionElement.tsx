import React from 'react';
import { ActionProps } from '../types';

const ActionElement: React.FC<ActionProps> = ({ className, handleOnClick, label, title }) => {
  const onClick = (e:any) => handleOnClick(e);
  const renderLabel = (label: string|undefined, className: string|undefined) => {
    if (label == "x") {
      return (<span><svg width="11" height="12" viewBox="0 0 11 12" fill="none">
        <path d="M10.3582 2.25H9.60815V10.875C9.60815 11.0312 9.57886 11.1777 9.52026 11.3145C9.46167 11.4512 9.38159 11.5703 9.28003 11.6719C9.17847 11.7734 9.05933 11.8535 8.92261 11.9121C8.78589 11.9707 8.6394 12 8.48315 12H2.48315C2.3269 12 2.18042 11.9707 2.0437 11.9121C1.90698 11.8535 1.78784 11.7734 1.68628 11.6719C1.58472 11.5703 1.50464 11.4512 1.44604 11.3145C1.38745 11.1777 1.35815 11.0312 1.35815 10.875V2.25H0.608154V1.5H3.60815V0.75C3.60815 0.644531 3.62769 0.546875 3.66675 0.457031C3.70581 0.367188 3.75854 0.289062 3.82495 0.222656C3.89526 0.152344 3.97534 0.0976563 4.06519 0.0585938C4.15503 0.0195312 4.25269 0 4.35815 0H6.60815C6.71362 0 6.81128 0.0195312 6.90112 0.0585938C6.99097 0.0976563 7.06909 0.152344 7.1355 0.222656C7.20581 0.289062 7.2605 0.367188 7.29956 0.457031C7.33862 0.546875 7.35815 0.644531 7.35815 0.75V1.5H10.3582V2.25ZM4.35815 1.5H6.60815V0.75H4.35815V1.5ZM8.85815 2.25H2.10815V10.875C2.10815 10.9766 2.14526 11.0645 2.21948 11.1387C2.2937 11.2129 2.38159 11.25 2.48315 11.25H8.48315C8.58472 11.25 8.67261 11.2129 8.74683 11.1387C8.82104 11.0645 8.85815 10.9766 8.85815 10.875V2.25ZM4.35815 9.75H3.60815V3.75H4.35815V9.75ZM5.85815 9.75H5.10815V3.75H5.85815V9.75ZM7.35815 9.75H6.60815V3.75H7.35815V9.75Z" fill="#A6A6A6" />
      </svg></span>)
    }
    if (className &&
      className.indexOf("ruleGroup-addRule") > -1) {
      return (<span><svg width="11" height="10" viewBox="0 0 11 10" fill="none" >
        <path d="M10.2559 4.6875V5.3125H5.56836V10H4.94336V5.3125H0.255859V4.6875H4.94336V0H5.56836V4.6875H10.2559Z" fill="#0078D4" />
      </svg>{label}</span>)
    }
    if (className &&
      className.indexOf("ruleGroup-addGroup ") > -1) {
      return (<span><svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M10 0V10H1.875V3.75H0V0H10ZM3.125 3.125V0.625H0.625V3.125H3.125ZM2.5 6.25H5V3.75H2.5V6.25ZM5 6.875H2.5V9.375H5V6.875ZM9.375 6.875H5.625V9.375H9.375V6.875ZM9.375 3.75H5.625V6.25H9.375V3.75ZM9.375 3.125V0.625H3.75V3.125H9.375Z" fill="#0078D4"/>
     
      </svg>{label}</span>
      )
    }
    return label;
  }
  return ( 
  <button className={className} title={title} onClick={onClick}>
     {renderLabel(label,className)}
  </button>
)};

ActionElement.displayName = 'ActionElement';

export default ActionElement;
