import { FaCheck } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";


function Create() {
  return (
    <>
      <div className="title">Crie a localização</div>
      <br />
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-mobile is-half">
            <div className="field">
              <label className="label">Imagem</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Insira o link de uma imagem"
                />
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
                  <i><FaUser /></i>
                </span>
                <span className="icon is-small is-right">
                  <i><FaCheck /></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Nivel do lixo</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input is-danger"
                  type="email"
                  placeholder="Email input"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-exclamation-triangle"></i>
                </span>
              </div>
              <p className="help is-danger">This email is invalid</p>
            </div>

            <div className="field">
              <label className="label">Subject</label>
              <div className="control">
                <div className="select">
                  <select>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Textarea"
                ></textarea>
              </div>
            </div>

            <div className="field">
              <div className="control">
                <label className="checkbox">
                  <input type="checkbox" />I agree to the{" "}
                  <a href="#">terms and conditions</a>
                </label>
              </div>
            </div>

            <div className="field">
              <div className="control">
                <label className="radio">
                  <input type="radio" name="question" />
                  Yes
                </label>
                <label className="radio">
                  <input type="radio" name="question" />
                  No
                </label>
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Submit</button>
              </div>
              <div className="control">
                <button className="button is-link is-light">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Create;
