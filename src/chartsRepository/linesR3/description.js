var Latex = require('react-latex');

const description = <div>
  <p>Hey</p>
</div>


const miniDescription = <div>
  <p>Lines are an interesting combination of vectors properties. A line is defined by a point <Latex>{"$P$"}</Latex> and a vector <Latex>{"$A$"}</Latex>, both in <Latex>{"$R_n$"}</Latex>. Where <Latex>{"$A$"}</Latex> is named <b>direction vector</b> and <Latex>{"$P$"}</Latex> is the initial point of the line. With these elements you can generate a line with <Latex>{"$L(P;A) = \\{P + tA | t \\in \\reals \\}$"}</Latex>. In other words, if you sum  <Latex>{"$P$"}</Latex> with the <b>linear span</b> of <Latex>{"$A$"}</Latex> you can generate a line.</p>
  <p>Our chart is pretty explicit with the fact that <b>a line is a infinite set of points</b> in <Latex>{"$R_n$"}</Latex>, which follow the same direction. It means if you change the direction of <Latex>{"$A$"}</Latex> the line will change its <b>slope</b>. And, if you change <Latex>{"$P$"}</Latex> the line will change its <b>position</b>. </p>
</div>

export { description, miniDescription };
