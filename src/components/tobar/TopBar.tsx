import './topbar.scss';

import { ReactComponent as BrandIcon } from "../../images/pizzarous-01.svg";

export const TopBar = () => {
  return (
    <div className="TopBar">
        <div className="TopBar__Logo">
            <BrandIcon width="70px" />
        </div>
        <div className="TopBar__name">Pizzarous!</div>
    </div>
  )
}