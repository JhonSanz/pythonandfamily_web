var Latex = require('react-latex');

const FormulaTable = ({
  data
}) => {
  return (
    <div>
      <table>
        <thead>
        </thead>
        <tbody>
          {
            data.map((item) => (
              <tr>
                <td><Latex>{item}</Latex></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default FormulaTable;
