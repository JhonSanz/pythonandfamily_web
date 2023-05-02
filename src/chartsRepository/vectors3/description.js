import FormulaTable from 'utils/formulaTable';
var Latex = require('react-latex');

const description = <div>
  <p>The triangular inequality says that if you sum two sides of a triangle the result is going to be greater than or equal to the remaining side. It could be pretty obvious visually in our context of vectors, but in math all have to be demonstrated. As we can see in our chart, given two vectors <Latex>{"$A, B$"}</Latex> the sum is <Latex>{"$A + B$"}</Latex>, using the paralelogram rule. To get the magnitude of each one, we use <Latex>{"$\\lVert A \\rVert, \\lVert B \\rVert, $ and $\\lVert A + B\\rVert$"}</Latex>. So, to present it:</p>
  <p><b>Theorem</b>: Given <Latex>{"$A, B$ in $V_{n}$"}</Latex></p>
  <FormulaTable data={[
    "$\\lVert A + B \\rVert \\leq \\lVert A \\rVert + \\lVert B \\rVert$"
  ]} />
  <p>Similar with the Cauchy-Schwarz inequality, the equal sign is valid for vectors which are scalar multiple of the other one. For this demonstration I just can say that someday a genius did the following:
  </p>
  <FormulaTable enableScroll data={[
    "$\\lVert A + B \\rVert^2 \\leq (\\lVert A \\rVert + \\lVert B \\rVert)^2$",
    "$(A+B)\\cdot(A+B) \\leq \\lVert A \\rVert^2 + 2 \\lVert A \\rVert \\lVert B \\rVert + \\lVert B \\rVert^2$",
    "$A \\cdot A + 2A \\cdot B + B \\cdot B \\leq \\lVert A \\rVert^2 + 2 \\lVert A \\rVert \\lVert B \\rVert + \\lVert B \\rVert^2$",
    "$\\lVert A \\rVert^2 + 2A \\cdot B + \\lVert B \\rVert^2 \\leq \\lVert A \\rVert^2 + 2 \\lVert A \\rVert \\lVert B \\rVert + \\lVert B \\rVert^2$",
    "$A \\cdot B \\leq \\lVert A \\rVert \\lVert B \\rVert$"
  ]} />
  <p>Yes!, we got the Cauchy-Schwarz inequality, and as you know that is a fact. We don't need to demonstrate it again.</p>
</div>

const miniDescription = <div>
  <p>
    In this episode we are going to find one of the most important properties of vectors. Previously, we learnt what is the paralelogram rule and Cauchy-Schwartz inequality. By using that, we are going to find this <b>property of internal product</b>.
  </p>
  <FormulaTable data={[
    "$A \\cdot B = 0 \\ $ if they are orthogonal"
  ]} />
  <p>Which is useful to understand the Projections on vectors.</p>
  <FormulaTable data={[
    "$C = \\frac {A \\cdot B}{ \\ \\lVert B \\rVert^2}B $"
  ]} />
  <p>Finally we will get how to calculate the <b>angle between two vectors</b>. All those things are possible after analizing the Triangular inequality.</p>
  <FormulaTable data={[
    "$A \\cdot B = \\lVert A \\rVert \\lVert B \\rVert cos\\Theta $",
    "$\\Theta = cos^{-1} (\\frac {A \\cdot B}{\\lVert A \\rVert \\lVert B \\rVert} )$",
  ]} />

</div>

export { description, miniDescription };
