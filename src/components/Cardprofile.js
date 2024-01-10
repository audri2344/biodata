import acsent from "../assets/gambar.png";
import "../css/style.css";
import gambar from "../assets/gambar.png"
const Cardprofile = () => {
  return (
    // 1. Inline Css
    
    <div
      style={{
        backgroundColor: "pink",
        width: "100vw",
        height: "100vh",
        backgroundImage: "url(" + { acsent } + ")",
        backgroundPosition: "bottom right",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign:"200px",
      }}
    >
      {/* 2. Css File */}

      <div className="card" >
        <img src={gambar} width="100px"/>
        <div align="center">
          <h1>BIODATA</h1>
        </div>
        <div align="center">
          <h2>Audri Aurelia</h2>
        </div>
        <div>
          Saya seorang siswa SMKN 6 Jember,Jurusan Rekayasa Perangkat Lunak.
        </div>
        <div>Alamat : Tanggul Kulon</div>
        <div>Kecamatan   : Tanggul</div>
        <div>Kabupaten   : Jember</div>
        <div>No_Hp  :082876234111</div>
        <div>Hobi :Membaca</div>
      </div>
    </div>
  );
};

export default Cardprofile;
