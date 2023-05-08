import FormulaTable from 'utils/formulaTable';
var Latex = require('react-latex');

const description = <div>
  <p>
    <b>Definition</b>: Given <Latex>{"$P$ and $A$ in $R_n$"}</Latex>. The set of all points in <Latex>{"$P + tA$, $t \\in \\reals$"}</Latex> is a line which crosses through <Latex>{"$P$"}</Latex> and is parallel to <Latex>{"$A$"}</Latex>. We appoint it with <Latex>{"$L(P;A)$"}</Latex>.
  </p>
  <FormulaTable data={[
    "$L(P;A) = \\{P + tA | t \\in \\reals \\}$"
  ]}
  />
  <p>Let's analyze some important considerations:</p>
  <table>
    <thead></thead>
    <tbody>
      <tr>
        <td style={{ paddingRight: 10 }}>1</td>
        <td>
          We can replace the direction vector with some vector <Latex>{"$B$"}</Latex>, where <Latex>{"$B = cA$"}</Latex>. Because it keeps the same direction of <Latex>{"$A$"}</Latex> due to the fact that they are parallel.
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>
          Two lines <Latex>{"$L(P;A)$"}</Latex> and <Latex>{"$L(P;B)$"}</Latex> which cross through the same point <Latex>{"$P$"}</Latex> are equal if the direction vectors <Latex>{"$A, B$"}</Latex> are parallel. If they were not parallel. We would get two different lines which cross through the same point but with <b>different slope</b>.
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>
          Two lines <Latex>{"$L(P;A)$"}</Latex> and <Latex>{"$L(Q;A)$"}</Latex> with the same direction vector <Latex>{"$A$"}</Latex> are equal if <Latex>{"$Q \\in L(P;A)$"}</Latex>. It means that <Latex>{"$Q$"}</Latex> would keep the same position. We can check if <Latex>{"$Q \\in L(P;A)$"}</Latex> checking <Latex>{"$Q - P = cA$"}</Latex>, where <Latex>{"$c$"}</Latex> is some constant which means that <Latex>{"$Q - P$"}</Latex> is parallel to A.
        </td>
      </tr>
      <tr>
        <td>4</td>
        <td>
          Two different points generate a line. The line defined by <Latex>{"$\\{P + t(Q - P) \\}$"}</Latex> will contain both <Latex>{"$P, Q$"}</Latex>.
        </td>
      </tr>
    </tbody>
  </table>
  <p>It is great to know that these reasonings are supported by the fact that <Latex>{"$A, B$"}</Latex> were <b>linearly dependent</b> if <Latex>{"$B = cA$"}</Latex>. Now let's check an example in <Latex>{"$\\reals^2$"}</Latex>. We will get the usual equations we leanrt in the school, but we will also check some important consideration. Given</p>
  

</div>


const miniDescription = <div>
  <p>Lines are an interesting combination of vectors properties. A line is defined by a point <Latex>{"$P$"}</Latex> and a vector <Latex>{"$A$"}</Latex>, both in <Latex>{"$R_n$"}</Latex>. Where <Latex>{"$A$"}</Latex> is named <b>direction vector</b> and <Latex>{"$P$"}</Latex> is the initial point of the line. With these elements you can generate a line with <Latex>{"$L(P;A) = \\{P + tA | t \\in \\reals \\}$"}</Latex>. In other words, if you sum  <Latex>{"$P$"}</Latex> with the <b>linear span</b> of <Latex>{"$A$"}</Latex> you can generate a line.</p>
  <p>Our chart is pretty explicit with the fact that <b>a line is a infinite set of points</b> in <Latex>{"$R_n$"}</Latex>, which follow the same direction. It means if you change the direction of <Latex>{"$A$"}</Latex> the line will change its <b>slope</b>. And, if you change <Latex>{"$P$"}</Latex> the line will change its <b>position</b>. </p>
</div>

export { description, miniDescription };
