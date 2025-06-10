const Navbar = () => {
  return (
    <>
      <div class="tabs is-toggle is-fullwidth ">
        <ul>
          <li class="is-active">
            <a>
              <span class="icon"
              ><i class="fas fa-location" aria-hidden="true"></i
              ></span>
              <span>Postcode</span>
            </a>
          </li>
          <li class="is-active">
            <a>
              <span class="icon"
              ><i class="fas fa-waste" aria-hidden="true"></i
              ></span>
              <span>Waste Type</span>
            </a>
          </li>
          <li class="is-active">
            <a>
              <span class="icon"><i class="fas fa-film" aria-hidden="true"></i></span>
              <span>Select Skip</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon"
              ><i class="far fa-file-alt" aria-hidden="true"></i
              ></span>
              <span>Permit Check</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon"
              ><i class="far fa-file-alt" aria-hidden="true"></i
              ></span>
              <span>Choose Date</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon"
              ><i class="far fa-file-alt" aria-hidden="true"></i
              ></span>
              <span>Payment</span>
            </a>
          </li>
        </ul>
      </div>
    </>

  )
}

export default Navbar;

