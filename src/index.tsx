import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginTabs } from "./components/LoginTabs";
import { LoginDialog } from "./components/LoginDialog";
import { UserProfile } from "./components/UserProfile";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="login" element={<LoginDialog />} />
        <Route path="profile" element={<UserProfile />} />
      </Route>
      <Route
        path="*" //gwiazdka oznacza, że ta droga będzie wyskakiwała wtedy, kiedy żadna inna droga nie będzie pasowała
        element={
          <main style={{ padding: "1rem" }}>
            <p>404 not found</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
//po dodaniu * register pojawia się na stronie od razu
