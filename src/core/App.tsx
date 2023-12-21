import { APPProvider } from "./providers";
import Router from "./router";
import { useSelector } from "react-redux";
import * as selectors from '@/core/config/import/selectors'
import Cart from "@/features/Cart/components/Cart/Cart";


const App=()=> {
  const showCart = useSelector(selectors.showCart);

  return (
    <APPProvider>
      {showCart && <Cart />}
      <Router />
    </APPProvider>
  );
}

export default App;
