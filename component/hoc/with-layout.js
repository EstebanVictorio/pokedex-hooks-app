import { Component } from 'react'
import Main from 'component/layout/main'

const withLayout = WrappedComponent => class extends Component {
      constructor(props){
        super(props)
      }
      render(){
        return <Main>
          <WrappedComponent {...this.props}/>
        </Main>
      }
  }

export default withLayout
