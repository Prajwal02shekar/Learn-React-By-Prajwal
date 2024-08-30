
// import './App.css'



// function App() {


//   return (
//     <>
//       <div id="carouselExample" className="carousel slide">
//         <div className="carousel-inner h-25">
//           <div className="carousel-item active h-25">
//             <img src="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_640.jpg" className="d-block w-100 h-25 " alt="..." />
//           </div>
//           <div className="carousel-item h-25">
//             <img src="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_640.jpg" className="d-block w-100 h-25" alt="..." />
//           </div>
//           <div className="carousel-item h-25">
//             <img src="https://cdn.pixabay.com/photo/2024/05/31/12/16/bridge-8800485_640.jpg" className="d-block w-100 h-25 " alt="..." />
//           </div>
//         </div>
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExample"
//           data-bs-slide="prev"
//         >
//           <span className="carousel-control-prev-icon" aria-hidden="true" />
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExample"
//           data-bs-slide="next"
//         >
//           <span className="carousel-control-next-icon" aria-hidden="true" />
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>

//     </>
//   )
// }

// export default App
//! -------------------------------------------------------------


//? we need to uninstall bootstrap and popper js
//? React bootstrap component level

// import Button from 'react-bootstrap/Button';
// import Alert from 'react-bootstrap/Alert';  

// function App() {
//   return (
//     <>
//       <h1>React with component based</h1>
//       <Button>Submit</Button>
//       <Alert dismissible variant="danger">
//         <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
//         <p>Change this and that and try again.</p>
//       </Alert>

//     </>
//   )
// }
// export default App
//!--------------------------------------------------------------

import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
  return (
    <Accordion defaultActiveKey="0" className='m-4'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;