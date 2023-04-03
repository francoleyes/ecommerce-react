import { BasicLayout } from "../layouts";
import {ItemListContainer, ItemDetailContainer, Error404, Cart} from "../pages";
import {FormPay} from "../components/FormPay";

const routes = [
    {
        path: "/",
        layout: BasicLayout,
        component: ItemListContainer,
    },
    {
        path: "/cart",
        layout: BasicLayout,
        component: Cart,
    },
    {
        path: "/pay",
        layout: BasicLayout,
        component: FormPay,
    },
    {
        path: "/detail",
        layout: BasicLayout,
        component: ItemDetailContainer,
    },
    {
        path: "/category/:id",
        layout: BasicLayout,
        component: ItemListContainer,
    },
    {
        path: "/item/:id",
        layout: BasicLayout,
        component: ItemDetailContainer,
    },
    {
      path: "*",
      layout: BasicLayout,
      component: Error404,
    },
  ];
  
  export default routes;
  