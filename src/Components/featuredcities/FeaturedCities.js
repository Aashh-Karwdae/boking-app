import "./featuredCities.css"

export default function FeaturedCities() {
  return (
    <div className='FeaturedCity'>
      <div className="featuredItem">
        <img className="featuredImg" src="https://www.travelsingapura.com/wp-content/uploads/2019/11/gardens-by-the-bay-singapore-1842332-scaled.jpg" alt="SingporeImg" />
        <div className="featuredTitles">
          <h1>Singapore</h1>
          <h2>20 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img className="featuredImg" src="http://wallpapercave.com/wp/tKCaN8t.jpg" alt="LondonImg" />
        <div className="featuredTitles">
          <h1>London</h1>
          <h2>40 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img className="featuredImg" src="https://d3e1m60ptf1oym.cloudfront.net/cf7552d3-4dc0-465e-bc64-2d24d564ab51/F33569-FR-01_uxga.jpg" alt="OmanImg" />
        <div className="featuredTitles">
          <h1>Oman</h1>
          <h2>50 Properties</h2>
        </div>
      </div>
    </div>
  )
}
