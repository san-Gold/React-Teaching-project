import { lazy, useEffect, Suspense, useState } from "react";
// BrowserRouter 为 history模式，HashRouter 为 哈希模式，
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Loading from "../components/Loading";
import { useSelector } from "react-redux";
const RouterDom = () => {
  let hisroeyMode = true; // 是否是hisroey模式
  const [Routers, setRouters] = useState([
    {
      path: "/",
      key: "home",
      component: lazy(() => import("../pages/home")),
    },
    {
      path: "/about",
      key: "about",
      component: lazy(() => import("../pages/about")),
    },
    {
      path: "/shop",
      key: "shop",
      component: lazy(() => import("../pages/shop")),
    },
    {
      path: "/my/:id",
      key: "my",
      isLogin: true,
      component: lazy(() => import("../pages/my")),
    },
    {
      path: "/login",
      key: "login",
      component: lazy(() => import("../pages/login")),
    },
    {
      path: "/404",
      key: "404",
      component: lazy(() => import("../pages/404")),
    },
    {
      path: "*",
      redirect: "/404",
    },
  ]);
  const loginInfo = useSelector((store) => store.loginInfo);
  console.log("loginInfo", loginInfo);
  // useEffect(() => {
  // let outRouter = [
  //   {
  //     path: "/about",
  //     key: "about",
  //     component: lazy(() => import("../pages/about")),
  //   },
  //   {
  //     path: "/my",
  //     key: "my",
  //     component: lazy(() => import("../pages/my")),
  //   },
  // ];
  //   setTimeout(() => {
  //     console.log("router异步加载完成");
  //     setRouters((item) => {
  //       item = outRouter.concat(item);
  //       return item;
  //     });
  //   }, 5000);
  // }, []);
  const checkLogin = (item) => {
    if (!item.isLogin) return false;
    return loginInfo.isLogin ? false : true;
  };

  return !hisroeyMode ? (
    <HashRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          {Routers.map((item) => {
            let PageModule = item.component; // 给匿名组件取个名字，便于下面用
            return item.path !== "*" ? (
              <Route
                exact
                key={`roeter-key-${item.key}`}
                path={item.path}
                render={(props) => {
                  if (checkLogin(item)) {
                    return <Redirect to="/login" />;
                  }
                  return <PageModule {...props} />;
                }} // 这里用 render
              />
            ) : (
              <Route
                key="roeter-key-404"
                component={({ location }) => <Redirect to="/404" />}
              />
            );
          })}
        </Switch>
      </Suspense>
    </HashRouter>
  ) : (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          {Routers.map((item) => {
            let PageModule = item.component; // 给匿名组件取个名字，便于下面用
            return item.path !== "*" ? (
              <Route
                exact
                key={`roeter-key-${item.key}`}
                path={item.path}
                render={(props) => {
                  if (checkLogin(item)) {
                    return <Redirect to="/login" />;
                  }
                  return <PageModule {...props} />;
                }} // 这里用 render
              />
            ) : (
              <Route
                key="roeter-key-404"
                component={({ location }) => <Redirect to="/404" />}
              />
            );
          })}
        </Switch>
      </Suspense>
    </Router>
  );
};
export default RouterDom;
