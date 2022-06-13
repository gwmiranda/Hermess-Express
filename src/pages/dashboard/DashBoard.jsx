import './Dashboard.css';
import Menu from "../../components/menuLateral/Menu";
import GraficoPizza from "../../components/graficos/GraficoPizza";
import GraficoColuna from "../../components/graficos/GraficoColuna";

const DashBoard = () => {
  return (
      <>
          <Menu/>
          <div className='Teste'>
              <h1>DashBoard</h1>
          </div>
          <div className='Teste'>
              <GraficoPizza/>
              <GraficoColuna/>
          </div>

      </>
  )
}

export default DashBoard