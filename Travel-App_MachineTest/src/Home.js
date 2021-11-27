import home from './home.jpg'
import Grid from '@material-ui/core/Grid';
import homeimg from './home_image.jpg'
function Home(){
    return (
                                            
<>
<Grid container spacing={0}>
 
  <Grid item md={6}>
<div>
  <br/>
 <h2 className="h2-home"> Welcome  To Travel Request Management System</h2>
<h5 className="home-h5"> This is a request Management app which dealss with the status and request of
employees travel request due to various reasons 
</h5>

 

  </div>
  </Grid>
  <Grid item md={6}>
  <img className="home-image" src = {homeimg}/>
  
  
  </Grid>

</Grid>

    
            </>
    )
}
  export default Home


