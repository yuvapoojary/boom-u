
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from '../Providers/AuthProvider';

export default function RecommendationForm() {
    const auth = useAuth();
    const params = useParams();
 
  var categoryID = (params.categoryID);

 
  const [categorytitle, getData] = useState()
 
  const URL = `/categories/${categoryID}`;

  useEffect(() => {
    getAllData();
}, []);
const getAllData = () => {
  axios.get(`${URL}`)
    .then((res) => {
      const sell = res.data;
      getData(sell.title)
     
    })
    .catch(error => console.log(`${error}`))
}

const [subcategories, getsubData] = useState<any[]>([])
const subURL = `/subcategoriesbycat/${categoryID}`;

useEffect(() => {
  getAllsubData();
}, []);
const getAllsubData = () => {
axios.get(`${subURL}`)
  .then((res) => {
    const sell = res.data;
    getsubData(sell)
  })
  .catch(error => console.log(`${error}`))
} 
  const [recommendation, setRecommendation] = useState("");
  
  
  const [target, setTarget] = useState("");
  const [TargetVisible, setTargetVisible] = useState("");
  const [targetperiod, settargetperiod] = useState("");
  const [targetPeriodVisible, settargetPeriodVisible] = useState("");
  const [currentmarketprice, setcurrentmarketprice] = useState("");
  const [currentmarketpriceVisible, setcurrentmarketpriceVisible] = useState("");
  const [Sector, setSector] = useState("");
  const [SectorVisible, setSectorVisible] = useState("");
  const [MarketCaptilization, setMarketCaptilization] = useState("");
  const [MarketCaptilizationVisible, setMarketCaptilizationVisible] = useState("");
  const [Category, setCategory] = useState("");
  const [CategoryVisible, setCategoryVisible] = useState("");
  const [ContentIncludes, setContentIncludes] = useState("");
  const [sub_category_id, setsub_category_id] = useState("");
  const [Sell, setSell] = useState("");
  const [SellVisible, setSellVisible] = useState("");
  const [Buy, setBuy] = useState("");
  const [BuyVisible, setBuyVisible] = useState("");
  const [subCategoryValue, setsubCategoryValue] = useState("");
  const [price, setprice] = useState("");
  const [isDetailedReport, setisDetailedReport] = useState("");
  const [Includes, setIncludes] = useState("");
  const [PE, setPE] = useState("");
  const [PBE, setPBE] = useState("");
  const [EBITDA, setEBITDA] = useState("");
  const [RoE, setRoE] = useState("");
  const [EPS, setEPS] = useState("");
  const [one_week, setone_week] = useState("");
  const [one_month, setone_month] = useState("");
  const [three_months, setthree_months] = useState("");
  const [one_year, setone_year] = useState("");
  const [three_years, setthree_years] = useState("");
 const [Price,setDPrice] = useState("");
 const [Expiry,setExpiry] = useState("");
  const [message, setMessage] = useState("");
const [StopLoss, setStopLoss] = useState("");
const [DividendYield, setDividendYield] = useState("");
const [media, setmedia] = useState("")


  let handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const data = new FormData()
    data.append("title",recommendation)
    data.append("seller",auth.user._id)
    data.append("target",target)
    //@ts-ignore
    data.append("TargetVisible",false)
    data.append("targetperiod",targetperiod)
     //@ts-ignore
    data.append("targetPeriodVisible",false)
    data.append("currentmarketprice",currentmarketprice)
    //@ts-ignore
    data.append("currentmarketpriceVisible",false)
    data.append("Sector",Sector)
    //@ts-ignore
    data.append("SectorVisible",false)
    data.append("MarketCaptilization",MarketCaptilization)
    //@ts-ignore
    data.append("MarketCaptilizationVisible",false)
    data.append("Category",Category)
    //@ts-ignore
    data.append("SellVisible",false)
    //@ts-ignore
    data.append("CategoryVisible",false)
    data.append("Sell",Sell)
    //@ts-ignore
    data.append("BuyVisible",false)
    data.append("Buy",Buy)
    //@ts-ignore
    data.append("category_id",categoryID)
    data.append("sub_category_id",sub_category_id)
    data.append("ContentIncludes",ContentIncludes)
    data.append("subCategoryValue",subCategoryValue)
    data.append("price",price)
    data.append("isDetailedReport",isDetailedReport)
    data.append("PE",PE)
    data.append("PBE",PBE)
    data.append("DetailIncludes",Includes)
    data.append("StopLoss",StopLoss)
    data.append("EBITDA",EBITDA)
    data.append("RoE",RoE)
    data.append("EPS",EPS)
    data.append("DividendYield",DividendYield)
    data.append("one_week",one_week)
    data.append("one_month",one_month)
    data.append("three_months",three_months)
    data.append("one_year",one_year)
    data.append("three_years",three_years)
    //@ts-ignore
    data.append("media",null)
    data.append("Price",Price)
    data.append("Expiry",Expiry)

console.log(data)
      var config = {
        method: 'post',
        url: '/recommendation/',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      axios(config)
.then(function (response) {
  alert('Recommendation Added');

  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
      
  }
  
    
return(  
<>
<div id="content-wrapper">
  <div className="container-fluid pb-0">
<div className="page">
			<div className="page-main">
    
    <div className="container content-area relative">
    <div className="row mt-3">
    <div className="col-lg-12">
    <form className="card" onSubmit={handleSubmit}>
      <div className="card-header">
        <h3 className="card-title">Add {categorytitle } Recommendation</h3>
      </div>
      <div className="card-body">
        <div className="row">
        <div className="col-md-12">
            <div className="form-group">
              <label className="form-label">Recommendation</label>
              <input
                type="text"
                className="form-control"
                value={recommendation}
                placeholder="Recommendation Title"
                required
                onChange={(e) => setRecommendation(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
            <label className="form-label">Select Type</label>
            <select className="form-control"
                value={sub_category_id}
                required
               name={sub_category_id}
                
                onChange={(e) => setsub_category_id(e.target.value)} >
                 {subcategories.map((subcat) => (
                  <option value={subcat._id}>{subcat.sub_category}</option>
                 ))}
                 
                  
                </select>
            </div>
          </div>
          { categorytitle !== 'Stock Fundamentals' || categorytitle !== 'Crypto Fundamentals' ? (
          <>
          
          <div className="col-md-12">
            <div className="form-group">
            <label className="form-label">Enter Value</label>
            <input className="form-control"
            type="text"
                value={subCategoryValue}
                required
               name={subCategoryValue}
                
                onChange={(e) => setsubCategoryValue(e.target.value)} >
                 
                 
                  
                </input>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
            <label className="form-label">Buy</label>
            <input className="form-control"
            type="text"
                value={Buy}
                
               name={Buy}
                
                onChange={(e) => setBuy(e.target.value)} >
                 
                 
                  
                </input>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
            <label className="form-label">Sell</label>
            <input className="form-control"
            type="text"
                value={Sell}
                
               name={Sell}
                
                onChange={(e) => setSell(e.target.value)} >
                 
                 
                  
                </input>
            </div>
          </div>

          </> ) : null
          }
          <div className="col-sm-12 col-md-4">
            <div className="form-group">
              <label className="form-label">Target</label>
              <input
                type="text"
                className="form-control"
                value={target}
                placeholder="Enter Target"
                required
                name={target}
                onChange={(e) => setTarget(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="form-group">
              <label className="form-label">Target Period</label>
              <input
                type="text"
                className="form-control"
                value={targetperiod}
                placeholder="Enter Target Period"
                required
                name={targetperiod}
                onChange={(e) => settargetperiod(e.target.value)}
              />
            </div>
          </div>
         
          <div className="col-sm-12 col-md-4">
            <div className="form-group">
            <label className="form-label">Current Market Price</label>
            <input
                type="text"
                className="form-control"
                value={currentmarketprice}
                placeholder="Enter Current Market Price"
                
                onChange={(e) => setcurrentmarketprice(e.target.value)}
              />
              
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="form-group">
              <label className="form-label">Sector</label>
              <input
                type="text"
                className="form-control"
                value={Sector}
                placeholder="Enter Sector"
                required
                name={Sector}
                onChange={(e) => setSector(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="form-group">
              <label className="form-label"> {categorytitle === 'Crypto Fundamentals' ? "Conseneus Mechanism": "Market Captilization"}</label>
              <input
                type="text"
                className="form-control"
                value={MarketCaptilization}
                placeholder={categorytitle === 'Crypto Fundamentals' ? "Conseneus Mechanism": "Market Captilization"}
                required
                name={MarketCaptilization}
                onChange={(e) => setMarketCaptilization(e.target.value)}
              />
            </div>
          </div>
         
          <div className="col-sm-12 col-md-4">
            <div className="form-group">
            <label className="form-label">Category</label>
            <input
                type="text"
                className="form-control"
                value={Category}
                placeholder="Enter Category"
                name={Category}
                onChange={(e) => setCategory(e.target.value)}
              />
              
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label className="form-label">Price For Content</label>
              <input
                type="text"
                className="form-control"
                value={price}
                placeholder="Enter Price for Content"
                name={price}
                onChange={(e) => setprice(e.target.value)}
                
               
              />
            </div>
          </div>
         
          <div className="col-sm-12 col-md-12">
            <div className="form-group">
              <label className="form-label">Content Includes</label>
              <textarea
              
                className="form-control"
                value={ContentIncludes}
                placeholder="What does content includes"
                
                name={ContentIncludes}
                onChange={
                 
                  (e) => 
                  
                  
                  setContentIncludes(e.target.value)}
               
               
              />
            </div>
          </div>
          


{ categorytitle === 'Stock Fundamentals' || categorytitle === 'Crypto Fundamentals' ? (
        <>
         
<div className="col-md-12">
            <div className="form-group mb-0">
              <label className="form-label">Is Detailed Analysis Included?</label>
              <select 
               className="form-control"
               value={isDetailedReport}
               
              name={isDetailedReport}
               
               onChange={(e) => setisDetailedReport(e.target.value)}
          
              
               
              >
                  <option value=''>Select Option</option>
                  <option value='true'>Yes</option>
                  <option value='false'>No</option>
     
                 
                  
                </select>
            </div>
          </div>
          <div className="col-md-12">
          
            <div className="form-group mb-0">
            <label className="form-label">Detailed Report Includes</label>
              <textarea
               
                className="form-control"
                value={Includes}
                placeholder="Enter What Report Includes"
                
                name={Includes}
                onChange={(e) => setIncludes(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-12">
          
            <div className="form-group mb-0">
            <label className="form-label">Detailed Report Price</label>
              <input
               type="text"
                className="form-control"
                value={Price}
                placeholder="Enter Price"
                
                name={Price}
                onChange={(e) => setDPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-12">
          <h4 className="mt-3">Valuation Ratios</h4>
          </div>
          <div className="col-md-3">
          
            <div className="form-group mb-0">
            <label className="form-label">PE Ratio</label>
              <input
                type="text"
                className="form-control"
                value={PE}
                placeholder="Enter P/E Ratio"
                
                name={PE}
                onChange={(e) => setPE(e.target.value)}
              />
            </div>
          </div>

          <div className="col-md-3">
          
            <div className="form-group mb-0">
            <label className="form-label">PB/E Ratio</label>
              <input
                type="text"
                className="form-control"
                value={PBE}
                placeholder="Enter PB/E Ratio"
                
                name={PBE}
                onChange={(e) => setPBE(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-3">
          
          <div className="form-group mb-0">
          <label className="form-label">EBITDA Ratio</label>
            <input
              type="text"
              className="form-control"
              value={EBITDA}
              placeholder="Enter EBITDA "
              
              name={EBITDA}
              onChange={(e) => setEBITDA(e.target.value)}
            />
          </div>
        </div>
          <div className="col-md-3">
          
            <div className="form-group mb-0">
            <label className="form-label">RoE Ratio</label>
              <input
                type="text"
                className="form-control"
                value={RoE}
                placeholder="Enter ROE"
                
                name={RoE}
                onChange={(e) => setRoE(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-3">
          
            <div className="form-group mb-0">
            <label className="form-label">Dividend Yield</label>
              <input
                type="text"
                className="form-control"
                value={DividendYield}
                placeholder="Enter P/E Ratio"
                
                name={DividendYield}
                onChange={(e) => setDividendYield(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-3">
          
            <div className="form-group mb-0">
            <label className="form-label">EPS Ratio</label>
              <input
                type="text"
                className="form-control"
                value={EPS}
                placeholder="Enter EPS "
                
                name={EPS}
                onChange={(e) => setEPS(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-12">
          <h4 className="mt-3">Price Performance</h4>
          </div>
          <div className="col-md-3">
          
            <div className="form-group mb-0">
            <label className="form-label">One Week</label>
              <input
                type="text"
                className="form-control"
                value={one_week}
                placeholder="Enter One Week"
                
                name={one_week}
                onChange={(e) => setone_week(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-3">
          
            <div className="form-group mb-0">
            <label className="form-label">One Month</label>
              <input
                type="text"
                className="form-control"
                value={one_month}
                placeholder="Enter One Month"
                
                name={one_month}
                onChange={(e) => setone_month(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-3">
          
          <div className="form-group mb-0">
          <label className="form-label">Three Months</label>
            <input
             type="text"
             className="form-control"
             value={three_months}
             placeholder="Enter Three Months"
             
             name={three_months}
             onChange={(e) => setthree_months(e.target.value)}
            />
          </div>
        </div>
          <div className="col-md-3">
          
            <div className="form-group mb-0">
            <label className="form-label">One Year</label>
              <input
               type="text"
               className="form-control"
               value={one_year}
               placeholder="Enter One Year"
               
               name={one_year}
               onChange={(e) => setone_year(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-3">
          
            <div className="form-group mb-0">
            <label className="form-label">Three Years</label>
              <input
               type="text"
               className="form-control"
               value={three_years}
               placeholder="Enter Three Years"
               
               name={three_years}
               onChange={(e) => setthree_years(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-12">
          
          <div className="form-group mb-0">
          <label className="form-label">Select Expiry</label>
            <input
             type="date"
             className="form-control"
             value={Expiry}
             placeholder="Enter Three Years"
             
             name={Expiry}
             onChange={(e) => setExpiry(e.target.value)}
            />
          </div>
        </div>
        {/* <div className="col-md-12">
          
          <div className="form-group mb-0">
          <label className="form-label">Upload Media</label>
            <input
             type="file"
             className="form-control"
             value={media}
             placeholder=""
             
             name={media}
             //@ts-ignore
             onChange={(e) => setmedia(e.target.files[0])}
            />
          </div>
        </div> */}

         </>
    ) : null }


          
 




        </div>
      </div>
      <div className="card-footer text-right">
        <input type="submit"   className="btn btn-primary" value="Add Recommendation"/>
        
       
      </div>
      <div className="message">{message ? <p>{message}</p> : null}</div>
    </form>
  </div>
    </div>
    </div>
   
 
  {/* COL END */}
</div>
</div>
</div></div>
   </>
      )
}