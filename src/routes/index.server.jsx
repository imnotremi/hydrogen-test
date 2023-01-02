import Header from "../components/2Layout.server";
import HomeCatalog from "../components/CatalogHomePage.server";
import CollectionCards from "../components/CollectionCards.client";
import Homepage from "../components/Homepage.client";
import Layout from "../components/Layout.server";
import ProductSlider from "../components/ProductSlider.client";
import Stats from "../components/Stats.client";
import TestimonialsNew from "../components/Testimonial.client";
import Footer from "../components/Footer.client";




export default function Home() { 


  return ( 

    
      
        <Layout>
          <Homepage/>
          <HomeCatalog/>
          <Stats/>
          <ProductSlider/>
          <TestimonialsNew/>
          <CollectionCards/>
          <Footer/>
        </Layout>
      
      
   
      

); } 
  

