import debug from 'debug'

const BASE = 'REACT-APOLLO-REDUX-GRAPHQL'
const COLOURS = {
  trace: 'lightblue',
  info: 'green',
  warn: 'pink',
  error: 'red',
}

// generate custom log message
const generateMessage = (level, message, source) => {
  // Set the prefix which will cause debug to enable the message
  const namespace = `${BASE}:${level}`
  const createDebug = debug(namespace)
  createDebug.enabled = process.env.REACT_APP_DEBUG_ENABLE

  // Set the colour of the message based on the level
  createDebug.color = COLOURS[level]
  if (source) {
    createDebug(source, message)
  } else {
    createDebug(message)
  }
}

// define debug level
const trace = (message, source) => generateMessage('trace', message, source)
const info = (message, source) => generateMessage('info', message, source)
const warn = (message, source) => generateMessage('warn', message, source)
const error = (message, source) => generateMessage('error', message, source)

// app loger config
const AppLogger = {
  trace,
  info,
  warn,
  error,
}

export default AppLogger
