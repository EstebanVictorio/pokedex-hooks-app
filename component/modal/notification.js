import styled from 'styled-components'

const Notification = ({className, text}) =>
<div className={className}>
  {text}
</div>


const StyledNotification = styled(Notification)`
  width: 200px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: lightgreen;
  background-color: darkslategray;
  border-width:1px;
  border-style: solid;
  border-color: darkslategray;
  border-radius: 3px;
  position: absolute;
  margin: 5px;
  right: 0;
  bottom: 0;
`

export default StyledNotification
