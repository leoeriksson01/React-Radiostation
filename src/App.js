import { BrowserRouter, Route } from "react-router-dom";
import UserProvider from "./contexts/UserContext";
import ChannelProvider from "./contexts/ChannelContext";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import BrowsePage from "./pages/BrowsePage";
import ProgramsPage from "./pages/ProgramsPage";
import SchedulePage from "./pages/SchedulePage";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryPage from "./pages/CategoryPage";
import LogInPage from "./pages/LogInPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import ProgramPage from "./pages/ProgramPage";

const App = () => {
  return (
    <div className="App">
      <UserProvider>
        <ChannelProvider>
          <BrowserRouter>
            <Navigation />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/Channels" component={BrowsePage} />
            <Route exact path="/schedule/:channelId" component={SchedulePage} />
            <Route exact path="/Programs" component={ProgramsPage} />
            <Route exact path="/programs/:channelId" component={ProgramPage} />
            <Route exact path="/Categories" component={CategoriesPage} />
            <Route exact path="/category/:channelId" component={CategoryPage} />
            <Route exact path="/LogIn" component={LogInPage} />
            <Route exact path="/Register" component={RegisterPage} />
            <Route exact path="/Profile" component={ProfilePage} />
          </BrowserRouter>
        </ChannelProvider>
      </UserProvider>
    </div>
  );
};

export default App;
