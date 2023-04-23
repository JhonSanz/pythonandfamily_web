var Latex = require('react-latex');

const description = <div>
  <p>Vectors are represented as oriented segments or arrows. Their operations are expressed based in their components
    <Latex>{"$(a_{1}, a_{2}, ... , a_{n})$"}</Latex>.</p>
  <p>The set of n-dimentional vectors is named vectorial space, designed with Vn.</p>
  <h3>Definition</h3>
  <p>Given A, B in Vn: </p>
  <ul>
    <li><Latex>{"$A = B$"}</Latex> if <Latex>{"$a_{1} = b_{1}, a_{2} = b_{2}, ... , a_{n} = b_{n}$"}</Latex></li>
    <li><Latex>{"$A + B = (a_{1} + b_{1}, a_{2} + b_{2}, ... , a_{n} + b_{n})$"}</Latex></li>
    <li><Latex>{"$cA = (ca_{1}, ca_{2}, ... , ca_{n})$"}</Latex> with c as scalar value </li>
  </ul>
  <br />
  <p>
    Here there is a reprentation of the parerlogram rule. We have two vectors A, B. Notice that their
    intial point is not the coordinate origin <Latex>{"$(0,0,0)$"}</Latex>.
  </p>
</div>

export default description;