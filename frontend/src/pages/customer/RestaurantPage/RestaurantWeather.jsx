export default function RestaurantWeather() {
  return (
    <div className="space-y-3">
      <h3 className="text-2xl font-semibold">Weather</h3>

      <p className="text-gray-300">Location: Downtown Toronto</p>
      <p className="text-[#C6A667] text-xl">14°C · Clear Skies</p>

      <div className="text-gray-400 text-sm">
        Feels like 12°C  
        <br />
        Humidity: 62%
        <br />
        Wind: 8 km/h
      </div>
    </div>
  );
}
