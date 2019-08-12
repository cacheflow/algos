const createStore = (reducer, initialState = {}) => {
  const store = {}

  store.state = initialState;

  store.listeners = []

  store.getState = () => store.state;

  store.subscribe = (listener) => {
    store.listeners.push(listener)
  }

  store.dispatch = (action) => {
    store.state = reducer(store.state, action);
    store.listeners.forEach(listener => listener())
  }

  store.setState = desiredState => {
    store.state = desiredState;

    const applicationListeners = store.listeners.slice(0, -1);
    applicationListeners.forEach(listener => listener())
  }

  return store
}

const timeline = [];
let activities = 0;

const saveTimeline = () => {
  timeline.push(store.getState())
  timelineNode.innerHtml = timeline.map(item => JSON.stringify(item))
  .join('<br/>');
  activeItem = timeline.length - 1;
}

store.subscribe(saveTimeline)
