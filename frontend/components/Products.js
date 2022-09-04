import styled from "styled-components";
import { ProductStyles } from "../styles/ProductStyle";

export default function Product({ product }) {
  const { title, price, image } = product.attributes;
  return (
    <ProductStyles>
      <div>
        <img src={image.data.attributes.formats.thumbnail.url} alt="" />
      </div>
      <h2>{title}</h2>
      <h3>{price}</h3>
    </ProductStyles>
  );
}
