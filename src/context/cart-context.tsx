import React, {Dispatch, SetStateAction, useState} from 'react';

import {ReactNode} from 'react';

interface CartContextInterface {
  cartData: [];
  setCartData: Dispatch<SetStateAction<[]>>;
  favouriteData: [];
  setFavouriteData: Dispatch<SetStateAction<[]>>;
}

interface ProviderProps {
  children: ReactNode;
}

export const CartContext = React.createContext<CartContextInterface>(undefined);

export const CartContextProvider = (props: ProviderProps): JSX.Element => {
  const {children} = props;

  const [cartData, setCartData] = useState([]);
  const [favouriteData, setFavouriteData] = useState([]);

  return (
    <CartContext.Provider
      value={{
        cartData,
        setCartData,
        favouriteData,
        setFavouriteData,
      }}>
      {children}
    </CartContext.Provider>
  );
};
