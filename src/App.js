import "./App.css";
import Search from "./Search";
import CityDate from "./CityDate";
import Weather from "./Weather";
import WeatherInfoList from "./WeatherInfoList";
import WeatherForcast from "./WeatherForcast";
import Signature from "./Signature";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="large-card mx-auto mt-3 shadow p-3 mb-5">
          <div class="card-body">
            <Search />
            <div class="inner-card mt-3 w-110">
              <CityDate />
              <div class="row">
                <div class="col-6">
                  <Weather />
                </div>
                <div class="col-6">
                  <WeatherInfoList />
                </div>
              </div>
              <WeatherForcast />
            </div>
          </div>
        </div>
      </div>
      <Signature />
    </div>
  );
}
