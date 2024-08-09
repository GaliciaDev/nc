/* Animacion para generar 3 cuadros que salten uno despues de otro en forma de arco */
import '../../../assets/css/views/squaresJumpers.css';
import CompanyLogo from '../../../../../backend/assets/icons/settings/logo-nc-sin-fondo.png';

const SquaresJumpers = () => {
    return (

        <div className="jumpersq__container flex flex-col justify-center items-center w-full h-screen bg-black ">

            <div className='backElements flex-col bg-black'>
            <div className='nc__logo '><img src={CompanyLogo} alt="New Concept" /></div>               
            
            <div className='squares__container flex-row'>
            <div className="form squareF"></div>
            <div className="form squareM"></div>
            <div className="form squareE"></div>

            
            </div>               


            <div className='progressBar'><p>100% Terminado</p></div>               
            </div> 
            
            
        </div>
    );



            
}

export default SquaresJumpers;