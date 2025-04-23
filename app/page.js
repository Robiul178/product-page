import HomePage from "./components/home/homePage";
import { ProductProvider } from "./components/ProductContext";
import ProductsPage from "./products/page";

export default function Home() {
  return (
    <div className="">
      <ProductProvider>
        <HomePage />
      </ProductProvider>
    </div>
  );
}
