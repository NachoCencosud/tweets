import "./App.scss";
import Header from "./components/Header/Header";
import MainContentCards from "./components/Main/MainContentCards";
import Cards from "./components/Cards/Cards";
import SendTweet from "./components/SendTweet/SendTweet";

function App() {
  return (
    <div className="app-container">
      <Header />
      <MainContentCards>
        <Cards />
        <SendTweet />
      </MainContentCards>
    </div>
  );
}

export default App;
