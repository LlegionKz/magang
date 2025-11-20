import React, { Fragment, useState, useEffect } from "react";
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { Button, Grid } from "@mui/material";
import Link from "next/link";
import { connect } from "react-redux";
import { totalPrice } from "../../utils";
import { supabase } from '../../lib/supabaseClient'
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../store/actions/action";
import Footer from "../../components/footer/Footer";

const CartPage = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const { carts } = props;
  const [serverCart, setServerCart] = useState(null)
  const [loadingServerCart, setLoadingServerCart] = useState(false)

  const fetchServerCart = async () => {
    setLoadingServerCart(true)
    try {
      const { data } = await supabase.auth.getSession()
      const token = data?.session?.access_token
      if (!token) {
        setServerCart(null)
        return
      }
      const res = await fetch('/api/cart', { headers: { Authorization: `Bearer ${token}` } })
      const json = await res.json()
      if (json?.cart) setServerCart(json.cart)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('fetchServerCart error', e)
      setServerCart(null)
    } finally {
      setLoadingServerCart(false)
    }
  }

  useEffect(() => {
    fetchServerCart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Fragment>
      <Navbar />
      <PageTitle pageTitle={"Cart"} pagesub={"Cart"} />
      <div className="cart-area section-padding">
        <div className="container">
          <div className="form">
            <div className="cart-wrapper">
              <div className="row">
                <div className="col-12">
                  <form action="cart">
                    <table className="table-responsive cart-wrap">
                      <thead>
                        <tr>
                          <th className="product-2">Product Name</th>
                          <th className="ptice">Price</th>
                          <th className="stock">Total Price</th>
                          <th className="remove remove-b">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                          {(serverCart || carts) &&
                            (serverCart || carts).length > 0 &&
                            (serverCart || carts).map((catItem, crt) => (
                            <tr key={crt}>
                              <td className="product">
                                <ul>
                                  <li className="first-cart">
                                    {catItem.title || catItem.name || ''}
                                  </li>
                                  <li>Brand : {catItem.brand || ''}</li>
                                  <li>Size : {catItem.size || ''}</li>
                                </ul>
                              </td>
                              <td className="ptice">${(catItem.price || 0).toFixed(2)}</td>
                              <td className="stock">${(catItem.price || 0).toFixed(2)}</td>
                              <td className="action">
                                <ul>
                                  <li
                                    className="w-btn"
                                    onClick={async () => {
                                      props.removeFromCart(catItem.id)
                                      // refresh server cart view
                                      await fetchServerCart()
                                    }}
                                  >
                                    <i className="fi ti-trash"></i>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </form>
                  {/* Quantity controls and Update Cart button removed per request */}
                  <div className="cart-product-list">
                    <ul>
                      <li>
                        Total product<span>( {carts.length} )</span>
                      </li>
                      <li>
                        Sub Price<span>${totalPrice(carts)}</span>
                      </li>
                      <li className="cart-b">
                        Total Price<span>${totalPrice(carts)}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="submit-btn-area">
                    <ul>
                      <li>
                        <Link
                          onClick={ClickHandler}
                          className="theme-btn"
                          href="/checkout"
                        >
                          Proceed to Checkout{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
  };
};
export default connect(mapStateToProps, {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
})(CartPage);