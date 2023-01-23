import "./tribute.css";
import soldier_img from "./images/ycg.jpg";
import twitter from "./images/twitter.svg";
import instagram from "./images/instagram.svg";
import facebook from "./images/facebook.svg";

const Tribute = () => {
  return (
    <div className="tribute_main">
      <div className="tribute_body">
        <div className="per_suy">
          <div className="tribute_content">
            <span className="l1_suy">The act of</span>
            <br />
            <span className="l2_suy">VALOUR</span>
            <br />
            <br />
            <br />
            <p className="l3_suy">
              During the India-China war in 1962 when soldiers of 4 Garhwal
              Rifles were engaged in the intense battle of Nuranang, Jashwant
              Singh and his troop members received an order to retrieve from
              their positions due to lack of resources and manpower. But the
              brave heart soldier from Uttarakhand refused the order of
              commanding officers and decided to stay put. He refused to leave
              the battle ground and fought against the Chinese army
              single-handedly.
            </p>
            <br />
            <div className="a_suy">
              <a href="/tribute" className="btn a1_suy">
                Read Full Story
              </a>
              <a href="/tribute" className="btn a2_suy">
                Load Mozre
              </a>
            </div>
          </div>

          <img className="tribute_soldier" src={soldier_img} alt="" />
        </div>
        <div className="tribute_end_line">
          Let this story not go unnoticed. Share on your social media with
          #tributeByPravinya! &ensp;
          <a href="https://www.instagram.com/">
            <img
              style={{ width: "20px", height: "20px" }}
              src={instagram}
              alt="instagram"
            />
          </a>
          &ensp;
          <a href="https://www.facebook.com/">
            <img
              style={{ width: "20px", height: "20px" }}
              src={facebook}
              alt="facebook"
            />
          </a>
          &ensp;
          <a href="https://twitter.com/">
            <img
              style={{ width: "20px", height: "20px" }}
              src={twitter}
              alt="twitter"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tribute;
