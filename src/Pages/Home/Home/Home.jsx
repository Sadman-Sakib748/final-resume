import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import RecentBlogs from "../RecentBlogs/RecentBlogs";
import Resume from "../Resume/Resume";
import Service from "../Service/Service";
import Skill from "../Skill/Skill";
import Testimonials from "../Testimonials/Testimonials";
import Works from "../Works/Works";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Works></Works>
            <Resume></Resume>
            <Skill></Skill>
            <Testimonials></Testimonials>
            <RecentBlogs></RecentBlogs>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;