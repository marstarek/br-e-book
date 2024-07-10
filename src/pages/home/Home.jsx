import Hero from "../../components/hero/Hero";
import News from "../../components/news/News";
import Courses from "../../components/courses/Courses";
import BooksList from "../../components/booksList/BooksList";
import Books from "../Books/Books";
import ExBooks from "../ex_books/ExBooks";

const Home = () => {
     return <div className="flex  flex-col w-full">
         <Hero></Hero> 
         <News></News> 
         <Courses></Courses> 
         <ExBooks></ExBooks>
     
     </div>

};

export default Home;
