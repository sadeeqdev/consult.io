import { styled } from '@mui/system'
import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import BannerImg from '../../assets/docimg_6.jpg';

const BlogPost = () => {

  const StyledBanner = styled('div')(({theme})=>({
    width: '100%',
    height: 550,
    backgroundColor: '#07163a',
    color: 'white',
    textAlign:'center',
    marginBottom:'320px',
    [theme.breakpoints.down('sm')]:{
        marginBottom:'20px',
        width: '100%',
        height:'auto',
        paddingBottom:'30px',
    }
  }))

  const StyledBannerDiv = styled('div')(({theme})=>({
      width: '70%',
      margin: 'auto',
      [theme.breakpoints.down('sm')]:{
          width:'100%',
      },
      [theme.breakpoints.up('xl')]:{
          width:'70%',
      }
  }))

  const StyledBannerHeader = styled('div')(({theme})=>({
      fontWeight:400,
      fontSize:'55px',
      paddingTop:'100px',
      [theme.breakpoints.down('sm')]:{
          width:'90%',
          height:'auto',
          margin:'auto',  
          fontSize:'px',
          color:'#fff',
      },
      [theme.breakpoints.down('lg')]:{
          fontSize:'30px',
      }
  }))

  const StyledBannerText = styled('div')(({theme})=>({
      fontSize:'15px',
      lineHeight: '30px',
      paddingTop:'10px',
      [theme.breakpoints.down('sm')]:{
          paddingTop:'20px',
          fontSize:'12px',
          lineHeight: '20px',
      }
  }))

  const GridCircle = styled('div')(({theme})=>({
      width:'250px',
      height:'250px',
      borderRadius:'250px',
      border: '15px solid #fff',
      marginTop:'-230px',
      marginLeft:'-185px',
      [theme.breakpoints.down('sm')]:{
          display:'none'
      },
      [theme.breakpoints.down('lg')]:{
          marginTop:'-270px',
          width:'230px',
          height:'230px',
          borderRadius:'230px',
          marginLeft:'-195px',
      }
  }))

  const StyledBodyText = styled('div')(({theme}) => ({
    width:'50%',
    margin:'auto',
    fontSize:'18px',
    lineHeight: '30px',
    paddingTop:'10px',
    textAlign:'justify',
    [theme.breakpoints.down('sm')]:{
        width:'85%',
        paddingTop:'0px',
        fontSize:'12px',
        lineHeight: '20px',
    }

  }))

  const WelcomeImage = styled('div')(({theme}) => ({
    width:'800px',
    height:'450px',
    borderRadius: '10px',
    backgroundImage: `url(${BannerImg})`,
    backgroundSize: '800px 490px',
    margin:'auto',
    [theme.breakpoints.down('sm')]:{
        marginTop:'50px',
        width:'90%',
        height:'200px',
        borderRadius: '5px',
        backgroundSize: '300px 190px',
    }
  }))



  return (
    <div>
      <Navbar/>
      <StyledBanner>
        <StyledBannerDiv>
            <StyledBannerHeader>
              What is SOC: A guide to Data Security and Understanding SOC 2 <br/>Compliance
            </StyledBannerHeader>
            <StyledBannerText>
              Ecommerce - 12 January 2021
            </StyledBannerText>
        </StyledBannerDiv>
        <GridCircle/>
        <WelcomeImage></WelcomeImage>
      </StyledBanner>
      <StyledBodyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
        </StyledBodyText>
        <Footer/>
    </div>
  )
}

export default BlogPost