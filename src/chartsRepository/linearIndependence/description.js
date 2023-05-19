import FormulaTable from 'utils/formulaTable';
var Latex = require('react-latex');

const description = <div>
  <p>First, let's introduce the Linear Combination concept. Given some vectors, we multiply each one by a constant, and then, we sum all the results together. For example:</p>
  <FormulaTable data={[
    "$V_1 = (1,-1,2,4)$",
    "$V_2 = (0,0,1,1)$",
    "$V_3 = (1,0,0,1)$",
    "calculate",
    "$3V_1 - 2V_2 + 4V_3$",
  ]}
  />
  <p>Where <Latex>{"$3, -2$ and $4$"}</Latex> are the constants we chose, and the result of our Linear Combination example is <Latex>{"$(7,-3,4,14)$"}</Latex>. Great, but why is this important? this is simple but useful to introduce the Linear Span concept. in the previuos example we mentioned three vectors, but now, let's imagine that we have a set of vectors <Latex>{"$S = \\{ V_1, V_2, ...,  V_k \\} $"}</Latex>.</p>
  <FormulaTable data={[
    "$X = \\displaystyle\\sum_1^k c_iV_i$ is the linear combination"
  ]}
  />
  <p>Where <Latex>{"$c_i$"}</Latex> are constants, and <Latex>{"$V_i$"}</Latex> are the vectors in <Latex>{"$S$"}</Latex>. After doing that we see that <Latex>{"$X$"}</Latex> arises from that calculation. It means that <b><Latex>{"$S$"}</Latex> generates <Latex>{"$X$"}</Latex></b>.</p>
  <p><b>Definition</b>: The set of all the vectors generated by <Latex>{"$S$"}</Latex> are named Linear Span of <Latex>{"$S$"}</Latex>, denoted by <Latex>{"$L(S)$"}</Latex>. Or in other words, the set of all the linear combinations of vectors in <Latex>{"$S$"}</Latex>.</p>
  <p>Let's take a look at the following example. Imagine <Latex>{"$S = \\{ V_1, V_2, ..., V_k \\}$"}</Latex>. We will think about how to generate the vector <Latex>{"$O$ (zero vector)"}</Latex>. We have two possible ways, and it depends on the vectors whitin <Latex>{"$S$"}</Latex>. Let's analyze the first option. If we calculate the linear combination where <b>all constant values are zero</b> we will get the zero vector. This is named the <b>trivial solution</b>, which will be important later. It is: </p>
  <FormulaTable data={[
    "$O = \\displaystyle\\sum_1^k 0V_i = (0V_1, 0V_2, ..., 0V_n)$"
  ]}
  />
  <p>The second possibility to generate the zero vector is to have vectors which are <b>the scalar product</b> of other one. Let's see it with an example, imagine that we have the next three vectors, whose are in some <Latex>{"$S$"}</Latex> set.</p>
  <FormulaTable data={[
    "$V_1 = (2,3,1)$",
    "$V_2 = (1,2,1)$",
    "$V_3 = (3,6,3)$",
  ]}
  />
  <p>If we perform <Latex>{"$c_1V_1 + c_2V_2$"}</Latex> the only way to generate the zero vector is to set <Latex>{"$c_1 = 0, c_2 = 0$"}</Latex>. Buuuuut, if we involve <Latex>{"$V_3$"}</Latex> in our experiment, we could have:</p>
  <FormulaTable data={[
    "$0V_1 - 3V_2 + 1V_3 = O$",
  ]}
  />
  <p>With the constants <Latex>{"$c_1 = 0, c_2 = -3, c_3 = 1$"}</Latex> we generated the zero vector. It happened because in our set <Latex>{"$V_3$"}</Latex> is scalar product of <Latex>{"$V_2$"}</Latex>. So, these vectors are <b>linearly dependent</b>. If we can find the zero vector by multiple ways, it means that in our set there are vectors which are the scalar product of other ones. So, finally:</p>
  <p><b>Definition</b>: A <Latex>{"$S$"}</Latex> set which generates the zero vector with the trivial solution is named set of vectors <b>linearly independent</b>.</p>
</div>

const miniDescription = <div>
  <p>Here we can see three vectors in our chart. These are the <b>Coordinate Unit Vectors</b>. They are just vectors which are in the same direction as the axeses, and have lenght <Latex>{"$1$"}</Latex>. This is important to clarify some details.</p>
  <p>The next three vectors are also named <Latex>{"$ \\hat{i}, \\hat{j}, \\hat{k}$"}</Latex> and with a Linear Combination you will get a vector expressed in its components. It seems to be simple, and even more with the next idea: with these three vector you are be able to <u>generate all the vectors in <Latex>{"$R^3$"}</Latex></u>. But, thanks to that it will appear important concepts like <b>Linear span</b> and <b>Linear independence</b>.</p>
</div>

export { description, miniDescription };
