var Latex = require('react-latex');

const description = <div>
  <p>Have you ever though about how calculators work?. Imagine that you need to compute <Latex>{"$e^{69}$"}</Latex> or </p>
</div>


const miniDescription = <div>
  <p>
    Have you ever though about how calculators work?. Imagine that you need to compute <Latex>{"$e^{69}$"}</Latex> or <Latex>{"$sin(12.5845)$"}</Latex> by hand, <b>what a shit huh?</b>. It is crazy because sometimes we are used to using tools without knowing how they work. This is one of my favorite applications of calculus because despite the fact that we don't have to use it to calculate functions by hand, it is great to know how daily life things work.<br /> <br />

    Here we see a chart of <Latex>{"$e^{x}$"}</Latex> function. This chapter is about <b> approximate non polynomial functions with polynomial ones</b>, and by that way you will be able to compute, because we do know how to perform basic operations <Latex>{"$ + - \\div * $"}</Latex>.  <br /><br />

    With these buttons you will be able to add or remove terms <b>of <Latex>{"$e^{x}$"}</Latex> taylor serie</b>. The more terms in our serie, the more accurate is the approximation. It is great to see it becoming more an more similar to our target function.
  </p>

</div>

export { description, miniDescription };
