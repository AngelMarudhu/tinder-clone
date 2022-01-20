import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import SwipeButton from "./components/SwipeButton";
import Chats from "./components/Chats";
import ChatScreen from "./components/ChatScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/chat/:person"
            element={
              <>
                <Header />
                <ChatScreen />
              </>
            }
          />
          <Route
            exact
            path="/chat"
            element={
              <>
                <Header backButton="/" />
                <Chats />
              </>
            }
          />
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <TinderCards />
                <SwipeButton />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
