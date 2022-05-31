const whitelist = [ 'http://example1.com', 'http://example2.com' ]

exports.corsOptionsDelegate = (req, callback) => {
  let corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true }
} else {
    corsOptions = { origin: false }
  }
  callback(null, corsOptions)
}