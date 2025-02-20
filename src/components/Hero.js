import React, { useState } from "react";
import './Hero.css'; // Import Hero-specific CSS
import BackgroundVideo from '../images/12207605_1920_1080_24fps.mp4';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker styles
import { LuCalendarHeart } from "react-icons/lu";

const Hero = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    code: "IN +91", // Default country code
    phone: "",
    eventDate: new Date(), // Default to today's date
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      eventDate: date,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone || !formData.eventDate || !formData.location) {
      alert("Please fill out all required fields.");
      return;
    }

    const phoneLength = formData.phone.length;
    if (formData.code === "IN +91" && phoneLength !== 10) {
      alert("Please enter a valid 10-digit phone number for India.");
      return;
    }

    const whatsappNumber = "919742799998";
    const formattedDate = formData.eventDate.toISOString().slice(0, 10);
    const whatsappMessage = `Hello, my name is ${formData.fullName}. I am interested in wedding planning for ${formattedDate} at ${formData.location}. Please contact me at ${formData.code} ${formData.phone}.`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");
  };

  const indianCities = [
    "Delhi", "Mumbai", "Kolkata", "Bangalore", "Chennai", "Hyderabad", "Pune", "Ahmedabad", "Jaipur", "Chandigarh"
  ];

  return (
    <section id="main" className="hero-section">
      <video autoPlay muted loop className="hero-video">
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="text-container">
        <h1 className="text-line-bold">
          Are you trying to find a event planner in Bangalore?
        </h1>
        <p className="text-line">
          Speak with Bangalore's Leading Event Specialist Right Away
        </p>
      </div>

      <div className="form-container">
        <h2>Speak To Our Expert</h2>
        <p>Have all your questions answered and get a free competitive quote</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="fullName">Full Name *</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="phone">Code *</label>
          <div className="phone-container">
            <select
              name="code"
              value={formData.code}
              onChange={handleInputChange}
            >
              <option value="AF +93">AF +93</option>
              <option value="AL +355">AL +355</option>
              <option value="DZ +213">DZ +213</option>
              <option value="AS +1">AS +1</option>
              <option value="AD +376">AD +376</option>
              <option value="AO +244">AO +244</option>
              <option value="AI +1">AI +1</option>
              <option value="AG +1">AG +1</option>
              <option value="AR +54">AR +54</option>
              <option value="AM +374">AM +374</option>
              <option value="AW +297">AW +297</option>
              <option value="AU +61">AU +61</option>
              <option value="AT +43">AT +43</option>
              <option value="AZ +994">AZ +994</option>
              <option value="BS +1">BS +1</option>
              <option value="BH +973">BH +973</option>
              <option value="BD +880">BD +880</option>
              <option value="BB +1">BB +1</option>
              <option value="BY +375">BY +375</option>
              <option value="BE +32">BE +32</option>
              <option value="BZ +501">BZ +501</option>
              <option value="BJ +229">BJ +229</option>
              <option value="BM +1">BM +1</option>
              <option value="BT +975">BT +975</option>
              <option value="BO +591">BO +591</option>
              <option value="BA +387">BA +387</option>
              <option value="BW +267">BW +267</option>
              <option value="BR +55">BR +55</option>
              <option value="BN +673">BN +673</option>
              <option value="BG +359">BG +359</option>
              <option value="BF +226">BF +226</option>
              <option value="BI +257">BI +257</option>
              <option value="KH +855">KH +855</option>
              <option value="CM +237">CM +237</option>
              <option value="CA +1">CA +1</option>
              <option value="CV +238">CV +238</option>
              <option value="KY +1">KY +1</option>
              <option value="CF +236">CF +236</option>
              <option value="TD +235">TD +235</option>
              <option value="CL +56">CL +56</option>
              <option value="CN +86">CN +86</option>
              <option value="CO +57">CO +57</option>
              <option value="KM +269">KM +269</option>
              <option value="CG +242">CG +242</option>
              <option value="CR +506">CR +506</option>
              <option value="HR +385">HR +385</option>
              <option value="CU +53">CU +53</option>
              <option value="CY +357">CY +357</option>
              <option value="CZ +420">CZ +420</option>
              <option value="DK +45">DK +45</option>
              <option value="DJ +253">DJ +253</option>
              <option value="DM +1">DM +1</option>
              <option value="DO +1">DO +1</option>
              <option value="EC +593">EC +593</option>
              <option value="EG +20">EG +20</option>
              <option value="SV +503">SV +503</option>
              <option value="GQ +240">GQ +240</option>
              <option value="ER +291">ER +291</option>
              <option value="EE +372">EE +372</option>
              <option value="ET +251">ET +251</option>
              <option value="FJ +679">FJ +679</option>
              <option value="FI +358">FI +358</option>
              <option value="FR +33">FR +33</option>
              <option value="GA +241">GA +241</option>
              <option value="GM +220">GM +220</option>
              <option value="GE +995">GE +995</option>
              <option value="DE +49">DE +49</option>
              <option value="GH +233">GH +233</option>
              <option value="GR +30">GR +30</option>
              <option value="GD +1">GD +1</option>
              <option value="GU +1">GU +1</option>
              <option value="GT +502">GT +502</option>
              <option value="GN +224">GN +224</option>
              <option value="GW +245">GW +245</option>
              <option value="GY +592">GY +592</option>
              <option value="HT +509">HT +509</option>
              <option value="HN +504">HN +504</option>
              <option value="HK +852">HK +852</option>
              <option value="HU +36">HU +36</option>
              <option value="IS +354">IS +354</option>
              <option value="IN +91">IN +91</option>
              <option value="ID +62">ID +62</option>
              <option value="IR +98">IR +98</option>
              <option value="IQ +964">IQ +964</option>
              <option value="IE +353">IE +353</option>
              <option value="IL +972">IL +972</option>
              <option value="IT +39">IT +39</option>
              <option value="JM +1">JM +1</option>
              <option value="JP +81">JP +81</option>
              <option value="JO +962">JO +962</option>
              <option value="KZ +7">KZ +7</option>
              <option value="KE +254">KE +254</option>
              <option value="KI +686">KI +686</option>
              <option value="KR +82">KR +82</option>
              <option value="KW +965">KW +965</option>
              <option value="KG +996">KG +996</option>
              <option value="LA +856">LA +856</option>
              <option value="LV +371">LV +371</option>
              <option value="LB +961">LB +961</option>
              <option value="LS +266">LS +266</option>
              <option value="LR +231">LR +231</option>
              <option value="LY +218">LY +218</option>
              <option value="LI +423">LI +423</option>
              <option value="LT +370">LT +370</option>
              <option value="LU +352">LU +352</option>
              <option value="MO +853">MO +853</option>
              <option value="MK +389">MK +389</option>
              <option value="MG +261">MG +261</option>
              <option value="MW +265">MW +265</option>
              <option value="MY +60">MY +60</option>
              <option value="MV +960">MV +960</option>
              <option value="ML +223">ML +223</option>
              <option value="MT +356">MT +356</option>
              <option value="MH +692">MH +692</option>
              <option value="MR +222">MR +222</option>
              <option value="MU +230">MU +230</option>
              <option value="MX +52">MX +52</option>
              <option value="FM +691">FM +691</option>
              <option value="MD +373">MD +373</option>
              <option value="MC +377">MC +377</option>
              <option value="MN +976">MN +976</option>
              <option value="ME +382">ME +382</option>
              <option value="MA +212">MA +212</option>
              <option value="MZ +258">MZ +258</option>
              <option value="MM +95">MM +95</option>
              <option value="NA +264">NA +264</option>
              <option value="NR +674">NR +674</option>
              <option value="NP +977">NP +977</option>
              <option value="NL +31">NL +31</option>
              <option value="NZ +64">NZ +64</option>
              <option value="NI +505">NI +505</option>
              <option value="NE +227">NE +227</option>
              <option value="NG +234">NG +234</option>
              <option value="NO +47">NO +47</option>
              <option value="OM +968">OM +968</option>
              <option value="PK +92">PK +92</option>
              <option value="PW +680">PW +680</option>
              <option value="PS +970">PS +970</option>
              <option value="PA +507">PA +507</option>
              <option value="PG +675">PG +675</option>
              <option value="PY +595">PY +595</option>
              <option value="PE +51">PE +51</option>
              <option value="PH +63">PH +63</option>
              <option value="PL +48">PL +48</option>
              <option value="PT +351">PT +351</option>
              <option value="QA +974">QA +974</option>
              <option value="RO +40">RO +40</option>
              <option value="RU +7">RU +7</option>
              <option value="RW +250">RW +250</option>
              <option value="KN +1">KN +1</option>
              <option value="LC +1">LC +1</option>
              <option value="VC +1">VC +1</option>
              <option value="WS +685">WS +685</option>
              <option value="SM +378">SM +378</option>
              <option value="SA +966">SA +966</option>
              <option value="SN +221">SN +221</option>
              <option value="RS +381">RS +381</option>
              <option value="SC +248">SC +248</option>
              <option value="SL +232">SL +232</option>
              <option value="SG +65">SG +65</option>
              <option value="SK +421">SK +421</option>
              <option value="SI +386">SI +386</option>
              <option value="SB +677">SB +677</option>
              <option value="SO +252">SO +252</option>
              <option value="ZA +27">ZA +27</option>
              <option value="SS +211">SS +211</option>
              <option value="ES +34">ES +34</option>
              <option value="LK +94">LK +94</option>
              <option value="SD +249">SD +249</option>
              <option value="SR +597">SR +597</option>
              <option value="SE +46">SE +46</option>
              <option value="CH +41">CH +41</option>
              <option value="SY +963">SY +963</option>
              <option value="TW +886">TW +886</option>
              <option value="TJ +992">TJ +992</option>
              <option value="TZ +255">TZ +255</option>
              <option value="TH +66">TH +66</option>
              <option value="TL +670">TL +670</option>
              <option value="TG +228">TG +228</option>
              <option value="TO +676">TO +676</option>
              <option value="TT +1">TT +1</option>
              <option value="TN +216">TN +216</option>
              <option value="TR +90">TR +90</option>
              <option value="TM +993">TM +993</option>
              <option value="TV +688">TV +688</option>
              <option value="UG +256">UG +256</option>
              <option value="UA +380">UA +380</option>
              <option value="AE +971">AE +971</option>
              <option value="GB +44">GB +44</option>
              <option value="US +1">US +1</option>
              <option value="UY +598">UY +598</option>
              <option value="UZ +998">UZ +998</option>
              <option value="VU +678">VU +678</option>
              <option value="VE +58">VE +58</option>
              <option value="VN +84">VN +84</option>
              <option value="YE +967">YE +967</option>
              <option value="ZM +260">ZM +260</option>
              <option value="ZW +263">ZW +263</option>
            </select>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          <label htmlFor="eventDate">Event Date *</label>
          <div className="date-picker-wrapper">
            <DatePicker
              selected={formData.eventDate}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
              className="custom-date-picker"
              required
            />
            <span
              className="calendar-icon"
              onClick={() => document.querySelector('.custom-date-picker').focus()}
            >
              <LuCalendarHeart />
            </span>
          </div>

          <label htmlFor="location">Location *</label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Your Location</option>
            {indianCities.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>

          <div className="checkbox-container">
            <input type="checkbox" id="updates" name="updates" defaultChecked />
            <label htmlFor="updates">Send me updates on WhatsApp</label>
          </div>

          <button type="submit" className="cta-button">Get Instant Quote</button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
