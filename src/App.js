// import Route and Routes to display components in specific paths
import { Routes, Route } from 'react-router-dom';

// import Navbar to be displayed on top of the page
import Navbar from './components/Navbar/navbar';
// import the ScrollUp component to scroll back to the top when the path changes
import ScrollUp from './components/scrollup';

// import homepage
import Home from './components/Home/home';
// import search page
import Searchbar from './components/Searchbar/searchbar';
// import recipe categories and the associated recipes of each category
import Breakfast, { Pancakes, FrenchToast } from './components/Breakfast/breakfast';
import Soup, { TomatoSauce, Gumbo, Tikka, Rajma, NoodleSoup, Canes,
  Chutney, Gastrique, Cranberry, Chana } from './components/Soup/soup';
import Sandwiches, { TomatoMelt, EggSandwich } from './components/Sandwiches/sandwiches';
import Rice, { SPORice, Gnocchi, TurkeyRice, ChickenCola } from './components/Rice/rice';
import Desserts, { LemonMeringue, AppleFilling, BananaCaramel, GajarHalwa, 
  Zabaglione, Suzette, PotatoPie, MugCake } from './components/Desserts/desserts';
import Lab, { Cursed, ThanksgivingPie, PineapplePizza } from './components/Lab/lab';
import Misc, { PopcornChicken, Meatballs, DeviledEggs, Pizza, 
  Coffee, Ricotta } from './components/Misc/misc';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ScrollUp>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Searchbar />} />
          {/* Breakfast recipes */}
          <Route path='/breakfast' element={<Breakfast />} />
          <Route path="/breakfast/pancakes" element={<Pancakes />} />
          <Route path="/breakfast/frenchtoast" element={<FrenchToast />} />
          {/* Soups/Stews/Sauces recipes */}
          <Route path='/soup' element={<Soup />} />
          <Route path='/soup/tomatosauce' element={<TomatoSauce />} />
          <Route path='/soup/gumbo' element={<Gumbo />} />
          <Route path='/soup/tikka' element={<Tikka />} />
          <Route path='/soup/rajma' element={<Rajma />} />
          <Route path='/soup/noodlesoup' element={<NoodleSoup />} />
          <Route path='/soup/canes' element={<Canes />} />
          <Route path='/soup/chutney' element={<Chutney />} />
          <Route path='/soup/gastrique' element={<Gastrique />} />
          <Route path='/soup/cranberry' element={<Cranberry />} />
          <Route path='/soup/chana' element={<Chana />} />
          {/* Sandwich recipes */}
          <Route path='/sandwiches' element={<Sandwiches />} />
          <Route path='/sandwiches/tomatomelt' element={<TomatoMelt />} />
          <Route path='/sandwiches/eggsandwich' element={<EggSandwich />} />
          {/* Rice and Pasta recipes */}
          <Route path='/rice' element={<Rice />} />
          <Route path='/rice/sporice' element={<SPORice />} />
          <Route path='/rice/gnocchi' element={<Gnocchi />} />
          <Route path='/rice/turkeyrice' element={<TurkeyRice />} />
          <Route path='/rice/chickencola' element={<ChickenCola />} />
          {/* Dessert recipes */}
          <Route path='/desserts' element={<Desserts />} />
          <Route path='/desserts/lemonmeringue' element={<LemonMeringue />} />
          <Route path='/desserts/applefilling' element={<AppleFilling />} />
          <Route path='/desserts/bananacaramel' element={<BananaCaramel />} />
          <Route path='/desserts/gajarhalwa' element={<GajarHalwa />} />
          <Route path='/desserts/zabaglione' element={<Zabaglione />} />
          <Route path='/desserts/suzette' element={<Suzette />} />
          <Route path='/desserts/potatopie' element={<PotatoPie />} />
          <Route path='/desserts/mugcake' element={<MugCake />} />
          {/* Laboratory recipes */}
          <Route path='/lab' element={<Lab />} />
          <Route path='/lab/cursed' element={<Cursed />} />
          <Route path='/lab/thanksgivingpie' element={<ThanksgivingPie />} />
          <Route path='/lab/pineapplepizza' element={<PineapplePizza />} />
          {/* Misc recipes*/}
          <Route path='/misc' element={<Misc />} />
          <Route path='/misc/popcornchicken' element={<PopcornChicken />} />
          <Route path='/misc/meatballs' element={<Meatballs />} />
          <Route path='/misc/deviledeggs' element={<DeviledEggs />} />
          <Route path='/misc/pizza' element={<Pizza />} />
          <Route path='/misc/coffee' element={<Coffee />} />
          <Route path='/misc/ricotta' element={<Ricotta />} />
        </Routes>
      </ScrollUp>
    </div>
  );
}
export default App;
