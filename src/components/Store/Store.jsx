import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import styled from "styled-components";
import Header from "../Home/Header";
import { useNavigate } from "react-router-dom";


const products = [
  {
    id: 1,
    title: "Camiseta Kapitour",
    description: "Camiseta de algodão confortável",
    price: 50.0,
    images: [
      "https://github.com/Kapitour/Imgs-Padr-o/blob/main/Produtos/blusa1frente.png?raw=true",
      "https://github.com/Kapitour/Imgs-Padr-o/blob/main/Produtos/blusa2costas.png?raw=true"
    ],
    details: {
      sizes: ["P", "M", "G", "GG", "XG", "XGG"],
      colors: ["Preto"],
      material: "100% Algodão",
    },
  },
  {
    id: 2,
    title: "KapriSilha",
    description: "Mini Presilhas de capivaras",
    price: 30.0,
    images: ["https://img.kwcdn.com/product/open/dac6f20ab3d24bddaf3dd7780e2b1d58-goods.jpeg?imageView2/2/w/800/q/70/format/webp"],
    details: {
      sizes: ["Diferentes Modelos"],
      colors: ["Única"],
      material: "100% Algodão",
    },
  },
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

  const navigate = useNavigate();

const handleBuyClick = () => {
  navigate("/login");
};

  return (
    <StoreContainer>
      <Header />
      <StoreHeaderImage
        src="https://github.com/Kapitour/Imgs-Padr-o/blob/main/KapiStorePainel.png?raw=true"
        alt="Kapi Store"
      />
      <ProductsGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImageWrapper>
              <HoverImage src={product.images[0]} alt={product.title} />
              {product.images[1] && (
                <BackImage src={product.images[1]} alt={product.title} />
              )}
            </ProductImageWrapper>
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

      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="md">
        {selectedProduct && (
          <>
            <DialogTitle>{selectedProduct.title}</DialogTitle>
            <DialogContent>
  <DialogContentWrapper>
    <DialogImage
      src={selectedProduct.images[0]}
      alt={selectedProduct.title}
    />
    <DialogDetails>
      <p>{selectedProduct.description}</p>
      <p>
        <strong>Preço:</strong> R$ {selectedProduct.price.toFixed(2)}
      </p>
      <p>
        <strong>Tamanhos disponíveis:</strong>{" "}
        {selectedProduct.details.sizes.join(", ")}
      </p>
      <p>
        <strong>Cores:</strong> {selectedProduct.details.colors.join(", ")}
      </p>
      <p>
        <strong>Material:</strong> {selectedProduct.details.material}
      </p>
      <BuyButton onClick={handleBuyClick}>Comprar</BuyButton>
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

const StoreHeaderImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  margin-bottom: 40px;
  border-radius: 10px;
  object-fit: cover;

  @media (max-width: 600px) {
    margin-bottom: 20px;
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
  text-decoration: none;

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

const ProductImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover img:first-child {
    opacity: 0;
  }

  &:hover img:last-child {
    opacity: 1;
  }

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 280px;
  }
`;


const HoverImage = styled.img`
  height: 100%;
  width: auto;
  object-fit: contain;
  transition: opacity 0.5s ease;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
`;

const BackImage = styled.img`
  height: 100%;
  width: auto;
  object-fit: contain;
  transition: opacity 0.5s ease;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
`;
