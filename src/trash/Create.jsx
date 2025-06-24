import { FaFileImage } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa6";
import { FaSquarePhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";

import "../assets/css/Create.css";

function Create() {
  return (
    <>
      <div className="title">Cria a localização</div>
      <br />
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-mobile is-half">
            <div className="field">
              <label className="label">Imagem</label>

              <div className="control has-icons-left">
                <input
                  className="input"
                  type="text"
                  placeholder="Insira o link de uma imagem"
                />
                <span className="icon is-small is-left">
                  <i>
                    <FaFileImage />
                  </i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Zonas</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="text"
                  placeholder="Insira nome da localização ex. Cazenga São Paulo"
                />
                <span className="icon is-small is-left">
                  <i>
                    <FaHouse />
                  </i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">
                Quantas recolhas a Elisal faz por dia nesta zona
              </label>
              <div className="control has-icons-left has-icons-right">
                <div className="select">
                  <select>
                    <option>N/A</option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>

                <span className="icon is-small is-left">
                  <i>
                    <FaTruck />
                  </i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">
                Quantas postos de lixo tem na zona
              </label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="number"
                  placeholder="Insira o numero de posto de lixo que tem nesta zona"
                  id="posto_de_lixo"
                />
                <span className="icon is-small is-left">
                  <i>
                    <FaTrashCan />
                  </i>
                </span>
              </div>
            </div>
            <br />

            <div className="field">
              <label className="label">
                Contacto dos agentes de recolha de lixo domiciliario
              </label>
              <div className="control has-icons-left ">
                <input
                  className="input"
                  type="text"
                  placeholder="Insira o nome do agente numero 1º"
                />
                <span className="icon is-small is-left">
                  <i>
                    <FaUser />
                  </i>
                </span>
              </div>
              <br />
              <div className="control has-icons-left has-icons-right ">
                <input
                  className="input"
                  type="number"
                  placeholder="Insira o numero do agente numero 1º"
                  id="numero_agente"
                />
                <span className="icon is-small is-left">
                  <i>
                    <FaSquarePhone />
                  </i>
                </span>
              </div>
              <br />
              <div className="control has-icons-left ">
                <input
                  className="input"
                  type="text"
                  placeholder="Insira o nome do agente numero 2º"
                />
                <span className="icon is-small is-left">
                  <i>
                    <FaUser />
                  </i>
                </span>
              </div>
              <br />
              <div className="control has-icons-left has-icons-right ">
                <input
                  className="input"
                  type="number"
                  placeholder="Insira o numero do agente numero 2º"
                  id="numero_agente"
                />
                <span className="icon is-small is-left">
                  <i>
                    <FaSquarePhone />
                  </i>
                </span>
              </div>
              <br />
                            <div className="control has-icons-left ">
                <input
                  className="input"
                  type="text"
                  placeholder="Insira o nome do agente numero 3º"
                />
                <span className="icon is-small is-left">
                  <i>
                    <FaUser />
                  </i>
                </span>
              </div>
              <br />
              <div className="control has-icons-left has-icons-right ">
                <input
                  className="input"
                  type="number"
                  placeholder="Insira o numero do agente numero 3º"
                  id="numero_agente"
                />
                <span className="icon is-small is-left">
                  <i>
                    <FaSquarePhone />
                  </i>
                </span>
              </div>
              <br/>
                            <div className="control has-icons-left ">
                <input
                  className="input"
                  type="text"
                  placeholder="Insira o nome do agente numero 4º"
                />
                <span className="icon is-small is-left">
                  <i>
                    <FaUser />
                  </i>
                </span>
              </div>
              <br />
              <div className="control has-icons-left has-icons-right ">
                <input
                  className="input"
                  type="number"
                  placeholder="Insira o numero do agente numero 4º"
                  id="numero_agente"
                />
                <span className="icon is-small is-left">
                  <i>
                    <FaSquarePhone />
                  </i>
                </span>
              </div>
              <br/>
                            <div className="control has-icons-left ">
                <input
                  className="input"
                  type="text"
                  placeholder="Insira o nome do agente numero 5º"
                />
                <span className="icon is-small is-left">
                  <i>
                    <FaUser />
                  </i>
                </span>
              </div>
              <br />
              <div className="control has-icons-left has-icons-right ">
                <input
                  className="input"
                  type="number"
                  placeholder="Insira o numero do agente numero 5º"
                  id="numero_agente"
                />
                <span className="icon is-small is-left">
                  <i>
                    <FaSquarePhone />
                  </i>
                </span>
              </div>
              <br/>
            </div>

            <div className="field is-grouped is-centered">
              <div className="control">
                <button className="button  is-link">Submeter</button>
              </div>
              <div className="control">
                <button className="button  is-link is-light">Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Create;
