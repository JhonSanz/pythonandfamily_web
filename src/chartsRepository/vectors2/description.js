var Latex = require('react-latex');

const description = <div className='chartCardDescription'>
  <p>Let's check two important operations we can perform with vectors, and one of the most used theorems.</p>
  <p><b>Definition</b>: Given <Latex>{"$\\lVert A \\rVert = \\sqrt{a_1^2 + a_2^2 + ... + a_n^2}$"}</Latex> in <Latex>{"$V_{n}$"}</Latex> the <b>scalar/dot product</b> is</p>
  <Latex>{"$A \\cdot B = \\displaystyle\\sum_1^k a_k b_k$"}</Latex>
  <p><b>Definition</b>: Given <Latex>{"$A$"}</Latex> in <Latex>{"$V_{n}$"}</Latex> the <b>vector norm</b> is</p>
  <Latex>{"$\\lVert A \\rVert = \\sqrt{a_1^2 + a_2^2 + ... + a_n^2}$"}</Latex> and we know that<br />
  <Latex>{"$A \\cdot A = \\displaystyle\\sum_1^k a_k a_k = a_1^2 + a_2^2 + ... + a_k^2$"}</Latex> so we can replace <br />
  <Latex>{"$\\lVert A \\rVert = \\sqrt{A \\cdot A}$"}</Latex>
  <p>But, where <Latex>{"$\\lVert A \\rVert = \\sqrt{a_1^2 + a_2^2 + ... + a_n^2}$"}</Latex> came from?, let's check our chart. If we assume that our vector exists only in the plane <Latex>{"$XY$"}</Latex>we could find its value with pitagoras' theorem.</p>
  <Latex>{"$A_{xy} = \\sqrt{a_1^2 + a_2^2}$"}</Latex>
  <p>Great, we found our value in the plane XY. Now we need to get it with our real vector. Notice that it has a component in <Latex>{"$Z$"}</Latex> axis. So we have to apply the pitagoras' theorem again.</p>
  <Latex>{"$A = \\sqrt{A_{xy}^2 + a_3^2}$"}</Latex><br />
  <Latex>{"$A = \\sqrt{(\\sqrt{a_1^2 + a_2^2})^2 + a_3^2}$"}</Latex><br />
  <Latex>{"$A = \\sqrt{a_1^2 + a_2^2 + a_3^2}$"}</Latex> which is the expected result.<br /><hr />
  <p>Those results are important to introduce the <b>Cauchy–Schwarz inequality</b>.</p>
  <p>Imagine these two vectors <br /> <Latex>{"$A = (a_{1}, a_{2}, a_{n})$"}</Latex> y <Latex>{"$B = (b_{1}, b_{2}, b_{n})$"}</Latex></p>
  <p>Let's think a litte. How can I ensure that both vectors are <b>in the same direction</b>?. Here we can use one of the vectors' properties. If we multiply by a constant <Latex>{"$X$"}</Latex> we are going to have a different vector in the same direction, as we can see in our chart.</p>
</div>

export default description;
