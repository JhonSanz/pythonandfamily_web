var Latex = require('react-latex');

const description = <div>
  <p>
    Let's retake our <Latex>{"$f(x) = e^{x}$"}</Latex> example. We know that <Latex>{"$f$"}</Latex> and all its derivated terms are <Latex>{"$1$"}</Latex> with <Latex>{"$x = 0$"}</Latex>. That is the key because if we find another function which its derivates are always the same, and its initial conditions are also the same we can say that both are the same functions. Let's look at the next analysis. <br />
  </p>
  <p>
    Let's compare <Latex>{"$f(x) = e^{x}$"}</Latex> with <Latex>{"$p(x) = \\displaystyle\\sum_0^k  \\frac{x^k}{k!}$"}</Latex> we are going to derivate these functions and evaluate them in <Latex>{"$x = 0$"}</Latex>. <br />
  </p>
  <div style={{ overflowX: "scroll" }}>
    <table>
      <tbody>
        <tr>
          <td><Latex>{"$f^{(0)}(x) = e^{x} \\ $"}</Latex></td>
          <td><Latex>{"$p^{(0)}(x) =  1 + \\frac{x^2}{2!} + \\frac{x^3}{3!} + ...$"}</Latex></td>
        </tr>
        <tr>
          <td><Latex>{"$f^{(1)}(x) = e^{x} \\ $"}</Latex></td>
          <td><Latex>{"$p^{(1)}(x) = 0 +  1 + \\frac{x^2}{2!} + \\frac{x^3}{3!} + ...$"}</Latex></td>
        </tr>
        <tr>
          <td><Latex>{"$f^{(2)}(x) = e^{x} \\ $"}</Latex></td>
          <td><Latex>{"$p^{(2)}(x) = 0 + 0 +  1 + \\frac{x^2}{2!} + \\frac{x^3}{3!} + ...$"}</Latex></td>
        </tr>
        <tr>
          <td><Latex>{"$f^{(3)}(x) = e^{x} \\ $"}</Latex></td>
          <td><Latex>{"$p^{(3)}(x) = 0 + 0 + 0 +  1 + \\frac{x^2}{2!} + \\frac{x^3}{3!} + ...$"}</Latex></td>
        </tr>
      </tbody>
    </table>
  </div>
  <p>
    This is great. As you can see all derivates are giving us the same function for both <Latex>{"$f(x)$"}</Latex> and <Latex>{"$p(x)$"}</Latex> I mean: <br /><br />
    <Latex>{"$f^{(k)}(x) = f(x) \\ \\forall \\ k = 1, 2, 3 ... $"}</Latex> <br />
    <Latex>{"$p^{(k)}(x) = p(x) \\ \\forall \\ k = 1, 2, 3 ... $"}</Latex>
  </p>
  <p>
    Now let's evaluate  <Latex>{"$x = 0$"}</Latex><br /><br />
    <Latex>{"$f^{(k)}(0) = 1 \\ \\forall \\ k = 1, 2, 3 ... $"}</Latex> <br />
    <Latex>{"$p^{(k)}(0) = 1 \\ \\forall \\ k = 1, 2, 3 ... $"}</Latex>, so: <br />
    <Latex>{"$p^{(k)}(0) = f^{(k)}(0) \\ \\forall \\ k = 1, 2, 3 ... $"}</Latex>
  </p>
  <p>
    Those functions <b>are essentially the same</b>. Now in general, <b>we are trying to find</b> a polynomial <Latex>{"$p$"}</Latex> wich matches with <Latex>{"$f$"}</Latex> and its first <Latex>{"$n$"}</Latex> derivates in <Latex>{"$x = 0$"}</Latex> (as we did previously with <Latex>{"$f(x) = e^{x}$"}</Latex>), so:<br /><br />
    <Latex>{"$f^{(0)}(0) = p^{(0)}(0)$"}</Latex><br />
    <Latex>{"$f^{(1)}(0) = p^{(1)}(0)$"}</Latex><br />
    <Latex>{"$f^{(n)}(0) = p^{(n)}(0) \\ \\forall \\ n = 1, 2, 3 ... $"}</Latex><br />
  </p>
  <p>The polynomial is... yes, is this:</p>
  <Latex>{"$p(x) = c_0 + c_1x + c_2x^2 + ... + c_nx^n$"}</Latex><br />

</div>


const miniDescription = <div>
  <p>
    Have you ever though about how calculators work?. Imagine that you need to compute <Latex>{"$e^{69}$"}</Latex> or <Latex>{"$sin(12.5845)$"}</Latex> by hand, <b>what a shit huh?</b>. It is crazy because sometimes we are used to using tools without knowing how they work. This is one of my favorite applications of calculus because despite the fact that we don't have to use it to calculate functions by hand, it is great to know how daily life things work.<br /> <br />

    Here we see a chart of <Latex>{"$e^{x}$"}</Latex> function. This chapter is about <b> approximate non polynomial functions with polynomial ones</b>, and by that way you will be able to compute because we do know how to perform basic operations like <Latex>{"$ + - \\div * $"}</Latex>.  <br /><br />

    With these buttons you will be able to add or remove terms <b>of <Latex>{"$e^{x}$"}</Latex> taylor serie</b>. The more terms in our serie, the more accurate is the approximation. It is great to see it becoming more an more similar to our target function. <br /><br />

    <Latex>{"$e^x = \\displaystyle\\sum_0^k  \\frac{x^k}{k!} = 1 + \\frac{x^2}{2!} + \\frac{x^3}{3!} + ... + \\frac{x^n}{n!}$"}</Latex>
  </p>

</div>

export { description, miniDescription };
