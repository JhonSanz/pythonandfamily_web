import FormulaTable from 'utils/formulaTable';
var Latex = require('react-latex');

const description = <div>
  <p>:D</p>
</div>

const miniDescription = <div>
 <p>Here we can see three vectors in our chart. These are the <b>Coordinate Unit Vectors</b>. They are just vectors which are in the same direction as the axeses, and have lenght <Latex>{"$1$"}</Latex>. This is important to clarify some details.</p>
 <p>The next three vectors are also named <Latex>{"$ \\hat{i}, \\hat{j}, \\hat{k}$"}</Latex> and with a Lineal Combination you will get a vector expressed in its components. It seems to be simple, and even more with the next idea: with these three vector you are be able to <u>generate all the vectors in <Latex>{"$R^3$"}</Latex></u>. But, thanks to that it will appear important concepts like <b>Linear span</b> and <b>Linear independence</b>.</p>
</div>

export { description, miniDescription };
