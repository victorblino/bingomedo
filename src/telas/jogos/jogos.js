import './jogos.css'
import { Celula } from '../../models/bingo/celula';
import Select from 'react-select';
import { useState } from 'react';
import '../../models/bingo/celula.css'

function Jogos() {


  const [x3, setx3] = useState(false);
  const [x4, setx4] = useState(false);
  const [x5, setx5] = useState(false);
  const [x6, setx6] = useState(false);
  const [classe, setClasse] = useState("x3");

  function aplicar() {
    let texto = document.getElementById("inputBingo").value;
    var lines = texto.split("\n");
    var count = lines.length;
    console.log(texto.split("\n").length);


    let div3 = document.getElementById("x3div");
    let div4 = document.getElementById("x4div");
    let div5 = document.getElementById("x5div");
    let div6 = document.getElementById("x6div");

    if (count < 9) { }
    div3.innerHTML = "";
    div4.innerHTML = "";
    div5.innerHTML = "";

    if (count <= 9) {

      div3.innerHTML = "";
      div4.innerHTML = "";
      div5.innerHTML = "";
      setx3(true)
      setx4(false)
      setx5(false)
      setx6(false)
      setClasse("x3");
      let i = 0;
      let padrao1 = false;
      let padrao2 = false;
      let padrao3 = false;
      let padrao4 = false;
      let padrao5 = false;
      let padrao6 = false;

      lines.forEach(element => {
        let cell = document.createElement("button");
        cell.className = "celula";
        cell.id = "celula" + i
        console.log(cell.click)
        cell.onclick = () => {
          let celulasel = document.getElementById(cell.id);
          if (celulasel.className == "celula cellselecionado") {
            celulasel.className = "celula"
          } else if (celulasel.className == "celula") {
            celulasel.className = "celula cellselecionado"
          }
        }
        cell.innerText = element.toString();
        div3.appendChild(cell);
        i += 1;
      }
      );
    };
    if (count >= 10 && count <= 16) {

      div3.innerHTML = "";
      div4.innerHTML = "";
      div5.innerHTML = "";
      setx3(false)
      setx4(true)
      setx5(false)
      setx6(false)
      setClasse("x4");
      let i = 0;
      lines.forEach(element => {
        let cell = document.createElement("button");
        cell.className = "celula";
        cell.id = "celula" + i
        console.log(cell.click)
        cell.onclick = () => {
          let celulasel = document.getElementById(cell.id);
          console.log(cell.id);
          if (celulasel.className == "celula cellselecionado") {
            celulasel.className = "celula"
          } else if (celulasel.className == "celula") {
            celulasel.className = "celula cellselecionado"
          }
        }
        cell.innerText = element.toString();
        div4.appendChild(cell);
        i += 1;
      }
      );
    }
    if (count > 16 && count <= 25) {

      div3.innerHTML = "";
      div4.innerHTML = "";
      div5.innerHTML = "";
      setx3(false)
      setx4(false)
      setx5(true)
      setx6(false)
      setClasse("x5");
      let i = 0;
      lines.forEach(element => {
        let cell = document.createElement("button");
        cell.className = "celula";
        cell.id = "celula" + i
        console.log(cell.click)
        cell.onclick = () => {
          let celulasel = document.getElementById(cell.id);
          if (celulasel.className == "celula cellselecionado") {
            celulasel.className = "celula"
          } else if (celulasel.className == "celula") {
            celulasel.className = "celula cellselecionado"
          }
        }
        cell.innerText = element.toString();
        div5.appendChild(cell);
        i += 1;
      }
      );
    }
    if (count > 25 && count <= 36) {

      div3.innerHTML = "";
      div4.innerHTML = "";
      div5.innerHTML = "";
      div6.innerHTML = "";
      setx3(false)
      setx4(false)
      setx5(true)
      setx6(true)
      setClasse("x6");
      let i = 0;
      lines.forEach(element => {
        let cell = document.createElement("button");
        cell.className = "celulamenor";
        cell.id = "celula" + i
        console.log(cell.click)
        cell.onclick = () => {
          let celulasel = document.getElementById(cell.id);
          console.log(cell.id);
          if (celulasel.className == "celulamenor cellselecionado") {
            celulasel.className = "celulamenor"
          } else if (celulasel.className == "celulamenor") {
            celulasel.className = "celulamenor cellselecionado"
          }
        }
        cell.innerText = element.toString();
        div6.appendChild(cell);
        i += 1;
      }
      );
    }



  }


  return (
    <div className="jogos">
      <div id='bingo' className={classe}>
        <div id="x3div" className={x3 ? "Aparece" : "escondido"}>
        </div>
        <div id="x4div" className={x4 ? "Aparece" : "escondido"}>
        </div>
        <div id="x5div" className={x5 ? "Aparece" : "escondido"}>
        </div>
        <div id="x6div" className={x6 ? "Aparece" : "escondido"}>
        </div>
      </div>
      <div className='lista'>
        <h1>Bingo</h1>
        <div id="foda">
          <h4>Conteudo do bingo, 1 linha = 1 quadrado.<br /> proporção modificada automaticamente <br />

          </h4>

          <h5 className={classe == "x3" ? "selecionado" : "naosel"}>3x3 </h5>
          <h5 className={classe == "x4" ? "selecionado" : "naosel"}>4x4 </h5>
          <h5 className={classe == "x5" ? "selecionado" : "naosel"}>5x5 </h5>
          <h5 className={classe == "x6" ? "selecionado" : "naosel"}>6x6 </h5>

          <button id="btnAplicar" onClick={aplicar}>Aplicar</button>
        </div>
        <textarea id='inputBingo' />
      </div>
    </div >

  );

}


export default Jogos;
