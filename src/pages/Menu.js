import React from "react";
import { Data } from "../data/data";
import MenuItem from "../components/MenuItem";

const Menu = () => {
	return (
		<div className="menu">
			<div className="menu-title">
				<div className="menuList">
					{Data.map((menuItem, key) => {
						return (
							<MenuItem
								key={key}
								image={menuItem.image}
								name={menuItem.foodName}
								price={menuItem.price}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Menu;
