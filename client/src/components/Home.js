import React from "react";
import img1 from "./image/student.jpeg"
function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white py-10">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-center text-gray-800">
            Student List Manager
          </h1>
        </div>
      </header>

      <main className="container mx-auto py-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 mb-10 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-5">
              Functionality :
            </h2>
            <p className="text-xl text-gray-700">
            In  Navbar There are three options Home,List and AddDetails.
            <br />
            Home will take you to the Home Page.
            <br />
            List will show you the all the details of the Student.
            <br />
            AddDetails will give you the option to add details about the student.
            <br />
            You Can manually Edit or Delete the details from the list component.
            </p>
          </div>

          <div className="md:w-1/3">
            <img
              src={img1}
              alt="about us"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-20">
          <div className="md:w-1/3">
            <img
              src={img1}
              alt="services"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="md:w-2/3 mb-10 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-5">
            About
            </h2>
            <p className="text-xl text-gray-700">
            This website is made using MERN Tech stack .
             <br /> Database is maintained using  MongoDB atlas.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-white py-10">
        <div className="container mx-auto text-center text-gray-700">
          &copy; 2022 Tailwind & React Home Page
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
