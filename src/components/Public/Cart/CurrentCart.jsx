import React from "react";
import { useCarrito } from "../../../negocio/context/CarritoContext";
import { Footer } from "../shared/Footer";
import { Header } from "../shared/Header";
import { CartProduct } from "./CartProduct";
import { insertCompra } from "../../../data/InsertCompra";

const Cart = () => {
  const { carrito } = useCarrito();

  return (
    <div>
      <Header/>
      <section className="mt-5">
      <div style={{ margin: "30px" }}>
        <div className="row mx-auto">
            <div className="col">
              <div data-reflow-type="shopping-cart">
                <div className="reflow-shopping-cart">
                  <div className="ref-loading-overlay"></div>
                  <div
                    className="ref-message"
                    style={{ display: "none" }}
                  ></div>
                  <div className="ref-cart" style={{ display: "block" }}>
                    <div className="ref-heading" style={{ textAlign: 'center' }}>Carrito</div>
                    <div className="ref-th">
                      <div className="ref-product-col">Producto</div>
                      <div className="ref-price-col">Precio</div>
                      <div className="ref-quantity-col">Cantidad</div>
                      <div className="ref-total-col">Total</div>
                    </div>
                    <div className="ref-cart-table">
                      {carrito.productos.map(producto => <CartProduct key={producto.articulo.id} {...producto}/>)}
                    </div>
                    <div className="ref-footer">
                      <div className="ref-links">
                        <a href="https://google.com" target="_blank" rel="noreferrer">
                          Política de devouciones
                        </a>
                      </div>
                      <div className="ref-totals">
                        <div className="ref-subtotal">Subtotal: {carrito.total}</div>
                        <div className="ref-shipping-taxes">
                          Los impuestos y envío son calculados
                          <br /> durante el checkout.
                        </div>
                        <div className="ref-button ref-checkout-button" onClick={() => {
                          insertCompra(carrito)
                          console.log(carrito)
                          }}>
                          Checkout
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
    <Footer/> 
    </div>
  );
};

export { Cart };
