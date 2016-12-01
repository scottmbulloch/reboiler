const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';
const configureStore = require(`./configureStore.${env}`).default;

export default configureStore;
