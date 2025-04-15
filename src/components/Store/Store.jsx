// src/components/Store.jsx
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import styled from "styled-components";
import Header from "../Home/Header";
const products = [
  {
    id: 1,
    title: "Camiseta Kapitour",
    description: "Camiseta de algodão confortável",
    price: 50.0,
    image: "https://via.placeholder.com/300x400",
    details: {
      sizes: ["P", "M", "G", "GG", "XG", "XGG"],
      colors: ["Preto"],
      material: "100% Algodão",
    },
  },
  {
    id: 2,
    title: "Mini Hugito",
    description: "Mini Hugito feito a mão de crochê",
    price: 35.0,
    image: "https://via.placeholder.com/300x400",
    details: {
      sizes: ["P"],
      colors: ["Única"],
      material: "100% Algodão",
    },
  },
  // Adicione mais produtos aqui
];

const Store = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenDialog = (product) => {
    setSelectedProduct(product);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProduct(null);
  };

  return (
    <StoreContainer>
      <Header />
      <StoreTitle>Kapi Store</StoreTitle>
      <ProductsGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.title} />
            <ProductInfo>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>
                A partir de: R$ {product.price.toFixed(2)}
              </ProductPrice>
              <BuyButton onClick={() => handleOpenDialog(product)}>
                Comprar
              </BuyButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductsGrid>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        {selectedProduct && (
          <>
            <DialogTitle>{selectedProduct.title}</DialogTitle>
            <DialogContent>
              <DialogContentWrapper>
                <DialogImage
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                />
                <DialogDetails>
                  <p>{selectedProduct.description}</p>
                  <p>
                    <strong>Preço:</strong> R${" "}
                    {selectedProduct.price.toFixed(2)}
                  </p>
                  <p>
                    <strong>Tamanhos disponíveis:</strong>{" "}
                    {selectedProduct.details.sizes.join(", ")}
                  </p>
                  <p>
                    <strong>Cores:</strong>{" "}
                    {selectedProduct.details.colors.join(", ")}
                  </p>
                  <p>
                    <strong>Material:</strong>{" "}
                    {selectedProduct.details.material}
                  </p>
                  <BuyButton to="/login">Adicionar ao Carrinho</BuyButton>
                </DialogDetails>
              </DialogContentWrapper>
            </DialogContent>
          </>
        )}
      </Dialog>
    </StoreContainer>
  );
};

export default Store;

// styles

const StoreContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const StoreTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
  color: #fff;
  padding-top: 30px;
  @media (min-width: 2px) and (max-width: 424) {
    padding-top: 40px;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  background: rgba(201, 52, 52, 0.733);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const ProductInfo = styled.div`
  padding: 20px;
`;

const ProductTitle = styled.h2`
  font-size: 1.25rem;
  margin: 0 0 10px;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: #fff;
  margin: 0 0 15px;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const ProductPrice = styled.p`
  font-size: 1.1rem;
  color: #fff;
  margin: 0 0 15px;
  font-weight: bold;
`;

const BuyButton = styled.button`
  width: 100%;
  padding: 10px;
  background: rgba(201, 52, 52, 0.884);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  font-weight: bold;
  text-align: center;

  &:hover {
    background: #fff;
    color: rgba(201, 52, 52, 0.884);
  }
`;

const DialogContentWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const DialogImage = styled.img`
  width: 200px;
  height: 250px;
  object-fit: cover;
  border-radius: 5px;

  @media (max-width: 600px) {
    width: 100%;
    height: 200px;
  }
`;

const DialogDetails = styled.div`
  flex: 1;

  p {
    margin: 10px 0;
    color: #333;
  }
`;
