const SYNC = 'SYNC'
const ASYNC = 'ASYNC'

class DebounceAgent {

  constructor(subject, actions = []){
    this.action = null
    this.promise = null
    this.subject = subject
    this.actions = actions
    this.currentEffect = 0
  }

  invokeThenable(thenable){
    thenable.then()
  }

  setAction(){
    switch (determineRuntimeMode()) {
      case ASYNC:
        this.action = () => this.invokeThenable(this.subject)
        break
      case SYNC:
      default:
        this.action = this.subject
        break
    }
  }

  determineRuntimeMode(){
    return typeof(this.subject.then) !== 'undefined' &&
      typeof(this.subject.then) === 'function' ? ASYNC : SYNC
  }

  dispatch(){
    this.action()
  }
}
