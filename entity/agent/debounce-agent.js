const SYNC = 'SYNC'
const ASYNC = 'ASYNC'

class DebounceAgent {

  constructor(subject, effects = []){
    this.action = null
    this.promise = null
    this.subject = subject
    this.effects = effects
    this.currentEffect = 0
  }

  invokeThenable(thenable){
    thenable.then()
  }

  determineRuntimeMode(){

    switch (expression) {
      case ASYNC:
        this.action = ( )
        break
      case SYNC:
      default:
        this.action = this.subject
        break

    }
  }

  dispatch(){
    this.action()
  }
}
