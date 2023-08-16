import {css} from  'styled-components'

export const mobile = (props) =>{
return css`
@media only screen and (max-width:400px){
   ${props}
  }
`
}
export const iphone = (props) =>{
return css`
@media only screen and (min-width:401px) and (max-width : 800px){
   ${props}
  }
`
}



export const tablet = (props) => {
  return css`
  @media only screen and (min-width: 801px) and (max-width: 1050px){
    ${props}
   }
  `
}