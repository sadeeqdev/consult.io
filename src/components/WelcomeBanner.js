import { styled } from "@mui/system"

const WelcomeBanner = () => {

    const StyledBanner = styled('div')({
        width: '100%',
        height: 500,
        backgroundColor: '#07163a',
        color: 'white'
    })

    const StyledBannerDiv = styled('div')({
        width: '90%',
        color: 'white',
        margin: 'auto',
    })

    const StyledBannerHeader = styled('div')({
        color: '#fff',
        fontWeight:500,
        fontSize:'50px',
        textAlign:'center',
        paddingTop:'70px'
    })

    const StyledBannerTaxt = styled('div')({

    })



  return (
    <StyledBanner>
        <StyledBannerDiv>
            <StyledBannerHeader>
                Consult a Doctor Anytime, Anywhere <br/>by Video Call
            </StyledBannerHeader>
        </StyledBannerDiv>
    </StyledBanner>
  )
}

export default WelcomeBanner