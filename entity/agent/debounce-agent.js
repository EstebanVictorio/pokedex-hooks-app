import Doppler from 'utils/hooks/doppler'

const SYNC = 'SYNC'
const ASYNC = 'ASYNC'

class DebounceAgent {

  constructor(runnables){
    this.runnables = runnables
    this.dispatch = this.getAction()
  }

  getAction(){
    return determineRuntimeMode() === ASYNC ? 
      () => this.invokeDoppler() : 
      () => this.runnables.map(runnable => runnable())
  }

  determineRuntimeMode(){
    let isAsync = 
      typeof(this.runnables.async) !== 'undefined' && (this.runnables.async.filter(runnable => typeof(runnable.then) === 'function' ||
        runnable.constructor === 'AsyncConstructor')
      ).length > 0
    return isAsync ? ASYNC : SYNC
  }

  invokeDoppler(){
    
  }

  
}
