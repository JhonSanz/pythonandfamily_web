import FormulaTable from 'utils/formulaTable';
var Latex = require('react-latex');

const description = <div>
  hey :)
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
