import React, { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
	const [cartItems, setCartItems] = useState({});

	const addToCart = (itemId) => {
		if (!cartItems[itemId]) {
			setCartItems((prevItem) => ({ ...prevItem, [itemId]: 1 }));
		} else {
			setCartItems((prevItem) => ({
				...prevItem,
				[itemId]: prevItem[itemId] + 1,
			}));
		}
	};

	const removeFromCart = (itemId) => {
		setCartItems((prevItem) => ({
			...prevItem,
			[itemId]: prevItem[itemId] - 1,
		}));
	};

	const getTotalCartAmount = () => {
		let totalAmount = 0;
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				const itemInfo = food_list.find((food) => food._id === item);
				totalAmount += itemInfo.price * cartItems[item];
			}
		}
		return totalAmount;
	};

	const getTotalCartQuantity = () => {
		let totalQuantity = 0;
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				totalQuantity += cartItems[item];
			}
		}
		return totalQuantity;
	};

	const contextValue = {
		food_list,
		cartItems,
		setCartItems,
		addToCart,
		removeFromCart,
		getTotalCartAmount,
		getTotalCartQuantity,
	};

	// useEffect(() => {
	// 	console.log(cartItems);
	// },[cartItems])

	return (
		<StoreContext.Provider value={contextValue}>
			{props.children}
		</StoreContext.Provider>
	);
};

export default StoreContextProvider;
