import './App.css';
import image from '../src/business.jpg';

function App() {
  return (
    <div className="App d-flex">
<div className="ps-5 pe-5 pt-5 container-fluid text">
<div className="txt mb-5">
<h2>Get <span className='indigo'>insights</span>  that help your business grow.</h2>
<p className='pt-3 mb-5'>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>

</div>
<ul className='pt-3 d-flex justify-content-between list-unstyled'>
  <li className='text-center'><span className='h3'> 10k+ </span> <br /> COMPANIES</li>
  <li className='text-center'><span className='h3'> 314 </span> <br /> TEMPLATES</li>
  <li className='text-center'><span className='h3'> 12M+ </span>  <br /> QUERIES</li>
</ul>
</div>

<div className="img-fluid">
  <img src={ image } alt="" />
</div>
    </div>
  );
}

export default App;
