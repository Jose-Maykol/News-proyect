const CurrentNews = () => {

  return (
    <div className="card d-flex flex-row mb-2 p-3 my-3 mx-5">
      <img 
        src="https://www.clarin.com/img/2022/06/15/el-presidente-de-ucrania-volodymyr___8K988Pvnx_1200x630__1.jpg" 
        className="card-img-top img-fluid w-50" alt="..."
      />
      <div className="card-body d-flex flex-column justify-content-between align-items-start ">
        <div className=" p-2 bg-primary rounded-3 my-1"> CNN Spanish</div>
        <h5 className="card-title my-1">Guerra Rusia-Ucrania, en vivo: la inquietante advertencia de Zelenski sobre el plan de Putin si consigue un - Clarín</h5>
        <p className="card-text my-1">El presidente ucraniano, Volodímir Zelenski, advirtió este miércoles de que si Moscú triunfa en su invasión de Ucrania podría atacar a otros países, entre los que señaló a Polonia, República Checa y Bulgaria.\"La tiranía no quiere pararse en el territorio de</p>
        <div className="align-self-end">
          <a href="/" className="btn btn-dark"> Leer más</a>
        </div>
      </div>
    </div>
  );
}

export default CurrentNews;