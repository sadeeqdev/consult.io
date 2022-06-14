import { Grid } from "@mui/material"
import { styled } from "@mui/system"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import VaccinesIcon from '@mui/icons-material/Vaccines';

const QuestionAnswers = () => {

  const StyledTitleBlock = styled('div')(({theme}) => ({
    marginTop:'100px',
    fontSize:'35px',
    fontWeight:600,
    color:'#07163a'
  }))

  const StyledBody = styled('div')(({theme}) => ({
    width:'50%',
    margin:'auto',
  }))

  const StyledBodyGrid = styled(Grid)(({theme}) => ({
    marginTop:'20px',
  }))

const StyledItemCard = styled(Grid)(({theme}) => ({
      width:'100%',
      backgroundColor:'#fff',
      height:'400px',
      boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
    }))

const StyledItemHeader = styled(Grid)(({theme}) => ({
    textAlign:'center',
    padding:'20px',
    fontSize: '36px'
}))


  return (
    <div>
        <Navbar/>
            <StyledBody>
                <StyledTitleBlock>
                    Our Services
                </StyledTitleBlock>
                <StyledBodyGrid container spacing={2}>
                    <Grid item md={4} xs={12}>
                        <StyledItemCard>
                            <StyledItemHeader>
                                <VaccinesIcon/>
                            </StyledItemHeader>
                        </StyledItemCard>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <StyledItemCard>

                        </StyledItemCard>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <StyledItemCard>

                        </StyledItemCard>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <StyledItemCard>

                        </StyledItemCard>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <StyledItemCard>

                        </StyledItemCard>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <StyledItemCard>
                            
                        </StyledItemCard>
                    </Grid>
                </StyledBodyGrid>
            </StyledBody>
        <Footer/>
    </div>
  )
}

export default QuestionAnswers