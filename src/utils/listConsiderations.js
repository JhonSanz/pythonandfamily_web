import COLORS from 'utils/colors';

const ListConsiderations = ({ data }) => {
  return (
    <table style={{ border: '1px dotted gray' }}>
      <thead></thead>
      <tbody>
        {
          data.map((row, index) => (
            <tr key={index} style={{
              backgroundColor: index % 2 === 0 ? COLORS.lightGray : 'white',
              paddingTop: 2,
            }}>
              <td style={{ paddingRight: 10 }}>{index + 1}</td>
              <td>{row}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default ListConsiderations;
