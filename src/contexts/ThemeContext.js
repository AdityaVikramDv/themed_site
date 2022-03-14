import React,{createContext} from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component{
  state={
    isDark : true,
    darkTheme:{
      bgColor: 'black',
      textColor: 'white'
    },
    lightTheme:{
      bgColor:'grey',
      textColor: 'black'
    }
};

  changeTheme = ()=>{
    this.setState({isDark: !this.state.isDark});
  }
  render(){
    return(
      <ThemeContext.Provider value={{...this.state, changeTheme:this.changeTheme}}>
      {this.props.children}
      </ThemeContext.Provider>
    )
  }
}


export default ThemeContextProvider;
