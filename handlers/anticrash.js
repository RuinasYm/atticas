module.exports = (client) => {
process.on('unhandledRejection', error => {
    console.error(error);
  });
  
  client.on('shardError', error => {
    console.error(error);
  })}