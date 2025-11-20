import React from 'react';
import Link from 'next/link'
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {totalPrice} from "../../utils";

const GLOBAL_IMAGE = 'https://drive.google.com/uc?export=view&id=1uNgVcJcVdH0XGEymUekukJ_pRo0YxrWd'

const OrderRecivedSec = ({cartList}) => {
    return(
        <section className="cart-recived-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="order-top">
                        <h2>Thank You For Your Order! <span>your order has been recived</span></h2>
                        <Link href='/home' className="theme-btn">Back Home</Link>
                    </div>
                    <Grid className="cartStatus">
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Grid className="cartTotals">
                                        <h4>Order details</h4>
                                        <Table>
                                            <TableBody>
                                                {cartList.map(item => {
                                                    const imgSrc = item.image_url || item.proImg || item.proImgUrl || item.image || GLOBAL_IMAGE
                                                    const qty = item.qty || 1
                                                    const price = Number(item.price || item.price_amount || 0)
                                                    const lineTotal = (qty * price).toFixed(2)
                                                    return (
                                                    <TableRow key={item.id}>
                                                        <TableCell>
                                                            <img src={imgSrc} alt={item.title || ''} style={{width:64,height:64,objectFit:'cover',marginRight:12}} />
                                                            <span>{item.title || item.name || ''} ${price.toFixed(2)} x {qty}</span>
                                                        </TableCell>
                                                        <TableCell align="right">${lineTotal}</TableCell>
                                                    </TableRow>
                                                    )
                                                })}
                                                <TableRow className="totalProduct">
                                                    <TableCell>Total product</TableCell>
                                                    <TableCell align="right">{cartList.length}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Sub Price</TableCell>
                                                    <TableCell align="right">${totalPrice(cartList)}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell><b>Total Price</b></TableCell>
                                                    <TableCell
                                                        align="right"><b>${totalPrice(cartList)}</b></TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                </div>
            </div>
        </section>
    )
}

export default OrderRecivedSec;